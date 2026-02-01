"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

const blogPosts = [
  {
    title: "The Physics of High-Converting Landing Pages",
    excerpt: "Why most businesses fail at conversion and how to use behavioral psychology to double your leads.",
    date: "March 15, 2024",
    category: "Conversion",
    image: "bg-stone-200",
  },
  {
    id: "ecommerce-seo",
    title: "Mastering Technical SEO for E-Commerce in 2024",
    excerpt: "A deep dive into site structure, schema markup, and Core Web Vitals for scaling online stores.",
    date: "March 10, 2024",
    category: "SEO",
    image: "bg-slate-200",
  },
  {
    title: "Why Headless Commerce is the Future of Sales",
    excerpt: "Exploring the flexibility, speed, and security advantages of decoupled e-commerce architectures.",
    date: "March 5, 2024",
    category: "Development",
    image: "bg-zinc-200",
  },
  {
    title: "AI in Design: Enhancing the Creative Workflow",
    excerpt: "How we use generative AI to streamline design systems without losing the human touch.",
    date: "February 28, 2024",
    category: "Design",
    image: "bg-neutral-200",
  },
  {
    title: "Scaling from $1M to $10M: Digital Infrastructure",
    excerpt: "Ensuring your website doesn't crash during your most important growth milestones.",
    date: "February 20, 2024",
    category: "Growth",
    image: "bg-stone-300",
  },
  {
    title: "The Art of Semantic Site Architecture",
    excerpt: "How to build sites that search engines (and humans) can understand effortlessly.",
    date: "February 15, 2024",
    category: "SEO",
    image: "bg-slate-300",
  },
];

export default function BlogGrid() {
  return (
    <section className="section-padding bg-[var(--surface)]">
      <div className="container mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8"
        >
          <div>
            <p className="text-[var(--accent)] font-body font-bold uppercase tracking-widest mb-4">Insights</p>
            <h2 className="type-scale-h2 text-[var(--primary)] max-w-2xl">
              Knowledge to <span className="italic font-light">Fuel Your</span> Digital Strategy
            </h2>
          </div>
          <Link href="/resources/all" className="inline-flex items-center gap-3 font-display font-bold text-xs uppercase tracking-widest text-[var(--primary)] hover:text-[var(--accent)] transition-colors mb-4">
             Explore All Articles
             <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col h-full bg-white rounded-[40px] border border-[var(--primary)]/5 overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className={`aspect-[16/10] ${post.image} relative overflow-hidden`}>
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-[10px] text-[var(--primary)] font-bold uppercase tracking-widest shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-10 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-[10px] text-[var(--muted)] font-body font-bold uppercase tracking-widest mb-6">
                  <Clock size={12} />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-[var(--primary)] mb-6 group-hover:text-[var(--accent)] transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-[var(--muted)] font-body text-sm mb-10 leading-relaxed flex-1">
                   {post.excerpt}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-3 font-display font-bold text-[10px] uppercase tracking-[0.2em] text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors"
                >
                  Read Article
                  <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}


