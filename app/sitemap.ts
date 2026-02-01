import { MetadataRoute } from "next";
import { locations } from "@/data/locations";

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

  return [...staticPages, ...locationPages];
}

