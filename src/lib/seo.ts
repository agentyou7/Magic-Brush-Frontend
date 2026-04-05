import type { Metadata } from 'next';
import { BUSINESS_DATA, SERVICES } from '@/constants';

export const SITE_URL = 'https://magicbrushltd.co.uk';
export const SITE_NAME = 'Magic Brush Ltd';
export const DEFAULT_OG_IMAGE = '/icon.png';

const DEFAULT_KEYWORDS = [
  'Magic Brush Ltd',
  'Magic Brush',
  'MagicBrush',
  'MagicBrush Ltd',
  'renovation company London',
  'best renovation company in UK',
  'best renovation company in England',
  'trusted renovation company UK',
  'premium renovation company England',
  'house renovation London',
  'painting and decorating London',
  'tiling services London',
  'plastering London',
  'flooring installation London',
  'property renovation UK',
  'property renovation England',
  'home improvement London',
];

export function buildCanonical(path = '/') {
  return new URL(path, SITE_URL).toString();
}

export function formatSlugToTitle(slug: string) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export function getServiceMetadataBySlug(slug: string) {
  const matchedService = SERVICES.find((service) => {
    const normalizedTitle = service.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');

    return normalizedTitle === slug || service.id === slug;
  });

  if (matchedService) {
    return {
      title: `${matchedService.title} | ${SITE_NAME}`,
      description: matchedService.description,
      image: matchedService.imageUrl || DEFAULT_OG_IMAGE,
    };
  }

  const fallbackTitle = formatSlugToTitle(slug);

  return {
    title: `${fallbackTitle} | ${SITE_NAME}`,
    description: `${fallbackTitle} by ${SITE_NAME}. Professional renovation, decorating, and home improvement services in London, England, and across the UK.`,
    image: DEFAULT_OG_IMAGE,
  };
}

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = DEFAULT_OG_IMAGE,
}: BuildPageMetadataInput): Metadata {
  const canonical = buildCanonical(path);
  const mergedKeywords = [...DEFAULT_KEYWORDS, ...keywords];

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'website',
      url: canonical,
      title,
      description,
      siteName: SITE_NAME,
      locale: 'en_GB',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS_DATA.companyName,
  url: SITE_URL,
  telephone: BUSINESS_DATA.phone,
  email: BUSINESS_DATA.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: BUSINESS_DATA.address,
    addressCountry: 'GB',
  },
  sameAs: Object.values(BUSINESS_DATA.socials),
  areaServed: 'London, United Kingdom',
  description:
    'Magic Brush Ltd provides house renovation, painting and decorating, tiling, plastering, and flooring services in London, England, and across the UK.',
};

export const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/services`,
    'query-input': 'required name=service',
  },
};
