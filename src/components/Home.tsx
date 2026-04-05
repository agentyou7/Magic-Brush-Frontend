'use client';

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ChevronRight, Phone, Star, ShieldCheck, Trophy, CheckCircle2, Quote } from 'lucide-react';
import Link from 'next/link';
import { BUSINESS_DATA, WHY_CHOOSE_US, getServiceHref, getServiceIcon } from '@/constants';
import { cacheServiceForDetail, fetchActiveServices, readCachedActiveServices } from '@/lib/services';

interface Service {
  id: string;
  title: string;
  shortHeading?: string;
  description: string;
  fullDetails?: string;
  iconName: string;
  imageUrl?: string;
  isActive: boolean;
  createdAt: any;
}

// Fixed TypeScript error by marking children as optional in the props definition
const TiltCard = ({ children, className }: { children?: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative h-full transition-shadow duration-500 hover:shadow-2xl hover:shadow-orange-500/10 ${className}`}
    >
      <div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="h-full w-full"
      >
        {children}
      </div>
    </motion.div>
  );
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-white pt-[85px] sm:pt-[90px] md:pt-[95px] lg:pt-[105px]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          src="/images/hero_bg.png"
          alt="Luxury Renovation"
          className="w-full h-full object-cover opacity-30" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16 md:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full mb-8">
            <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
            <span className="text-orange-500 text-xs font-black uppercase tracking-[0.2em]">The UK&apos;s Trusted Decorating Experts</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-slate-900 mb-6 sm:mb-8 tracking-tighter leading-[1.05] sm:leading-[0.95]"
          >
            Transforming Homes with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              Precision & Care
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 mb-8 sm:mb-12 max-w-2xl leading-relaxed font-medium"
          >
            From bespoke painting to complete structural renovations, we bring master craftsmanship to every corner of your property.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-12 sm:mb-16">
            <Link
              href="/contact"
              className="group bg-orange-500 hover:bg-orange-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg lg:text-xl flex items-center justify-center transition-all shadow-2xl shadow-orange-500/30 active:scale-95"
            >
              Start Your Project
              <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="bg-slate-900/10 hover:bg-slate-900/20 backdrop-blur-md text-slate-900 border border-slate-900/20 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg lg:text-xl flex items-center justify-center transition-all active:scale-95"
            >
              Our Services
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-300/50 pt-10">
            {[
              { label: "Experience", value: "15+ Yrs", icon: <Trophy className="w-5 h-5" /> },
              { label: "Completed", value: "500+ Projects", icon: <CheckCircle2 className="w-5 h-5" /> },
              { label: "Quality", value: "5-Star Rated", icon: <Star className="w-5 h-5" /> },
              { label: "Protection", value: "Fully Insured", icon: <ShieldCheck className="w-5 h-5" /> },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <div className="flex items-center space-x-2 text-orange-500 mb-1">
                  {stat.icon}
                  <span className="text-xl font-black text-slate-900">{stat.value}</span>
                </div>
                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="hidden lg:block absolute bottom-0 right-0 w-1/3 h-2/3 z-20"
      >
        <div className="relative w-full h-full flex items-end justify-end p-12">
          <div className="bg-white/80 backdrop-blur-xl border border-slate-200 p-8 rounded-[3rem] shadow-2xl max-w-sm">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center font-bold text-white text-xl italic">S</div>
              <div>
                <p className="text-slate-900 font-bold leading-none">Sanjeev Kumar</p>
                <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest mt-1">Managing Director</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm italic leading-relaxed">
              &quot;We don&apos;t just paint walls; we redefine living spaces with a personal commitment to excellence.&quot;
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Home = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cachedServices = readCachedActiveServices();
    if (cachedServices && cachedServices.length > 0) {
      setServices(cachedServices.slice(0, 6) as Service[]);
      setLoading(false);
    }

    const fetchServices = async () => {
      try {
        const activeServices = await fetchActiveServices();
        setServices(activeServices.slice(0, 6) as Service[]);
      } catch (error) {
        console.error('Failed to fetch services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const testimonials = [
    {
      name: "Emma Richardson",
      role: "Homeowner, London",
      content: "Magic Brush Ltd completely transformed our Victorian townhouse. The tiling in the kitchen is flawless and Sanjeev's attention to detail is remarkable. Highly recommended!",
      rating: 5
    },
    {
      name: "David Sterling",
      role: "Property Manager",
      content: "We&apos;ve used several contractors for our portfolio, but Magic Brush Ltd stands out for their efficiency and quality of plastering. They left the site spotless every day.",
      rating: 5
    },
    {
      name: "Sarah Jenkins",
      role: "Interior Designer",
      content: "As a designer, I&apos;m very picky about paint finishes. Magic Brush delivered absolute perfection on a very complex color-blocking project. The finish is mirror-smooth.",
      rating: 5
    }
  ];

  return (
    <div className="overflow-hidden">
      <Hero />

      {/* 3D Services Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Tailored Construction Solutions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Explore our core capabilities. Hover over the cards to experience our precision from every angle.
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {loading ? (
            // Loading skeleton
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="h-[550px] relative group">
                <div className="h-full rounded-[3rem] bg-white border border-slate-200 flex flex-col overflow-hidden relative shadow-2xl animate-pulse">
                  <div className="h-[55%] bg-slate-200"></div>
                  <div className="h-[45%] p-8 bg-white">
                    <div className="h-6 bg-slate-200 rounded mb-4"></div>
                    <div className="h-4 bg-slate-200 rounded mb-2"></div>
                    <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-[550px] relative group"
              >
                <Link
                  href={getServiceHref(service)}
                  onMouseEnter={() => cacheServiceForDetail(service)}
                  onFocus={() => cacheServiceForDetail(service)}
                  onClick={() => cacheServiceForDetail(service)}
                  className="block h-full transition-transform active:scale-[0.98]"
                >
                  <TiltCard>
                    <div className="h-full rounded-[3rem] bg-white border border-slate-200 flex flex-col overflow-hidden relative shadow-2xl transition-all duration-700 group-hover:border-orange-500/50">
                      {/* Top Image Section - Increased Prominence */}
                      <div className="relative h-[55%] overflow-hidden">
                        <img
                          src={service.imageUrl || "/images/service_default.png"}
                          alt={service.title}
                          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />

                        {/* Floating Badge */}
                        <div className="absolute top-6 right-6 z-20">
                          <span className="bg-orange-500/90 backdrop-blur-md text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl">
                            Premium Service
                          </span>
                        </div>

                        <div className="absolute bottom-4 left-8 z-20">
                          <span className="text-6xl font-black text-slate-900/10 group-hover:text-orange-500/40 transition-colors duration-500">
                            0{index + 1}
                          </span>
                        </div>
                      </div>

                      {/* bottom Content Layer */}
                      <div className="relative z-20 h-[45%] p-8 pt-4 flex flex-col justify-between bg-white">
                        <div>
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/20 transform group-hover:rotate-12 transition-transform">
                              {getServiceIcon(service.iconName)}
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-orange-500 transition-colors duration-300">
                              {service.title}
                            </h3>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed font-medium line-clamp-2">
                            {service.shortHeading || service.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="group/btn inline-flex items-center space-x-3 text-orange-500 font-bold tracking-widest uppercase text-[10px] group-hover:text-slate-900 transition-colors">
                            <span className="border-b border-orange-500/30 group-hover:border-slate-900 transition-colors">Learn More</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                          </div>

                          <div className="flex gap-1">
                            {[1, 2, 3].map((_, i) => (
                              <div key={i} className="w-1.5 h-1.5 rounded-full bg-orange-500/20 group-hover:bg-orange-500 transition-colors" style={{ transitionDelay: `${i * 100}ms` }} />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Glass Shine Effect */}
                      <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[25deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out" />
                    </div>
                  </TiltCard>
                </Link>
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500 rounded-full blur-[80px] opacity-20" />
            <img
              src="/images/about_img.png"
              alt="Construction Work"
              className="rounded-[3rem] shadow-2xl relative z-10 w-full object-cover aspect-square md:aspect-auto"
            />
            <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[2rem] shadow-xl z-20 hidden md:block border border-slate-100">
              <div className="text-center">
                <span className="block text-5xl font-black text-slate-900 tracking-tighter">100%</span>
                <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-orange-500 mt-2">Satisfaction Guaranteed</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Excellence in Leadership</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">Driven by Quality & Led by Sanjeev Kumar</h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              At Magic Brush Ltd, we believe every home tells a story. Our mission is to help you write a beautiful one through expert craftsmanship and reliable service. With years of experience in the UK market, we&apos;ve built a reputation for excellence that starts from the top.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {WHY_CHOOSE_US.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4 group">
                  <div className="p-3 bg-white text-orange-500 rounded-xl shrink-0 shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-snug">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/contact" className="inline-flex bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-xl shadow-orange-500/20">
              Consult with our Team
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Featured Section 1: Kitchen & Living Room */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500 rounded-full blur-[80px] opacity-10" />
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="/images/portfolio_kitchen.png"
                  alt="Modern Kitchen Renovation"
                  className="w-full h-full object-cover aspect-[4/5] hover:scale-110 transition-transform duration-1000"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white text-slate-900 p-8 rounded-3xl shadow-xl z-20 border border-slate-200">
                <p className="text-orange-500 font-black text-3xl mb-1">2024</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Featured Project</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Modern Living</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">Luxury Kitchen & Living Spaces</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                We specialize in creating cohesive living environments that blend style with functionality. Our kitchen renovations are designed to be the heart of your home, featuring premium finishes and smart layouts.
              </p>
              <ul className="space-y-4 mb-10">
                {['Bespoke Cabinetry Installation', 'Open-Plan Layout Optimization', 'Integrated Lighting Solutions', 'Premium Countertop Fitting'].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500" />
                    <span className="font-bold text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/gallery" className="inline-flex items-center space-x-3 text-slate-900 font-black uppercase tracking-widest hover:text-orange-500 transition-colors border-b-2 border-slate-900 hover:border-orange-500 pb-1">
                <span>View Kitchen Gallery</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Section 2: Tiling Mastery */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-white text-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:order-2"
            >
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src="/images/service_tiling.png"
                  alt="Professional Tiling"
                  className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:order-1"
            >
              <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Precision Craft</span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-[1.1] tracking-tight text-slate-900">The Art of Precision Tiling</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                From intricate splashbacks to vast floor areas, our tiling experts ensure every line is perfectly straight and every grout line is uniform. We work with all materials including ceramic, porcelain, and natural stone.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-lg">
                  <h4 className="font-black text-orange-500 mb-2">Laser Aligned</h4>
                  <p className="text-xs text-slate-600">Perfect symmetry in every installation.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-lg">
                  <h4 className="font-black text-orange-500 mb-2">Waterproofed</h4>
                  <p className="text-xs text-slate-600">Expert tanking for wet rooms and baths.</p>
                </div>
              </div>
              <Link href="/services/tiling" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest inline-flex items-center transition-all shadow-lg shadow-orange-500/20">
                Explore Tiling Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Section 3: Flooring & Finishing */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Finishing Touches</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Elegance From The Ground Up</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl mb-6 aspect-video">
                <img
                  src="/images/service_flooring.png"
                  alt="Hardwood Flooring"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-xl font-black">Hardwood Excellence</h3>
                  <p className="text-orange-400 text-xs font-bold uppercase tracking-widest">Premium Flooring</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl mb-6 aspect-video">
                <img
                  src="/images/portfolio_bathroom.png"
                  alt="Luxury Bathroom"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-xl font-black">Serene Bathrooms</h3>
                  <p className="text-orange-400 text-xs font-bold uppercase tracking-widest">Bespoke Renovations</p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-slate-600 max-w-2xl mx-auto mb-8">
              Every detail matters. From the choice of wood grain to the perfect shade of paint, we ensure your home reflects your personal taste and lifestyle needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Laminate', 'Hardwood', 'LVT', 'Vinyl', 'Carpet Fitting'].map((type, i) => (
                <span key={i} className="px-6 py-2 bg-white border border-slate-200 rounded-full text-slate-700 text-sm font-bold shadow-sm">
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Client Satisfaction</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-orange-500 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-10 h-10 text-slate-200 mb-4" />
                  <p className="text-slate-600 italic leading-relaxed mb-8">&quot;{t.content}&quot;</p>
                </div>
                <div>
                  <p className="font-black text-slate-900">{t.name}</p>
                  <p className="text-orange-500 text-xs font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-orange-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-[100px] -ml-48 -mb-48" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter">Ready to renovate?</h2>
            <p className="text-orange-50 text-xl mb-12 font-medium">
              Join hundreds of happy homeowners across the UK who trusted us with their vision. Get your free, no-obligation quote today.
            </p>
            <a
              href={`tel:${BUSINESS_DATA.phone}`}
              className="inline-flex items-center space-x-6 bg-white text-slate-900 px-12 py-6 rounded-[2rem] text-3xl font-black hover:bg-slate-100 transition-all shadow-2xl hover:scale-105 active:scale-95"
            >
              <Phone className="w-10 h-10 text-orange-500" />
              <span>{BUSINESS_DATA.phone}</span>
            </a>
            <p className="mt-8 text-orange-100 text-sm font-bold uppercase tracking-[0.2em]">Available for Emergency Decorating & Repairs</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
