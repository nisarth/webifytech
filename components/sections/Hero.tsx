"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden pt-32 pb-20">
      {/* Background Mesh Gradient */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-[radial-gradient(circle_at_70%_30%,var(--accent)_0%,transparent_50%)] opacity-[0.05] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[radial-gradient(circle_at_30%_70%,var(--primary)_0%,transparent_50%)] opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--primary)]/10 bg-[var(--surface)] shadow-sm mb-8">
                <Sparkles size={16} className="text-[var(--accent)]" />
                <span className="text-sm font-body font-semibold tracking-wide uppercase">Premier Digital Agency</span>
              </div>
              
              <h1 className="type-scale-h1 mb-8 text-[var(--primary)] tracking-tight">
                Transform Your <span className="italic font-light">Digital Presence</span> Into <span className="text-[var(--accent)]">Real Revenue</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[var(--muted)] mb-12 max-w-2xl font-body">
                We build high-performance websites and e-commerce platforms that drive real growth and measurable results for your business.
              </p>

              <div className="flex flex-wrap gap-6 items-center">
                <Link href="/contact" className="btn-primary group">
                  Start Your Project
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/portfolio" className="btn-secondary group">
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-square"
            >
              {/* Abstract Glass Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent backdrop-blur-3xl rounded-[40px] border border-white/20 shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-[var(--primary)] mix-blend-overlay opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center p-12">
                   {/* Interior content/graphic would go here */}
                   <div className="w-full h-full border border-dashed border-[var(--primary)]/20 rounded-3xl flex items-center justify-center relative">
                      <motion.div 
                        animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="w-32 h-32 bg-[var(--accent)] rounded-full blur-2xl opacity-20 absolute top-10 right-10" 
                      />
                      <div className="text-center z-10">
                        <div className="w-20 h-20 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                          <Play fill="var(--accent)" className="text-[var(--accent)] ml-1" />
                        </div>
                        <p className="font-display font-bold text-lg tracking-tight">Watch Our Story</p>
                      </div>
                   </div>
                </div>
              </div>
              
              {/* Floating Stat Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-10 -left-10 bg-[var(--surface)] p-6 rounded-2xl shadow-xl border border-[var(--primary)]/5 max-w-[200px]"
              >
                <p className="text-3xl font-display font-black text-[var(--accent)] mb-1">340%</p>
                <p className="text-sm font-body font-medium text-[var(--muted)] leading-tight">Average ROI generated for our e-commerce clients</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

