import type { Metadata, Viewport } from "next";
import type { Dict } from "@/content/pt";
import { site } from "@/content/site";

export function buildMetadata(d: Dict, ogImage: string): Metadata {
  const title = `${site.name} | ${d.titleSuffix}`;
  return {
    metadataBase: new URL(site.url),
    title,
    description: d.description,
    alternates: { canonical: d.path, languages: { "pt-BR": "/", en: "/en/", "x-default": "/" } },
    openGraph: {
      type: "profile",
      locale: d.locale,
      alternateLocale: [d.locale === "pt_BR" ? "en_US" : "pt_BR"],
      url: d.path,
      siteName: site.name,
      title,
      description: d.description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${site.name}, ${d.role}` }],
    },
    twitter: { card: "summary_large_image", title, description: d.description, images: [ogImage] },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = { themeColor: "#08090c", colorScheme: "dark" };
