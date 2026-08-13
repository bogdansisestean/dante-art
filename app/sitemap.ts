import type { MetadataRoute } from "next";
import { services } from "./service-data";

// Required for `output: export` — the sitemap is generated at build time.
export const dynamic = "force-static";

// Production origin. Keep in sync with the canonical domain served in production.
const BASE = "https://dante-art.ro";

// trailingSlash is enabled in next.config.ts, so every URL here ends with "/".
function url(path: string) {
  if (path === "/") return `${BASE}/`;
  return `${BASE}${path}/`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-13");

  const staticPaths = [
    "/",
    "/despre",
    "/servicii",
    "/echipa",
    "/tehnologie",
    "/preturi",
    "/contact",
    "/politica-de-confidentialitate",
    "/termeni-si-conditii",
    "/politica-cookies",
  ];

  const servicePaths = services.map((service) => `/servicii/${service.slug}`);

  return [...staticPaths, ...servicePaths].map((path) => ({
    url: url(path),
    lastModified,
  }));
}
