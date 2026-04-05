import type { Metadata } from 'next';
import ServiceDetail from '@/components/ServiceDetail';
import { buildCanonical, getServiceMetadataBySlug, SITE_NAME, SITE_URL } from '@/lib/seo';

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const serviceMeta = getServiceMetadataBySlug(id);
  const canonical = buildCanonical(`/services/${id}`);

  return {
    title: serviceMeta.title,
    description: serviceMeta.description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'article',
      url: canonical,
      title: serviceMeta.title,
      description: serviceMeta.description,
      siteName: SITE_NAME,
      locale: 'en_GB',
      images: [
        {
          url: serviceMeta.image,
          width: 1200,
          height: 630,
          alt: serviceMeta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: serviceMeta.title,
      description: serviceMeta.description,
      images: [serviceMeta.image],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { id } = await params;
  const serviceMeta = getServiceMetadataBySlug(id);

  const serviceStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceMeta.title.replace(` | ${SITE_NAME}`, ''),
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: 'London, United Kingdom',
    description: serviceMeta.description,
    url: buildCanonical(`/services/${id}`),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceStructuredData),
        }}
      />
      <ServiceDetail />
    </>
  );
}
