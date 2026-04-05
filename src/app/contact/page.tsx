import Contact from '@/components/Contact';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Contact',
  description:
    'Contact Magic Brush Ltd for house renovation, decorating, tiling, plastering, and flooring quotes in London.',
  path: '/contact',
  keywords: [
    'contact renovation company London',
    'request renovation quote London',
    'Magic Brush Ltd contact',
  ],
});

export default function ContactPage() {
    return <Contact />;
}
