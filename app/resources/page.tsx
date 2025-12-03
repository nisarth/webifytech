import ResourcesHero from "@/components/sections/ResourcesHero";
import BlogGrid from "@/components/sections/BlogGrid";
import ResourcesList from "@/components/sections/ResourcesList";

export const metadata = {
  title: "Resources & Insights - WebifyTech",
  description: "Stay updated with the latest insights, tips, and resources about web design, e-commerce, and digital marketing.",
};

export default function ResourcesPage() {
  return (
    <>
      <ResourcesHero />
      <BlogGrid />
      <ResourcesList />
    </>
  );
}

