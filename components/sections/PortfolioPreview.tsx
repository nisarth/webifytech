"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "EcoSmart E-Commerce Platform",
    category: "Development & SEO",
    result: "240% Revenue Increase",
    description: "A complete rebuild focused on Core Web Vitals and conversion optimization.",
    image: "bg-stone-200",
    large: true,
  },
  {
    title: "Apex Fintech Dashboard",
    category: "UI/UX Design",
    result: "98% User Satisfaction",
    description: "Complex data visualization simplified for retail investors.",
    image: "bg-slate-200",
    large: false,
  },
  {
    title: "Nova Brand Identity",
    category: "Branding",
    result: "Global Recognition",
    description: "Rebranding a tech giant for the modern AI-driven landscape.",
    image: "bg-zinc-200",
    large: false,
  },
];

export default function PortfolioPreview({ title }: { title?: string }) {
  return (
    <section className="section-padding bg-[var(--surface)]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-[var(--accent)] font-body font-bold uppercase tracking-widest mb-4">Case Studies</p>
            <h2 className="type-scale-h2 text-[var(--primary)]">
              {title ? title : (
                <>Work That Speaks for <span className="italic font-light">Itself</span></>
              )}
            </h2>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/portfolio" className="btn-secondary group">
              View All Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border border-[var(--primary)]/5 ${
                project.large ? "lg:col-span-8 aspect-[16/10]" : "lg:col-span-4 aspect-square lg:aspect-auto"
              } bg-white`}
            >
              {/* Image Placeholder with Gradient */}
              <div className={`absolute inset-0 ${project.image} transition-transform duration-700 group-hover:scale-105`}>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/90 via-[var(--primary)]/20 to-transparent opacity-80" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-[var(--surface)]">
                <div className="flex items-center gap-2 mb-4 bg-[var(--accent)] text-[var(--primary)] px-3 py-1 rounded-full w-fit">
                   <TrendingUp size={14} />
                   <span className="text-xs font-display font-black uppercase tracking-wider">{project.result}</span>
                </div>
                
                <p className="text-sm font-body font-medium text-[var(--accent)] uppercase tracking-widest mb-2">
                  {project.category}
                </p>
                
                <h3 className={`${project.large ? "text-3xl md:text-4xl" : "text-2xl"} font-display font-bold mb-4`}>
                  {project.title}
                </h3>
                
                <p className={`text-[var(--surface)]/70 font-body mb-8 max-w-md ${project.large ? "block" : "hidden md:block"}`}>
                  {project.description}
                </p>

                <Link
                  href="/portfolio"
                  className="flex items-center gap-3 text-sm font-display font-bold uppercase tracking-widest hover:text-[var(--accent)] transition-colors group/link"
                >
                  Explore Study
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover/link:bg-[var(--accent)] group-hover/link:border-transparent transition-all">
                    <ArrowRight size={14} className="group-hover/link:text-[var(--primary)]" />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


