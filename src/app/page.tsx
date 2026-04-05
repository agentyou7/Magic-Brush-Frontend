import Home from '@/components/Home';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Magic Brush Ltd | House Renovation, Decorating & Flooring in London',
  description:
    'Transform your property with Magic Brush Ltd. We provide house renovation, painting and decorating, tiling, plastering, and flooring services across London.',
  path: '/',
  keywords: [
    'home renovation London',
    'decorating company London',
    'property refurbishment London',
    'renovation contractors London',
  ],
});

export default function HomePage() {
  return <Home />;
}
