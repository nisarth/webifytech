"use client";

import { motion } from "framer-motion";
import { Code, ShoppingCart, Search, Palette, Megaphone, BarChart, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites built with modern technologies and best practices.",
    features: ["Responsive Design", "Performance Optimization", "SEO-Friendly", "Fast Loading"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Powerful online stores that convert visitors into customers.",
    features: ["Payment Integration", "Inventory Management", "Order Tracking", "Analytics"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your visibility and rank higher in search results.",
    features: ["Keyword Research", "On-Page SEO", "Link Building", "Content Strategy"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that users love to interact with.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Strategic campaigns that drive traffic and increase conversions.",
    features: ["Social Media", "Content Marketing", "Email Campaigns", "PPC Advertising"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: BarChart,
    title: "Analytics & Insights",
    description: "Data-driven decisions with comprehensive analytics and reporting.",
    features: ["Custom Dashboards", "Real-time Tracking", "Conversion Analysis", "ROI Reporting"],
    color: "from-teal-500 to-cyan-500",
  },
];

export default function ServiceList() {
  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
              >
                <div className="flex-1">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{service.title}</h2>
                  <p className="text-xl text-white/70 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className={`h-96 rounded-2xl bg-gradient-to-br ${service.color} glass-dark flex items-center justify-center`}>
                    <Icon className="w-32 h-32 text-white/20" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

