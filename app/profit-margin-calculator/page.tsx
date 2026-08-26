import type { Metadata } from "next";
import Link from "next/link";
import ProfitMarginCalculator from "./profit-margin-calculator";

export const metadata: Metadata = {
  title: "Profit Margin Calculator – Calculate Net Profit & Margin",
  description:
    "Free profit margin calculator to find net profit and profit margin from revenue and total costs. Includes formula, example, and FAQ.",
  alternates: {
    canonical: "/profit-margin-calculator",
  },
  openGraph: {
    title: "Profit Margin Calculator – Calculate Net Profit & Margin",
    description:
      "Calculate profit margin and net profit instantly. Learn the formula and see practical examples.",
    url: "https://biztoolkit-ashy.vercel.app/profit-margin-calculator",
    type: "website",
  },
};

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Profit Margin Calculator",
  url: "https://biztoolkit-ashy.vercel.app/profit-margin-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Calculate net profit and profit margin from revenue and total costs.",
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
      name: "How do you calculate profit margin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Profit margin = (Revenue - Total Cost) / Revenue × 100. It shows the percentage of revenue that becomes profit.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between gross profit margin and net profit margin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gross profit margin only considers direct costs (COGS), while net profit margin includes all operating expenses, taxes, and interest.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good profit margin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the industry, business model, and cost structure. A useful benchmark is to compare your margin with businesses in the same industry rather than using one universal target.",
      },
    },
    {
      "@type": "Question",
      name: "How is profit margin different from markup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Profit margin is calculated on revenue, while markup is calculated on cost. A 50% markup results in a 33.3% profit margin.",
      },
    },
  ],
};

export default function ProfitMarginCalculatorPage() {
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
      <ProfitMarginCalculator />

      <div className="max-w-2xl mx-auto px-4 mt-10 space-y-8 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold mb-2">What is Profit Margin?</h2>
          <p>
            Profit margin is a financial metric that shows the percentage of revenue that remains after subtracting costs. It helps businesses understand how efficiently they are generating profit from sales.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">How to Calculate Profit Margin</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-4 my-2 font-mono">
            Net Profit = Revenue − Total Cost
            <br />
            Profit Margin = (Net Profit / Revenue) × 100
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Example Calculation</h2>
          <p>
            If your revenue is $2,000 and total cost is $1,200:
            <br />
            Net Profit = $800
            <br />
            Profit Margin = ($800 / $2,000) × 100 = 40%
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Gross Margin vs Net Margin</h2>
          <p>
            Gross margin focuses on revenue after direct costs such as cost of goods sold, while net margin considers the broader costs of running a business, including operating expenses, interest, and taxes. Both measures are useful for different levels of profitability analysis.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Profit Margin vs Markup</h2>
          <p>
            Profit margin is based on revenue, while markup is based on cost. For example, a 50% markup on a $100 cost gives a selling price of $150, but the profit margin is only ($50 / $150) × 100 = 33.3%.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">How do you calculate profit margin?</h3>
              <p>
                Profit margin = (Revenue - Total Cost) / Revenue × 100. It shows the percentage of revenue that becomes profit.
              </p>
            </div>
            <div>
              <h3 className="font-medium">What is the difference between gross profit margin and net profit margin?</h3>
              <p>
                Gross margin focuses on direct costs, while net margin includes the wider expenses of running the business.
              </p>
            </div>
            <div>
              <h3 className="font-medium">What is a good profit margin?</h3>
              <p>
                It varies by industry and business model. Compare your margin with relevant industry benchmarks and your own historical results.
              </p>
            </div>
            <div>
              <h3 className="font-medium">How is profit margin different from markup?</h3>
              <p>
                Profit margin uses revenue as the base, while markup uses cost as the base.
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
            <Link href="/roi-calculator" className="text-blue-600 hover:underline">
              ROI Calculator
            </Link>
            <Link href="/break-even-calculator" className="text-blue-600 hover:underline">
              Break-even Calculator
            </Link>
            <Link href="/discount-calculator" className="text-blue-600 hover:underline">
              Discount Calculator
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
