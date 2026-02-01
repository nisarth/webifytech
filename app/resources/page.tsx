import ResourcesHero from "@/components/sections/ResourcesHero";
import BlogGrid from "@/components/sections/BlogGrid";
import ResourcesList from "@/components/sections/ResourcesList";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Digital Growth Resources & Insights | WebifyTech",
  description: "Stay ahead of the curve. Explore our library of articles, guides, and insights on the future of web development, SEO, and digital growth.",
};

export default function ResourcesPage() {
  return (
    <>
      <ResourcesHero />
      <BlogGrid />
      <ResourcesList />
      <CTA />
    </>
  );
}


