"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, ShoppingCart, Search, Palette, Megaphone, BarChart } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "High-performance, custom-coded websites built for speed and conversion.",
    stat: "Avg. 340% ROI",
    link: "/services#web-dev",
    gridSpan: "lg:col-span-2",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Scalable online stores that turn casual browsers into loyal customers.",
    stat: "2.5x Conversion",
    link: "/services#ecommerce",
    gridSpan: "lg:col-span-1",
  },
  {
    icon: Search,
    title: "SEO Strategy",
    description: "Dominating search results to ensure your brand is always discovered first.",
    stat: "+180% Organic",
    link: "/services#seo",
    gridSpan: "lg:col-span-1",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Human-centric design that balances aesthetic beauty with functional precision.",
    stat: "5/5 Star UX",
    link: "/services#design",
    gridSpan: "lg:col-span-1",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Data-backed campaigns that amplify your reach and maximize every dollar spent.",
    stat: "4.2x ROAS",
    link: "/services#marketing",
    gridSpan: "lg:col-span-1",
  },
  {
    icon: BarChart,
    title: "Analytics",
    description: "Processing complex data into clear, actionable growth strategies for your team.",
    stat: "100% Data-Driven",
    link: "/services#analytics",
    gridSpan: "lg:col-span-2",
  },
];

export default function ServicesPreview({ title }: { title?: string }) {
  return (
    <section className="section-padding bg-[var(--surface)] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-[var(--accent)] opacity-[0.02] blur-[100px] rounded-full -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-[var(--accent)] font-body font-bold uppercase tracking-widest mb-4">Our Expertise</p>
          <h2 className="type-scale-h2 max-w-2xl text-[var(--primary)]">
            {title ? title : (
              <>Services Designed to Drive <span className="italic font-light">Measurable Growth</span></>
            )}
          </h2>
        </motion.div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${service.gridSpan} group relative bg-white rounded-3xl p-10 shadow-sm hover:shadow-2xl transition-all duration-500 border border-[var(--primary)]/5 overflow-hidden`}
              >
                {/* Hover Reveal Stat */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[var(--accent)] font-display font-black text-xl">{service.stat}</span>
                </div>

                <div className="w-16 h-16 rounded-2xl bg-[var(--primary)]/5 flex items-center justify-center mb-8 group-hover:bg-[var(--primary)] group-hover:text-[var(--surface)] transition-all duration-500">
                  <Icon size={32} className="text-[var(--primary)] group-hover:text-[var(--accent)]" />
                </div>
                
                <h3 className="font-display text-2xl font-bold text-[var(--primary)] mb-4">{service.title}</h3>
                <p className="text-[var(--muted)] text-lg mb-8 leading-relaxed">{service.description}</p>
                
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 font-display font-bold text-[var(--primary)] group/link"
                >
                  Explore Details
                  <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform duration-300 text-[var(--accent)]" />
                </Link>

                {/* Subtle corner detail */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[var(--accent)]/5 rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


