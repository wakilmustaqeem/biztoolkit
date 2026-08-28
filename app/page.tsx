import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Business Calculators | BizToolkit",
  description:
    "Use free profit margin, ROI, break-even, markup, discount, commission, and VAT calculators for freelancers and small businesses.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Free Business Calculators | BizToolkit",
    description:
      "Calculate profit margin, ROI, break-even, markup, discounts, commissions, and VAT with free business tools.",
    url: "https://biztoolkit-ashy.vercel.app",
    type: "website",
  },
};

const calculators = [
  { href: "/profit-margin-calculator", title: "Profit Margin Calculator", description: "Calculate net profit and profit margin from revenue and total costs." },
  { href: "/roi-calculator", title: "ROI Calculator", description: "Measure return on investment, net profit, and annualized ROI." },
  { href: "/break-even-calculator", title: "Break-even Calculator", description: "Find break-even units and revenue to cover fixed and variable costs." },
  { href: "/markup-calculator", title: "Markup Calculator", description: "Determine selling price from cost and markup percentage, and see profit margin." },
  { href: "/discount-calculator", title: "Discount Calculator", description: "Calculate discount amount, final price, and savings on any purchase." },
  { href: "/commission-calculator", title: "Commission Calculator", description: "Compute commission amount and total earnings from a base amount." },
  { href: "/vat-calculator", title: "VAT / Sales Tax Calculator", description: "Calculate tax amount, net price, and final price for VAT or sales tax." },
  { href: "/percentage-calculator", title: "Percentage Calculator", description: "Calculate what a percentage of any number is." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 py-12 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">Free Business Calculators</h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-6">Simple, fast tools for pricing, profit, tax, ROI, and everyday business decisions.</p>
        <Link href="#calculators" className="inline-block bg-indigo-500 text-white px-6 py-3 rounded-xl font-bold shadow-[0_6px_0_rgba(79,70,229,0.45)] hover:bg-indigo-400 transition active:translate-y-1 active:shadow-none">Start Calculating</Link>
      </div>

      <div id="calculators" className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">Free Business Calculators</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {calculators.map((calc) => (
            <Link key={calc.href} href={calc.href} className="rounded-3xl bg-gradient-to-b from-slate-800 to-slate-900 p-6 border border-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.35)] hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold text-white mb-2">{calc.title}</h3>
              <p className="text-slate-300 text-sm">{calc.description}</p>
            </Link>
          ))}
        </div>
      </div>

      <section className="max-w-5xl mx-auto mt-16 text-slate-300">
        <h2 className="text-2xl font-semibold mb-4 text-white">Why Use These Business Calculators?</h2>
        <p>Whether you’re a freelancer setting your rates, an entrepreneur evaluating a project, or a small business owner planning pricing, these tools help you understand your numbers quickly. All calculators are free, easy to use, and work on any device.</p>
      </section>
    </div>
  );
}
