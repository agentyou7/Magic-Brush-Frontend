
import {
  Home,
  Paintbrush,
  Grid,
  Layers,
  Maximize,
  Star,
  ShieldCheck,
  Clock,
  TrendingUp
} from 'lucide-react';
import { Service, BusinessData } from './types';
import React from 'react';

export const BUSINESS_DATA: BusinessData = {
  companyName: "Magic Brush Ltd",
  director: "Sanjeev Kumar",
  phone: "07424292487",
  email: "info@magicbrushltd.co.uk",
  address: "London",
  socials: {
    instagram: "https://www.instagram.com/magicbrushltd_/",
    tiktok: "https://www.tiktok.com/@magicbrushltd",
    facebook: "https://www.facebook.com/profile.php?id=61577881073869",
    x: "https://x.com/SanjeevKum6467",
    linkedin: "https://www.linkedin.com/company/magic-brush-ltd",
    youtube: "https://www.youtube.com/@magicbrushltd"
  }
};

export const SERVICES: Service[] = [
  {
    id: "house-renovation",
    title: "House Renovation",
    description: "Complete structural and aesthetic transformations for residential properties.",
    iconName: "Home",
    fullDetails: "Our comprehensive house renovation services cover everything from structural alterations to final aesthetic touches. We work closely with you to modernize your living space while maintaining functional excellence.",
    imageUrl: "/images/service_renovation.png"
  },
  {
    id: "painting-decorating",
    title: "Painting & Decorating",
    description: "Premium interior and exterior finishes with attention to every detail.",
    iconName: "Paintbrush",
    fullDetails: "High-quality painting and decorating services that breathe new life into your home. We use premium materials and precise techniques for a flawless finish on walls, ceilings, and woodwork.",
    imageUrl: "/images/service_painting.png"
  },
  {
    id: "tiling",
    title: "Tiling",
    description: "Expert tile installation for kitchens, bathrooms, and floors.",
    iconName: "Grid",
    fullDetails: "Professional tiling solutions for all surfaces. Whether it's a intricate backsplash or a large-format floor installation, we ensure perfect alignment and durable grouting.",
    imageUrl: "/images/service_tiling.png"
  },
  {
    id: "plastering",
    title: "Plastering (Skimming)",
    description: "Smooth, professional plastering for perfectly flat walls and ceilings.",
    iconName: "Layers",
    fullDetails: "Our skimming and plastering services provide the perfect foundation for decorating. We specialize in repairing damaged surfaces and providing mirror-smooth finishes.",
    imageUrl: "/images/service_plastering.png"
  },
  {
    id: "flooring",
    title: "All Types of Flooring",
    description: "Installation of laminate, hardwood, vinyl, and tile flooring.",
    iconName: "Maximize",
    fullDetails: "Expert floor installation for every room. From high-durability laminates to classic hardwood, we ensure a level, beautiful foundation for your home's interior.",
    imageUrl: "/images/service_flooring.png"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Efficiency Focused",
    description: "We optimize our workflows to deliver high-quality results within agreed timelines.",
    icon: <Clock className="w-6 h-6" />
  },
  {
    title: "Cost Reduction",
    description: "Smart procurement and expert execution help reduce long-term maintenance costs.",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    title: "Unmatched Quality",
    description: "Led by Director Sanjeev Kumar, we maintain strict quality control on every project.",
    icon: <Star className="w-6 h-6" />
  },
  {
    title: "Fully Insured",
    description: "Your property is in safe hands with our comprehensive insurance and safety standards.",
    icon: <ShieldCheck className="w-6 h-6" />
  }
];

export const getServiceIcon = (name: string) => {
  switch (name) {
    case 'Home': return <Home className="w-8 h-8" />;
    case 'Paintbrush': return <Paintbrush className="w-8 h-8" />;
    case 'Grid': return <Grid className="w-8 h-8" />;
    case 'Layers': return <Layers className="w-8 h-8" />;
    case 'Maximize': return <Maximize className="w-8 h-8" />;
    default: return <Home className="w-8 h-8" />;
  }
};

export const getServiceSlug = (service: { id: string; title: string }) => {
  const titleSlug = service.title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

  return titleSlug || service.id;
};

export const getServiceHref = (service: { id: string; title: string }) => {
  return `/services/${getServiceSlug(service)}`;
};
