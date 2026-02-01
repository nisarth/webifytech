"use client";

import { motion } from "framer-motion";
import { MapPin, TrendingUp, Zap } from "lucide-react";

interface LocationHeroProps {
  location: {
    city: string;
    region: string;
    focus: string;
    stat: string;
    description: string;
  };
}

export default function LocationHero({ location }: LocationHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-40 pb-20 bg-[var(--surface)]">
      {/* Dynamic background element */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,var(--accent)_0%,transparent_50%)] opacity-[0.05] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <span className="text-[var(--primary)] font-display font-black uppercase tracking-[0.3em] text-xs">
                {location.city}, {location.region}
              </span>
            </div>

            <h1 className="type-scale-h1 text-[var(--primary)] mb-8">
              Scaling {location.city}'s <br />
              <span className="italic font-light">Digital Future</span>
            </h1>

            <p className="text-xl md:text-2xl text-[var(--muted)] font-body leading-relaxed mb-12 max-w-xl">
              {location.description} We specialize in {location.focus.toLowerCase()} 
              for forward-thinking businesses.
            </p>

            <div className="flex flex-wrap gap-6">
               <div className="flex items-center gap-4 bg-white rounded-2xl px-6 py-4 border border-[var(--primary)]/5 shadow-sm">
                  <TrendingUp className="text-[var(--accent)]" size={24} />
                  <div>
                    <p className="text-[var(--primary)] font-display font-black text-lg leading-none">{location.stat}</p>
                    <p className="text-[var(--muted)] text-[10px] font-body font-bold uppercase tracking-widest mt-1">Local Growth Stat</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 bg-white rounded-2xl px-6 py-4 border border-[var(--primary)]/5 shadow-sm">
                  <Zap className="text-[var(--accent)]" size={24} />
                  <div>
                    <p className="text-[var(--primary)] font-display font-black text-lg leading-none">Top-Rated</p>
                    <p className="text-[var(--muted)] text-[10px] font-body font-bold uppercase tracking-widest mt-1">In {location.city}</p>
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square bg-white rounded-[60px] border border-[var(--primary)]/5 shadow-2xl relative overflow-hidden group">
               {/* Abstract decorative graphic */}
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,var(--accent)_0%,transparent_70%)] opacity-[0.03]" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 border border-[var(--primary)]/5 rounded-full animate-pulse" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/5 h-3/5 border border-[var(--primary)]/10 rounded-full" />
               
               <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-white to-transparent">
                  <p className="text-[var(--primary)] font-display font-black text-4xl mb-4 italic">"{location.city} is built on innovation."</p>
                  <p className="text-[var(--muted)] font-body font-bold uppercase tracking-widest text-xs">- Strategic Lead, WebifyTech</p>
               </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[var(--accent)] rounded-full blur-[80px] opacity-20" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[var(--primary)] rounded-full blur-[100px] opacity-5" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
