import ServicesHero from "@/components/sections/ServicesHero";
import ServiceList from "@/components/sections/ServiceList";
import Process from "@/components/sections/Process";
import BlogPreview from "@/components/sections/BlogPreview";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Custom Web Development & E-Commerce Services | WebifyTech",
  description: "Explore our range of high-performance digital services — from bespoke web development and Shopify builds to SEO strategy and UI/UX design.",
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://webifytech.netlify.app/services#service",
    "serviceType": "Digital Agency Services",
    "provider": {
      "@id": "https://webifytech.netlify.app/#organization"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "WebifyTech Digital Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Web Development",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Web Development",
                "description": "Bespoke high-performance websites built with modern frameworks like Next.js and Payload CMS."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "E-Commerce Solutions",
                "description": "Conversion-focused Shopify and custom e-commerce platforms designed for growth."
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Digital Marketing",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Search Engine Optimization (SEO)",
                "description": "Strategic SEO services to dominate search results and drive organic revenue."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "UI/UX Design",
                "description": "Psychology-driven design that converts visitors into customers.",
                "provider": {
                  "@id": "https://webifytech.netlify.app/#organization"
                },
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://webifytech.netlify.app/services"
                }
              }
            }
          ]
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesHero />
      <ServiceList />
      
      {/* Detailed Methodology Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <span className="text-[var(--accent)] font-body font-bold uppercase tracking-widest text-sm mb-4 block">Our Methodology</span>
            <h2 className="type-scale-h2 text-[var(--primary)] mb-12">Engineered for <span className="text-[var(--accent)]">Dominance</span></h2>
            
            <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-[var(--primary)] prose-p:text-[var(--muted)] prose-p:font-body prose-li:text-[var(--muted)] prose-li:font-body">
              <h3>The WebifyTech Standard</h3>
              <p>
                In 2026, a website is not just a digital brochure; it is a complex software application that must perform flawlessly across thousands of device and network combinations. Our engineering philosophy is built on three pillars: <strong>Speed</strong>, <strong>Scalability</strong>, and <strong>Sustainability</strong>.
              </p>
              
              <h4>1. Speed as a Feature</h4>
              <p>
                We don't optimize for speed after launch; we architect for it from line one. By utilizing <strong>Next.js Server Components</strong> and <strong>Edge Caching</strong>, we ensure that your content is physically located as close to your user as possible. This results in Time to First Byte (TTFB) metrics that are often under 50ms, giving you an immediate SEO advantage.
              </p>

              <h4>2. Agentic AI Integration</h4>
              <p>
                The future of e-commerce is autonomous. Our "Agentic Commerce" stack allows us to build storefronts that don't just wait for customers but actively assist them. From AI-driven search that understands intent to chatbots that can negotiate pricing on your behalf, we build systems that close sales.
              </p>

              <h4>3. Semantic SEO Architecture</h4>
              <p>
                Ranking in the age of AI Search (SGE) requires more than keywords. It requires "Topical Authority." We structure your site's data using advanced <strong>Schema.org</strong> vocabularies, turning your content into a knowledge graph that Google and ChatGPT can easily digest and cite as a primary source.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Process />
      
      {/* Service FAQs */}
      <section className="section-padding bg-[var(--surface)] border-t border-[var(--primary)]/5">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-display font-bold text-[var(--primary)] mb-12 text-center">Common Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-[24px] shadow-sm">
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Do you work with existing codebases?</h3>
              <p className="text-[var(--muted)] leading-relaxed">Yes, we specialize in "Rescue & Refactor" projects. We can audit your current React/Next.js codebase, identify performance bottlenecks, and modernize it without a full rewrite.</p>
            </div>
            <div className="bg-white p-8 rounded-[24px] shadow-sm">
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">How long does a typical custom build take?</h3>
              <p className="text-[var(--muted)] leading-relaxed">A high-performance custom website typically takes 6-10 weeks from discovery to launch. E-commerce platforms with complex integrations may take 12-16 weeks.</p>
            </div>
            <div className="bg-white p-8 rounded-[24px] shadow-sm">
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">What happens after launch?</h3>
              <p className="text-[var(--muted)] leading-relaxed">We offer "Growth Retainers" that include monthly SEO content expansion, technical updates, and conversion rate optimization (CRO) experiments to ensure your site keeps winning.</p>
            </div>
            <div className="bg-white p-8 rounded-[24px] shadow-sm">
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Do you handle hosting and security?</h3>
              <p className="text-[var(--muted)] leading-relaxed">Absolutely. We deploy on enterprise-grade serverless infrastructure (Netlify/Vercel) with global CDNs, automated backups, and DDoS protection included.</p>
            </div>
          </div>
        </div>
      </section>

      <BlogPreview />
      <CTA />
    </>
  );
}


