import type { Metadata } from "next";
import Link from "next/link";
import MarkupCalculator from "./markup-calculator";

export const metadata: Metadata = {
  title: "Markup Calculator – Calculate Selling Price",
  description:
    "Free markup calculator to determine selling price based on cost and markup percentage. Learn the difference between markup and profit margin.",
  alternates: {
    canonical: "/markup-calculator",
  },
  openGraph: {
    title: "Markup Calculator – Calculate Selling Price",
    description:
      "Calculate markup amount, selling price, and gross profit margin instantly with our free markup calculator.",
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
    "Calculate markup amount, selling price, and gross profit margin from cost price and markup percentage.",
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
        text: "Markup is the amount added to the cost price of a product to determine its selling price, usually expressed as a percentage of cost.",
      },
    },
    {
      "@type": "Question",
      name: "How is markup different from margin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Markup is calculated on cost, while profit margin is calculated on selling price. A 50% markup results in a 33.3% profit margin.",
      },
    },
    {
      "@type": "Question",
      name: "How do you calculate selling price from markup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Selling Price = Cost Price + (Cost Price × Markup Percentage / 100).",
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

      <div className="max-w-2xl mx-auto px-4 mt-10 space-y-8 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold mb-2">What is Markup?</h2>
          <p>
            Markup is the difference between the selling price of a product
            and its cost. It represents the amount you add to cover overheads
            and generate a profit.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Markup Formula</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-4 my-2 font-mono">
            Markup Amount = Cost Price × (Markup % / 100)
            <br />
            Selling Price = Cost Price + Markup Amount
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Example Calculation</h2>
          <p>
            If a product costs $50 and you mark it up by 60%, then:
            <br />
            Markup Amount = $50 × 0.60 = $30
            <br />
            Selling Price = $50 + $30 = $80
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Markup vs. Profit Margin</h2>
          <p>
            Markup is based on the <strong>cost price</strong>, while profit
            margin is based on the <strong>selling price</strong>. In the
            above example, the gross profit margin is ($30 / $80) × 100 =
            37.5%.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">What is markup?</h3>
              <p>
                Markup is the amount added to the cost price of a product to
                determine its selling price, usually expressed as a percentage
                of cost.
              </p>
            </div>
            <div>
              <h3 className="font-medium">How is markup different from margin?</h3>
              <p>
                Markup is calculated on cost, while profit margin is
                calculated on selling price. A 50% markup results in a 33.3%
                profit margin.
              </p>
            </div>
            <div>
              <h3 className="font-medium">How do you calculate selling price from markup?</h3>
              <p>
                Selling Price = Cost Price + (Cost Price × Markup Percentage /
                100).
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Related Calculators</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/profit-margin-calculator" className="text-blue-600 hover:underline">
              Profit Margin Calculator
            </Link>
            <Link href="/discount-calculator" className="text-blue-600 hover:underline">
              Discount Calculator
            </Link>
            <Link href="/vat-calculator" className="text-blue-600 hover:underline">
              VAT Calculator
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
