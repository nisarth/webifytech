"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, Fashion Brand",
    company: "StyleCo",
    content: "WebifyTech transformed our online presence. Sales increased by 300% in just 3 months! The team's attention to detail and creative solutions exceeded all our expectations.",
    rating: 5,
    image: "bg-gradient-to-br from-pink-500 to-rose-500",
  },
  {
    name: "Michael Chen",
    role: "Founder, Tech Startup",
    company: "TechVenture",
    content: "The team's attention to detail and creative solutions exceeded all our expectations. They delivered exactly what we needed, on time and within budget.",
    rating: 5,
    image: "bg-gradient-to-br from-blue-500 to-cyan-500",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "GrowthCo",
    content: "Professional, responsive, and results-driven. Best agency we've worked with. Our conversion rates have improved significantly since launching the new site.",
    rating: 5,
    image: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
  {
    name: "James Wilson",
    role: "E-commerce Manager",
    company: "RetailPro",
    content: "The e-commerce solution they built for us is incredible. User-friendly, fast, and conversion-optimized. Our customers love it!",
    rating: 5,
    image: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
  {
    name: "Lisa Anderson",
    role: "Brand Owner",
    company: "LuxuryBrand",
    content: "WebifyTech understood our vision perfectly and brought it to life. The design is stunning and the functionality is flawless.",
    rating: 5,
    image: "bg-gradient-to-br from-orange-500 to-red-500",
  },
  {
    name: "Robert Taylor",
    role: "Operations Director",
    company: "ServiceHub",
    content: "Outstanding work from start to finish. The team was professional, communicative, and delivered beyond our expectations.",
    rating: 5,
    image: "bg-gradient-to-br from-indigo-500 to-purple-500",
  },
];

export default function TestimonialsList() {
  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">{testimonial.content}</p>
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-full ${testimonial.image}`} />
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                  <p className="text-primary-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

