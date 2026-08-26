import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:py-24">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">BizToolkit</p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Free Business Tools for Freelancers & Small Businesses
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
          Simple, fast calculators and generators to help you make better business decisions.
        </p>

        <div className="mx-auto mt-12 grid max-w-md gap-6 text-left sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/profit-margin-calculator"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold text-slate-900">Profit Margin Calculator</h2>
            <p className="mt-2 text-slate-600">Calculate gross profit and profit margin instantly.</p>
            <span className="mt-5 inline-block font-semibold text-blue-600">Open calculator →</span>
          </Link>

          <Link
            href="/roi-calculator"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold text-slate-900">ROI Calculator</h2>
            <p className="mt-2 text-slate-600">Calculate return on investment, net profit, and annualized ROI.</p>
            <span className="mt-5 inline-block font-semibold text-blue-600">Open calculator →</span>
          </Link>

          <Link
            href="/break-even-calculator"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold text-slate-900">Break-even Calculator</h2>
            <p className="mt-2 text-slate-600">Determine the units and revenue needed to cover costs and reach a target profit.</p>
            <span className="mt-5 inline-block font-semibold text-blue-600">Open calculator →</span>
          </Link>

          <Link
            href="/markup-calculator"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold text-slate-900">Markup Calculator</h2>
            <p className="mt-2 text-slate-600">Calculate selling price and understand the difference between markup and margin.</p>
            <span className="mt-5 inline-block font-semibold text-blue-600">Open calculator →</span>
          </Link>

          <Link
            href="/discount-calculator"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold text-slate-900">Discount Calculator</h2>
            <p className="mt-2 text-slate-600">Calculate discount amount, final price, and savings instantly.</p>
            <span className="mt-5 inline-block font-semibold text-blue-600">Open calculator →</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
