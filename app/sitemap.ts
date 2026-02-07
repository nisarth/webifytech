import { MetadataRoute } from "next";
import { locations } from "@/data/locations";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://webifytech.netlify.app";

  const staticPages = [
    { route: "", priority: 1, changefreq: "weekly" },
    { route: "/services", priority: 0.9, changefreq: "monthly" },
    { route: "/portfolio", priority: 0.9, changefreq: "weekly" },
    { route: "/about", priority: 0.8, changefreq: "monthly" },
    { route: "/testimonials", priority: 0.8, changefreq: "monthly" },
    { route: "/resources", priority: 0.8, changefreq: "weekly" },
    { route: "/contact", priority: 0.8, changefreq: "monthly" },
  ].map((item) => ({
    url: `${baseUrl}${item.route}`,
    lastModified: new Date(),
    changeFrequency: item.changefreq as any,
    priority: item.priority,
  }));

  const locationPages = locations.map((location) => ({
    url: `${baseUrl}/locations/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as any,
    priority: 0.7,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/resources/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as any,
    priority: 0.6,
  }));

  // JSON-LD Breadcrumbs are handled at the page/layout level

  return [...staticPages, ...locationPages, ...blogPages];
}
