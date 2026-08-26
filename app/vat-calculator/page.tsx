import type { Metadata } from "next";
import VatCalculator from "./vat-calculator";

export const metadata: Metadata = {
  title: "VAT / Sales Tax Calculator – Calculate Tax Amount",
  description:
    "Free VAT and sales tax calculator. Calculate tax-exclusive and tax-inclusive prices, tax amount, and net price instantly.",
  alternates: {
    canonical: "/vat-calculator",
  },
  openGraph: {
    title: "VAT / Sales Tax Calculator – Calculate Tax Amount",
    description:
      "Calculate VAT or sales tax for any amount. Choose tax-exclusive or tax-inclusive mode and get instant results.",
    url: "https://biztoolkit-ashy.vercel.app/vat-calculator",
    type: "website",
  },
};

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "VAT / Sales Tax Calculator",
  url: "https://biztoolkit-ashy.vercel.app/vat-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Calculate VAT or sales tax from a given amount and tax rate. Supports tax-exclusive and tax-inclusive calculations.",
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
      name: "How do you calculate VAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VAT = Amount × (VAT Rate / 100). Final Price = Amount + VAT. For tax-inclusive prices, VAT = Amount - (Amount / (1 + Rate / 100)).",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between tax-exclusive and tax-inclusive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tax-exclusive means the amount does not include tax, and tax is added. Tax-inclusive means the amount already includes tax, and you need to find the net amount and tax portion.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use this for sales tax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the calculator works for VAT, sales tax, GST, or any percentage-based tax.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate net price from a tax-inclusive amount?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Net Price = Tax-Inclusive Amount / (1 + Tax Rate / 100). The tax amount is the difference between the gross and net price.",
      },
    },
  ],
};

export default function VatCalculatorPage() {
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
      <VatCalculator />

      <div className="max-w-2xl mx-auto px-4 mt-10 space-y-8 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold mb-2">What is VAT?</h2>
          <p>
            Value Added Tax (VAT) is a consumption tax added to the price of
            goods and services. This calculator helps you determine the tax
            amount, net price, and final price based on the tax rate.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">How to Calculate VAT</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-4 my-2 font-mono">
            Tax-Exclusive:
            <br />
            VAT = Amount × (Rate / 100)
            <br />
            Final Price = Amount + VAT
            <br />
            <br />
            Tax-Inclusive:
            <br />
            Net Price = Amount / (1 + Rate / 100)
            <br />
            VAT = Amount - Net Price
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Example Calculation</h2>
          <p>
            Suppose you have an amount of $100 and a VAT rate of 15%.
            <br />
            Tax-Exclusive: VAT = $15, Final Price = $115
            <br />
            Tax-Inclusive: Net Price = $86.96, VAT = $13.04
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Why Use This Calculator?</h2>
          <p>
            Quickly calculate tax for invoices, pricing, or personal finance.
            It’s useful for freelancers, small businesses, and anyone dealing
            with sales tax or VAT.
          </p>
        </section>
      </div>
    </main>
  );
}
