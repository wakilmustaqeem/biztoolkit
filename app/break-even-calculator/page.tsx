import type { Metadata } from "next";
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
        text: "Break-even point in units equals Fixed Costs divided by Selling Price per Unit minus Variable Cost per Unit. The result tells you how many units you need to sell to cover all costs.",
      },
    },
    {
      "@type": "Question",
      name: "What is contribution margin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contribution margin is the selling price per unit minus the variable cost per unit. It shows how much each unit contributes toward covering fixed costs and generating profit.",
      },
    },
    {
      "@type": "Question",
      name: "How is break-even revenue calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Break-even revenue equals break-even units multiplied by selling price per unit. It is the total sales revenue required to break even.",
      },
    },
  ],
};

export default function BreakEvenCalculatorPage() {
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
      <BreakEvenCalculator />

      <div className="mx-auto mt-10 max-w-2xl space-y-8 px-4 text-gray-700">
        <section>
          <h2 className="mb-2 text-xl font-semibold">What is Break-even Point?</h2>
          <p>
            The break-even point is the point where total revenue equals total costs. At this point, a business is neither making a profit nor a loss. Knowing your break-even point helps you set sales targets and evaluate pricing decisions.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold">How to Calculate Break-even Point</h2>
          <p>The formula for break-even in units is:</p>
          <div className="my-2 rounded-lg border border-gray-200 bg-white p-4 font-mono">
            Break-even Units = Fixed Costs ÷ (Selling Price per Unit − Variable Cost per Unit)
          </div>
          <p>
            Break-even revenue can then be calculated by multiplying break-even units by the selling price per unit.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold">Break-even Example</h2>
          <p>
            Suppose fixed costs are $10,000, variable cost per unit is $20, and selling price is $50.
          </p>
          <p>
            Contribution margin = $50 − $20 = $30
            <br />
            Break-even units = $10,000 ÷ $30 = 333.33 units
            <br />
            Break-even revenue = 333.33 × $50 = $16,666.67
          </p>
          <p className="mt-2">
            Because units are normally sold as whole units, the practical minimum is 334 units to fully cover the costs.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold">Contribution Margin</h2>
          <p>
            Contribution margin is the amount remaining from each sale after variable costs. It contributes toward fixed costs first and then toward profit once fixed costs have been covered.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold">Target Profit Analysis</h2>
          <p>
            You can also calculate the number of units needed to achieve a specific profit target using this formula:
          </p>
          <div className="my-2 rounded-lg border border-gray-200 bg-white p-4 font-mono">
            Units for Target Profit = (Fixed Costs + Target Profit) ÷ Contribution Margin
          </div>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold">Break-even vs ROI</h2>
          <p>
            Break-even analysis tells you how many units or how much revenue is needed to cover costs. ROI measures the return earned relative to an investment. They answer different business questions and can be used together when evaluating a product, project, or investment.
          </p>
        </section>
      </div>
    </main>
  );
}
