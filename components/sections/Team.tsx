"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Thompson",
    role: "Creative Director",
    bio: "10+ years of experience in digital design",
    image: "bg-gradient-to-br from-blue-500 to-cyan-500",
  },
  {
    name: "Jessica Martinez",
    role: "Lead Developer",
    bio: "Full-stack expert passionate about modern web technologies",
    image: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
  {
    name: "David Kim",
    role: "SEO Specialist",
    bio: "Helping businesses rank higher and grow organically",
    image: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
  {
    name: "Sarah Williams",
    role: "Project Manager",
    bio: "Ensuring smooth project delivery and client satisfaction",
    image: "bg-gradient-to-br from-orange-500 to-red-500",
  },
];

export default function Team() {
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
            Meet Our <span className="text-primary-400">Team</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            The talented individuals behind WebifyTech's success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-dark rounded-2xl overflow-hidden group"
            >
              <div className={`h-64 ${member.image} relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 glass-dark rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a href="#" className="w-10 h-10 glass-dark rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <Twitter className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-primary-400 text-sm mb-2">{member.role}</p>
                <p className="text-white/60 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

