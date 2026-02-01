"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle2, ChevronDown } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Web Development",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="section-padding bg-[var(--surface)]">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[40px] border border-[var(--primary)]/5 p-12 md:p-20 shadow-2xl"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
                   <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-display font-bold text-[var(--primary)] mb-4">Message Received</h3>
                <p className="text-[var(--muted)] font-body text-lg">
                  Thank you for reaching out. A growth strategist will contact you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <>
                <div className="mb-12">
                   <h2 className="text-3xl md:text-4xl font-display font-bold text-[var(--primary)] mb-4">Start a Conversation</h2>
                   <p className="text-[var(--muted)] font-body">Fill out the form below and we'll be in touch shortly.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-[10px] font-display font-black uppercase tracking-widest text-[var(--primary)] px-2">Name *</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[var(--primary)]/5 border-none rounded-2xl px-6 py-4 font-body text-[var(--primary)] focus:ring-2 focus:ring-[var(--accent)] transition-all outline-none"
                        placeholder="Project Lead"
                      />
                    </div>
                    <div className="space-y-2">
                       <label htmlFor="email" className="text-[10px] font-display font-black uppercase tracking-widest text-[var(--primary)] px-2">Email *</label>
                       <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[var(--primary)]/5 border-none rounded-2xl px-6 py-4 font-body text-[var(--primary)] focus:ring-2 focus:ring-[var(--accent)] transition-all outline-none"
                        placeholder="name@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label htmlFor="company" className="text-[10px] font-display font-black uppercase tracking-widest text-[var(--primary)] px-2">Company</label>
                       <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-[var(--primary)]/5 border-none rounded-2xl px-6 py-4 font-body text-[var(--primary)] focus:ring-2 focus:ring-[var(--accent)] transition-all outline-none"
                        placeholder="Company Name"
                      />
                    </div>
                    <div className="space-y-2 relative">
                       <label htmlFor="service" className="text-[10px] font-display font-black uppercase tracking-widest text-[var(--primary)] px-2">Interest *</label>
                       <select
                        id="service"
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[var(--primary)]/5 border-none rounded-2xl px-6 py-4 font-body text-[var(--primary)] focus:ring-2 focus:ring-[var(--accent)] transition-all outline-none appearance-none"
                      >
                        <option>Web Development</option>
                        <option>E-Commerce Solution</option>
                        <option>SEO Strategy</option>
                        <option>UI/UX Design</option>
                        <option>SaaS Development</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-6 top-[52px] text-[var(--primary)] pointer-events-none opacity-50" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] font-display font-black uppercase tracking-widest text-[var(--primary)] px-2">Message *</label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[var(--primary)]/5 border-none rounded-2xl px-6 py-4 font-body text-[var(--primary)] focus:ring-2 focus:ring-[var(--accent)] transition-all outline-none resize-none"
                      placeholder="Tell us about your goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center group h-16 text-lg"
                  >
                    <span>Initiate Project</span>
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

