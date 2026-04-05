import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildCanonical, organizationStructuredData, SITE_NAME, SITE_URL, websiteStructuredData } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Magic Brush Ltd | House Renovation, Decorating & Flooring in London",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Magic Brush Ltd delivers house renovation, painting and decorating, tiling, plastering, and flooring services in London with premium workmanship and reliable project delivery.",
  keywords: [
    "Magic Brush Ltd",
    "house renovation London",
    "painting and decorating London",
    "tiling services London",
    "plastering London",
    "flooring London",
    "home renovation company",
    "property improvement London",
  ],
  alternates: {
    canonical: buildCanonical('/'),
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: "Magic Brush Ltd | House Renovation, Decorating & Flooring in London",
    description:
      "Premium renovation and decorating services in London, including house renovation, tiling, plastering, painting, and flooring.",
    siteName: SITE_NAME,
    locale: 'en_GB',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Magic Brush Ltd | House Renovation, Decorating & Flooring in London",
    description:
      "Premium renovation and decorating services in London, including house renovation, tiling, plastering, painting, and flooring.",
    images: ['/icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32" },
      { url: "/icon.png", sizes: "192x192" },
    ],
    apple: [{ url: "/icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover"
        />
        <meta name="theme-color" content="#fffbeb" />
        <meta name="format-detection" content="telephone=yes" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NM99QG3');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NM99QG3"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-[70px] sm:pt-[120px] md:pt-[130px] lg:pt-[140px]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
