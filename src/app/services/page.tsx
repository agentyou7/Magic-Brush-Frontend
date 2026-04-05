import Services from '@/components/Services';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Services',
  description:
    'Explore renovation, painting and decorating, tiling, plastering, and flooring services from Magic Brush Ltd in London.',
  path: '/services',
  keywords: [
    'renovation services London',
    'painting services London',
    'tiling contractors London',
    'flooring installers London',
  ],
});

export default function ServicesPage() {
    return <Services />;
}
