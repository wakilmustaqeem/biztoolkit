import type { Metadata } from "next";
import Link from "next/link";
import BreakEvenCalculator from "./break-even-calculator";

export const metadata: Metadata = {
  title: "Break-even Calculator – Calculate Break-even Point",
  description:
    "Free break-even calculator to determine the number of units or revenue needed to cover your costs. Includes contribution margin and target profit analysis.",
  alternates: {
    canonical: "/break-even-calculator",
  },
  openGraph: {
    title: "Break-even Calculator – Calculate Break-even Point",
    description:
      "Calculate break-even point, contribution margin, and units needed for target profit with our free break-even calculator.",
    url: "https://biztoolkit-ashy.vercel.app/break-even-calculator",
    type: "website",
  },
};

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Break-even Calculator",
  url: "https://biztoolkit-ashy.vercel.app/break-even-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Calculate your break-even point in units and revenue. Determine contribution margin and required sales for target profit.",
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
      name: "What is the break-even point?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The break-even point is the level of sales at which total revenue equals total costs, resulting in zero profit or loss.",
      },
    },
    {
      "@type": "Question",
      name: "How do you calculate break-even point?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Break-even point (units) = Fixed Costs ÷ (Selling Price per Unit - Variable Cost per Unit).",
      },
    },
    {
      "@type": "Question",
      name: "What is contribution margin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contribution margin is the selling price per unit minus the variable cost per unit. It contributes toward fixed costs and profit.",
      },
    },
  ],
};

export default function BreakEvenCalculatorPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-100 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <BreakEvenCalculator />

      <div className="max-w-2xl mx-auto px-4 mt-10 space-y-8 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold mb-2">What is Break-even Point?</h2>
          <p>
            The break-even point is the point where your total revenue equals
            your total costs. At this point, your business is neither making a
            profit nor a loss. Knowing your break-even point helps you set
            sales targets and pricing strategies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">How to Calculate Break-even Point</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-4 my-2 font-mono">
            Break-even Units = Fixed Costs ÷ (Selling Price per Unit − Variable Cost per Unit)
          </div>
          <p>
            Break-even revenue is then calculated by multiplying the number of
            units by the selling price per unit.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Break-even Example</h2>
          <p>
            Suppose fixed costs are $10,000, variable cost per unit is $20,
            and selling price is $50.
          </p>
          <p>
            Contribution margin = $50 − $20 = $30
            <br />
            Break-even units = $10,000 ÷ $30 = 333.33 units
            <br />
            Break-even revenue = 333.33 × $50 = $16,666.67
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Because units are normally sold as whole units, the practical
            minimum is 334 units to fully cover the costs.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Contribution Margin</h2>
          <p>
            Contribution margin is the amount remaining from each sale after
            variable costs. It contributes toward fixed costs first and then
            toward profit once fixed costs have been covered.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">What is the break-even point?</h3>
              <p>
                The break-even point is the level of sales at which total
                revenue equals total costs, resulting in zero profit or loss.
              </p>
            </div>
            <div>
              <h3 className="font-medium">How do you calculate break-even point?</h3>
              <p>
                Break-even point (units) = Fixed Costs ÷ (Selling Price per
                Unit - Variable Cost per Unit).
              </p>
            </div>
            <div>
              <h3 className="font-medium">What is contribution margin?</h3>
              <p>
                Contribution margin is the selling price per unit minus the
                variable cost per unit.
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
            <Link href="/roi-calculator" className="text-blue-600 hover:underline">
              ROI Calculator
            </Link>
            <Link href="/markup-calculator" className="text-blue-600 hover:underline">
              Markup Calculator
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
