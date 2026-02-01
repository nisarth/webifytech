import ServicesHero from "@/components/sections/ServicesHero";
import ServiceList from "@/components/sections/ServiceList";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Custom Web Development & E-Commerce Services | WebifyTech",
  description: "Explore our range of high-performance digital services — from bespoke web development and Shopify builds to SEO strategy and UI/UX design.",
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Development",
    "provider": {
      "@type": "ProfessionalService",
      "name": "WebifyTech",
      "url": "https://webify-tech.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Web Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-Commerce Solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Strategy"
          }
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
      <Process />
      <CTA />
    </>
  );
}


