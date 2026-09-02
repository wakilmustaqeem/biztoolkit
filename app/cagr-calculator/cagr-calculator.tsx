"use client";

import { useMemo, useState } from "react";

export default function CagrCalculator() {
  const [start, setStart] = useState(10000);
  const [end, setEnd] = useState(15000);
  const [years, setYears] = useState(5);
  const cagr = useMemo(() => start > 0 && end > 0 && years > 0 ? (Math.pow(end / start, 1 / years) - 1) * 100 : 0, [start, end, years]);

  return <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-4 py-12">
    <div className="mx-auto max-w-4xl">
      <div className="mb-8 text-center"><span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-indigo-200">BUSINESS TOOL • CAGR</span><h1 className="mt-5 text-4xl font-black text-white sm:text-5xl">CAGR Calculator</h1><p className="mx-auto mt-4 max-w-2xl text-slate-300">Calculate compound annual growth rate and understand how quickly an investment or business value has grown over time.</p></div>
      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur"><h2 className="mb-5 text-xl font-bold text-white">Enter your numbers</h2><label className="mb-4 block text-sm text-slate-300">Starting value<input type="number" min="0" value={start} onChange={e=>setStart(Number(e.target.value))} className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 p-3 text-white"/></label><label className="mb-4 block text-sm text-slate-300">Ending value<input type="number" min="0" value={end} onChange={e=>setEnd(Number(e.target.value))} className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 p-3 text-white"/></label><label className="block text-sm text-slate-300">Years<input type="number" min="1" value={years} onChange={e=>setYears(Number(e.target.value))} className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 p-3 text-white"/></label></section>
        <section className="rounded-3xl border border-indigo-300/20 bg-indigo-500/10 p-8 text-center shadow-2xl"><p className="text-sm font-semibold uppercase tracking-wider text-indigo-200">Compound annual growth rate</p><div className="my-8 text-6xl font-black text-white">{cagr.toFixed(2)}%</div><p className="text-slate-300">CAGR shows the smoothed annual growth rate between the starting and ending values.</p></section>
      </div>
      <article className="mt-8 rounded-3xl bg-white p-7 text-slate-700"><h2 className="text-2xl font-bold text-slate-900">How CAGR is calculated</h2><p className="mt-3">CAGR = (Ending Value ÷ Starting Value) raised to the power of 1 ÷ Years, minus 1. It is useful for comparing investment, revenue, sales, or portfolio growth across different time periods.</p><h2 className="mt-6 text-2xl font-bold text-slate-900">When to use a CAGR calculator</h2><p className="mt-3">Use CAGR when you know an initial value, a final value, and the number of years between them. It provides a simple annualized growth measure, although it does not show volatility during the period.</p></article>
    </div>
  </main>;
}
