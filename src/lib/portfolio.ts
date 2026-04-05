'use client';

import { buildApiUrl } from './api';

export interface FrontendPortfolioItem {
  id: string;
  title?: string;
  shortHeading?: string;
  imageUrl?: string;
  isActive?: boolean;
}

const PORTFOLIO_CACHE_KEY = 'cachedActivePortfolio';
const CACHE_DURATION_MS = 2 * 60 * 1000;

let inFlightPortfolioRequest: Promise<FrontendPortfolioItem[]> | null = null;

const isActivePortfolioItem = (item: FrontendPortfolioItem) => item.isActive !== false;

export const readCachedActivePortfolio = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  const cached = localStorage.getItem(PORTFOLIO_CACHE_KEY);
  if (!cached) {
    return null;
  }

  try {
    const parsed = JSON.parse(cached) as {
      portfolio?: FrontendPortfolioItem[];
      timestamp?: number;
    };

    if (
      Array.isArray(parsed.portfolio) &&
      typeof parsed.timestamp === 'number' &&
      Date.now() - parsed.timestamp < CACHE_DURATION_MS
    ) {
      return parsed.portfolio;
    }
  } catch (error) {
    console.error('Failed to parse cached active portfolio:', error);
  }

  return null;
};

const writeCachedActivePortfolio = (portfolio: FrontendPortfolioItem[]) => {
  if (typeof window === 'undefined') {
    return;
  }

  localStorage.setItem(
    PORTFOLIO_CACHE_KEY,
    JSON.stringify({
      portfolio,
      timestamp: Date.now(),
    })
  );
};

export const fetchActivePortfolio = async () => {
  const cachedPortfolio = readCachedActivePortfolio();
  if (cachedPortfolio) {
    return cachedPortfolio;
  }

  if (!inFlightPortfolioRequest) {
    inFlightPortfolioRequest = fetch(buildApiUrl('/api/portfolio'))
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch portfolio: ${response.status}`);
        }

        const data = await response.json();
        const portfolio = Array.isArray(data?.data?.portfolio) ? data.data.portfolio : [];
        const activePortfolio = portfolio.filter(isActivePortfolioItem);

        writeCachedActivePortfolio(activePortfolio);
        return activePortfolio;
      })
      .finally(() => {
        inFlightPortfolioRequest = null;
      });
  }

  return inFlightPortfolioRequest;
};
