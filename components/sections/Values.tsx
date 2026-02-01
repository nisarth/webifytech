"use client";

import { motion } from "framer-motion";
import { Hammer, BarChart3, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Hammer,
    title: "Human-Crafted",
    description: "We believe in the power of human intuition. No cookie-cutter templates—every design is tailored to your unique brand DNA.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven",
    description: "Creativity without data is just art. We use rigorous analytics and testing to ensure every design choice drives performance.",
  },
  {
    icon: TrendingUp,
    title: "Growth-Obsessed",
    description: "Your ROI is our North Star. We measure our success by the tangible growth and revenue we generate for your business.",
  },
];

export default function Values() {
  return (
    <section className="section-padding bg-[var(--surface)]">
      <div className="container mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-20"
        >
          <p className="text-[var(--accent)] font-body font-bold uppercase tracking-widest mb-4">Our DNA</p>
          <h2 className="type-scale-h2 text-[var(--primary)]">
            Core Values That <span className="italic font-light">Define Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 rounded-3xl bg-[var(--primary)]/5 flex items-center justify-center mx-auto mb-8 group-hover:bg-[var(--primary)] group-hover:text-[var(--accent)] transition-all duration-500">
                  <Icon size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold text-[var(--primary)] mb-4">{value.title}</h3>
                <p className="text-[var(--muted)] font-body leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


