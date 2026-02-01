"use client";

import { motion } from "framer-motion";

export default function PortfolioHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-40 pb-20 bg-[var(--surface)]">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,var(--accent)_0%,transparent_40%)] opacity-[0.03] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[var(--accent)] font-body font-bold uppercase tracking-widest mb-6 underline underline-offset-8 decoration-2">Case Studies</p>
            <h1 className="type-scale-h1 text-[var(--primary)] mb-8">
              Work That Drives <span className="italic font-light">Revenue</span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--muted)] font-body leading-relaxed max-w-2xl">
              We don't just build websites; we build business assets. Every project in our 
              portfolio is a testament to our commitment to performance, design, and 
              measurable growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


