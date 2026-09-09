import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BizToolkit — Free Business & Financial Calculators",
  description: "50+ free business and financial calculators for profit, pricing, tax, ROI, finance, payroll and growth.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "BizToolkit — Free Business & Financial Calculators",
    description: "50+ free business and financial calculators for everyday decisions.",
    url: "https://biztoolkit-wheat.vercel.app",
    type: "website",
  },
};

const calculators = [
  ["profit-margin-calculator", "Profit Margin", "Calculate profit and margin from revenue and costs.", "Profit"],
  ["roi-calculator", "ROI Calculator", "Measure return on investment and net gain.", "Profit"],
  ["break-even-calculator", "Break-even", "Find break-even units and revenue.", "Profit"],
  ["markup-calculator", "Markup Calculator", "Set selling price from cost and markup.", "Pricing"],
  ["discount-calculator", "Discount Calculator", "Calculate savings and final price.", "Pricing"],
  ["commission-calculator", "Commission Calculator", "Calculate commission and total earnings.", "Pricing"],
  ["vat-calculator", "VAT Calculator", "Calculate VAT and price including tax.", "Tax"],
  ["cagr-calculator", "CAGR Calculator", "Calculate compound annual growth rate.", "Growth"],
  ["loan-payment-calculator", "Loan Payment", "Estimate loan payments and total cost.", "Finance"],
  ["hourly-rate-calculator", "Hourly Rate", "Find an hourly rate from income goals.", "Payroll"],
  ["inflation-calculator", "Inflation Calculator", "Estimate the impact of inflation over time.", "Finance"],
  ["sales-tax-calculator", "Sales Tax", "Calculate sales tax and total price.", "Tax"],
  ["tip-calculator", "Tip Calculator", "Calculate tip and total bill.", "Everyday"],
  ["percentage-calculator", "Percentage", "Find a percentage of any number.", "Everyday"],
  ["percent-change-calculator", "Percent Change", "Calculate percentage increase or decrease.", "Everyday"],
  ["average-calculator", "Average Calculator", "Calculate the arithmetic mean.", "Everyday"],
  ["simple-interest-calculator", "Simple Interest", "Calculate simple interest and total.", "Finance"],
  ["compound-interest-calculator", "Compound Interest", "Estimate compound interest growth.", "Finance"],
  ["future-value-calculator", "Future Value", "Calculate future investment value.", "Finance"],
  ["present-value-calculator", "Present Value", "Discount future value to today.", "Finance"],
  ["savings-calculator", "Savings Calculator", "Estimate savings growth with deposits.", "Finance"],
  ["mortgage-calculator", "Mortgage Calculator", "Estimate monthly mortgage payments.", "Finance"],
  ["debt-to-income-calculator", "Debt-to-Income", "Calculate your debt-to-income ratio.", "Finance"],
  ["commission-rate-calculator", "Commission Rate", "Calculate commission from a sale.", "Pricing"],
  ["revenue-calculator", "Revenue Calculator", "Calculate revenue from units and price.", "Business"],
  ["cost-per-unit-calculator", "Cost Per Unit", "Calculate average cost per unit.", "Business"],
  ["gross-profit-calculator", "Gross Profit", "Calculate gross profit from sales and COGS.", "Profit"],
  ["gross-margin-calculator", "Gross Margin", "Calculate gross profit margin.", "Profit"],
  ["net-profit-calculator", "Net Profit", "Calculate net profit after expenses.", "Profit"],
  ["net-margin-calculator", "Net Margin", "Calculate net profit margin.", "Profit"],
  ["operating-margin-calculator", "Operating Margin", "Calculate operating profit margin.", "Profit"],
  ["ebitda-calculator", "EBITDA Calculator", "Calculate EBITDA from earnings components.", "Profit"],
  ["cash-flow-calculator", "Cash Flow", "Calculate net cash flow.", "Business"],
  ["roi-percentage-calculator", "ROI Percentage", "Calculate ROI as a percentage.", "Profit"],
  ["break-even-units-calculator", "Break-even Units", "Find units required to break even.", "Profit"],
  ["markup-percentage-calculator", "Markup Percentage", "Calculate markup over cost.", "Pricing"],
  ["price-after-discount-calculator", "Price After Discount", "Calculate final price after discount.", "Pricing"],
  ["sales-growth-calculator", "Sales Growth", "Calculate sales growth percentage.", "Growth"],
  ["customer-acquisition-cost-calculator", "Customer Acquisition Cost", "Calculate average customer acquisition cost.", "Business"],
  ["customer-lifetime-value-calculator", "Customer Lifetime Value", "Estimate customer lifetime value.", "Business"],
  ["inventory-turnover-calculator", "Inventory Turnover", "Calculate inventory turnover ratio.", "Business"],
  ["days-sales-inventory-calculator", "Days Sales Inventory", "Estimate average inventory days.", "Business"],
  ["payroll-tax-calculator", "Payroll Tax", "Estimate payroll tax from wages.", "Payroll"],
  ["hourly-to-salary-calculator", "Hourly to Salary", "Convert hourly pay to annual salary.", "Payroll"],
  ["salary-to-hourly-calculator", "Salary to Hourly", "Convert annual salary to hourly pay.", "Payroll"],
  ["overtime-pay-calculator", "Overtime Pay", "Calculate overtime earnings.", "Payroll"],
  ["loan-interest-calculator", "Loan Interest", "Estimate simple loan interest.", "Finance"],
  ["savings-rate-calculator", "Savings Rate", "Calculate income saved as a percentage.", "Finance"],
  ["business-growth-calculator", "Business Growth", "Calculate compound business growth.", "Growth"],
  ["price-increase-calculator", "Price Increase", "Calculate a new price after an increase.", "Pricing"],
] as const;

