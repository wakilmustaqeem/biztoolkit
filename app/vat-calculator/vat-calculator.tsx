"use client";
import { useState } from "react";

const formatNumber = (num: number) =>
  new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(num);

export default function VatCalculator() {
  const [amount, setAmount] = useState<string>("");
  const [taxRate, setTaxRate] = useState<string>("");
  const [mode, setMode] = useState<"exclusive" | "inclusive">("exclusive");

  const baseAmount = parseFloat(amount);
  const rate = parseFloat(taxRate);
  const isValid = !isNaN(baseAmount) && baseAmount > 0 && !isNaN(rate) && rate >= 0;
  const taxAmount = isValid && mode === "exclusive" ? (baseAmount * rate) / 100 : isValid && mode === "inclusive" ? baseAmount - baseAmount / (1 + rate / 100) : null;
  const finalPrice = isValid && mode === "exclusive" ? baseAmount + (baseAmount * rate) / 100 : isValid && mode === "inclusive" ? baseAmount : null;
  const netPrice = isValid && mode === "inclusive" ? baseAmount / (1 + rate / 100) : null;

  return (
    <div className="py-8 px-3 sm:px-4">
      <div className="max-w-md mx-auto rounded-[2rem] bg-gradient-to-b from-slate-800 to-slate-900 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10">
        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center mb-1">VAT / Sales Tax Calculator</h1>
        <p className="text-center text-slate-300 text-sm mb-6">Tax amount, net price & final price</p>
        <div className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">Amount ($)</label>
            <input type="number" inputMode="decimal" min="0" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="100" className="w-full px-4 py-3 rounded-xl bg-slate-950/70 text-lg font-semibold text-indigo-300 placeholder-slate-600 border border-indigo-500/20 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 shadow-inner" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">Tax Rate (%)</label>
            <input type="number" inputMode="decimal" min="0" step="0.01" value={taxRate} onChange={(e) => setTaxRate(e.target.value)} placeholder="15" className="w-full px-4 py-3 rounded-xl bg-slate-950/70 text-lg font-semibold text-indigo-300 placeholder-slate-600 border border-indigo-500/20 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 shadow-inner" />
          </div>
          <div>
            <span className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">Calculation Mode</span>
            <div className="flex gap-2">
              <button onClick={() => setMode("exclusive")} className={`flex-1 px-4 py-3 rounded-xl border font-semibold transition ${mode === "exclusive" ? "bg-indigo-500 text-white border-indigo-500" : "bg-slate-700 text-slate-300 border-slate-600"}`}>Tax Exclusive</button>
              <button onClick={() => setMode("inclusive")} className={`flex-1 px-4 py-3 rounded-xl border font-semibold transition ${mode === "inclusive" ? "bg-indigo-500 text-white border-indigo-500" : "bg-slate-700 text-slate-300 border-slate-600"}`}>Tax Inclusive</button>
            </div>
          </div>
          <div className="flex gap-3 pt-1">
            <button onClick={() => { setAmount("100"); setTaxRate("15"); setMode("exclusive"); }} className="flex-1 py-3 rounded-xl bg-indigo-500 text-slate-950 font-bold text-sm hover:bg-indigo-400 transition shadow-[0_6px_0_rgba(79,70,229,0.4)] active:translate-y-1 active:shadow-none">Load Example</button>
            <button onClick={() => { setAmount(""); setTaxRate(""); setMode("exclusive"); }} className="flex-1 py-3 rounded-xl bg-slate-700 text-white font-bold text-sm hover:bg-slate-600 transition shadow-[0_6px_0_rgba(30,41,59,0.5)] active:translate-y-1 active:shadow-none">Reset</button>
          </div>
        </div>
        {isValid && (
          <div className="mt-7 rounded-2xl bg-white border border-indigo-200 p-5 shadow-inner">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Results</h2>
            <div className="space-y-4">
              {mode === "exclusive" ? (
                <>
                  <div className="flex justify-between"><span className="text-slate-600 text-sm">Net Price (Before Tax)</span><span className="text-2xl font-bold text-indigo-700">${formatNumber(baseAmount)}</span></div>
                  <div className="flex justify-between"><span className="text-slate-600 text-sm">Tax Amount</span><span className="text-2xl font-bold text-indigo-700">${formatNumber(taxAmount!)}</span></div>
                  <div className="flex justify-between"><span className="text-slate-600 text-sm">Final Price (After Tax)</span><span className="text-2xl font-bold text-indigo-700">${formatNumber(finalPrice!)}</span></div>
                </>
              ) : (
                <>
                  <div className="flex justify-between"><span className="text-slate-600 text-sm">Gross Price (Including Tax)</span><span className="text-2xl font-bold text-indigo-700">${formatNumber(baseAmount)}</span></div>
                  <div className="flex justify-between"><span className="text-slate-600 text-sm">Tax Amount</span><span className="text-2xl font-bold text-indigo-700">${formatNumber(taxAmount!)}</span></div>
                  <div className="flex justify-between"><span className="text-slate-600 text-sm">Net Price (Before Tax)</span><span className="text-2xl font-bold text-indigo-700">${formatNumber(netPrice!)}</span></div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
