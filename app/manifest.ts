import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WebifyTech - Digital & E-commerce Agency",
    short_name: "WebifyTech",
    description: "Transform your digital presence with WebifyTech. We specialize in modern web design, e-commerce solutions, and digital marketing strategies.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#0ea5e9",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

