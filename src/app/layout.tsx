import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Magic Brush Ltd | Premium Renovation & Decorating",
  description:
    "High-performance corporate website for Magic Brush Ltd, a premier renovation and construction company specializing in house renovations, painting, tiling, plastering, and flooring.",
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
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-V7VLP0J1S2"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-V7VLP0J1S2');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}
      >
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
