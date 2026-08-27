import type { Metadata } from "next";
import CommissionCalculator from "./commission-calculator";

export const metadata: Metadata = {
  title: "Commission Calculator – Calculate Commission and Earnings",
  description:
    "Free commission calculator to calculate commission amount and total earnings from a base amount and commission percentage.",
  alternates: {
    canonical: "/commission-calculator",
  },
  openGraph: {
    title: "Commission Calculator – Calculate Commission and Earnings",
    description:
      "Calculate commission amount and total earnings with this free commission calculator.",
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
    { "@type": "Question", name: "What is commission?", acceptedAnswer: { "@type": "Answer", text: "Commission is compensation calculated as a percentage of a sale, transaction, or other base amount." } },
    { "@type": "Question", name: "How do you calculate commission?", acceptedAnswer: { "@type": "Answer", text: "Commission amount equals the base amount multiplied by the commission percentage divided by 100." } },
    { "@type": "Question", name: "How much commission is 10% on $1,000?", acceptedAnswer: { "@type": "Answer", text: "A 10% commission on $1,000 is $100. If the commission is added to the base amount, total earnings are $1,100." } },
  ],
};

export default function CommissionCalculatorPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-100 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <CommissionCalculator />
      <div className="mx-auto mt-10 max-w-2xl space-y-8 px-4 text-gray-700">
        <section><h2 className="mb-2 text-xl font-semibold">What is Commission?</h2><p>Commission is a payment or earnings amount based on a percentage of sales, transactions, or another base amount. It is commonly used for sales representatives, freelancers, agents, and affiliate marketers.</p></section>
        <section><h2 className="mb-2 text-xl font-semibold">How to Calculate Commission</h2><p>The basic commission formula is:</p><div className="my-2 rounded-lg border border-gray-200 bg-white p-4 font-mono">Commission Amount = Base Amount × (Commission % ÷ 100)</div><p>For example, a $1,000 base amount with a 10% commission produces a $100 commission.</p></section>
        <section><h2 className="mb-2 text-xl font-semibold">Commission Example</h2><p>If a sales agent earns 8% commission on $2,500 in sales, the commission amount is $200. If the commission is added to the base amount, total earnings are $2,700.</p></section>
        <section><h2 className="mb-2 text-xl font-semibold">Who Uses Commission Calculators?</h2><p>Commission calculators are useful for sales professionals, freelancers, real estate agents, affiliate marketers, recruiters, and businesses that pay percentage-based commissions.</p></section>
      </div>
    </main>
  );
}
