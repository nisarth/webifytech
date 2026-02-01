import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ServicesPreview from "@/components/sections/ServicesPreview";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import TestimonialsPreview from "@/components/sections/TestimonialsPreview";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "WebifyTech | High-Performance Web Development & SEO Agency",
  description: "Accelerate your digital growth with WebifyTech. We design and build high-converting websites, e-commerce platforms, and data-driven SEO strategies.",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "WebifyTech",
    "url": "https://webify-tech.com",
    "description": "High-performance web development and SEO agency.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TrustBar />
      <ServicesPreview />
      <PortfolioPreview />
      <WhyChooseUs />
      <TestimonialsPreview />
      <CTA />
    </>
  );
}



