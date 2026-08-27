"use client";
import { useState } from "react";

const formatNumber = (num: number) =>
  new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(num);

export default function DiscountCalculator() {
  const [originalPrice, setOriginalPrice] = useState<string>("");
  const [discountPercent, setDiscountPercent] = useState<string>("");
  const price = parseFloat(originalPrice);
  const discount = parseFloat(discountPercent);
  const isValid = !isNaN(price) && price > 0 && !isNaN(discount) && discount >= 0 && discount <= 100;
  const discountAmount = isValid ? (price * discount) / 100 : null;
  const finalPrice = isValid ? price - discountAmount! : null;

  return (
    <div className="py-8 px-3 sm:px-4">
      <div className="max-w-md mx-auto rounded-[2rem] bg-gradient-to-b from-slate-800 to-slate-900 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10">
        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center mb-1">Discount Calculator</h1>
        <p className="text-center text-slate-300 text-sm mb-6">Discount amount, final price & savings</p>
        <div className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">Original Price ($)</label>
            <input type="number" inputMode="decimal" min="0" step="0.01" value={originalPrice} onChange={(e) => setOriginalPrice(e.target.value)} placeholder="200" className="w-full px-4 py-3 rounded-xl bg-slate-950/70 text-lg font-semibold text-rose-300 placeholder-slate-600 border border-rose-500/20 focus:outline-none focus:ring-2 focus:ring-rose-400/50 shadow-inner" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">Discount Percentage (%)</label>
            <input type="number" inputMode="decimal" min="0" max="100" step="0.01" value={discountPercent} onChange={(e) => setDiscountPercent(e.target.value)} placeholder="25" className="w-full px-4 py-3 rounded-xl bg-slate-950/70 text-lg font-semibold text-rose-300 placeholder-slate-600 border border-rose-500/20 focus:outline-none focus:ring-2 focus:ring-rose-400/50 shadow-inner" />
          </div>
          <div className="flex gap-3 pt-1">
            <button onClick={() => { setOriginalPrice("200"); setDiscountPercent("25"); }} className="flex-1 py-3 rounded-xl bg-rose-500 text-slate-950 font-bold text-sm hover:bg-rose-400 transition shadow-[0_6px_0_rgba(225,29,72,0.4)] active:translate-y-1 active:shadow-none">Load Example</button>
            <button onClick={() => { setOriginalPrice(""); setDiscountPercent(""); }} className="flex-1 py-3 rounded-xl bg-slate-700 text-white font-bold text-sm hover:bg-slate-600 transition shadow-[0_6px_0_rgba(30,41,59,0.5)] active:translate-y-1 active:shadow-none">Reset</button>
          </div>
        </div>
        {isValid && (
          <div className="mt-7 rounded-2xl bg-white border border-rose-200 p-5 shadow-inner">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Results</h2>
            <div className="space-y-4">
              <div className="flex justify-between"><span className="text-slate-600 text-sm">Discount Amount</span><span className="text-2xl font-bold text-rose-700">${formatNumber(discountAmount!)}</span></div>
              <div className="flex justify-between"><span className="text-slate-600 text-sm">Final Price</span><span className="text-2xl font-bold text-rose-700">${formatNumber(finalPrice!)}</span></div>
              <div className="flex justify-between"><span className="text-slate-600 text-sm">You Save</span><span className="text-2xl font-bold text-rose-700">${formatNumber(discountAmount!)}</span></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
