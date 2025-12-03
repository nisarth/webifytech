"use client";

import { motion } from "framer-motion";
import { Download, FileText, Video, BookOpen } from "lucide-react";

const resources = [
  {
    icon: FileText,
    title: "Web Design Checklist",
    description: "A comprehensive checklist for modern web design projects",
    type: "PDF Guide",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Video,
    title: "E-commerce Setup Tutorial",
    description: "Step-by-step video guide to setting up your online store",
    type: "Video Series",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: BookOpen,
    title: "SEO Handbook",
    description: "Complete guide to search engine optimization",
    type: "E-book",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Download,
    title: "UI Component Library",
    description: "Free collection of reusable UI components",
    type: "Design Kit",
    color: "from-orange-500 to-red-500",
  },
];

export default function ResourcesList() {
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
            Free <span className="text-primary-400">Resources</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Download our free guides, templates, and tools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-dark rounded-2xl p-8 hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs text-primary-400 font-medium">{resource.type}</span>
                <h3 className="text-xl font-semibold text-white mt-2 mb-3">{resource.title}</h3>
                <p className="text-white/60 mb-4">{resource.description}</p>
                <button className="text-primary-400 hover:text-primary-300 font-medium text-sm flex items-center space-x-2">
                  <span>Download</span>
                  <Download className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

