"use client";

import { motion } from "framer-motion";
import { Star, Quote, TrendingUp } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "Luxe Retail",
    content: "WebifyTech transformed our online presence. Sales increased by 300% in just 3 months! The headless commerce solution they built is a game-changer for our performance and scalability.",
    result: "300% Sales Increase",
    image: "bg-stone-200",
  },
  {
    name: "Michael Chen",
    role: "Founder",
    company: "Apex Tech",
    content: "The team's attention to detail and performance optimization is unmatched. Our core web vitals are now perfect, leading to a massive boost in our organic search rankings.",
    result: "Perfect Core Web Vitals",
    image: "bg-slate-200",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Nova Brand",
    content: "Professional, responsive, and truly results-driven. They don't just build sites; they build business growth machines. Our customer satisfaction has never been higher.",
    result: "98% User Satisfaction",
    image: "bg-zinc-200",
  },
  {
    name: "James Wilson",
    role: "E-commerce Manager",
    company: "RetailPro",
    content: "The custom Shopify build outperformed our previous setup by every metric. The ROI was clear within the first 30 days of launch.",
    result: "ROI in 30 Days",
    image: "bg-neutral-200",
  },
  {
    name: "Lisa Anderson",
    role: "Brand Owner",
    company: "Luxury Design",
    content: "Their design sensibility is elite. They managed to capture our brand DNA perfectly while ensuring the site remains lightning fast.",
    result: "Elite Brand Identity",
    image: "bg-stone-300",
  },
  {
    name: "Robert Taylor",
    role: "Operations Director",
    company: "SaaS Flow",
    content: "The scale of technical expertise at WebifyTech is impressive. They solved complex integration issues that other agencies couldn't handle.",
    result: "Complex System Fix",
    image: "bg-slate-300",
  },
];

export default function TestimonialsList() {
  return (
    <section className="section-padding bg-[var(--surface)]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-[40px] p-10 border border-[var(--primary)]/5 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute top-10 right-10">
                 <Quote size={40} className="text-[var(--primary)] opacity-[0.03]" />
              </div>

              <div className="flex items-center gap-2 mb-6 bg-[var(--accent)]/10 text-[var(--primary)] px-3 py-1 rounded-full w-fit">
                 <TrendingUp size={14} />
                 <span className="text-[10px] font-display font-black uppercase tracking-widest">{testimonial.result}</span>
              </div>

              <div className="flex mb-6 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="var(--accent)" className="text-[var(--accent)]" />
                ))}
              </div>

              <p className="text-[var(--primary)] font-display text-lg mb-10 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 pt-8 border-t border-[var(--primary)]/5">
                <div className={`w-14 h-14 rounded-2xl ${testimonial.image} grayscale group-hover:grayscale-0 transition-all duration-500`} />
                <div>
                  <p className="text-[var(--primary)] font-display font-bold uppercase tracking-widest text-xs">
                    {testimonial.name}
                  </p>
                  <p className="text-[var(--muted)] font-body text-[10px] font-medium uppercase tracking-[0.2em]">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


