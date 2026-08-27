"use client";
import { useState } from "react";

const formatNumber = (num: number) => new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(num);

export default function RoiCalculator() {
  const [investment, setInvestment] = useState("");
  const [returnValue, setReturnValue] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [periodUnit, setPeriodUnit] = useState<"years" | "months">("years");
  const inv = parseFloat(investment), ret = parseFloat(returnValue);
  const years = periodUnit === "years" ? parseFloat(timePeriod) : parseFloat(timePeriod) / 12;
  const isValid = !isNaN(inv) && inv > 0 && !isNaN(ret) && ret >= 0;
  const netProfit = isValid ? ret - inv : null;
  const roiPercent = isValid ? ((ret - inv) / inv) * 100 : null;
  const roiMultiple = isValid ? ret / inv : null;
  const annualizedRoi = isValid && !isNaN(years) && years > 0 && ret > 0 ? (Math.pow(ret / inv, 1 / years) - 1) * 100 : null;
  const loadExample = () => { setInvestment("1000"); setReturnValue("1500"); setTimePeriod("2"); setPeriodUnit("years"); };
  const reset = () => { setInvestment(""); setReturnValue(""); setTimePeriod(""); setPeriodUnit("years"); };
  return (
    <div className="py-8 px-3 sm:px-4"><div className="max-w-md mx-auto rounded-[2rem] bg-gradient-to-b from-slate-800 to-slate-900 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10">
      <h1 className="text-2xl sm:text-3xl font-bold text-white text-center mb-1">ROI Calculator</h1><p className="text-center text-slate-300 text-sm mb-6">Return, profit, multiple & annualized ROI</p>
      <div className="space-y-5">
        <div><label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">Initial Investment ($)</label><input type="number" inputMode="decimal" min="0" step="0.01" value={investment} onChange={e=>setInvestment(e.target.value)} placeholder="1000" className="w-full px-4 py-3 rounded-xl bg-slate-950/70 text-lg font-semibold text-fuchsia-300 placeholder-slate-600 border border-fuchsia-500/20 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50 shadow-inner" /></div>
        <div><label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">Total Return / Final Value ($)</label><input type="number" inputMode="decimal" min="0" step="0.01" value={returnValue} onChange={e=>setReturnValue(e.target.value)} placeholder="1500" className="w-full px-4 py-3 rounded-xl bg-slate-950/70 text-lg font-semibold text-fuchsia-300 placeholder-slate-600 border border-fuchsia-500/20 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50 shadow-inner" /></div>
        <div className="grid grid-cols-2 gap-3"><div><label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">Time Period</label><input type="number" inputMode="decimal" min="0" step="0.01" value={timePeriod} onChange={e=>setTimePeriod(e.target.value)} placeholder="2" className="w-full px-4 py-3 rounded-xl bg-slate-950/70 text-lg font-semibold text-fuchsia-300 placeholder-slate-600 border border-fuchsia-500/20 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50 shadow-inner" /></div><div><label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">Unit</label><select value={periodUnit} onChange={e=>setPeriodUnit(e.target.value as "years"|"months")} className="w-full px-4 py-3 rounded-xl bg-slate-950/70 text-lg font-semibold text-white border border-fuchsia-500/20 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50"><option value="years">Years</option><option value="months">Months</option></select></div></div>
        <div className="flex gap-3 pt-1"><button onClick={loadExample} className="flex-1 py-3 rounded-xl bg-fuchsia-500 text-slate-950 font-bold text-sm hover:bg-fuchsia-400 transition shadow-[0_6px_0_rgba(192,38,211,0.4)] active:translate-y-1 active:shadow-none">Load Example</button><button onClick={reset} className="flex-1 py-3 rounded-xl bg-slate-700 text-white font-bold text-sm hover:bg-slate-600 transition shadow-[0_6px_0_rgba(30,41,59,0.5)] active:translate-y-1 active:shadow-none">Reset</button></div>
      </div>
      {isValid && <div className="mt-7 rounded-2xl bg-white border border-fuchsia-200 p-5 shadow-inner"><h2 className="text-lg font-bold text-slate-900 mb-4">Results</h2><div className="space-y-4"><div className="flex justify-between"><span className="text-slate-600 text-sm">Net Profit</span><span className="text-2xl font-bold text-fuchsia-700">${formatNumber(netProfit!)}</span></div><div className="flex justify-between"><span className="text-slate-600 text-sm">ROI</span><span className="text-2xl font-bold text-fuchsia-700">{formatNumber(roiPercent!)}%</span></div><div className="flex justify-between"><span className="text-slate-600 text-sm">ROI Multiple</span><span className="text-2xl font-bold text-fuchsia-700">{formatNumber(roiMultiple!)}x</span></div>{annualizedRoi !== null && <div className="flex justify-between"><span className="text-slate-600 text-sm">Annualized ROI</span><span className="text-2xl font-bold text-fuchsia-700">{formatNumber(annualizedRoi)}%</span></div>}</div></div>}
    </div></div>
  );
}
