'use client';

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SERVICES, BUSINESS_DATA, getServiceIcon } from '@/constants';
// Fix: Added ChevronRight to the lucide-react imports
import { ArrowLeft, Phone, Mail, ShieldCheck, Clock, Award, ChevronRight } from 'lucide-react';

const ServiceDetail = () => {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const { id } = useParams() as any;
  const service = SERVICES.find(s => s.id === id);
  const router = useRouter();

  useEffect(() => {
    if (!service) {
      router.replace('/services');
    }
  }, [service, router]);

  if (!service) {
    return null;
  }

  const benefits = [
    { title: "Bespoke Design", desc: "Custom solutions tailored to your specific architectural needs.", icon: <Award className="w-5 h-5" /> },
    { title: "Rapid Execution", desc: "We respect your time and stick to strict project schedules.", icon: <Clock className="w-5 h-5" /> },
    { title: "Premium Protection", desc: "Work covered by full public liability insurance.", icon: <ShieldCheck className="w-5 h-5" /> },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Service Hero */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Link
              href="/services"
              className="inline-flex items-center text-orange-500 font-black uppercase tracking-widest text-xs mb-8 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-none">
              {service.title}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl font-medium">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Left Column: Details */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex p-5 rounded-2xl bg-orange-500 text-white shadow-xl mb-10">
                  {getServiceIcon(service.iconName)}
                </div>
                <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">Project Excellence In Detail</h2>
                <div className="prose prose-lg text-slate-600 max-w-none space-y-6">
                  <p className="leading-relaxed">
                    {service.fullDetails}
                  </p>
                  <p className="leading-relaxed">
                    At Magic Brush Ltd, we approach every {service.title} project with a unique blend of traditional craftsmanship and modern technology. Our team, led by Sanjeev Kumar, ensures that every surface is treated with the highest respect and attention to detail.
                  </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-orange-200 transition-all">
                      <div className="text-orange-500 mb-4">
                        {benefit.icon}
                      </div>
                      <h4 className="font-bold text-slate-900 mb-2">{benefit.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column: CTA/Contact Box */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="sticky top-32"
              >
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-[3rem] p-10 text-white shadow-2xl shadow-orange-500/20">
                  <h3 className="text-2xl font-black mb-6 tracking-tight text-center">Request a Quote</h3>
                  <p className="text-orange-100 text-sm mb-10 text-center">
                    Discuss your project needs for <span className="text-white font-bold">{service.title}</span> today.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-orange-200 mb-1">Call Today</p>
                        <a href={`tel:${BUSINESS_DATA.phone}`} className="font-bold text-lg hover:text-orange-200 transition-colors">
                          {BUSINESS_DATA.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-orange-200 mb-1">Email Us</p>
                        <a href={`mailto:${BUSINESS_DATA.email}`} className="font-bold text-lg hover:text-orange-200 transition-colors">
                          {BUSINESS_DATA.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={{
                      pathname: '/contact',
                      query: { service: service.title }
                    }}
                    className="mt-12 w-full bg-white hover:bg-slate-50 text-orange-600 py-5 rounded-2xl font-black text-center block transition-all shadow-xl active:scale-95"
                  >
                    Start Free Consultation
                  </Link>

                  <div className="mt-10 pt-10 border-t border-white/20 flex items-center space-x-4">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop" alt="Director" className="w-12 h-12 rounded-full object-cover grayscale" />
                    <div>
                      <p className="text-sm font-bold text-white">Sanjeev Kumar</p>
                      <p className="text-[10px] text-orange-200 font-black uppercase tracking-widest leading-none">Director Oversight</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-900 mb-12 tracking-tight">Explore More Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {SERVICES.filter(s => s.id !== service.id).slice(0, 4).map((s) => (
              <Link
                key={s.id}
                href={`/services/${s.id}`}
                className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-orange-500 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform origin-left">
                    {getServiceIcon(s.iconName)}
                  </div>
                  <h4 className="font-black text-slate-900 group-hover:text-orange-500 transition-colors">{s.title}</h4>
                </div>
                <ChevronRight className="w-5 h-5 mt-4 text-slate-300 group-hover:text-orange-500 group-hover:translate-x-2 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
