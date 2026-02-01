"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Quote, ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Luxe Retail",
    role: "CEO",
    result: "300% Revenue Spike",
    content: "WebifyTech transformed our online presence. Their custom e-commerce solution was the catalyst for our most successful quarter yet!",
  },
  {
    name: "Michael Chen",
    company: "Apex Tech",
    role: "Founder",
    result: "Near-Zero Load Times",
    content: "The attention to detail and performance optimization is unmatched. Our core web vitals are now perfect across the board.",
  },
  {
    name: "Emily Rodriguez",
    company: "Nova Brand",
    role: "Marketing Director",
    result: "98% User Satisfaction",
    content: "Professional, responsive, and truly results-driven. They don't just build sites; they build business growth machines.",
  },
];

export default function TestimonialsPreview() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding bg-[var(--surface)] overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[var(--accent)] font-body font-bold uppercase tracking-widest mb-4">Client Success</p>
              <h2 className="type-scale-h2 mb-8 text-[var(--primary)]">
                Real Stories from <span className="italic font-light">Real Businesses</span>
              </h2>
              <p className="text-xl text-[var(--muted)] mb-12 font-body max-w-lg leading-relaxed">
                We measure our success by the growth of our partners. Here's how we've helped brands dominate their industries.
              </p>
              
              <div className="flex gap-4">
                <button 
                  onClick={() => setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                  className="w-14 h-14 rounded-full border border-[var(--primary)]/10 flex items-center justify-center hover:bg-[var(--primary)] hover:text-[var(--surface)] transition-all duration-300"
                >
                  <ArrowLeft size={20} />
                </button>
                <button 
                  onClick={() => setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                  className="w-14 h-14 rounded-full border border-[var(--primary)]/10 flex items-center justify-center hover:bg-[var(--primary)] hover:text-[var(--surface)] transition-all duration-300"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          </div>

          <div className="relative">
             <div className="bg-white rounded-[40px] p-12 lg:p-16 border border-[var(--primary)]/5 shadow-2xl shadow-[var(--primary)]/5 relative">
                <Quote size={60} className="absolute top-10 right-10 text-[var(--primary)] opacity-[0.03] select-none" />
                
                <div className="flex mb-8 gap-1">
                   {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="var(--accent)" className="text-[var(--accent)]" />
                   ))}
                </div>

                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-2xl md:text-3xl font-display font-medium text-[var(--primary)] mb-10 leading-relaxed italic">
                    "{testimonials[active].content}"
                  </p>
                  
                  <div className="flex items-center justify-between gap-6 pt-10 border-t border-[var(--primary)]/5">
                    <div>
                      <p className="font-display text-xl font-bold text-[var(--primary)]">{testimonials[active].name}</p>
                      <p className="text-[var(--muted)] font-body text-sm font-medium">{testimonials[active].role} at {testimonials[active].company}</p>
                    </div>
                    <div className="bg-[var(--accent)]/10 px-4 py-2 rounded-xl">
                       <p className="text-[var(--primary)] font-display font-black text-lg">{testimonials[active].result}</p>
                    </div>
                  </div>
                </motion.div>
             </div>

             {/* Background decoration */}
             <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-[var(--primary)]/5 rounded-[40px] rotate-3" />
          </div>
        </div>
      </div>
    </section>
  );
}

