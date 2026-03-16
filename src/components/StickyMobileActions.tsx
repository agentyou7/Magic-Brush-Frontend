
'use client';

import React, { useState } from 'react';
import { Phone, ArrowRight, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS_DATA } from '@/constants';

const StickyMobileActions = () => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        setShowForm(false);
        setFormData({ name: '', phone: '', email: '', message: '' });
    };

    return (
        <>
            {/* Mobile Sticky Action Bar */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 100, damping: 20 }}
                className="xl:hidden fixed bottom-4 sm:bottom-6 left-3 right-3 sm:left-4 sm:right-4 z-[90] safe-bottom"
            >
                <div className="flex items-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] rounded-[2rem] p-2.5 overflow-hidden">
                    <div className="flex items-center space-x-2 pl-1">
                        <a
                            href={`https://wa.me/${BUSINESS_DATA.phone}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="min-w-[52px] min-h-[52px] flex items-center justify-center bg-[#25D366] text-white rounded-full active:scale-90 transition-all touch-manipulation shadow-lg shadow-green-500/30"
                            aria-label="Contact via WhatsApp"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                        </a>
                        <a
                            href={`tel:${BUSINESS_DATA.phone}`}
                            className="min-w-[52px] min-h-[52px] flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full active:scale-90 transition-all touch-manipulation border border-white/20"
                            aria-label="Call now"
                        >
                            <Phone className="w-5 h-5" />
                        </a>
                    </div>

                    <button
                        onClick={() => setShowForm(true)}
                        className="flex-grow ml-3 min-h-[52px] bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white flex items-center justify-center space-x-2 px-5 rounded-full font-black text-[10px] uppercase tracking-[0.2em] active:scale-[0.98] transition-all touch-manipulation shadow-lg shadow-orange-500/30"
                    >
                        <span className="whitespace-nowrap">Get Quote</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </motion.div>

            {/* Desktop Floating Action Buttons */}
            <div className="hidden xl:block">
                {/* WhatsApp Button */}
                <motion.a
                    href={`https://wa.me/${BUSINESS_DATA.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                    className="fixed bottom-6 right-6 z-[90] w-16 h-16 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 transition-all duration-300 hover:scale-110 active:scale-95 group"
                    aria-label="Chat on WhatsApp"
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 group-hover:scale-110 transition-transform">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>

                    {/* Tooltip */}
                    <div className="absolute right-full mr-4 bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
                        Chat on WhatsApp
                        <div className="absolute top-1/2 -translate-y-1/2 left-full w-0 h-0 border-8 border-transparent border-l-slate-900"></div>
                    </div>
                </motion.a>

                {/* Phone Button */}
                <motion.a
                    href={`tel:${BUSINESS_DATA.phone}`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.3, type: "spring", stiffness: 200 }}
                    className="fixed bottom-28 right-6 z-[90] w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60 transition-all duration-300 hover:scale-110 active:scale-95 group"
                    aria-label="Call us"
                >
                    <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />

                    {/* Tooltip */}
                    <div className="absolute right-full mr-4 bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
                        {BUSINESS_DATA.phone}
                        <div className="absolute top-1/2 -translate-y-1/2 left-full w-0 h-0 border-8 border-transparent border-l-slate-900"></div>
                    </div>
                </motion.a>

                {/* Quick Contact Form Button */}
                <motion.button
                    onClick={() => setShowForm(true)}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                    className="fixed bottom-[13.5rem] right-6 z-[90] w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 transition-all duration-300 hover:scale-110 active:scale-95 group"
                    aria-label="Quick contact form"
                >
                    <Send className="w-6 h-6 group-hover:scale-110 transition-transform" />

                    {/* Tooltip */}
                    <div className="absolute right-full mr-4 bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
                        Quick Message
                        <div className="absolute top-1/2 -translate-y-1/2 left-full w-0 h-0 border-8 border-transparent border-l-slate-900"></div>
                    </div>
                </motion.button>
            </div>

            {/* Quick Contact Form Modal */}
            <AnimatePresence>
                {showForm && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
                            onClick={() => setShowForm(false)}
                        />

                        {/* Form Modal */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md z-[9999]"
                        >
                            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                                {/* Header */}
                                <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-5 flex items-center justify-between">
                                    <div>
                                        <h3 className="text-white text-xl font-black">Quick Contact</h3>
                                        <p className="text-orange-100 text-sm mt-1">We&apos;ll get back to you ASAP</p>
                                    </div>
                                    <button
                                        onClick={() => setShowForm(false)}
                                        className="w-10 h-10 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                                    <div>
                                        <label className="block text-slate-700 text-sm font-bold mb-2">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-slate-700 text-sm font-bold mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                                            placeholder="07424292487"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-slate-700 text-sm font-bold mb-2">
                                            Email (Optional)
                                        </label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-slate-700 text-sm font-bold mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            required
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            rows={3}
                                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors resize-none"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-xl font-black text-sm uppercase tracking-wider transition-all shadow-lg shadow-orange-500/30 active:scale-[0.98] flex items-center justify-center gap-2"
                                    >
                                        <Send className="w-4 h-4" />
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default StickyMobileActions;
