import type { Metadata } from "next";
import MarkupCalculator from "./markup-calculator";

export const metadata: Metadata = {
  title: "Markup Calculator – Calculate Selling Price and Margin",
  description:
    "Free markup calculator to calculate markup amount, selling price, and profit margin from cost and markup percentage.",
  alternates: {
    canonical: "/markup-calculator",
  },
  openGraph: {
    title: "Markup Calculator – Calculate Selling Price and Margin",
    description:
      "Calculate markup amount, selling price, and profit margin with this free markup calculator.",
    url: "https://biztoolkit-ashy.vercel.app/markup-calculator",
    type: "website",
  },
};

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Markup Calculator",
  url: "https://biztoolkit-ashy.vercel.app/markup-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Calculate markup amount, selling price, and profit margin from cost and markup percentage.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is markup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Markup is the amount added to the cost of a product to determine its selling price. It is commonly expressed as a percentage of cost.",
      },
    },
    {
      "@type": "Question",
      name: "How do you calculate markup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Markup amount equals cost multiplied by the markup percentage divided by 100. Selling price equals cost plus markup amount.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between markup and margin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Markup is calculated as a percentage of cost, while profit margin is calculated as a percentage of selling price. For example, a 60% markup produces a 37.5% profit margin.",
      },
    },
  ],
};

export default function MarkupCalculatorPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <MarkupCalculator />

      <div className="mx-auto mt-10 max-w-2xl space-y-8 px-4 text-gray-700">
        <section>
          <h2 className="mb-2 text-xl font-semibold">What is Markup?</h2>
          <p>
            Markup is the amount added to the cost of a product or service to determine its selling price. Businesses use markup to cover operating costs and generate profit.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold">How to Calculate Markup</h2>
          <p>The basic markup formulas are:</p>
          <div className="my-2 rounded-lg border border-gray-200 bg-white p-4 font-mono">
            Markup Amount = Cost × (Markup % ÷ 100)
            <br />
            Selling Price = Cost + Markup Amount
          </div>
          <p>
            For example, a $50 cost with a 60% markup produces a $30 markup and an $80 selling price.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold">Markup vs Margin</h2>
          <p>
            Markup is calculated from cost, while profit margin is calculated from selling price. A 60% markup on a $50 cost gives an $80 selling price and a 37.5% profit margin.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold">Markup Example</h2>
          <p>
            If an item costs $100 and you apply a 25% markup, the markup amount is $25 and the selling price is $125. The resulting profit margin is 20%.
          </p>
        </section>
      </div>
    </main>
  );
}
