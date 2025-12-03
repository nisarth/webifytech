"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "10 Web Design Trends for 2024",
    excerpt: "Discover the latest web design trends that will shape the digital landscape this year.",
    date: "March 15, 2024",
    category: "Design",
    image: "bg-gradient-to-br from-blue-500 to-cyan-500",
  },
  {
    title: "E-commerce Conversion Optimization Guide",
    excerpt: "Learn proven strategies to increase your online store's conversion rate and boost sales.",
    date: "March 10, 2024",
    category: "E-commerce",
    image: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
  {
    title: "SEO Best Practices for 2024",
    excerpt: "Stay ahead with the latest SEO techniques and ranking factors that matter most.",
    date: "March 5, 2024",
    category: "SEO",
    image: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
  {
    title: "Building Scalable Web Applications",
    excerpt: "Architecture patterns and best practices for building web apps that scale.",
    date: "February 28, 2024",
    category: "Development",
    image: "bg-gradient-to-br from-orange-500 to-red-500",
  },
  {
    title: "Mobile-First Design Principles",
    excerpt: "Why mobile-first design is essential and how to implement it effectively.",
    date: "February 20, 2024",
    category: "Design",
    image: "bg-gradient-to-br from-indigo-500 to-purple-500",
  },
  {
    title: "Digital Marketing Strategies That Work",
    excerpt: "Proven digital marketing strategies to grow your online presence and reach.",
    date: "February 15, 2024",
    category: "Marketing",
    image: "bg-gradient-to-br from-teal-500 to-cyan-500",
  },
];

export default function BlogGrid() {
  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest <span className="text-primary-400">Articles</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Insights and tips to help you succeed online
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass-dark rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className={`h-48 ${post.image} relative`}>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 glass-dark rounded-full text-xs text-white font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-white/60 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-white/60 mb-4">{post.excerpt}</p>
                <Link
                  href="#"
                  className="text-primary-400 hover:text-primary-300 font-medium flex items-center space-x-2 group"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

