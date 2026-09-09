import type { MetadataRoute } from "next";
import calculatorManifest from "../calculator-manifest.json";

const baseUrl = "https://biztoolkit-ashy.vercel.app";

type CalculatorBatch = { slug: string };

function calculatorRoutes(): string[] {
  const baseline = calculatorManifest.baseline.map((slug) => `/${slug}`);
  const batches = (calculatorManifest.batches as CalculatorBatch[]).map((item) => `/${item.slug}`);

  return [...new Set([...baseline, ...batches])];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/calculators",
    ...calculatorRoutes(),
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
