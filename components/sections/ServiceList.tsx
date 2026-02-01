"use client";

import { motion } from "framer-motion";
import { Code, ShoppingCart, Search, Palette, Megaphone, BarChart, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "web-dev",
    icon: Code,
    title: "Bespoke Web Development",
    description: "We build custom, high-performance web applications that are engineered for speed, security, and infinite scalability.",
    features: ["Next.js & React Expert Implementation", "Core Web Vitals Optimization", "headless CMS Integration", "API-First Architecture"],
    color: "bg-blue-50/50",
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Turning browsers into buyers with custom Shopify builds and high-converting checkout experiences.",
    features: ["Custom Shopify Theme Development", "Inventory & ERP Synchronization", "Conversion Rate Optimization (CRO)", "Multi-Channel Selling Support"],
    color: "bg-amber-50/50",
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO Strategy & Dominance",
    description: "Don't just rank; dominate. Our technical SEO ensures your brand is the only answer search engines provide.",
    features: ["Technical SEO Site Audits", "Semantic Content Strategy", "Competitor Gap Analysis", "Local & International SEO"],
    color: "bg-emerald-50/50",
  },
  {
    id: "design",
    icon: Palette,
    title: "UI/UX Product Design",
    description: "Human-centric design that balances visual brilliance with intuitive functionality to lower churn and boost LTV.",
    features: ["Bespoke Design Systems", "Prototype & User Testing", "Accessibility (WCAG) Compliance", "Motion & Interactive Design"],
    color: "bg-rose-50/50",
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Digital Performance Marketing",
    description: "Data-backed campaigns that amplify your reach and maximize every dollar of your marketing budget.",
    features: ["PPC & Social Media Advertising", "Retention & Email Marketing", "Growth Hacking Strategies", "Attribution Modeling"],
    color: "bg-indigo-50/50",
  },
  {
    id: "analytics",
    icon: BarChart,
    title: "Analytics & Business Intelligence",
    description: "Transform raw data into a competitive advantage with real-time dashboards and actionable growth insights.",
    features: ["Custom Analytics Infrastructure", "Event Interaction Tracking", "Advanced Attribution Setup", "Predictive Growth Modeling"],
    color: "bg-slate-50/50",
  },
];

export default function ServiceList() {
  return (
    <section className="section-padding bg-[var(--surface)]">
      <div className="container mx-auto">
        <div className="space-y-32">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                id={service.id}
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-16 lg:gap-24`}
              >
                <div className="flex-1">
                   <div className="inline-flex items-center gap-2 mb-6 bg-[var(--accent)]/10 px-4 py-2 rounded-full border border-[var(--accent)]/20">
                     <Icon size={16} className="text-[var(--primary)]" />
                     <span className="text-[var(--primary)] font-body text-xs font-bold uppercase tracking-widest">Service 0{index + 1}</span>
                   </div>
                   
                   <h2 className="type-scale-h2 text-[var(--primary)] mb-8">{service.title}</h2>
                   <p className="text-xl text-[var(--muted)] font-body mb-10 leading-relaxed">{service.description}</p>
                   
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                     {service.features.map((feature) => (
                       <li key={feature} className="flex items-start gap-3">
                         <div className="mt-1 bg-[var(--accent)]/10 p-1 rounded-md">
                           <CheckCircle2 size={16} className="text-[var(--primary)]" />
                         </div>
                         <span className="text-[var(--primary)] font-body font-medium">{feature}</span>
                       </li>
                     ))}
                   </ul>

                   <Link href="/contact" className="btn-primary group">
                      Get a Quote
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                   </Link>
                </div>

                <div className="flex-1 w-full">
                   <div className={`aspect-[4/3] rounded-[40px] ${service.color} border border-[var(--primary)]/5 overflow-hidden flex items-center justify-center p-20 relative group/box`}>
                      <Icon size={120} className="text-[var(--primary)] opacity-10 group-hover/box:scale-110 group-hover/box:opacity-20 transition-all duration-700" />
                      {/* Decorative elements */}
                      <div className="absolute top-10 right-10 w-20 h-20 bg-white/50 rounded-full blur-2xl" />
                      <div className="absolute bottom-10 left-10 w-32 h-32 bg-[var(--primary)]/5 rounded-full blur-3xl opacity-0 group-hover/box:opacity-100 transition-opacity" />
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


