import type { Metadata } from "next";
import Link from "next/link";
import PercentageCalculator from "./percentage-calculator";

export const metadata: Metadata = {
  title: "Percentage Calculator – Calculate Percentage Online",
  description:
    "Free percentage calculator to find what a specific percentage of a number is. Simple, fast, and mobile-friendly.",
  alternates: {
    canonical: "/percentage-calculator",
  },
  openGraph: {
    title: "Percentage Calculator – Calculate Percentage Online",
    description:
      "Calculate percentage of any value instantly with our free percentage calculator.",
    url: "https://biztoolkit-ashy.vercel.app/percentage-calculator",
    type: "website",
  },
};

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Percentage Calculator",
  url: "https://biztoolkit-ashy.vercel.app/percentage-calculator",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  description:
    "Calculate what a specific percentage of a number is with this free online percentage calculator.",
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
      name: "How do you calculate percentage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Percentage = (Value × Percentage) / 100. For example, 25% of 200 is (200 × 25) / 100 = 50.",
      },
    },
    {
      "@type": "Question",
      name: "What is percentage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Percentage means per hundred. It represents a fraction of 100.",
      },
    },
  ],
};

export default function PercentageCalculatorPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-100 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PercentageCalculator />

      <div className="max-w-2xl mx-auto px-4 mt-10 space-y-8 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold mb-2">What is Percentage?</h2>
          <p>
            Percentage means per hundred. It is a way to express a number as a
            fraction of 100, making it easier to compare proportions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Percentage Formula</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-4 my-2 font-mono">
            Percentage Value = (Base Value × Percentage) / 100
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Example</h2>
          <p>
            What is 25% of 200?
            <br />
            (200 × 25) / 100 = 50
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Related Calculators</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/discount-calculator" className="text-blue-600 hover:underline">
              Discount Calculator
            </Link>
            <Link href="/profit-margin-calculator" className="text-blue-600 hover:underline">
              Profit Margin Calculator
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
