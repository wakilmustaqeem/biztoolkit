'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

export default function ProfitMarginCalculator() {
  const [revenue, setRevenue] = useState('');
  const [cost, setCost] = useState('');

  const result = useMemo(() => {
    const rev = Number(revenue);
    const cst = Number(cost);
    if (!Number.isFinite(rev) || !Number.isFinite(cst) || rev <= 0) return null;

    const profit = rev - cst;
    const margin = (profit / rev) * 100;
    return { profit, margin };
  }, [revenue, cost]);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="text-sm font-semibold text-blue-600 hover:underline">← BizToolkit</Link>
        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h1 className="text-3xl font-bold text-slate-900">Profit Margin Calculator</h1>
          <p className="mt-2 text-slate-600">Enter your revenue and total costs to calculate profit and margin.</p>

          <div className="mt-8 space-y-5">
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Revenue</span>
              <input
                type="number"
                min="0"
                step="0.01"
                inputMode="decimal"
                value={revenue}
                onChange={(e) => setRevenue(e.target.value)}
                placeholder="1000"
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-700">Total Cost</span>
              <input
                type="number"
                min="0"
                step="0.01"
                inputMode="decimal"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                placeholder="600"
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </label>
          </div>

          {result && (
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Profit</p>
                <p className="mt-1 text-3xl font-bold text-slate-900">{result.profit.toFixed(2)}</p>
              </div>
              <div className="rounded-xl bg-blue-50 p-5">
                <p className="text-sm text-slate-500">Profit Margin</p>
                <p className="mt-1 text-3xl font-bold text-blue-700">{result.margin.toFixed(2)}%</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
