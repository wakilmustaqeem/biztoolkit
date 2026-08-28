import type { Metadata } from "next";
import Link from "next/link";
import CommissionCalculator from "./commission-calculator";

export const metadata: Metadata = {
  title: "Commission Calculator – Calculate Commission",
  description:
    "Free commission calculator to compute commission amount and total earnings from a base amount and commission percentage.",
  alternates: { canonical: "/commission-calculator" },
  openGraph: {
    title: "Commission Calculator – Calculate Commission",
    description:
      "Calculate commission amount and total earnings instantly with our free commission calculator.",
    url: "https://biztoolkit-ashy.vercel.app/commission-calculator",
    type: "website",
  },
};

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Commission Calculator",
  url: "https://biztoolkit-ashy.vercel.app/commission-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Calculate commission amount and total earnings from a base amount and commission percentage.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you calculate commission?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Commission Amount = Base Amount × (Commission Percentage / 100). Total Earnings = Base Amount + Commission Amount.",
      },
    },
    {
      "@type": "Question",
      name: "What is a typical commission rate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Commission rates vary by industry. Sales commissions often range from 5% to 20%, but it depends on the role and product.",
      },
    },
  ],
};

export default function CommissionCalculatorPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-100 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <CommissionCalculator />

      <div className="max-w-2xl mx-auto px-4 mt-10 space-y-8 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold mb-2">What is Commission?</h2>
          <p>Commission is a fee or percentage of a sale that is paid to a salesperson, agent, or affiliate for generating a transaction or completing a service.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Commission Formula</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-4 my-2 font-mono">
            Commission Amount = Base Amount × (Commission % / 100)
            <br />
            Total Earnings = Base Amount + Commission Amount
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Example Calculation</h2>
          <p>
            If your base amount is $1,000 and your commission rate is 10%:
            <br />
            Commission Amount = $1,000 × 0.10 = $100
            <br />
            Total Earnings = $1,100
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">How do you calculate commission?</h3>
              <p>Commission Amount = Base Amount × (Commission Percentage / 100).</p>
            </div>
            <div>
              <h3 className="font-medium">What is a typical commission rate?</h3>
              <p>Commission rates vary by industry. Sales commissions often range from 5% to 20%.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Related Calculators</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/profit-margin-calculator" className="text-blue-600 hover:underline">Profit Margin Calculator</Link>
            <Link href="/vat-calculator" className="text-blue-600 hover:underline">VAT Calculator</Link>
            <Link href="/discount-calculator" className="text-blue-600 hover:underline">Discount Calculator</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
