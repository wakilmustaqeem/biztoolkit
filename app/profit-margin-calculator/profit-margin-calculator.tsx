"use client";

import { useState } from "react";

const formatNumber = (num: number) =>
  new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(num);

export default function ProfitMarginCalculator() {
  const [revenue, setRevenue] = useState<string>("");
  const [totalCost, setTotalCost] = useState<string>("");

  const rev = parseFloat(revenue);
  const cost = parseFloat(totalCost);
  const isValid = !isNaN(rev) && rev > 0 && !isNaN(cost) && cost >= 0;
  const profit = isValid ? rev - cost : null;
  const margin = isValid ? ((rev - cost) / rev) * 100 : null;

  const loadExample = () => {
    setRevenue("2000");
    setTotalCost("1200");
  };

  const reset = () => {
    setRevenue("");
    setTotalCost("");
  };

  return (
    <div className="min-h-[700px] bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex rounded-full border border-blue-200 bg-white/80 px-5 py-2 text-sm font-bold text-blue-700 shadow-sm backdrop-blur">
            Business Finance Tool
          </div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Profit Margin Calculator
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 sm:text-lg">
            Enter your revenue and total costs to instantly calculate net profit and profit margin.
          </p>
        </div>

        <div className="relative rounded-[2rem] border border-white/80 bg-white/90 p-5 shadow-[0_25px_60px_-20px_rgba(30,64,175,0.35)] backdrop-blur sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-x-8 top-0 h-1 rounded-b-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400" />

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div className="rounded-[1.75rem] bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 p-6 shadow-[0_18px_0_#0f172a,0_28px_45px_-20px_rgba(15,23,42,0.65)] sm:p-8">
              <div className="mb-7">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">Your numbers</p>
                <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">Enter your business data</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label htmlFor="revenue" className="mb-2 block text-base font-bold text-white">
                    Revenue ($)
                  </label>
                  <div className="relative">
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl font-black text-blue-300">$</span>
                    <input
                      id="revenue"
                      type="number"
                      inputMode="decimal"
                      min="0"
                      step="0.01"
                      value={revenue}
                      onChange={(e) => setRevenue(e.target.value)}
                      placeholder="2,000"
                      className="h-16 w-full rounded-2xl border-2 border-blue-400/40 bg-white px-5 pl-12 text-2xl font-black text-slate-900 shadow-[inset_0_3px_8px_rgba(15,23,42,0.12),0_5px_0_rgba(30,64,175,0.35)] outline-none transition placeholder:text-slate-300 focus:border-blue-300 focus:ring-4 focus:ring-blue-400/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="totalCost" className="mb-2 block text-base font-bold text-white">
                    Total Cost ($)
                  </label>
                  <div className="relative">
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl font-black text-blue-300">$</span>
                    <input
                      id="totalCost"
                      type="number"
                      inputMode="decimal"
                      min="0"
                      step="0.01"
                      value={totalCost}
                      onChange={(e) => setTotalCost(e.target.value)}
                      placeholder="1,200"
                      className="h-16 w-full rounded-2xl border-2 border-blue-400/40 bg-white px-5 pl-12 text-2xl font-black text-slate-900 shadow-[inset_0_3px_8px_rgba(15,23,42,0.12),0_5px_0_rgba(30,64,175,0.35)] outline-none transition placeholder:text-slate-300 focus:border-blue-300 focus:ring-4 focus:ring-blue-400/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-1">
                  <button
                    onClick={loadExample}
                    className="h-14 rounded-2xl bg-gradient-to-b from-blue-500 to-blue-700 px-4 text-base font-black text-white shadow-[0_6px_0_#1e3a8a,0_12px_20px_-8px_rgba(37,99,235,0.8)] transition hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_#1e3a8a]"
                  >
                    Load Example
                  </button>
                  <button
                    onClick={reset}
                    className="h-14 rounded-2xl border-2 border-white/20 bg-white/10 px-4 text-base font-black text-white shadow-[0_6px_0_rgba(2,6,23,0.55)] backdrop-blur transition hover:bg-white/15 active:translate-y-1 active:shadow-[0_2px_0_rgba(2,6,23,0.55)]"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-[1.75rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-[0_16px_0_#dbe4f0,0_25px_35px_-25px_rgba(15,23,42,0.5)] sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">Your results</p>
              <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">Profit snapshot</h2>

              {isValid ? (
                <div className="mt-7 flex flex-1 flex-col justify-center gap-5">
                  <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-green-100 p-6 shadow-[inset_0_2px_5px_rgba(16,185,129,0.08),0_7px_0_#bbf7d0]">
                    <p className="text-sm font-bold text-emerald-700">Net Profit</p>
                    <p className={`mt-1 break-words text-4xl font-black sm:text-5xl ${profit! >= 0 ? "text-emerald-600" : "text-red-600"}`}>
                      ${formatNumber(profit!)}
                    </p>
                    <p className="mt-2 text-sm font-medium text-emerald-700/80">Revenue minus total cost</p>
                  </div>

                  <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-100 p-6 shadow-[inset_0_2px_5px_rgba(59,130,246,0.08),0_7px_0_#bfdbfe]">
                    <p className="text-sm font-bold text-blue-700">Profit Margin</p>
                    <p className={`mt-1 break-words text-4xl font-black sm:text-5xl ${margin! >= 0 ? "text-blue-700" : "text-red-600"}`}>
                      {formatNumber(margin!)}%
                    </p>
                    <p className="mt-2 text-sm font-medium text-blue-700/80">Percentage of revenue kept as profit</p>
                  </div>
                </div>
              ) : (
                <div className="mt-7 flex flex-1 items-center justify-center rounded-3xl border-2 border-dashed border-slate-200 bg-slate-50/80 p-8 text-center">
                  <div>
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-4xl shadow-[0_7px_0_#e2e8f0]">$</div>
                    <h3 className="mt-5 text-xl font-black text-slate-800">Results appear here</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">Enter revenue and total cost above to see your profit and margin.</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/70 px-5 py-4 text-center text-sm font-medium text-slate-600">
            <span className="font-black text-slate-800">Formula:</span> Net Profit = Revenue − Total Cost&nbsp;&nbsp; • &nbsp;&nbsp;Profit Margin = (Net Profit ÷ Revenue) × 100
          </div>
        </div>
      </div>
    </div>
  );
}
