"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Users, Target } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Vercel-Level Performance",
    description: "Every site we build is optimized for Core Web Vitals, ensuring near-instant load times and superior SEO rankings.",
  },
  {
    icon: Shield,
    title: "Security Foundations",
    description: "We implement enterprise-grade security protocols and secure payment gateways to protect your business and your customers.",
  },
  {
    icon: Users,
    title: "Client-Centric Process",
    description: "You're never just a ticket number. We maintain 24/7 communication and a 98% client retention rate since our founding.",
  },
  {
    icon: Target,
    title: "Conversion Focused",
    description: "We don't just build websites; we build revenue machines. Every pixel is placed with your specific ROI goals in mind.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-[var(--primary)] text-[var(--surface)] overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[var(--accent)] font-body font-bold uppercase tracking-widest mb-4">Why WebifyTech</p>
              <h2 className="type-scale-h2 mb-8">
                The Expertise of a <span className="italic font-light">Global Elite</span> Agency, Personalized for You.
              </h2>
              <p className="text-xl text-[var(--surface)]/60 mb-12 font-body leading-relaxed">
                We've abandoned the "one-size-fits-all" template model. Instead, we craft bespoke digital 
                ecosystems that solve real business problems and create lasting competitive advantages.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[var(--accent)] group-hover:text-[var(--primary)] transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    <h4 className="font-display text-lg font-bold mb-3">{reason.title}</h4>
                    <p className="text-[var(--surface)]/50 text-sm leading-relaxed">{reason.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square"
            >
               {/* Decorative Graphic Element */}
               <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 to-transparent rounded-full blur-[100px] opacity-20 animate-pulse" />
               <div className="w-full h-full border border-white/10 rounded-[60px] flex items-center justify-center relative backdrop-blur-3xl">
                  <div className="text-center p-12">
                     <p className="text-[8rem] md:text-[12rem] font-display font-black text-white/5 leading-none mb-4 select-none">WT</p>
                     <div className="absolute bottom-12 right-12 bg-[var(--accent)] p-8 rounded-3xl shadow-2xl rotate-3">
                        <p className="text-4xl font-display font-black text-[var(--primary)] mb-1">98%</p>
                        <p className="text-xs font-body font-bold text-[var(--primary)]/70 uppercase tracking-widest">Client Satisfaction</p>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
