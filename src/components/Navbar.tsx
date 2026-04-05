"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { BUSINESS_DATA, getServiceHref, getServiceIcon } from "@/constants";
import { buildApiUrl } from "@/lib/api";
import { cacheServiceForDetail } from "@/lib/services";
import TopBar from "./TopBar";
import StickyMobileActions from "./StickyMobileActions";

interface Service {
  id: string;
  title: string;
  shortHeading?: string;
  description: string;
  iconName: string;
  isActive: boolean;
  createdAt: any;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [services, setServices] = useState<Service[]>([]);
  const pathname = usePathname();

  // Fetch recent services
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(buildApiUrl('/api/services/recent'));
        if (response.ok) {
          const data = await response.json();
          if (data.success && data.data?.services) {
            setServices(data.data.services);
            // Cache in localStorage for 2 minutes
            localStorage.setItem('cachedServices', JSON.stringify({
              services: data.data.services,
              timestamp: Date.now()
            }));
          }
        }
      } catch (error) {
        console.error('Failed to fetch services:', error);
      }
    };

    // Check cache first
    const cached = localStorage.getItem('cachedServices');
    if (cached) {
      try {
        const { services: cachedServices, timestamp } = JSON.parse(cached);
        const cacheAge = Date.now() - timestamp;
        const CACHE_DURATION = 2 * 60 * 1000; // 2 minutes
        
        if (cacheAge < CACHE_DURATION && cachedServices.length > 0) {
          setServices(cachedServices);
          return; // Use cache, don't fetch
        }
      } catch (error) {
        console.error('Failed to parse cached services:', error);
      }
    }

    // No valid cache, fetch fresh data
    fetchServices();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("menu-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.classList.remove("menu-open");
    };
  }, [isOpen]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "Portfolio", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[9997] transition-all duration-300">
      <TopBar />
      <nav
        className={`transition-all duration-500 ${scrolled
          ? "bg-white/70 backdrop-blur-2xl shadow-xl shadow-slate-900/5 py-2.5 sm:py-3 border-b border-white/50"
          : "bg-white/60 backdrop-blur-2xl py-3.5 sm:py-5 border-b border-white/30"
          } px-3 sm:px-6 lg:px-8`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo & Wordmark */}
          <Link
            href="/"
            className="flex items-center space-x-3 group relative z-[70] transition-transform active:scale-95 touch-manipulation"
          >
            <img
              src="/images/logo.png"
              alt="Magic Brush Ltd"
              className={`transition-all duration-500 object-contain w-auto ${scrolled ? "h-10 sm:h-12" : "h-12 sm:h-16"}`}
            />
            <div className="flex flex-col leading-none">
              <span
                className={`font-black text-slate-900 tracking-tighter uppercase flex items-baseline transition-all ${scrolled ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"}`}
              >
                MAGIC <span className="text-orange-500 ml-1">BRUSH</span>{" "}
                <span className="text-slate-900 ml-1">LTD</span>
              </span>
              <span
                className={`font-black uppercase tracking-[0.3em] text-slate-400 mt-0.5 transition-all ${scrolled ? "text-[7px]" : "text-[8px] sm:text-[9px]"}`}
              >
                make your dream come true
              </span>
            </div>
          </Link>

          {/* Desktop Nav - Premium Redesign */}
          <div className="hidden xl:flex items-center space-x-1.5">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setServicesOpen(true)}
                onMouseLeave={() => link.hasDropdown && setServicesOpen(false)}
              >
                <Link
                  href={link.path}
                  className={`relative px-5 py-2.5 text-sm font-bold transition-all rounded-xl flex items-center group overflow-hidden ${(pathname?.startsWith(link.path) && link.path !== "/") ||
                    (pathname === "/" && link.path === "/")
                    ? "text-white bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg shadow-orange-500/20"
                    : "text-slate-700 hover:text-slate-900 hover:bg-white/70 border border-transparent hover:border-white/80"
                    }`}
                >
                  {/* Glass overlay for inactive links */}
                  {!(
                    (pathname?.startsWith(link.path) && link.path !== "/") ||
                    (pathname === "/" && link.path === "/")
                  ) && (
                      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-slate-50/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all pointer-events-none" />
                    )}

                  {/* Active link shine */}
                  {((pathname?.startsWith(link.path) && link.path !== "/") ||
                    (pathname === "/" && link.path === "/")) && (
                      <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent pointer-events-none" />
                    )}

                  <span className="relative z-10 font-black uppercase tracking-wide">
                    {link.name}
                  </span>
                  {link.hasDropdown && (
                    <ChevronDown
                      className={`w-4 h-4 ml-1.5 transition-transform duration-300 relative z-10 ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  )}
                </Link>

                {link.hasDropdown && (
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.96 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[600px]"
                      >
                        <div className="relative bg-white backdrop-blur-3xl rounded-2xl shadow-2xl border border-slate-200/50 overflow-hidden">
                          {/* Multi-layer glass background */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/30 to-white" />

                          {/* Decorative elements */}
                          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-orange-500/8 via-orange-400/4 to-transparent rounded-full blur-3xl pointer-events-none" />
                          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-slate-900/5 to-transparent rounded-full blur-3xl pointer-events-none" />

                          <div className="relative z-10 p-6">
                            {/* Header */}
                            <div className="pb-4 mb-4 border-b border-slate-200">
                              <h3 className="text-slate-900 font-black text-base uppercase tracking-wider">
                                Our Services
                              </h3>
                              <p className="text-slate-600 text-sm mt-1 font-medium">
                                Premium renovation & construction solutions
                              </p>
                            </div>

                            {/* Services Grid */}
                            <div className="grid grid-cols-2 gap-3 max-h-[440px] overflow-y-auto pr-1">
                              {services.map((s) => (
                                <Link
                                  key={s.id}
                                  href={getServiceHref(s)}
                                  onMouseEnter={() => cacheServiceForDetail(s)}
                                  onFocus={() => cacheServiceForDetail(s)}
                                  onClick={() => cacheServiceForDetail(s)}
                                  className="relative flex items-start p-4 rounded-xl bg-slate-50/50 hover:bg-white transition-all group/item border border-slate-200/60 hover:border-orange-400/50 hover:shadow-lg hover:shadow-orange-500/15 overflow-hidden"
                                >
                                  {/* Glass overlay */}
                                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-slate-50/40 opacity-0 group-hover/item:opacity-100 transition-opacity pointer-events-none" />

                                  <div className="relative z-10 p-2.5 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200/80 text-slate-500 group-hover/item:from-orange-500 group-hover/item:to-orange-600 group-hover/item:text-white transition-all mr-3 shadow-sm group-hover/item:shadow-lg group-hover/item:shadow-orange-500/30 flex-shrink-0">
                                    {React.cloneElement(
                                      getServiceIcon(
                                        s.iconName,
                                      ) as React.ReactElement<{
                                        className: string;
                                      }>,
                                      { className: "w-5 h-5" },
                                    )}
                                  </div>
                                  <div className="flex-1 min-w-0 relative z-10">
                                    <h4 className="text-sm font-black text-slate-900 mb-1 group-hover/item:text-orange-600 transition-colors leading-tight">
                                      {s.title}
                                    </h4>
                                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                                      {s.shortHeading || s.description}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>

                            {/* Footer CTA */}
                            <div className="mt-5 pt-5 border-t border-slate-200">
                              <Link
                                href="/services"
                                className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-slate-50 hover:bg-slate-100 rounded-xl text-sm font-bold text-slate-700 hover:text-orange-600 uppercase tracking-wide transition-all group/cta border border-slate-200"
                              >
                                View All Services
                                <ChevronRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <div className="ml-4">
              <Link
                href="/contact"
                className="relative inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-black text-sm uppercase transition-all shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/35 active:scale-95 group overflow-hidden whitespace-nowrap"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />

                {/* Glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent pointer-events-none" />

                <span className="relative z-10">Get Quote</span>
                <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Interface - Enhanced */}
          <div className="xl:hidden flex items-center relative z-[10000]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className={`flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300 touch-manipulation ${isOpen
                ? "bg-orange-500 text-white shadow-lg"
                : "bg-slate-50 text-slate-900 border border-slate-200 shadow-sm active:border-slate-300 active:shadow-md"
                } active:scale-95`}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sticky Action Pill - Hidden when menu is open */}
      {!isOpen && <StickyMobileActions />}

      {/* Professional Mobile Menu - Rendered via Portal */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <>
                {/* Enhanced Glassmorphism Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="fixed inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-2xl z-[9998] xl:hidden"
                  onClick={() => setIsOpen(false)}
                >
                  {/* Multi-layer Glass Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />

                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                        backgroundSize: "40px 40px",
                      }}
                    />
                  </div>

                  {/* Floating blur orbs */}
                  <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
                </motion.div>

                {/* Menu Panel with Enhanced Glassmorphism */}
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-[380px] z-[9999] xl:hidden"
                >
                  {/* Multi-layer Glass Effect Panel */}
                  <div className="h-full relative overflow-hidden">
                    {/* Base glass layer */}
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-3xl" />

                    {/* Gradient overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-slate-50/90" />

                    {/* Frosted edge effect */}
                    <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-r from-white via-white/50 to-transparent" />

                    {/* Shadow layer */}
                    <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.03)]" />

                    {/* Decorative blur elements */}
                    <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-orange-500/15 via-orange-400/10 to-transparent rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-slate-900/8 via-slate-800/5 to-transparent rounded-full blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl" />

                    {/* Content */}
                    <div className="relative h-full flex flex-col">
                      {/* Header with Glass Effect */}
                      <div className="px-6 py-6 border-b border-white/50 bg-white/60 backdrop-blur-xl relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/40" />
                        <div className="flex items-center justify-between relative z-10">
                          <div>
                            <div className="text-xl font-black text-slate-900 uppercase tracking-tight">
                              MAGIC{" "}
                              <span className="text-orange-500">BRUSH</span> LTD
                            </div>
                            <div className="text-[9px] text-slate-500 uppercase tracking-widest mt-1">
                              Renovation Excellence
                            </div>
                          </div>
                          <button
                            onClick={() => setIsOpen(false)}
                            className="w-11 h-11 rounded-xl bg-white/60 backdrop-blur-md hover:bg-white/80 border border-white/80 flex items-center justify-center text-slate-700 transition-all active:scale-95 shadow-lg shadow-slate-900/5"
                            aria-label="Close menu"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      {/* Navigation Links */}
                      <div className="flex-1 overflow-y-auto py-6 px-5">
                        <nav className="space-y-2">
                          {navLinks.map((link, i) => (
                            <motion.div
                              key={link.path}
                              initial={{ opacity: 0, x: 30 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: i * 0.08,
                                type: "spring",
                                stiffness: 200,
                              }}
                            >
                              {link.hasDropdown ? (
                                <div className="space-y-2">
                                  <button
                                    onClick={() =>
                                      setMobileServicesOpen(!mobileServicesOpen)
                                    }
                                    className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl font-bold text-base transition-all relative overflow-hidden ${mobileServicesOpen
                                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-xl shadow-orange-500/30"
                                      : "bg-white/50 backdrop-blur-xl text-slate-700 hover:bg-white/70 active:scale-[0.98] border border-white/60 shadow-lg shadow-slate-900/5"
                                      }`}
                                  >
                                    {!mobileServicesOpen && (
                                      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-slate-50/30 pointer-events-none" />
                                    )}
                                    <span className="uppercase tracking-wide text-sm font-black relative z-10">
                                      {link.name}
                                    </span>
                                    <ChevronDown
                                      className={`w-5 h-5 transition-transform duration-300 relative z-10 ${mobileServicesOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                  </button>

                                  <AnimatePresence>
                                    {mobileServicesOpen && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                      >
                                        <div className="pl-3 space-y-1.5 pt-1">
                                          {services.map((service) => (
                                            <Link
                                              key={service.id}
                                              href={getServiceHref(service)}
                                              onMouseEnter={() => cacheServiceForDetail(service)}
                                              onFocus={() => cacheServiceForDetail(service)}
                                              onClick={() => setIsOpen(false)}
                                              className="relative flex items-center gap-3 px-4 py-3 bg-white/40 backdrop-blur-xl border border-white/60 rounded-xl text-sm font-semibold text-slate-600 hover:text-orange-600 hover:border-orange-300/60 active:scale-[0.98] transition-all shadow-sm hover:shadow-lg hover:shadow-orange-500/10 overflow-hidden"
                                            >
                                              <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-slate-50/40 pointer-events-none" />
                                              <div className="w-2 h-2 rounded-full bg-orange-500 relative z-10" />
                                              <span className="relative z-10">
                                                {service.title}
                                              </span>
                                            </Link>
                                          ))}
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              ) : (
                                <Link
                                  href={link.path}
                                  onClick={() => setIsOpen(false)}
                                  className={`relative flex items-center px-5 py-4 rounded-2xl font-bold text-sm uppercase tracking-wide transition-all overflow-hidden ${pathname === link.path
                                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-xl shadow-orange-500/30"
                                    : "bg-white/50 backdrop-blur-xl text-slate-700 hover:bg-white/70 active:scale-[0.98] border border-white/60 shadow-lg shadow-slate-900/5"
                                    }`}
                                >
                                  {pathname !== link.path && (
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-slate-50/30 pointer-events-none" />
                                  )}
                                  <span className="font-black relative z-10">
                                    {link.name}
                                  </span>
                                </Link>
                              )}
                            </motion.div>
                          ))}
                        </nav>

                        {/* CTA Button */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="mt-8"
                        >
                          <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center gap-2 w-full py-5 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-center font-black text-sm uppercase tracking-widest rounded-2xl shadow-xl shadow-slate-900/30 active:scale-[0.98] transition-transform"
                          >
                            Get Free Quote
                            <ChevronRight className="w-5 h-5" />
                          </Link>
                        </motion.div>
                      </div>

                      {/* Footer Contact Cards with Glass Effect */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="px-5 py-6 border-t border-white/50 bg-white/40 backdrop-blur-2xl relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-white/30" />
                        <div className="relative z-10">
                          <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
                            Contact Us
                          </div>
                          <div className="space-y-2.5">
                            <a
                              href={`tel:${BUSINESS_DATA.phone}`}
                              className="relative flex items-center gap-3 px-4 py-3.5 bg-white/60 backdrop-blur-xl rounded-xl border border-white/70 active:bg-white/80 transition-all shadow-lg shadow-slate-900/5 overflow-hidden"
                            >
                              <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-slate-50/40 pointer-events-none" />
                              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30 relative z-10">
                                <Phone className="w-5 h-5 text-white" />
                              </div>
                              <div className="flex-1 min-w-0 relative z-10">
                                <div className="text-[9px] text-slate-500 uppercase tracking-wider font-bold">
                                  Call Now
                                </div>
                                <div className="text-sm text-slate-900 font-bold truncate">
                                  {BUSINESS_DATA.phone}
                                </div>
                              </div>
                            </a>

                            <a
                              href={`mailto:${BUSINESS_DATA.email}`}
                              className="relative flex items-center gap-3 px-4 py-3.5 bg-white/60 backdrop-blur-xl rounded-xl border border-white/70 active:bg-white/80 transition-all shadow-lg shadow-slate-900/5 overflow-hidden"
                            >
                              <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-slate-50/40 pointer-events-none" />
                              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center shadow-lg shadow-slate-900/20 relative z-10">
                                <Mail className="w-5 h-5 text-white" />
                              </div>
                              <div className="flex-1 min-w-0 relative z-10">
                                <div className="text-[9px] text-slate-500 uppercase tracking-wider font-bold">
                                  Email Us
                                </div>
                                <div className="text-sm text-slate-900 font-bold truncate">
                                  {BUSINESS_DATA.email}
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </header>
  );
};

export default Navbar;
