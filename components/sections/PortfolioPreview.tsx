"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Luxury Fashion E-commerce",
    category: "E-commerce",
    description: "Premium online store with advanced filtering and checkout system",
    image: "bg-gradient-to-br from-pink-500 to-rose-500",
  },
  {
    title: "Tech Startup Landing",
    category: "Web Design",
    description: "Modern landing page with interactive animations",
    image: "bg-gradient-to-br from-blue-500 to-cyan-500",
  },
  {
    title: "Restaurant Booking Platform",
    category: "Web App",
    description: "Full-featured reservation system with real-time availability",
    image: "bg-gradient-to-br from-orange-500 to-amber-500",
  },
];

export default function PortfolioPreview() {
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
            Featured <span className="text-primary-400">Projects</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Showcasing our best work and client success stories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl glass-dark cursor-pointer"
            >
              <div className={`h-64 ${project.image} relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <ExternalLink className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm text-primary-400 font-medium">{project.category}</span>
                <h3 className="text-xl font-semibold text-white mt-2 mb-2">{project.title}</h3>
                <p className="text-white/60">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center space-x-2 px-8 py-4 glass-dark text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
          >
            <span>View Full Portfolio</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

