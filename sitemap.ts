import type { MetadataRoute } from "next";

const baseUrl = "https://biztoolkit-ashy.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/profit-margin-calculator",
    "/roi-calculator",
    "/break-even-calculator",
    "/markup-calculator",
    "/discount-calculator",
    "/commission-calculator",
    "/vat-calculator",
    "/privacy",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
