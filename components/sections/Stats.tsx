"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "150+", label: "Premium Projects" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "340%", label: "Average Growth ROI" },
  { value: "24/7", label: "Strategic Support" },
];

export default function Stats() {
  return (
    <section className="py-24 bg-[var(--primary)] text-[var(--surface)] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-6xl font-display font-black text-[var(--accent)] mb-4">
                {stat.value}
              </p>
              <div className="h-0.5 w-12 bg-[var(--accent)]/30 mx-auto mb-6" />
              <p className="text-xs md:text-sm font-body font-bold uppercase tracking-[0.2em] text-[var(--surface)]/50">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


