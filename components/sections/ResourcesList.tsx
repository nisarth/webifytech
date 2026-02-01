"use client";

import { motion } from "framer-motion";
import { Download, FileText, Video, BookOpen, ArrowRight } from "lucide-react";

const resources = [
  {
    icon: FileText,
    title: "The 2024 Conversion Audit",
    description: "A 50-point checklist to audit your landing pages for maximum ROI.",
    type: "PDF Blueprint",
    color: "bg-blue-50/50",
  },
  {
    icon: Video,
    title: "Scaling with Vercel & Next.js",
    description: "A technical walkthrough on optimizing performance for enterprise apps.",
    type: "Masterclass",
    color: "bg-amber-50/50",
  },
  {
    icon: BookOpen,
    title: "Semantic SEO Handbook",
    description: "Learn how to build topical authority and dominate the SERPs.",
    type: "E-Book",
    color: "bg-emerald-50/50",
  },
  {
    icon: Download,
    title: "Design System Kit",
    description: "Our internal Figma template for rapidly building accessible interfaces.",
    type: "Figma File",
    color: "bg-rose-50/50",
  },
];

export default function ResourcesList() {
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
          <p className="text-[var(--accent)] font-body font-bold uppercase tracking-widest mb-4">Downloads</p>
          <h2 className="type-scale-h2 text-[var(--primary)]">
            Premium <span className="italic font-light">Growth Assets</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-[40px] p-10 border border-[var(--primary)]/5 hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center"
              >
                <div className={`w-20 h-20 rounded-3xl ${resource.color} flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500`}>
                  <Icon size={32} className="text-[var(--primary)]" />
                </div>
                
                <span className="text-[10px] text-[var(--accent)] font-body font-bold uppercase tracking-widest mb-4">
                  {resource.type}
                </span>
                
                <h3 className="text-xl font-display font-bold text-[var(--primary)] mb-6">
                  {resource.title}
                </h3>
                
                <p className="text-[var(--muted)] font-body text-sm mb-10 leading-relaxed flex-1">
                  {resource.description}
                </p>
                
                <button className="inline-flex items-center gap-3 font-display font-bold text-[10px] uppercase tracking-[0.2em] text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors">
                  Access Now
                  <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


