"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Target,
  Heart,
  Phone,
  ArrowRight,
  CheckCircle,
  Shield,
  Clock,
} from "lucide-react";
import { BUSINESS_DATA } from "@/constants";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-orange-50 via-amber-50 to-white text-slate-900 overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_bg.png"
            alt="Background"
            className="w-full h-full object-cover opacity-15 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-6 px-5 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full backdrop-blur-md"
            >
              <span className="text-orange-500 text-[10px] font-black uppercase tracking-[0.3em]">
                Our Legacy
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-8xl font-black mb-8 tracking-tighter leading-tight text-slate-900"
            >
              Building Excellence <br />
              Since <span className="text-orange-500">2014</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium max-w-2xl"
            >
              Magic Brush Ltd is a family-owned enterprise committed to the
              highest standards of architectural renovation and interior
              transformation across the United Kingdom.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Overlay Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-6 md:py-10">
          {[
            {
              label: "Years Experience",
              value: "15+",
              color: "from-orange-500 to-orange-600",
            },
            {
              label: "Projects Completed",
              value: "500+",
              color: "from-slate-900 to-slate-800",
            },
            {
              label: "Client Satisfaction",
              value: "100%",
              color: "from-blue-600 to-blue-700",
            },
            {
              label: "Expert Team",
              value: "20+",
              color: "from-green-600 to-green-700",
            },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-gradient-to-br ${stat.color} p-8 rounded-[2.5rem] text-white shadow-2xl transition-transform hover:-translate-y-2`}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-black mb-2 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-xs md:text-[10px] font-black uppercase tracking-widest opacity-80">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-24 sm:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs mb-4 block">
                Proven Heritage
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
                Crafting Spaces, <br />
                Defining Lifestyles
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                <p>
                  Founded in 2014, Magic Brush Ltd has evolved from a specialist
                  painting service into a multi-disciplinary construction
                  powerhouse. Our journey is defined by a singular focus:
                  surgical precision in every brushstroke and structural
                  alteration.
                </p>
                <p>
                  Under the leadership of{" "}
                  <span className="text-slate-900 font-bold">
                    {BUSINESS_DATA.director}
                  </span>
                  , we have successfully managed complex residential and
                  commercial refurbishments, always prioritizing the marriage of
                  aesthetics and durability.
                </p>
                <p className="p-8 bg-slate-50 border-l-4 border-orange-500 rounded-r-3xl italic">
                  We don&apos;t just renovate buildings; we curate environments where
                  families thrive and businesses excel.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px]" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200">
                <img
                  src="/images/about_img.png"
                  alt="Our Work"
                  className="w-full h-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-white text-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs mb-4 block">
              The Magic Brush Way
            </span>
            <h2 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight text-slate-900">
              Our Core Principles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                desc: "Unwavering commitment to the highest quality standards in the industry.",
                color: "from-orange-500 to-orange-600",
              },
              {
                icon: Shield,
                title: "Integrity",
                desc: "Transparent communication and ethical practices in every client interaction.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Heart,
                title: "Customer First",
                desc: "Your vision is our blueprint. We listen, adapt, and deliver beyond expectations.",
                color: "from-green-500 to-green-600",
              },
              {
                icon: Target,
                title: "Innovation",
                desc: "Leveraging modern techniques combined with traditional artisan values.",
                color: "from-purple-500 to-purple-600",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-slate-200 p-10 rounded-[2.5rem] shadow-xl group hover:shadow-2xl hover:border-orange-500/30 transition-all"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-slate-900">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[4rem] p-12 lg:p-20 shadow-2xl shadow-slate-200/50 border border-slate-100">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                Why Choose Magic Brush?
              </h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
                We combine a decade of experience with a passion for
                architectural perfection.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: CheckCircle,
                  title: "Fully Licensed & Insured",
                  desc: "Complete peace of mind through comprehensive regulatory compliance.",
                },
                {
                  icon: Users,
                  title: "Specialist Workmanship",
                  desc: "Our team comprises elite tradespeople with master-level certifications.",
                },
                {
                  icon: Clock,
                  title: "Predictable Timelines",
                  desc: "We utilize advanced project management to ensure on-time delivery.",
                },
                {
                  icon: Award,
                  title: "Aesthetic Dominance",
                  desc: "We stay ahead of design trends to offer contemporary, premium results.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-6 p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-orange-500/30 transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors">
                    <item.icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/service_renovation.png"
            alt="CTA Background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-600/50 via-transparent to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-8 tracking-tighter uppercase">
              Your Vision, <br />
              Our Masterpiece
            </h2>
            <p className="text-orange-100 text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Let&apos;s collaborate on your next property transformation. Experience
              the magic of professional renovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-orange-600 px-10 py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest transition-all shadow-2xl hover:scale-105 active:scale-95"
              >
                Start Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${BUSINESS_DATA.phone}`}
                className="inline-flex items-center justify-center gap-3 bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white/30 text-white px-10 py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS_DATA.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
