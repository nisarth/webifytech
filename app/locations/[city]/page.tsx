import { locations } from "@/data/locations";
import { notFound } from "next/navigation";
import LocationHero from "@/components/sections/LocationHero";
import ServicesPreview from "@/components/sections/ServicesPreview";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTA from "@/components/sections/CTA";
import { Metadata } from "next";

interface Props {
  params: { city: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const location = locations.find((l) => l.slug === params.city);
  
  if (!location) return {};

  return {
    title: `Web Development & SEO in ${location.city}, ${location.region} | WebifyTech`,
    description: `Expert web design, custom development, and performance SEO for businesses in ${location.city}. Scaling ${location.focus} through strategic digital growth.`,
  };
}

import { parseMarkdown } from "@/lib/markdown";

export default function LocationPage({ params }: Props) {
  const location = locations.find((l) => l.slug === params.city);

  if (!location) {
    notFound();
  }

  // Parse markdown content
  // We handle the case where content might be missing for safety, though we just added it.
  const htmlContent = location.content ? parseMarkdown(location.content) : "";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `https://webifytech.netlify.app/locations/${location.slug}#localbusiness`,
    "name": `WebifyTech ${location.city}`,
    "image": "https://webifytech.netlify.app/assets/og-image.png",
    "description": `Expert web development, e-commerce, and SEO services in ${location.city}, ${location.region}. ${location.description}`,
    "url": `https://webifytech.netlify.app/locations/${location.slug}`,
    "telephone": "+1-555-123-4567",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location.city,
      "addressRegion": location.region,
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": location.city
    },
    "parentOrganization": {
      "@id": "https://webifytech.netlify.app/#organization"
    },
    "knowsAbout": [
      "Web Development",
      "SEO",
      "E-Commerce",
      "UI/UX Design",
      location.focus
    ]
  };

  const faqJsonLd = location.faq ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": location.faq.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      
      <LocationHero location={location} />
      
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
           <div 
              className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-[var(--primary)] prose-p:text-[var(--muted)] prose-p:font-body prose-li:text-[var(--muted)] prose-li:font-body mb-20"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
            
            {location.faq && location.faq.length > 0 && (
            <div className="mt-20 pt-20 border-t border-[var(--primary)]/10">
              <h2 className="text-3xl font-display font-bold text-[var(--primary)] mb-10 flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)]">?</span>
                Local Insights: {location.city} FAQ
              </h2>
              <div className="space-y-8">
                {location.faq.map((item, idx) => (
                  <div key={idx} className="bg-[var(--surface)] p-8 rounded-[32px] border border-[var(--primary)]/5 hover:shadow-lg transition-all">
                    <h3 className="text-xl font-display font-bold text-[var(--primary)] mb-4">{item.question}</h3>
                    <p className="text-[var(--muted)] font-body leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <ServicesPreview title={`Expert Services in ${location.city}`} />
      <PortfolioPreview title={`${location.city} Impact Stories`} />
      <WhyChooseUs />
      <CTA />
    </>
  );
}


export async function generateStaticParams() {
  return locations.map((location) => ({
    city: location.slug,
  }));
}
