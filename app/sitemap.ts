import { MetadataRoute } from "next";
import { locations } from "@/data/locations";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://webify-tech.com";

  const staticPages = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/testimonials",
    "/resources",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "" || route === "/portfolio" || route === "/resources" ? "weekly" : "monthly") as any,
    priority: route === "" ? 1 : 0.8,
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

  return [...staticPages, ...locationPages, ...blogPages];
}

