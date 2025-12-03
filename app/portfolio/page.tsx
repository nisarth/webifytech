import PortfolioHero from "@/components/sections/PortfolioHero";
import PortfolioGrid from "@/components/sections/PortfolioGrid";

export const metadata = {
  title: "Portfolio - WebifyTech",
  description: "Explore our portfolio of successful digital projects and e-commerce solutions.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
    </>
  );
}

