import type { Metadata } from "next";
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
    {
      "@type": "Question",
      name: "What is a good discount percentage for a sale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your profit margin and goals. Common retail discounts range from 10% to 30%, but deeper discounts may be used for clearance or special promotions.",
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

      <div className="mx-auto mt-10 max-w-2xl space-y-8 px-4 text-gray-700">
        <section>
          <h2 className="mb-2 text-xl font-semibold">What is a Discount Calculator?</h2>
          <p>
            A discount calculator helps you determine the final price of a
            product or service after applying a percentage discount. It shows
            the discount amount, final price, and total savings.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold">Discount Formula</h2>
          <div className="my-2 rounded-lg border border-gray-200 bg-white p-4 font-mono">
            Discount Amount = Original Price × (Discount % / 100)
            <br />
            Final Price = Original Price − Discount Amount
          </div>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold">Example Calculation</h2>
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
          <h2 className="mb-2 text-xl font-semibold">Why Use This Calculator?</h2>
          <p>
            Quickly determine sale prices, understand savings, and avoid manual
            calculation errors. It’s useful for shoppers and business owners
            alike.
          </p>
        </section>
      </div>
    </main>
  );
}
