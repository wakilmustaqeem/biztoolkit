import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BizToolkit — Free Business & Financial Calculators",
  description: "50+ free business and financial calculators for profit, pricing, tax, ROI, finance, payroll and growth.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "BizToolkit — Free Business & Financial Calculators",
    description: "50+ free business and financial calculators for everyday decisions.",
    url: "https://biztoolkit-ashy.vercel.app",
    type: "website",
  },
};

const calculators = [
  ["profit-margin-calculator", "Profit Margin Calculator", "Calculate profit and margin from revenue and costs."],
  ["roi-calculator", "ROI Calculator", "Measure return on investment and net gain."],
  ["break-even-calculator", "Break-even Calculator", "Find break-even units and revenue."],
  ["markup-calculator", "Markup Calculator", "Set selling price from cost and markup."],
  ["discount-calculator", "Discount Calculator", "Calculate savings and final price."],
  ["commission-calculator", "Commission Calculator", "Calculate commission and total earnings."],
  ["vat-calculator", "VAT Calculator", "Calculate VAT and price including tax."],
  ["cagr-calculator", "CAGR Calculator", "Calculate compound annual growth rate."],
  ["loan-payment-calculator", "Loan Payment Calculator", "Estimate loan payments and total cost."],
  ["hourly-rate-calculator", "Hourly Rate Calculator", "Find an hourly rate from income goals."],
  ["inflation-calculator", "Inflation Calculator", "Estimate the impact of inflation over time."],
  ["sales-tax-calculator", "Sales Tax Calculator", "Calculate sales tax and total price."],
  ["tip-calculator", "Tip Calculator", "Calculate tip and total bill."],
  ["percentage-calculator", "Percentage Calculator", "Find a percentage of any number."],
  ["percent-change-calculator", "Percent Change Calculator", "Calculate percentage increase or decrease."],
  ["average-calculator", "Average Calculator", "Calculate the arithmetic mean."],
  ["simple-interest-calculator", "Simple Interest Calculator", "Calculate simple interest and total."],
  ["compound-interest-calculator", "Compound Interest Calculator", "Estimate compound interest growth."],
  ["future-value-calculator", "Future Value Calculator", "Calculate future investment value."],
  ["present-value-calculator", "Present Value Calculator", "Discount future value to today."],
  ["savings-calculator", "Savings Calculator", "Estimate savings growth with deposits."],
  ["mortgage-calculator", "Mortgage Calculator", "Estimate monthly mortgage payments."],
  ["debt-to-income-calculator", "Debt-to-Income Calculator", "Calculate your debt-to-income ratio."],
  ["commission-rate-calculator", "Commission Rate Calculator", "Calculate commission from a sale."],
  ["revenue-calculator", "Revenue Calculator", "Calculate revenue from units and price."],
  ["cost-per-unit-calculator", "Cost Per Unit Calculator", "Calculate average cost per unit."],
  ["gross-profit-calculator", "Gross Profit Calculator", "Calculate gross profit from sales and COGS."],
  ["gross-margin-calculator", "Gross Margin Calculator", "Calculate gross profit margin."],
  ["net-profit-calculator", "Net Profit Calculator", "Calculate net profit after expenses."],
  ["net-margin-calculator", "Net Margin Calculator", "Calculate net profit margin."],
  ["operating-margin-calculator", "Operating Margin Calculator", "Calculate operating profit margin."],
  ["ebitda-calculator", "EBITDA Calculator", "Calculate EBITDA from earnings components."],
  ["cash-flow-calculator", "Cash Flow Calculator", "Calculate net cash flow."],
  ["roi-percentage-calculator", "ROI Percentage Calculator", "Calculate ROI as a percentage."],
  ["break-even-units-calculator", "Break-even Units Calculator", "Find units required to break even."],
  ["markup-percentage-calculator", "Markup Percentage Calculator", "Calculate markup over cost."],
  ["price-after-discount-calculator", "Price After Discount Calculator", "Calculate final price after discount."],
  ["sales-growth-calculator", "Sales Growth Calculator", "Calculate sales growth percentage."],
  ["customer-acquisition-cost-calculator", "Customer Acquisition Cost Calculator", "Calculate average customer acquisition cost."],
  ["customer-lifetime-value-calculator", "Customer Lifetime Value Calculator", "Estimate customer lifetime value."],
  ["inventory-turnover-calculator", "Inventory Turnover Calculator", "Calculate inventory turnover ratio."],
  ["days-sales-inventory-calculator", "Days Sales Inventory Calculator", "Estimate average inventory days."],
  ["payroll-tax-calculator", "Payroll Tax Calculator", "Estimate payroll tax from wages."],
  ["hourly-to-salary-calculator", "Hourly to Salary Calculator", "Convert hourly pay to annual salary."],
  ["salary-to-hourly-calculator", "Salary to Hourly Calculator", "Convert annual salary to hourly pay."],
  ["overtime-pay-calculator", "Overtime Pay Calculator", "Calculate overtime earnings."],
  ["loan-interest-calculator", "Loan Interest Calculator", "Estimate simple loan interest."],
  ["savings-rate-calculator", "Savings Rate Calculator", "Calculate income saved as a percentage."],
  ["business-growth-calculator", "Business Growth Calculator", "Calculate compound business growth."],
  ["price-increase-calculator", "Price Increase Calculator", "Calculate a new price after an increase."],
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white px-4 py-10">
      <section className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 p-8 shadow-2xl sm:p-14">
        <div className="max-w-3xl">
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-200">BIZTOOLKIT</span>
          <h1 className="mt-6 text-5xl font-black tracking-tight sm:text-7xl">TOTAL FREE TO USE</h1>
          <p className="mt-5 text-2xl font-bold text-white">50+ Business &amp; Financial Calculators</p>
          <p className="mt-4 max-w-2xl text-slate-300">Fast, simple tools for profit, pricing, tax, ROI, finance, payroll and business growth.</p>
          <Link href="#calculators" className="mt-8 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-black text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-cyan-300">Start Calculating</Link>
        </div>
      </section>

      <section id="calculators" className="mx-auto mt-12 max-w-6xl">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div><h2 className="text-3xl font-black">All Calculators</h2><p className="mt-1 text-slate-400">Choose a free tool and get your answer in seconds.</p></div>
          <span className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300 sm:block">{calculators.length} tools</span>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {calculators.map(([slug, title, description]) => (
            <Link key={slug} href={`/${slug}`} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-lg transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.07]">
              <div className="mb-4 h-1.5 w-12 rounded-full bg-cyan-400/70 transition-all group-hover:w-20" />
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
              <span className="mt-5 inline-block text-sm font-bold text-cyan-300">Calculate →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl border-t border-white/10 pt-10 text-slate-300">
        <h2 className="text-2xl font-bold text-white">Why BizToolkit?</h2>
        <p className="mt-3 max-w-3xl leading-7">BizToolkit brings practical business and financial calculations into one free, mobile-friendly toolkit for entrepreneurs, freelancers, students and professionals.</p>
      </section>
    </main>
  );
}
