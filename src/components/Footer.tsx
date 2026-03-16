
import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Facebook, ChevronRight, Award, Clock } from 'lucide-react';
import { BUSINESS_DATA, SERVICES } from '@/constants';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 pt-16 sm:pt-20 pb-32 lg:pb-10 overflow-hidden relative">
            {/* Enhanced Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '60px 60px'
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Top Section with CTA */}
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 sm:p-12 mb-16 sm:mb-20 shadow-2xl shadow-orange-500/20">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        <div className="text-center lg:text-left">
                            <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-black mb-3 tracking-tight">
                                Ready to Transform Your Space?
                            </h3>
                            <p className="text-orange-100 text-sm sm:text-base max-w-2xl">
                                Get a free consultation and quote from our expert team. No obligation, just great advice.
                            </p>
                        </div>
                        <Link
                            href="/contact"
                            className="flex-shrink-0 bg-white text-slate-900 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-slate-100 transition-all shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap"
                        >
                            Get Free Quote
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-8 mb-16 sm:mb-20">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div>
                            <Link href="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
                                <img
                                    src="/images/logo.png"
                                    alt="Magic Brush Ltd"
                                    className="h-16 w-auto object-contain"
                                />
                                <div className="flex flex-col leading-none">
                                    <h3 className="text-white text-2xl font-black tracking-tight uppercase">
                                        MAGIC <span className="text-orange-500 ml-1">BRUSH</span> LTD
                                    </h3>
                                    <p className="text-[9px] font-bold tracking-[0.4em] text-slate-500 uppercase mt-1">
                                        Renovation Excellence
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <p className="text-slate-400 leading-relaxed text-sm max-w-xs">
                            Transforming properties into premium living spaces since 2009. We blend traditional craftsmanship with modern innovation.
                        </p>

                        {/* Trust Badges */}
                        <div className="flex flex-col gap-3 pt-4">
                            <div className="flex items-center gap-3 text-slate-400">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                                    <Award className="w-5 h-5 text-orange-500" />
                                </div>
                                <div>
                                    <p className="text-white text-xs font-bold">Fully Licensed</p>
                                    <p className="text-slate-500 text-[10px]">& Insured Company</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-slate-400">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                                    <Clock className="w-5 h-5 text-orange-500" />
                                </div>
                                <div>
                                    <p className="text-white text-xs font-bold">15+ Years</p>
                                    <p className="text-slate-500 text-[10px]">Industry Experience</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3 pt-2">
                            <a
                                href={BUSINESS_DATA.socials.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 flex items-center justify-center transition-all hover:scale-110 active:scale-95 text-white group"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href={BUSINESS_DATA.socials.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 rounded-xl bg-white/5 hover:bg-blue-600 flex items-center justify-center transition-all hover:scale-110 active:scale-95 text-white"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href={BUSINESS_DATA.socials.x}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 rounded-xl bg-white/5 hover:bg-slate-700 flex items-center justify-center transition-all hover:scale-110 active:scale-95 text-white"
                                aria-label="X (Twitter)"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="text-white font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-[11px] mb-6 sm:mb-8 relative inline-block pb-3">
                            Our Services
                            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full" />
                        </h4>
                        <ul className="space-y-3">
                            {SERVICES.slice(0, 6).map(s => (
                                <li key={s.id}>
                                    <Link
                                        href={`/services/${s.id}`}
                                        className="text-slate-400 hover:text-white hover:translate-x-1 transition-all flex items-center text-sm font-medium group"
                                    >
                                        <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-orange-500 mr-2 transition-colors" />
                                        {s.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-white font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-[11px] mb-6 sm:mb-8 relative inline-block pb-3">
                            Contact Us
                            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full" />
                        </h4>
                        <ul className="space-y-5">
                            <li>
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <MapPin className="w-5 h-5 text-orange-500" />
                                    </div>
                                    <div>
                                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                                            Office Location
                                        </span>
                                        <p className="text-white font-medium text-sm leading-relaxed">
                                            {BUSINESS_DATA.address}
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Phone className="w-5 h-5 text-orange-500" />
                                    </div>
                                    <div>
                                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                                            Phone
                                        </span>
                                        <a
                                            href={`tel:${BUSINESS_DATA.phone}`}
                                            className="text-white font-bold text-base hover:text-orange-500 transition-colors"
                                        >
                                            {BUSINESS_DATA.phone}
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Mail className="w-5 h-5 text-orange-500" />
                                    </div>
                                    <div>
                                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                                            Email
                                        </span>
                                        <a
                                            href={`mailto:${BUSINESS_DATA.email}`}
                                            className="text-white font-medium text-sm hover:text-orange-500 transition-colors break-all"
                                        >
                                            {BUSINESS_DATA.email}
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h4 className="text-white font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-[11px] mb-6 sm:mb-8 relative inline-block pb-3">
                            Quick Links
                            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full" />
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/"
                                    className="text-slate-400 hover:text-white hover:translate-x-1 transition-all flex items-center text-sm font-medium group"
                                >
                                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-orange-500 mr-2 transition-colors" />
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="text-slate-400 hover:text-white hover:translate-x-1 transition-all flex items-center text-sm font-medium group"
                                >
                                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-orange-500 mr-2 transition-colors" />
                                    All Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/gallery"
                                    className="text-slate-400 hover:text-white hover:translate-x-1 transition-all flex items-center text-sm font-medium group"
                                >
                                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-orange-500 mr-2 transition-colors" />
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-slate-400 hover:text-white hover:translate-x-1 transition-all flex items-center text-sm font-medium group"
                                >
                                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-orange-500 mr-2 transition-colors" />
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-slate-400 hover:text-white hover:translate-x-1 transition-all flex items-center text-sm font-medium group"
                                >
                                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-orange-500 mr-2 transition-colors" />
                                    About Us
                                </Link>
                            </li>
                        </ul>

                        {/* Director Info Card */}
                        <div className="mt-8 p-5 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-base font-black text-white shadow-lg">
                                    SK
                                </div>
                                <div>
                                    <p className="text-white text-sm font-bold">{BUSINESS_DATA.director}</p>
                                    <p className="text-slate-400 text-[10px] uppercase tracking-wider">Managing Director</p>
                                </div>
                            </div>
                            <p className="text-slate-400 text-xs leading-relaxed">
                                &quot;We&apos;re committed to delivering excellence in every project.&quot;
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800/50 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-wider">
                    <div className="flex flex-col sm:flex-row items-center gap-4 text-slate-500">
                        <p className="text-center sm:text-left">
                            {new Date().getFullYear()} Magic Brush Ltd. All rights reserved.
                        </p>
                        <span className="hidden sm:block text-slate-700">|</span>
                        <span className="text-slate-400">
                            Designed and Developed with ❤️
                        </span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-slate-500">
                        <Link href="/legal/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
