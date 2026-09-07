import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com";
  return ["/","/projects","/services","/client","/admin"].map(path => ({url: base + path, lastModified: new Date()}));
}