"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-40 pb-20 bg-[var(--surface)]">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,var(--accent)_0%,transparent_40%)] opacity-[0.03] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[var(--accent)] font-body font-bold uppercase tracking-widest mb-6 underline underline-offset-8 decoration-2">Expertise</p>
            <h1 className="type-scale-h1 text-[var(--primary)] mb-8">
              Solutions That <span className="italic font-light">Scale</span> as You Do
            </h1>
            <p className="text-xl md:text-2xl text-[var(--muted)] font-body leading-relaxed max-w-2xl">
              We don't just build websites; we build scalable digital infrastructure designed to grow 
              alongside your business. From initial MVP to enterprise-level platforms, we deliver results 
              you can measure.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


