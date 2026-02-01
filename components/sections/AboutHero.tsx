"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-40 pb-20 bg-[var(--surface)]">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,var(--accent)_0%,transparent_40%)] opacity-[0.03] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[var(--accent)] font-body font-bold uppercase tracking-widest mb-6 underline underline-offset-8 decoration-2">Since 2024</p>
            <h1 className="type-scale-h1 text-[var(--primary)] mb-8">
              We Build Digital Experiences That <span className="italic font-light">Perform.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--muted)] font-body leading-relaxed max-w-2xl">
              WebifyTech was founded with a singular mission: to bridge the gap between technical complexity 
              and business growth. Our core philosophy is built on human-crafted design and performance-first 
              development, ensuring every line of code serves a purpose.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


