"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { useState } from "react";

const categories = ["All", "E-Commerce", "Web Apps", "SaaS", "Branding"];

const projects = [
  {
    title: "EcoSmart E-Commerce Platform",
    category: "E-Commerce",
    result: "240% Revenue Increase",
    description: "A complete rebuild focused on Core Web Vitals and conversion optimization.",
    image: "bg-stone-200",
  },
  {
    title: "Apex Fintech Dashboard",
    category: "Web Apps",
    result: "98% User Satisfaction",
    description: "Complex data visualization simplified for retail investors.",
    image: "bg-slate-200",
  },
  {
    title: "Nova Brand Identity",
    category: "Branding",
    result: "Global Recognition",
    description: "Rebranding a tech giant for the modern AI-driven landscape.",
    image: "bg-zinc-200",
  },
  {
    title: "CloudScale SaaS Platform",
    category: "SaaS",
    result: "Near-Zero Load Times",
    description: "Scalable infrastructure for the next generation of cloud computing.",
    image: "bg-neutral-200",
  },
  {
    title: "Luxe Fashion Store",
    category: "E-Commerce",
    result: "3x Conversion Rate",
    description: "Premium shopping experience for a high-end fashion brand.",
    image: "bg-stone-300",
  },
  {
    title: "HealthCore Patient Portal",
    category: "Web Apps",
    result: "Secure & Compliant",
    description: "HIPAA-compliant patient management system for modern healthcare.",
    image: "bg-slate-300",
  },
];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="section-padding bg-[var(--surface)]">
      <div className="container mx-auto">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full font-display font-bold text-sm uppercase tracking-widest transition-all duration-300 ${
                activeCategory === cat 
                ? "bg-[var(--primary)] text-[var(--accent)]" 
                : "bg-[var(--primary)]/5 text-[var(--primary)] hover:bg-[var(--primary)]/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-[40px] border border-[var(--primary)]/5 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className={`aspect-[4/3] ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="p-10">
                <div className="flex items-center gap-2 mb-4 bg-[var(--accent)]/10 text-[var(--primary)] px-3 py-1 rounded-full w-fit">
                   <TrendingUp size={14} />
                   <span className="text-[8px] font-display font-black uppercase tracking-widest">{project.result}</span>
                </div>
                
                <p className="text-[10px] font-body font-bold text-[var(--accent)] uppercase tracking-[0.2em] mb-3">
                  {project.category}
                </p>
                
                <h3 className="text-2xl font-display font-bold text-[var(--primary)] mb-4">{project.title}</h3>
                <p className="text-[var(--muted)] font-body text-sm mb-8 leading-relaxed line-clamp-2">{project.description}</p>
                
                <div className="inline-flex items-center gap-3 font-display font-bold text-xs uppercase tracking-widest text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors">
                  View Study
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


