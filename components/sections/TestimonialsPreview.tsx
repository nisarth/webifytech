"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Quote, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, Fashion Brand",
    content:
      "WebifyTech transformed our online presence. Sales increased by 300% in just 3 months!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, Tech Startup",
    content:
      "The team's attention to detail and creative solutions exceeded all our expectations.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    content:
      "Professional, responsive, and results-driven. Best agency we've worked with.",
    rating: 5,
  },
];

export default function TestimonialsPreview() {
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
            Client <span className="text-primary-400">Testimonials</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-dark rounded-2xl p-8 relative"
            >
              <Quote className="w-8 h-8 text-primary-400 mb-4 opacity-50" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                {testimonial.content}
              </p>
              <div>
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-white/60 text-sm">{testimonial.role}</p>
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
            href="/testimonials"
            className="inline-flex items-center space-x-2 px-8 py-4 glass-dark text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
          >
            <span>Read More Testimonials</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
