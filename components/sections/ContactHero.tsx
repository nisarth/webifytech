"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-40 pb-20 bg-[var(--surface)]">
      <div className="absolute top-10 right-10 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[var(--accent)] font-body font-bold uppercase tracking-widest mb-6 underline underline-offset-8 decoration-2">Next Steps</p>
            <h1 className="type-scale-h1 text-[var(--primary)] mb-8">
              Ready to <span className="italic font-light">Scale</span>?
            </h1>
            <p className="text-xl md:text-2xl text-[var(--muted)] font-body leading-relaxed max-w-2xl">
              Your digital transformation starts with a single conversation. Whether 
              you have a specific project in mind or just need strategic advice, 
              our team is here to help.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


