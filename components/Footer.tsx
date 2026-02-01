import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Github,
  ArrowUpRight,
} from "lucide-react";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Our Work" },
    { href: "/contact", label: "Contact" },
  ],
  resources: [
    { href: "/resources", label: "Expert Insights" },
    { href: "/testimonials", label: "Client Reviews" },
    { href: "/resources", label: "Success Stories" },
    { href: "/resources", label: "SEO Guides" },
  ],
  locations: [
    { href: "/locations/new-york", label: "New York, NY" },
    { href: "/locations/los-angeles", label: "Los Angeles, CA" },
    { href: "/locations/chicago", label: "Chicago, IL" },
    { href: "/locations/houston", label: "Houston, TX" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/company/webifytech", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/webifytech", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/webifytech", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[var(--primary)] text-[var(--surface)] overflow-hidden">
      {/* Decorative Gradient Flare */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent)] opacity-[0.03] blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 py-20 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-8">
              <span className="text-3xl font-display font-black tracking-tighter">
                Webify<span className="text-[var(--accent)]">Tech</span>
              </span>
            </Link>
            <p className="text-lg font-body text-[var(--surface)]/70 mb-10 max-w-sm">
              Transforming digital presences through human-crafted web design and 
              results-driven e-commerce strategy. Built for growth, since 2024.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 rounded-full border border-[var(--surface)]/10 flex items-center justify-center hover:bg-[var(--accent)] hover:text-[var(--primary)] hover:border-transparent transition-all duration-300 group"
                  >
                    <Icon size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-xl font-bold mb-8 text-[var(--accent)]">Agency</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--surface)]/60 hover:text-[var(--accent)] transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-xl font-bold mb-8 text-[var(--accent)]">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--surface)]/60 hover:text-[var(--accent)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h4 className="font-display text-xl font-bold mb-8 text-[var(--accent)]">Get in Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--surface)]/5 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-[var(--accent)]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[var(--surface)]/40 mb-1">Email us</p>
                  <a href="mailto:hello.webifytech@gmail.com" className="hover:text-[var(--accent)] transition-colors">
                    hello.webifytech@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--surface)]/5 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-[var(--accent)]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[var(--surface)]/40 mb-1">Call us</p>
                  <a href="tel:+15551234567" className="hover:text-[var(--accent)] transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--surface)]/5 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-[var(--accent)]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[var(--surface)]/40 mb-1">Visit us</p>
                  <span className="text-[var(--surface)]/80">
                    123 Digital Street, Tech City, TC 12345
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* AI & SEO Crawlable Entity Description (Visually hidden but present) */}
        <div className="sr-only">
          <p>
            WebifyTech is a U.S.-based digital agency founded in 2024, specializing in custom web development, 
            e-commerce platform builds, search engine optimization, and digital marketing. We serve 
            small-to-medium businesses across the United States, with a focus on measurable growth and 
            long-term client partnerships.
          </p>
        </div>

        <div className="border-t border-[var(--surface)]/10 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-[var(--surface)]/40 font-body">
            © {new Date().getFullYear()} WebifyTech. All rights reserved. 
            <span className="mx-2">|</span>
            Made with intention.
          </p>
          <div className="flex gap-8">
            <Link href="/locations" className="text-sm text-[var(--surface)]/40 hover:text-[var(--accent)] transition-colors">
              Our Locations
            </Link>
            <Link href="#" className="text-sm text-[var(--surface)]/40 hover:text-[var(--accent)] transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-[var(--surface)]/40 hover:text-[var(--accent)] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

