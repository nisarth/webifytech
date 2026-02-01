"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Projects Delivered", value: "150+" },
  { label: "Client Retention", value: "98%" },
  { label: "Revenue Generated", value: "$2.4M+" },
  { label: "Established", value: "2024" },
];

export default function TrustBar() {
  return (
    <div className="bg-[var(--primary)] py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-display font-black text-[var(--accent)] mb-2">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm font-body font-medium uppercase tracking-widest text-[var(--surface)]/50">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
