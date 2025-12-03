"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Luxury Fashion E-commerce",
    category: "E-commerce",
    description: "Premium online store with advanced filtering and checkout system",
    image: "bg-gradient-to-br from-pink-500 to-rose-500",
    tags: ["Next.js", "Shopify", "Stripe"],
  },
  {
    title: "Tech Startup Landing",
    category: "Web Design",
    description: "Modern landing page with interactive animations",
    image: "bg-gradient-to-br from-blue-500 to-cyan-500",
    tags: ["React", "Framer Motion", "Tailwind"],
  },
  {
    title: "Restaurant Booking Platform",
    category: "Web App",
    description: "Full-featured reservation system with real-time availability",
    image: "bg-gradient-to-br from-orange-500 to-amber-500",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
  },
  {
    title: "SaaS Dashboard",
    category: "Web App",
    description: "Comprehensive analytics dashboard with real-time data visualization",
    image: "bg-gradient-to-br from-indigo-500 to-purple-500",
    tags: ["React", "D3.js", "TypeScript"],
  },
  {
    title: "Healthcare Portal",
    category: "Web App",
    description: "Patient management system with secure authentication",
    image: "bg-gradient-to-br from-green-500 to-emerald-500",
    tags: ["Next.js", "Auth0", "MongoDB"],
  },
  {
    title: "Real Estate Platform",
    category: "E-commerce",
    description: "Property listing and booking platform with virtual tours",
    image: "bg-gradient-to-br from-teal-500 to-cyan-500",
    tags: ["Next.js", "Three.js", "Stripe"],
  },
];

export default function PortfolioGrid() {
  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                  <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href="#" className="w-12 h-12 glass-dark rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </a>
                    <a href="#" className="w-12 h-12 glass-dark rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <Github className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm text-primary-400 font-medium">{project.category}</span>
                <h3 className="text-xl font-semibold text-white mt-2 mb-2">{project.title}</h3>
                <p className="text-white/60 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 glass-dark rounded-full text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

