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

export default function LocationPage({ params }: Props) {
  const location = locations.find((l) => l.slug === params.city);

  if (!location) {
    notFound();
  }

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LocationHero location={location} />
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
