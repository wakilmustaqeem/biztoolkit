import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://biztoolkit-ashy.vercel.app";

  const routes = [
    "",
    "/calculators",
    "/profit-margin-calculator",
    "/roi-calculator",
    "/break-even-calculator",
    "/markup-calculator",
    "/discount-calculator",
    "/commission-calculator",
    "/vat-calculator",
    "/cagr-calculator",
    "/loan-payment-calculator",
    "/hourly-rate-calculator",
    "/about",
    "/disclaimer",
    "/privacy",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
