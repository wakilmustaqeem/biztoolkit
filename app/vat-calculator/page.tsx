import type { Metadata } from "next";
import Link from "next/link";
import VatCalculator from "./vat-calculator";

export const metadata: Metadata = {
  title: "VAT / Sales Tax Calculator – Calculate Tax Amount",
  description:
    "Free VAT and sales tax calculator. Calculate tax-exclusive and tax-inclusive prices, tax amount, and net price instantly.",
  alternates: { canonical: "/vat-calculator" },
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
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
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
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-100 py-8">
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
          <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">How do you calculate VAT?</h3>
              <p>
                VAT = Amount × (VAT Rate / 100). Final Price = Amount + VAT.
              </p>
            </div>
            <div>
              <h3 className="font-medium">What is the difference between tax-exclusive and tax-inclusive?</h3>
              <p>
                Tax-exclusive means the amount does not include tax; tax-inclusive means the amount already includes tax.
              </p>
            </div>
            <div>
              <h3 className="font-medium">How do I calculate net price from a tax-inclusive amount?</h3>
              <p>
                Net Price = Tax-Inclusive Amount / (1 + Tax Rate / 100).
              </p>
            </div>
          </div>
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
            <Link href="/commission-calculator" className="text-blue-600 hover:underline">
              Commission Calculator
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
