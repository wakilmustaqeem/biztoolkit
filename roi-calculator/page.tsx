import type { Metadata } from "next";
import RoiCalculator from "./roi-calculator";

export const metadata: Metadata = {
  title: "ROI Calculator – Calculate Return on Investment",
  description:
    "Free ROI calculator to measure return on investment. Calculate net profit, ROI percentage, ROI multiple, and annualized ROI for any investment.",
  alternates: {
    canonical: "/roi-calculator",
  },
  openGraph: {
    title: "ROI Calculator – Calculate Return on Investment",
    description:
      "Calculate ROI instantly. Input investment and return to get net profit, ROI %, multiple, and annualized ROI.",
    url: "https://biztoolkit-ashy.vercel.app/roi-calculator",
    type: "website",
  },
};

const webApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "ROI Calculator",
  url: "https://biztoolkit-ashy.vercel.app/roi-calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  description:
    "Calculate return on investment (ROI) with net profit, ROI %, multiple, and annualized ROI.",
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
      name: "How do I calculate ROI in Excel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use the formula =(Return - Investment) / Investment and format the result as a percentage.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between ROI and IRR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ROI is a simple percentage return. IRR (Internal Rate of Return) accounts for the time value of money and the timing of cash flows. Annualized ROI is a simplified annualized return for a single investment and is not equivalent to IRR when there are multiple cash flows.",
      },
    },
    {
      "@type": "Question",
      name: "Can ROI be negative?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If the return is less than the investment, ROI will be negative, indicating a loss.",
      },
    },
    {
      "@type": "Question",
      name: "Is ROI calculated before or after tax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ROI can be calculated either way. State whether your inputs are pre-tax or after-tax and use the same basis when comparing investments.",
      },
    },
  ],
};

export default function RoiCalculatorPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <RoiCalculator />

      <div className="mx-auto mt-10 max-w-2xl space-y-8 px-4 text-gray-700">
        <section>
          <h2 className="mb-2 text-xl font-semibold">What is ROI?</h2>
          <p>
            Return on Investment (ROI) measures the profitability of an investment. It is expressed as a percentage and shows how much profit you earn relative to the amount invested.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold">How to Calculate ROI</h2>
          <p>The basic formula is:</p>
          <div className="my-2 rounded-lg border border-gray-200 bg-white p-4 font-mono">
            ROI % = (Net Profit / Investment) × 100
          </div>
          <p>Where Net Profit = Total Return − Investment.</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold">Practical Example</h2>
          <p>
            If you invest $1,000 and later get back $1,500, then:
            <br />
            Net Profit = $500
            <br />
            ROI = (500 / 1000) × 100 = 50%
            <br />
            ROI Multiple = 1.5x
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold">ROI vs Profit Margin</h2>
          <p>
            ROI measures the return on the money you invested, while profit margin measures the percentage of revenue that is profit. ROI is used for investments, whereas profit margin is used for sales and revenue analysis.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold">What is a Good ROI?</h2>
          <p>
            A “good” ROI depends on the industry and risk level. There is no universal threshold; compare ROI with the relevant benchmark, cost of capital, and risk of the investment.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold">What is Annualized ROI?</h2>
          <p>
            Annualized ROI normalizes a single investment’s return to a yearly rate, making it easier to compare investments with different durations. The formula used is:
          </p>
          <div className="my-2 rounded-lg border border-gray-200 bg-white p-4 font-mono">
            Annualized ROI = (Return / Investment)^(1/years) − 1
          </div>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold">FAQ</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">How do I calculate ROI in Excel?</h3>
              <p>
                Use the formula <code>=(Return - Investment) / Investment</code> and format the result as a percentage. Or use our calculator for instant results.
              </p>
            </div>
            <div>
              <h3 className="font-medium">What is the difference between ROI and IRR?</h3>
              <p>
                ROI is a simple percentage return. IRR (Internal Rate of Return) accounts for the time value of money and the timing of cash flows. Annualized ROI is a simplified annualized return for a single investment and is not equivalent to IRR when there are multiple cash flows.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Can ROI be negative?</h3>
              <p>
                Yes. If the return is less than the investment, ROI will be negative, indicating a loss.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Is ROI calculated before or after tax?</h3>
              <p>
                ROI can be calculated either way. The important point is to state whether your inputs are pre-tax or after-tax and use the same basis when comparing investments.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
