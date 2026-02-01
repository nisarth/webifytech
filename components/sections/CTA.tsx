"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background with subtle pattern/glow */}
      <div className="absolute inset-0 bg-[var(--primary)]" />
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_50%_-20%,var(--accent)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 mb-8 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <Sparkles size={16} className="text-[var(--accent)]" />
            <span className="text-[var(--surface)] font-body text-xs font-bold uppercase tracking-widest">Growth Awaits</span>
          </div>

          <h2 className="type-scale-h1 text-[var(--surface)] mb-8">
            Ready to See <span className="text-[var(--accent)] italic font-light">Real Results?</span>
          </h2>
          
          <p className="text-xl text-[var(--surface)]/60 mb-12 font-body max-w-2xl mx-auto leading-relaxed">
            Stop competing for attention and start commanding it. Let's build a digital 
            experience that converts visitors into loyal brand advocates.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="btn-primary py-5 px-10 text-lg group">
              Start Your Project
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services" className="text-[var(--surface)] hover:text-[var(--accent)] font-display font-bold uppercase tracking-widest transition-colors">
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


