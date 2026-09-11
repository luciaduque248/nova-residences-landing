import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://nova-residences-landing.vercel.app/sitemap.xml",
    host: "https://nova-residences-landing.vercel.app",
  };
}
