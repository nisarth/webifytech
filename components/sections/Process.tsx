"use client";

import { motion } from "framer-motion";
import { Search, Palette, Code, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Deep-dive into your business goals, target audience, and competition to build a solid strategic foundation.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Creating human-crafted, high-conversion interfaces that reflect your brand's unique identity and values.",
  },
  {
    icon: Code,
    title: "Build",
    description: "Meticulous, performance-optimized development using the latest stack for speed, security, and scalability.",
  },
  {
    icon: TrendingUp,
    title: "Optimize",
    description: "Continuous testing, data analysis, and SEO refinement to ensure your digital asset never stops growing.",
  },
];

export default function Process() {
  return (
    <section className="section-padding bg-[var(--surface)] overflow-hidden">
      <div className="container mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mb-20"
        >
          <p className="text-[var(--accent)] font-body font-bold uppercase tracking-widest mb-4">Our Methodology</p>
          <h2 className="type-scale-h2 text-[var(--primary)] max-w-2xl">
            A Proven Path to <span className="italic font-light">Digital Dominance</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-[50px] left-0 w-full h-0.5 bg-[var(--primary)]/5" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="w-24 h-24 rounded-3xl bg-white border border-[var(--primary)]/5 shadow-sm mb-10 flex items-center justify-center relative z-10 group-hover:bg-[var(--primary)] group-hover:text-[var(--surface)] transition-all duration-500">
                    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-xl bg-[var(--accent)] text-[var(--primary)] flex items-center justify-center font-display font-black text-xs">
                      0{index + 1}
                    </div>
                    <Icon size={32} className="group-hover:text-[var(--accent)] transition-colors" />
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold text-[var(--primary)] mb-4">{step.title}</h3>
                  <p className="text-[var(--muted)] font-body leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


