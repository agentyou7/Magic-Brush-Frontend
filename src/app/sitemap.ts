import type { MetadataRoute } from 'next';
import { getServiceHref, SERVICES } from '@/constants';
import { SITE_URL } from '@/lib/seo';

const staticRoutes = [
  '/',
  '/about',
  '/services',
  '/gallery',
  '/contact',
  '/legal/privacy-policy',
  '/legal/terms',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = staticRoutes.map((route) => ({
    url: new URL(route, SITE_URL).toString(),
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route === '/services' ? 0.9 : 0.7,
  })) satisfies MetadataRoute.Sitemap;

  const serviceEntries = SERVICES.map((service) => ({
    url: new URL(getServiceHref(service), SITE_URL).toString(),
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  })) satisfies MetadataRoute.Sitemap[number][];

  return [...staticEntries, ...serviceEntries];
}
