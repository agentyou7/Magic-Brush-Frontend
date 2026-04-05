import Portfolio from '@/components/Portfolio';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Gallery',
  description:
    'View completed renovation, decorating, tiling, plastering, and flooring projects from Magic Brush Ltd.',
  path: '/gallery',
  keywords: [
    'renovation gallery London',
    'before and after renovation London',
    'home improvement portfolio London',
  ],
});

export default function GalleryPage() {
    return <Portfolio />;
}
