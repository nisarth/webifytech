"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description: "We analyze your business needs, target audience, and goals to create a strategic plan.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Design",
    description: "Our team creates stunning designs that align with your brand and user expectations.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    description: "We build your solution using cutting-edge technologies and best practices.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    description: "We deploy your project and provide ongoing support to ensure continued success.",
  },
];

export default function Process() {
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
            Our <span className="text-primary-400">Process</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A proven methodology that delivers exceptional results
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="glass-dark rounded-2xl p-8 h-full">
                    <div className="text-6xl font-bold text-primary-400/20 mb-4">{step.number}</div>
                    <div className="w-14 h-14 rounded-xl bg-primary-500/20 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-primary-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-white/60">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-400/30 transform -translate-y-1/2" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

