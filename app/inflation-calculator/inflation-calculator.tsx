"use client";

import { useMemo, useState } from "react";

export default function InflationCalculator() {
  const [amount, setAmount] = useState("10000");
  const [rate, setRate] = useState("5");
  const [years, setYears] = useState("10");

  const result = useMemo(() => {
    const principal = Number(amount);
    const annualRate = Number(rate) / 100;
    const period = Number(years);
    if (!Number.isFinite(principal) || !Number.isFinite(annualRate) || !Number.isFinite(period) || principal < 0 || annualRate < 0 || period < 0) return null;
    const futureCost = principal * Math.pow(1 + annualRate, period);
    const purchasingPower = principal / Math.pow(1 + annualRate, period);
    return { futureCost, purchasingPower };
  }, [amount, rate, years]);

  const money = (value: number) => value.toLocaleString(undefined, { maximumFractionDigits: 2 });

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-4 py-12 text-white">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8 text-center">
          <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-indigo-200">BIZTOOLKIT</span>
          <h1 className="mt-5 text-4xl font-black sm:text-5xl">Inflation Calculator</h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">Estimate how inflation changes the future cost and purchasing power of money.</p>
        </header>
        <section className="rounded-3xl bg-white p-7 text-slate-900 shadow-2xl">
          <div className="grid gap-5 sm:grid-cols-3">
            <label className="font-semibold">Current amount<input className="mt-2 w-full rounded-xl border p-3" type="number" min="0" value={amount} onChange={(e) => setAmount(e.target.value)} /></label>
            <label className="font-semibold">Annual inflation %<input className="mt-2 w-full rounded-xl border p-3" type="number" min="0" step="0.1" value={rate} onChange={(e) => setRate(e.target.value)} /></label>
            <label className="font-semibold">Years<input className="mt-2 w-full rounded-xl border p-3" type="number" min="0" step="1" value={years} onChange={(e) => setYears(e.target.value)} /></label>
          </div>
          {result && <div className="mt-7 grid gap-4 sm:grid-cols-2"><div className="rounded-2xl bg-slate-100 p-5"><p className="text-sm text-slate-500">Future equivalent cost</p><p className="mt-1 text-3xl font-black">{money(result.futureCost)}</p></div><div className="rounded-2xl bg-slate-100 p-5"><p className="text-sm text-slate-500">Purchasing power of today&apos;s amount</p><p className="mt-1 text-3xl font-black">{money(result.purchasingPower)}</p></div></div>}
          <div className="mt-7 border-t pt-6 text-slate-600"><h2 className="text-xl font-bold text-slate-900">How it works</h2><p className="mt-2">Future cost = current amount × (1 + inflation rate) raised to the number of years. Purchasing power uses the inverse of the same factor.</p></div>
        </section>
      </div>
    </main>
  );
}
