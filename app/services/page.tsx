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
      <Process />
      <BlogPreview />
      <CTA />
    </>
  );
}


