import type { Metadata } from "next";
import MarkupCalculator from "./markup-calculator";

export const metadata: Metadata = {
  title: "Markup Calculator – Calculate Selling Price",
  description: "Free markup calculator to determine selling price based on cost and markup percentage. Learn the difference between markup and profit margin.",
  alternates: { canonical: "/markup-calculator" },
  openGraph: { title: "Markup Calculator – Calculate Selling Price", description: "Calculate markup amount, selling price, and gross profit margin instantly with our free markup calculator.", url: "https://biztoolkit-ashy.vercel.app/markup-calculator", type: "website" },
};

const webAppJsonLd = { "@context": "https://schema.org", "@type": "WebApplication", name: "Markup Calculator", url: "https://biztoolkit-ashy.vercel.app/markup-calculator", applicationCategory: "BusinessApplication", operatingSystem: "Web", description: "Calculate markup amount, selling price, and gross profit margin from cost price and markup percentage.", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } };
const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "What is markup?", acceptedAnswer: { "@type": "Answer", text: "Markup is the amount added to the cost price of a product to determine its selling price, usually expressed as a percentage of cost." } }, { "@type": "Question", name: "How is markup different from margin?", acceptedAnswer: { "@type": "Answer", text: "Markup is calculated on cost, while profit margin is calculated on selling price. A 50% markup results in a 33.3% profit margin." } }] };

export default function MarkupCalculatorPage() { return <main className="min-h-screen bg-gray-50 py-8"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} /><MarkupCalculator /></main>; }
