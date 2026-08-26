import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Business Calculators | BizToolkit",
  description:
    "Use free profit margin, ROI, break-even, markup, discount, commission, and VAT calculators for freelancers and small businesses.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Free Business Calculators | BizToolkit",
    description:
      "Calculate profit margin, ROI, break-even, markup, discounts, commissions, and VAT with free business tools.",
    url: "https://biztoolkit-ashy.vercel.app",
    type: "website",
  },
};

const calculators = [
  {
    href: "/profit-margin-calculator",
    title: "Profit Margin Calculator",
    description: "Calculate net profit and profit margin from revenue and total costs.",
  },
  {
    href: "/roi-calculator",
    title: "ROI Calculator",
    description: "Measure return on investment, net profit, and annualized ROI.",
  },
  {
    href: "/break-even-calculator",
    title: "Break-even Calculator",
    description: "Find break-even units and revenue to cover fixed and variable costs.",
  },
  {
    href: "/markup-calculator",
    title: "Markup Calculator",
    description: "Determine selling price from cost and markup percentage, and see profit margin.",
  },
  {
    href: "/discount-calculator",
    title: "Discount Calculator",
    description: "Calculate discount amount, final price, and savings on any purchase.",
  },
  {
    href: "/commission-calculator",
    title: "Commission Calculator",
    description: "Compute commission amount and total earnings from a base amount.",
  },
  {
    href: "/vat-calculator",
    title: "VAT / Sales Tax Calculator",
    description: "Calculate tax amount, net price, and final price for VAT or sales tax.",
  },
];

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Free Business Calculators
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          Simple, fast tools for pricing, profit, tax, ROI, and everyday business decisions.
        </p>
        <Link
          href="#calculators"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Start Calculating
        </Link>
      </div>

      <div id="calculators" className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Free Business Calculators
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {calculators.map((calc) => (
            <Link
              key={calc.href}
              href={calc.href}
              className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition border border-gray-200"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{calc.title}</h3>
              <p className="text-gray-600">{calc.description}</p>
            </Link>
          ))}
        </div>
      </div>

      <section className="max-w-5xl mx-auto mt-16 text-gray-700">
        <h2 className="text-2xl font-semibold mb-4">
          Why Use These Business Calculators?
        </h2>
        <p>
          Whether you’re a freelancer setting your rates, an entrepreneur
          evaluating a project, or a small business owner planning pricing,
          these tools help you understand your numbers quickly. All
          calculators are free, easy to use, and work on any device.
        </p>
      </section>
    </div>
  );
}
