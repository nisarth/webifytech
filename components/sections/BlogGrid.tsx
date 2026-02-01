"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import { blogPosts } from "@/data/blog";

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
          <Link href="/resources" className="inline-flex items-center gap-3 font-display font-bold text-xs uppercase tracking-widest text-[var(--primary)] hover:text-[var(--accent)] transition-colors mb-4">
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
              <Link href={`/resources/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                {post.image.includes("/") ? (
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                ) : (
                  <div className={`absolute inset-0 ${post.image} transition-transform duration-700 group-hover:scale-110`} />
                )}
                <div className="absolute top-6 left-6 z-10">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-[10px] text-[var(--primary)] font-bold uppercase tracking-widest shadow-sm">
                    {post.category}
                  </span>
                </div>
              </Link>
              <div className="p-10 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-[10px] text-[var(--muted)] font-body font-bold uppercase tracking-widest mb-6">
                  <Clock size={12} />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-[var(--primary)] mb-6 group-hover:text-[var(--accent)] transition-colors leading-tight">
                  <Link href={`/resources/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-[var(--muted)] font-body text-sm mb-10 leading-relaxed flex-1">
                   {post.excerpt}
                </p>
                <Link
                  href={`/resources/${post.slug}`}
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


