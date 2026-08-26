import type { Metadata } from "next";
import BreakEvenCalculator from "./break-even-calculator";

export const metadata: Metadata = {
  title: "Break-even Calculator – Calculate Break-even Point",
  description: "Free break-even calculator to determine the number of units or revenue needed to cover your costs. Includes contribution margin and target profit analysis.",
  alternates: { canonical: "/break-even-calculator" },
  openGraph: {
    title: "Break-even Calculator – Calculate Break-even Point",
    description: "Calculate break-even point, contribution margin, and units needed for target profit with our free break-even calculator.",
    url: "https://biztoolkit-ashy.vercel.app/break-even-calculator",
    type: "website",
  },
};

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Break-even Calculator",
  url: "https://biztoolkit-ashy.vercel.app/break-even-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: "Calculate your break-even point in units and revenue. Determine contribution margin and required sales for target profit.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the break-even point?", acceptedAnswer: { "@type": "Answer", text: "The break-even point is the level of sales at which total revenue equals total costs, resulting in zero profit or loss." } },
    { "@type": "Question", name: "How do you calculate break-even point?", acceptedAnswer: { "@type": "Answer", text: "Break-even point (units) = Fixed Costs ÷ (Selling Price per Unit - Variable Cost per Unit)." } },
    { "@type": "Question", name: "What is contribution margin?", acceptedAnswer: { "@type": "Answer", text: "Contribution margin is the selling price per unit minus the variable cost per unit." } },
  ],
};

export default function BreakEvenCalculatorPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <BreakEvenCalculator />
    </main>
  );
}
