import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://apf.nusrlranchi.ac.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/activities", "/publications", "/gallery"];
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
