'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES, getServiceIcon } from '@/constants';

const Services = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-white text-slate-900 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_bg.png"
            alt="Services Background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-slate-50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Our Capabilities</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-slate-900">Mastering Every Detail</h1>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
              From bespoke interiors to structural excellence, we deliver comprehensive renovation solutions tailored to your unique vision.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div className="p-3 bg-orange-500 text-white rounded-2xl shadow-lg">
                    {getServiceIcon(service.iconName)}
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-orange-500 transition-colors uppercase tracking-tight">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                  {service.fullDetails}
                </p>

                <div className="mt-auto space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {['Expertise', 'Quality', 'Warranty'].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-widest rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={{
                      pathname: '/contact',
                      query: { service: service.title }
                    }}
                    className="flex items-center justify-center w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:from-orange-600 hover:to-orange-700 transition-all active:scale-95 group/btn"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Solutions Section */}
        <section className="my-24 bg-white rounded-[4rem] p-12 lg:p-20 shadow-2xl shadow-slate-200/60 border border-slate-100 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Bespoke Projects</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">Need a custom renovation solution?</h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
                Magic Brush Ltd excels in solving complex restoration challenges. If your project requires a unique touch or specialized expertise beyond our standard services, our team is ready to deliver.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: CheckCircle2, text: "Commercial Refurbishment" },
                  { icon: CheckCircle2, text: "Structural Maintenance" },
                  { icon: CheckCircle2, text: "High-End Joinery" },
                  { icon: CheckCircle2, text: "Specialist Finishes" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-slate-700">
                    <item.icon className="w-5 h-5 text-orange-500" />
                    <span className="font-bold text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-10 lg:p-12 rounded-[3rem] text-white shadow-2xl shadow-orange-500/20">
              <h3 className="text-2xl font-black mb-10 pb-6 border-b border-white/20 uppercase tracking-widest">Our Project Pipeline</h3>
              <div className="space-y-12">
                {[
                  { step: "01", title: "Discovery", desc: "Consultation to align with your design vision." },
                  { step: "02", title: "Technical Plan", desc: "Precise assessment and transparent budgeting." },
                  { step: "03", title: "Site Delivery", desc: "Masterful execution and final quality audit." },
                ].map((item) => (
                  <div key={item.step} className="flex space-x-6">
                    <span className="text-white font-black text-3xl leading-none">{item.step}</span>
                    <div>
                      <h4 className="font-black text-lg mb-2 uppercase tracking-tight">{item.title}</h4>
                      <p className="text-orange-100 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
