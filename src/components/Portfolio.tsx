'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchActivePortfolio, readCachedActivePortfolio } from '@/lib/portfolio';

interface PortfolioItem {
  id: string;
  title?: string;
  shortHeading?: string;
  imageUrl?: string;
  isActive?: boolean;
}

interface PortfolioDisplayItem {
  src: string;
  title: string;
  shortHeading: string;
  size: "lg" | "md" | "sm";
}

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioDisplayItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cachedPortfolio = readCachedActivePortfolio();
    if (cachedPortfolio && cachedPortfolio.length > 0) {
      setPortfolioItems(
        cachedPortfolio.map((item: PortfolioItem) => ({
          src: item.imageUrl || "/images/portfolio_living.png",
          title: item.title || "Project Showcase",
          shortHeading: item.shortHeading || "Magic Brush Quality",
          size: ["lg", "md", "sm"][Math.floor(Math.random() * 3)] as "lg" | "md" | "sm"
        }))
      );
      setLoading(false);
    }

    const fetchPortfolio = async () => {
      try {
        const activePortfolio = await fetchActivePortfolio();
        setPortfolioItems(
          activePortfolio.map((item: PortfolioItem) => ({
            src: item.imageUrl || "/images/portfolio_living.png",
            title: item.title || "Project Showcase",
            shortHeading: item.shortHeading || "Magic Brush Quality",
            size: ["lg", "md", "sm"][Math.floor(Math.random() * 3)] as "lg" | "md" | "sm"
          }))
        );
      } catch (error) {
        console.error('Failed to fetch portfolio:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  // Fallback to static images if loading or no data
  const images = portfolioItems.length > 0 ? portfolioItems : [
    { src: "/images/portfolio_living.png", title: "Living Room Modernization", shortHeading: "Magic Brush Quality", size: "lg" as const },
    { src: "/images/service_tiling.png", title: "Professional Tiling Work", shortHeading: "Magic Brush Quality", size: "sm" as const },
    { src: "/images/service_painting.png", title: "Premium Painting Finish", shortHeading: "Magic Brush Quality", size: "sm" as const },
    { src: "/images/portfolio_kitchen.png", title: "Kitchen Renovation", shortHeading: "Magic Brush Quality", size: "md" as const },
    { src: "/images/service_flooring.png", title: "Hardwood Floor Installation", shortHeading: "Magic Brush Quality", size: "lg" as const },
    { src: "/images/portfolio_bathroom.png", title: "Bathroom Plastering", shortHeading: "Magic Brush Quality", size: "sm" as const },
  ];

  if (loading) {
    return (
      <div className="bg-slate-50 min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-12 bg-slate-300 rounded max-w-md mx-auto mb-4"></div>
              <div className="h-4 bg-slate-300 rounded max-w-2xl mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl font-extrabold text-slate-900 mb-6"
          >
            Project Showcase
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            A glimpse into the quality and dedication we bring to every home. We transform spaces from ordinary to extraordinary.
          </motion.p>
        </header>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[200px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-3xl group shadow-md transition-all hover:shadow-xl ${img.size === 'lg' ? 'md:row-span-3' : img.size === 'md' ? 'md:row-span-2' : 'md:row-span-1'
                }`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform">{img.title}</h3>
                <p className="text-orange-400 text-sm font-semibold uppercase tracking-wider mb-2">{img.shortHeading}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
