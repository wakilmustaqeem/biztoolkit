"use client";
import { useState } from "react";

const formatNumber = (num: number) =>
  new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(num);

export default function CommissionCalculator() {
  const [baseAmount, setBaseAmount] = useState<string>("");
  const [commissionPercent, setCommissionPercent] = useState<string>("");
  const base = parseFloat(baseAmount);
  const percent = parseFloat(commissionPercent);
  const isValid = !isNaN(base) && base > 0 && !isNaN(percent) && percent >= 0;
  const commissionAmount = isValid ? (base * percent) / 100 : null;
  const totalEarnings = isValid ? base + commissionAmount! : null;

  return (
    <div className="py-8 px-3 sm:px-4">
      <div className="max-w-md mx-auto rounded-[2rem] bg-gradient-to-b from-slate-800 to-slate-900 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10">
        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center mb-1">Commission Calculator</h1>
        <p className="text-center text-slate-300 text-sm mb-6">Commission amount & total earnings</p>
        <div className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">Base Amount ($)</label>
            <input type="number" inputMode="decimal" min="0" step="0.01" value={baseAmount} onChange={(e) => setBaseAmount(e.target.value)} placeholder="1000" className="w-full px-4 py-3 rounded-xl bg-slate-950/70 text-lg font-semibold text-teal-300 placeholder-slate-600 border border-teal-500/20 focus:outline-none focus:ring-2 focus:ring-teal-400/50 shadow-inner" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">Commission Percentage (%)</label>
            <input type="number" inputMode="decimal" min="0" step="0.01" value={commissionPercent} onChange={(e) => setCommissionPercent(e.target.value)} placeholder="10" className="w-full px-4 py-3 rounded-xl bg-slate-950/70 text-lg font-semibold text-teal-300 placeholder-slate-600 border border-teal-500/20 focus:outline-none focus:ring-2 focus:ring-teal-400/50 shadow-inner" />
          </div>
          <div className="flex gap-3 pt-1">
            <button onClick={() => { setBaseAmount("1000"); setCommissionPercent("10"); }} className="flex-1 py-3 rounded-xl bg-teal-500 text-slate-950 font-bold text-sm hover:bg-teal-400 transition shadow-[0_6px_0_rgba(13,148,136,0.4)] active:translate-y-1 active:shadow-none">Load Example</button>
            <button onClick={() => { setBaseAmount(""); setCommissionPercent(""); }} className="flex-1 py-3 rounded-xl bg-slate-700 text-white font-bold text-sm hover:bg-slate-600 transition shadow-[0_6px_0_rgba(30,41,59,0.5)] active:translate-y-1 active:shadow-none">Reset</button>
          </div>
        </div>
        {isValid && (
          <div className="mt-7 rounded-2xl bg-white border border-teal-200 p-5 shadow-inner">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Results</h2>
            <div className="space-y-4">
              <div className="flex justify-between"><span className="text-slate-600 text-sm">Commission Amount</span><span className="text-2xl font-bold text-teal-700">${formatNumber(commissionAmount!)}</span></div>
              <div className="flex justify-between"><span className="text-slate-600 text-sm">Total Earnings</span><span className="text-2xl font-bold text-teal-700">${formatNumber(totalEarnings!)}</span></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
