import type { MetadataRoute } from "next";
import { site } from "@/content/pt";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${site.url}/`, changeFrequency: "monthly", priority: 1, alternates: { languages: { "pt-BR": `${site.url}/`, en: `${site.url}/en/` } } }];
}
