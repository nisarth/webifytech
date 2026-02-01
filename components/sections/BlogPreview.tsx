"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog";

export default function BlogPreview() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_30%,var(--primary)_0%,transparent_50%)] opacity-[0.02] pointer-events-none" />

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-[var(--accent)] font-body font-bold uppercase tracking-widest mb-4">Latest Insights</p>
            <h2 className="type-scale-h2 text-[var(--primary)]">
              Digital Strategy & <span className="italic font-light">Innovation</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/resources" className="btn-secondary group">
              View All Articles
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col h-full rounded-[30px] border border-[var(--primary)]/5 overflow-hidden hover:shadow-xl transition-all duration-500"
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
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[8px] text-[var(--primary)] font-bold uppercase tracking-widest shadow-sm">
                    {post.category}
                  </span>
                </div>
              </Link>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-[10px] text-[var(--muted)] font-body font-bold uppercase tracking-widest mb-4">
                  <Clock size={10} />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-[var(--primary)] mb-4 group-hover:text-[var(--accent)] transition-colors leading-tight">
                  <Link href={`/resources/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-[var(--muted)] font-body text-xs mb-8 leading-relaxed flex-1">
                   {post.excerpt}
                </p>
                <Link
                  href={`/resources/${post.slug}`}
                  className="inline-flex items-center gap-2 font-display font-bold text-[9px] uppercase tracking-widest text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors"
                >
                  Read More
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
