import type { Metadata } from "next";
import Link from "next/link";
import DiscountCalculator from "./discount-calculator";

export const metadata: Metadata = {
  title: "Discount Calculator – Calculate Sale Price",
  description:
    "Free discount calculator to find the final price after a percentage discount. Calculate discount amount, savings, and sale price instantly.",
  alternates: {
    canonical: "/discount-calculator",
  },
  openGraph: {
    title: "Discount Calculator – Calculate Sale Price",
    description:
      "Calculate discount amount, final price, and savings with our free discount calculator.",
    url: "https://biztoolkit-ashy.vercel.app/discount-calculator",
    type: "website",
  },
};

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Discount Calculator",
  url: "https://biztoolkit-ashy.vercel.app/discount-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Calculate discount amount, final price, and savings based on original price and discount percentage.",
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
      name: "How do you calculate a discount?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Discount Amount = Original Price × (Discount Percentage / 100). Final Price = Original Price - Discount Amount.",
      },
    },
    {
      "@type": "Question",
      name: "What is the formula for discount percentage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Discount Percentage = (Discount Amount / Original Price) × 100.",
      },
    },
    {
      "@type": "Question",
      name: "How do I find the original price after a discount?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you know the final price and discount percentage, you can use: Original Price = Final Price / (1 - Discount Percentage / 100).",
      },
    },
  ],
};

export default function DiscountCalculatorPage() {
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

      <DiscountCalculator />

      <div className="max-w-2xl mx-auto px-4 mt-10 space-y-8 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold mb-2">What is a Discount Calculator?</h2>
          <p>
            A discount calculator helps you determine the final price of a
            product or service after applying a percentage discount. It shows
            the discount amount, final price, and total savings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Discount Formula</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-4 my-2 font-mono">
            Discount Amount = Original Price × (Discount % / 100)
            <br />
            Final Price = Original Price − Discount Amount
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Example Calculation</h2>
          <p>
            If an item costs $200 and you apply a 25% discount:
            <br />
            Discount Amount = $200 × 0.25 = $50
            <br />
            Final Price = $200 − $50 = $150
            <br />
            You Save = $50
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">How do you calculate a discount?</h3>
              <p>
                Discount Amount = Original Price × (Discount Percentage / 100).
              </p>
            </div>
            <div>
              <h3 className="font-medium">What is the formula for discount percentage?</h3>
              <p>
                Discount Percentage = (Discount Amount / Original Price) × 100.
              </p>
            </div>
            <div>
              <h3 className="font-medium">How do I find the original price after a discount?</h3>
              <p>
                Original Price = Final Price / (1 - Discount Percentage / 100).
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Related Calculators</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/markup-calculator" className="text-blue-600 hover:underline">
              Markup Calculator
            </Link>
            <Link href="/profit-margin-calculator" className="text-blue-600 hover:underline">
              Profit Margin Calculator
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
