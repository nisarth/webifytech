import PortfolioHero from "@/components/sections/PortfolioHero";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Portfolio | Case Studies in Digital Excellence | WebifyTech",
  description: "See how WebifyTech has helped businesses across the country achieve measurable growth through custom web development, SEO, and strategic design.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
      <CTA />
    </>
  );
}


