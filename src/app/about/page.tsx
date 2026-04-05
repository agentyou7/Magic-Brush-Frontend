import React from 'react';
import About from '@/components/About';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
    title: 'About Us',
    description: 'Learn about Magic Brush Ltd, a London renovation and decorating company focused on quality workmanship, reliable timelines, and premium finishes.',
    path: '/about',
    keywords: [
        'about Magic Brush Ltd',
        'renovation company London',
        'decorating contractors London',
    ],
});

const AboutPage = () => {
    return <About />;
};

export default AboutPage;
