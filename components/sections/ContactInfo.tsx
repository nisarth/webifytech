"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "hello.webifytech@gmail.com",
    link: "mailto:hello.webifytech@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Global Headquarters",
    content: "123 Digital Street, Tech City, TC 12345",
    link: "#",
  },
  {
    icon: Clock,
    title: "Availability",
    content: "Mon - Fri: 9:00 AM - 6:00 PM EST",
    link: "#",
  },
];

export default function ContactInfo() {
  return (
    <section className="section-padding bg-[var(--surface)] border-t border-[var(--primary)]/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={info.title}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 rounded-3xl border border-transparent hover:border-[var(--primary)]/5 hover:bg-white hover:shadow-xl transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-[var(--primary)]/5 flex items-center justify-center mb-6 group-hover:bg-[var(--primary)] group-hover:text-[var(--accent)] transition-all duration-500">
                  <Icon size={20} />
                </div>
                <h3 className="text-xs font-display font-black uppercase tracking-widest text-[var(--accent)] mb-3">
                  {info.title}
                </h3>
                <p className="text-[var(--primary)] font-body font-bold">{info.content}</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