const categories = [
  ["All calculators", "#calculators", calculators.length],
  ["Business & Profit", "#profit", 13],
  ["Pricing & Sales", "#pricing", 9],
  ["Finance", "#finance", 12],
  ["Tax", "#tax", 2],
  ["Payroll", "#payroll", 4],
  ["Growth", "#growth", 3],
  ["Everyday", "#everyday", 4],
] as const;

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[700px] bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,.18),transparent_45%),radial-gradient(circle_at_85%_20%,rgba(99,102,241,.18),transparent_35%)]" />

      <section className="relative mx-auto max-w-7xl px-4 pb-14 pt-6 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 backdrop-blur-xl">
          <Link href="/" className="text-lg font-black tracking-tight">Biz<span className="text-cyan-300">Toolkit</span></Link>
          <div className="hidden text-xs font-bold uppercase tracking-[0.22em] text-slate-500 sm:block">Free tools • No signup</div>
          <Link href="#calculators" className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-xs font-bold text-cyan-200">Explore 50 tools</Link>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-gradient-to-br from-indigo-950/95 via-[#0a1027] to-[#050816] px-6 py-14 shadow-[0_30px_100px_rgba(8,47,73,.35)] sm:px-12 sm:py-20">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -bottom-28 right-20 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
          <div className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <span className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-black tracking-[0.2em] text-cyan-200">BIZTOOLKIT</span>
              <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[.95] tracking-[-.04em] sm:text-7xl lg:text-8xl">TOTAL FREE<br />TO USE</h1>
              <p className="mt-6 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">50+ Business &amp; Financial Calculators</p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">Fast, clean and mobile-friendly tools for profit, pricing, tax, ROI, finance, payroll and business growth.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#calculators" className="rounded-xl bg-cyan-300 px-6 py-3.5 font-black text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-200">Start Calculating →</Link>
                <Link href="#categories" className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/10">Browse Categories</Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative mx-auto h-72 max-w-sm">
                <div className="absolute right-2 top-4 w-56 rotate-6 rounded-2xl border border-cyan-300/20 bg-slate-900/80 p-5 shadow-2xl backdrop-blur-xl">
                  <div className="text-xs font-bold text-slate-400">PROFIT MARGIN</div><div className="mt-3 text-3xl font-black text-cyan-200">32.4%</div><div className="mt-4 h-2 rounded-full bg-white/10"><div className="h-2 w-2/3 rounded-full bg-cyan-300" /></div>
                </div>
                <div className="absolute bottom-3 left-1 w-60 -rotate-6 rounded-2xl border border-indigo-300/20 bg-slate-900/90 p-5 shadow-2xl backdrop-blur-xl">
                  <div className="text-xs font-bold text-slate-400">MONTHLY REVENUE</div><div className="mt-3 text-3xl font-black">$24,850</div><div className="mt-3 flex items-end gap-1">{[3,5,4,7,6,9,8,11,10].map((h,i)=><span key={i} className="w-3 rounded-t bg-indigo-400/70" style={{height:`${h*7}px`}} />)}</div>
                </div>
                <div className="absolute bottom-24 right-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-bold text-slate-200 backdrop-blur-xl">✓ No signup required</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="relative mx-auto grid max-w-7xl gap-8 px-4 pb-16 sm:px-6 lg:grid-cols-[230px_1fr] lg:px-8">
        <aside className="h-fit rounded-2xl border border-white/10 bg-white/[0.035] p-4 lg:sticky lg:top-5">
          <div className="mb-3 px-2 text-xs font-black uppercase tracking-[0.18em] text-slate-500">Categories</div>
          <nav className="grid grid-cols-2 gap-1 lg:grid-cols-1">
            {categories.map(([name, href, count]) => <Link key={name} href={href} className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-bold text-slate-300 transition hover:bg-cyan-300/10 hover:text-cyan-200"><span>{name}</span><span className="text-xs text-slate-600">{count}</span></Link>)}
          </nav>
        </aside>

        <div id="calculators" className="min-w-0">
          <div className="mb-5 flex items-end justify-between gap-4"><div><h2 className="text-3xl font-black tracking-tight">All Calculators</h2><p className="mt-1 text-sm text-slate-400">Slide through the toolkit or pick any calculator.</p></div><span className="rounded-full border border-cyan-300/15 bg-cyan-300/5 px-3 py-1 text-sm font-bold text-cyan-200">{calculators.length} tools</span></div>
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-3">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#07101f] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#07101f] to-transparent" />
            <div className="flex gap-4 overflow-x-auto pb-3 pt-1 [scrollbar-width:thin]">
              {calculators.map(([slug, title, description, category]) => <Link id={category.toLowerCase().replaceAll(" & ","").replaceAll(" ","-")} key={slug} href={`/${slug}`} className="group/card min-w-[250px] max-w-[250px] rounded-2xl border border-white/10 bg-slate-950/80 p-5 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-slate-900">
                <div className="mb-4 flex items-center justify-between"><span className="rounded-full bg-cyan-300/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-cyan-200">{category}</span><span className="text-slate-600 transition group-hover/card:text-cyan-300">↗</span></div>
                <h3 className="text-lg font-extrabold">{title}</h3><p className="mt-2 min-h-12 text-sm leading-5 text-slate-400">{description}</p><div className="mt-5 text-xs font-black uppercase tracking-wider text-cyan-300">Calculate →</div>
              </Link>)}
            </div>
          </div>
          <p className="mt-3 text-center text-xs font-bold text-slate-600">Swipe horizontally on mobile • Choose any tool above</p>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/[0.045] to-cyan-300/[0.03] p-8 sm:p-12">
          <h2 className="text-3xl font-black">One free toolkit for smarter decisions.</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-400">BizToolkit puts practical calculations in one place for entrepreneurs, freelancers, students and professionals. Every calculator is designed to be quick to understand, easy to use and accessible on mobile.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3"><div className="rounded-2xl border border-white/10 bg-black/10 p-5"><div className="text-2xl">⚡</div><div className="mt-3 font-extrabold">Instant results</div><p className="mt-1 text-sm text-slate-500">Enter your numbers and calculate.</p></div><div className="rounded-2xl border border-white/10 bg-black/10 p-5"><div className="text-2xl">📱</div><div className="mt-3 font-extrabold">Mobile friendly</div><p className="mt-1 text-sm text-slate-500">Built for phones, tablets and desktop.</p></div><div className="rounded-2xl border border-white/10 bg-black/10 p-5"><div className="text-2xl">🔗</div><div className="mt-3 font-extrabold">Connected tools</div><p className="mt-1 text-sm text-slate-500">Jump between related calculators.</p></div></div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-xs text-slate-600">© {new Date().getFullYear()} BizToolkit • Free business &amp; financial calculators</footer>
    </main>
  );
}
