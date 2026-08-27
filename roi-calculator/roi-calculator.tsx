"use client";

import { useState } from "react";

const formatNumber = (num: number) => new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(num);

export default function RoiCalculator() {
  const [investment, setInvestment] = useState<string>("");
  const [returnValue, setReturnValue] = useState<string>("");
  const [timePeriod, setTimePeriod] = useState<string>("");
  const [periodUnit, setPeriodUnit] = useState<"months" | "years">("years");

  const inv = parseFloat(investment);
  const ret = parseFloat(returnValue);
  const years = periodUnit === "years" ? parseFloat(timePeriod) : parseFloat(timePeriod) / 12;
  const isValid = !isNaN(inv) && inv > 0 && !isNaN(ret) && ret >= 0;
  const netProfit = isValid ? ret - inv : null;
  const roiPercent = isValid ? ((ret - inv) / inv) * 100 : null;
  const roiMultiple = isValid ? ret / inv : null;
  const annualizedRoi = isValid && !isNaN(years) && years > 0 && ret > 0 ? (Math.pow(ret / inv, 1 / years) - 1) * 100 : null;

  const loadExample = () => { setInvestment("1000"); setReturnValue("1500"); setTimePeriod("2"); setPeriodUnit("years"); };
  const reset = () => { setInvestment(""); setReturnValue(""); setTimePeriod(""); setPeriodUnit("years"); };

  return (
    <div className="min-h-[70vh] bg-gradient-to-br from-cyan-50 via-white to-blue-100 px-4 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 inline-flex rounded-full border border-cyan-100 bg-white px-4 py-2 text-sm font-bold text-cyan-700 shadow-sm">BUSINESS TOOL • ROI</div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">ROI Calculator</h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 sm:text-lg">Measure your return on investment with a clear, professional financial calculator.</p>
        </div>

        <div className="grid overflow-hidden rounded-[2rem] border border-cyan-100 bg-white shadow-[0_24px_70px_-28px_rgba(6,182,212,0.4)] lg:grid-cols-[1.05fr_0.95fr]">
          <section className="bg-gradient-to-br from-slate-950 via-cyan-950 to-blue-950 p-6 text-white sm:p-8 lg:p-10">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">Enter your numbers</p>
              <h2 className="mt-2 text-2xl font-extrabold">Investment Details</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">Use your initial investment and final return to calculate your ROI.</p>
            </div>

            <div className="space-y-5">
              <div>
                <label htmlFor="investment" className="mb-2 block text-sm font-bold text-slate-200">Initial Investment ($)</label>
                <input id="investment" type="number" inputMode="decimal" min="0" step="0.01" value={investment} onChange={(e) => setInvestment(e.target.value)} placeholder="e.g. 1,000" className="h-16 w-full rounded-2xl border border-cyan-500/20 bg-white/10 px-5 text-xl font-bold text-cyan-300 outline-none shadow-[inset_0_2px_8px_rgba(0,0,0,0.2)] placeholder:text-slate-500 focus:border-cyan-400 focus:bg-white/15 focus:ring-4 focus:ring-cyan-400/50" />
              </div>
              <div>
                <label htmlFor="return" className="mb-2 block text-sm font-bold text-slate-200">Total Return / Final Value ($)</label>
                <input id="return" type="number" inputMode="decimal" min="0" step="0.01" value={returnValue} onChange={(e) => setReturnValue(e.target.value)} placeholder="e.g. 1,500" className="h-16 w-full rounded-2xl border border-cyan-500/20 bg-white/10 px-5 text-xl font-bold text-cyan-300 outline-none shadow-[inset_0_2px_8px_rgba(0,0,0,0.2)] placeholder:text-slate-500 focus:border-cyan-400 focus:bg-white/15 focus:ring-4 focus:ring-cyan-400/50" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="time-period" className="mb-2 block text-sm font-bold text-slate-200">Time Period</label>
                  <input id="time-period" type="number" inputMode="decimal" min="0" step="0.01" value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)} placeholder="e.g. 2" className="h-16 w-full rounded-2xl border border-cyan-500/20 bg-white/10 px-5 text-lg font-bold text-cyan-300 outline-none shadow-[inset_0_2px_8px_rgba(0,0,0,0.2)] placeholder:text-slate-500 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/50" />
                </div>
                <div>
                  <label htmlFor="period-unit" className="mb-2 block text-sm font-bold text-slate-200">Unit</label>
                  <select id="period-unit" value={periodUnit} onChange={(e) => setPeriodUnit(e.target.value as "months" | "years")} className="h-16 w-full rounded-2xl border border-cyan-500/20 bg-white/10 px-4 text-lg font-bold text-cyan-300 outline-none shadow-[inset_0_2px_8px_rgba(0,0,0,0.2)] focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/50">
                    <option className="text-slate-900" value="years">Years</option><option className="text-slate-900" value="months">Months</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-3 pt-3">
                <button type="button" onClick={loadExample} className="min-h-14 flex-1 rounded-2xl bg-cyan-500 px-4 font-extrabold text-slate-950 shadow-[0_8px_0_#0891b2,0_14px_25px_rgba(6,182,212,0.3)] transition hover:-translate-y-0.5 hover:bg-cyan-400 active:translate-y-1 active:shadow-[0_3px_0_#0891b2]">Load Example</button>
                <button type="button" onClick={reset} className="min-h-14 flex-1 rounded-2xl border border-white/20 bg-white/10 px-4 font-extrabold text-white shadow-[0_8px_0_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5 hover:bg-white/15 active:translate-y-1 active:shadow-[0_3px_0_rgba(0,0,0,0.2)]">Reset</button>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-white via-cyan-50/40 to-blue-50 p-6 sm:p-8 lg:p-10">
            <div className="mb-8 flex items-start justify-between gap-4">
              <div><p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-600">Your results</p><h2 className="mt-2 text-2xl font-extrabold text-slate-900">Investment Performance</h2></div>
              <div className="rounded-2xl border border-cyan-100 bg-white px-3 py-2 text-xs font-bold text-slate-500 shadow-sm">LIVE</div>
            </div>

            {isValid ? (
              <div className="space-y-4">
                <div className="rounded-3xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-blue-50 p-6 shadow-[0_12px_30px_-18px_rgba(6,182,212,0.5)]">
                  <p className="text-sm font-bold text-cyan-700">Net Profit</p><p className={`mt-2 text-4xl font-black ${netProfit! >= 0 ? "text-cyan-300" : "text-red-600"}`}>${formatNumber(netProfit!)}</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-cyan-100 bg-white p-5 shadow-[0_12px_30px_-18px_rgba(6,182,212,0.45)]"><p className="text-sm font-bold text-slate-500">ROI</p><p className={`mt-2 text-3xl font-black ${roiPercent! >= 0 ? "text-cyan-300" : "text-red-600"}`}>{formatNumber(roiPercent!)}%</p></div>
                  <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-[0_12px_30px_-18px_rgba(37,99,235,0.4)]"><p className="text-sm font-bold text-slate-500">ROI Multiple</p><p className="mt-2 text-3xl font-black text-cyan-300">{formatNumber(roiMultiple!)}x</p></div>
                </div>
                {annualizedRoi !== null && <div className="rounded-3xl border border-cyan-100 bg-gradient-to-r from-cyan-50 to-blue-50 p-5 shadow-sm"><p className="text-sm font-bold text-slate-500">Annualized ROI</p><p className={`mt-2 text-3xl font-black ${annualizedRoi >= 0 ? "text-cyan-300" : "text-red-600"}`}>{formatNumber(annualizedRoi)}%</p></div>}
              </div>
            ) : (
              <div className="flex min-h-[350px] items-center justify-center rounded-3xl border-2 border-dashed border-cyan-100 bg-cyan-50/70 p-8 text-center"><div><div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 text-2xl font-black text-cyan-600 shadow-inner">%</div><h3 className="text-xl font-extrabold text-slate-800">Results appear here</h3><p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-500">Enter your investment and final value to see your ROI instantly.</p></div></div>
            )}
          </section>
        </div>

        <div className="mx-auto mt-8 max-w-4xl rounded-3xl border border-cyan-100 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-extrabold text-slate-900">How ROI is Calculated</h2>
          <div className="mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
            <div className="rounded-2xl bg-cyan-50 p-4"><strong className="text-slate-900">Net Profit</strong><br />Return − Investment</div>
            <div className="rounded-2xl bg-blue-50 p-4"><strong className="text-slate-900">ROI</strong><br />(Net Profit ÷ Investment) × 100</div>
            <div className="rounded-2xl bg-cyan-50 p-4"><strong className="text-slate-900">Multiple</strong><br />Return ÷ Investment</div>
          </div>
        </div>
      </div>
    </div>
  );
}
