'use client';

import { getServiceSlug } from '@/constants';
import { buildApiUrl } from './api';

export interface FrontendService {
  id: string;
  title: string;
  shortHeading?: string;
  description: string;
  fullDetails?: string;
  iconName: string;
  imageUrl?: string;
  imagePublicId?: string;
  features?: Array<{
    id: string;
    iconName: string;
    heading: string;
    description: string;
  }>;
  isActive: boolean;
  createdAt: unknown;
}

const SERVICES_CACHE_KEY = 'cachedActiveServices';
const SERVICE_DETAIL_CACHE_PREFIX = 'cachedServiceDetail:';
const CACHE_DURATION_MS = 2 * 60 * 1000;

let inFlightServicesRequest: Promise<FrontendService[]> | null = null;

const isActiveService = (service: FrontendService) => service.isActive !== false;

export const readCachedActiveServices = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  const cached = localStorage.getItem(SERVICES_CACHE_KEY);
  if (!cached) {
    return null;
  }

  try {
    const parsed = JSON.parse(cached) as {
      services?: FrontendService[];
      timestamp?: number;
    };

    if (
      Array.isArray(parsed.services) &&
      typeof parsed.timestamp === 'number' &&
      Date.now() - parsed.timestamp < CACHE_DURATION_MS
    ) {
      return parsed.services;
    }
  } catch (error) {
    console.error('Failed to parse cached active services:', error);
  }

  return null;
};

const writeCachedActiveServices = (services: FrontendService[]) => {
  if (typeof window === 'undefined') {
    return;
  }

  localStorage.setItem(
    SERVICES_CACHE_KEY,
    JSON.stringify({
      services,
      timestamp: Date.now(),
    })
  );
};

export const cacheServiceForDetail = (service: FrontendService) => {
  if (typeof window === 'undefined') {
    return;
  }

  const slug = getServiceSlug(service);
  sessionStorage.setItem(
    `${SERVICE_DETAIL_CACHE_PREFIX}${slug}`,
    JSON.stringify({
      service,
      timestamp: Date.now(),
    })
  );
};

export const readCachedServiceForDetail = (slug: string) => {
  if (typeof window === 'undefined') {
    return null;
  }

  const cached = sessionStorage.getItem(`${SERVICE_DETAIL_CACHE_PREFIX}${slug}`);
  if (!cached) {
    return null;
  }

  try {
    const parsed = JSON.parse(cached) as {
      service?: FrontendService;
      timestamp?: number;
    };

    if (
      parsed.service &&
      typeof parsed.timestamp === 'number' &&
      Date.now() - parsed.timestamp < CACHE_DURATION_MS
    ) {
      return parsed.service;
    }
  } catch (error) {
    console.error('Failed to parse cached service detail:', error);
  }

  return null;
};

export const fetchActiveServices = async () => {
  const cachedServices = readCachedActiveServices();
  if (cachedServices) {
    return cachedServices;
  }

  if (!inFlightServicesRequest) {
    inFlightServicesRequest = fetch(buildApiUrl('/api/services'))
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch services: ${response.status}`);
        }

        const data = await response.json();
        const services = Array.isArray(data?.data?.services) ? data.data.services : [];
        const activeServices = services.filter(isActiveService);

        writeCachedActiveServices(activeServices);
        return activeServices;
      })
      .finally(() => {
        inFlightServicesRequest = null;
      });
  }

  return inFlightServicesRequest;
};
