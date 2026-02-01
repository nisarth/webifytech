"use client";

import { motion } from "framer-motion";

export default function TestimonialsHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-40 pb-20 bg-[var(--surface)]">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_100%,var(--accent)_0%,transparent_40%)] opacity-[0.03] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[var(--accent)] font-body font-bold uppercase tracking-widest mb-6 underline underline-offset-8 decoration-2">Wall of Love</p>
            <h1 className="type-scale-h1 text-[var(--primary)] mb-8">
              Stories of <span className="italic font-light">Growth</span> and Success
            </h1>
            <p className="text-xl md:text-2xl text-[var(--muted)] font-body leading-relaxed max-w-2xl">
              We don't just deliver projects; we deliver results. Read the stories of 
              the businesses we've helped scale through strategic design and 
              performance-first development.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


