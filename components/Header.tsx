"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Work" },
  { href: "/testimonials", label: "Reviews" },
  { href: "/resources", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-[var(--surface)]/80 backdrop-blur-xl border-b border-[var(--primary)]/5 py-4" 
          : "bg-transparent py-8"
      }`}
    >
      <nav className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-1">
            <span className="text-2xl font-display font-black tracking-tighter text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
              Webify<span className="text-[var(--accent)] group-hover:text-[var(--primary)]">Tech</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[15px] font-body font-medium tracking-wide transition-all duration-300 hover:text-[var(--accent)] ${
                    pathname === link.href
                      ? "text-[var(--accent)]"
                      : "text-[var(--primary)]/70"
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--accent)]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>
            
            <Link href="/contact" className="btn-primary py-2.5 px-6 text-sm">
              Start Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[var(--primary)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-full left-0 right-0 bg-[var(--surface)] border-b border-[var(--primary)]/5 p-6 shadow-2xl"
            >
              <div className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-body font-semibold transition-colors ${
                      pathname === link.href
                        ? "text-[var(--accent)]"
                        : "text-[var(--primary)]/70"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link 
                  href="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary justify-center mt-2"
                >
                  Start Your Project
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}


