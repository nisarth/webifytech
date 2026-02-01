"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Thompson",
    role: "Founder & Creative Director",
    bio: "Visionary designer focused on the intersection of human psychology and digital interfaces.",
    image: "bg-stone-200",
  },
  {
    name: "Jessica Martinez",
    role: "Head of Engineering",
    bio: "System architect specialized in high-performance, scalable web infrastructure.",
    image: "bg-slate-200",
  },
  {
    name: "David Kim",
    role: "Lead Growth Strategist",
    bio: "Data scientist turned digital marketer, obsessed with SEO and conversion metrics.",
    image: "bg-zinc-200",
  },
  {
    name: "Sarah Williams",
    role: "Operations Manager",
    bio: "Efficiency expert ensuring every project is delivered with precision and white-glove service.",
    image: "bg-neutral-200",
  },
];

export default function Team() {
  return (
    <section className="section-padding bg-[var(--surface)]">
      <div className="container mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mb-20"
        >
          <p className="text-[var(--accent)] font-body font-bold uppercase tracking-widest mb-4">The Humans Behind the Code</p>
          <h2 className="type-scale-h2 text-[var(--primary)] max-w-2xl">
            Meet the <span className="italic font-light">Growth Partners</span> Who Build Your Future
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row gap-8 items-center md:items-start"
            >
              <div className={`w-48 h-64 shrink-0 rounded-3xl ${member.image} relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700`}>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/40 to-transparent" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-display text-2xl font-bold text-[var(--primary)] mb-2">{member.name}</h3>
                <p className="text-[var(--accent)] font-body text-xs font-bold uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-[var(--muted)] font-body leading-relaxed mb-6 max-w-sm">{member.bio}</p>
                
                <div className="flex justify-center md:justify-start gap-4">
                  <a href="#" className="text-[var(--primary)]/30 hover:text-[var(--accent)] transition-colors"><Linkedin size={18} /></a>
                  <a href="#" className="text-[var(--primary)]/30 hover:text-[var(--accent)] transition-colors"><Twitter size={18} /></a>
                  <a href="#" className="text-[var(--primary)]/30 hover:text-[var(--accent)] transition-colors"><Mail size={18} /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


