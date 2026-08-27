"use client";

import { useState } from "react";

const formatNumber = (num: number) =>
  new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(num);

export default function BreakEvenCalculator() {
  const [fixedCosts, setFixedCosts] = useState<string>("");
  const [variableCost, setVariableCost] = useState<string>("");
  const [sellingPrice, setSellingPrice] = useState<string>("");
  const [targetProfit, setTargetProfit] = useState<string>("");

  const fixed = parseFloat(fixedCosts);
  const variable = parseFloat(variableCost);
  const price = parseFloat(sellingPrice);
  const profit = parseFloat(targetProfit);

  const hasRequired =
    !isNaN(fixed) && fixed >= 0 && !isNaN(variable) && variable >= 0 && !isNaN(price) && price > 0;
  const contributionMargin = hasRequired ? price - variable : null;
  const isInvalidPricing = hasRequired && contributionMargin !== null && contributionMargin <= 0;
  const breakEvenUnits = hasRequired && contributionMargin !== null && contributionMargin > 0 ? fixed / contributionMargin : null;
  const breakEvenRevenue = breakEvenUnits !== null ? breakEvenUnits * price : null;
  const targetProfitValid = hasRequired && !isNaN(profit) && profit >= 0 && contributionMargin !== null && contributionMargin > 0;
  const unitsForTargetProfit = targetProfitValid && contributionMargin !== null ? (fixed + profit) / contributionMargin : null;

  const loadExample = () => {
    setFixedCosts("10000");
    setVariableCost("20");
    setSellingPrice("50");
    setTargetProfit("5000");
  };

  const reset = () => {
    setFixedCosts("");
    setVariableCost("");
    setSellingPrice("");
    setTargetProfit("");
  };

  return (
    <div className="py-10 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl border border-orange-100 p-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">Break-even Calculator</h1>
        <p className="text-center text-gray-500 mb-8">Determine units and revenue needed to cover your costs.</p>
        <div className="space-y-6">
          <div><label htmlFor="fixedCosts" className="block text-sm font-semibold text-gray-700 mb-1">Fixed Costs ($)</label><input id="fixedCosts" type="number" inputMode="decimal" min="0" step="0.01" value={fixedCosts} onChange={(e) => setFixedCosts(e.target.value)} placeholder="e.g. 10000" className="w-full px-4 py-3 border border-orange-500/20 rounded-xl text-lg text-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400/50 bg-orange-50/30" /></div>
          <div><label htmlFor="variableCost" className="block text-sm font-semibold text-gray-700 mb-1">Variable Cost per Unit ($)</label><input id="variableCost" type="number" inputMode="decimal" min="0" step="0.01" value={variableCost} onChange={(e) => setVariableCost(e.target.value)} placeholder="e.g. 20" className="w-full px-4 py-3 border border-orange-500/20 rounded-xl text-lg text-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400/50 bg-orange-50/30" /></div>
          <div><label htmlFor="sellingPrice" className="block text-sm font-semibold text-gray-700 mb-1">Selling Price per Unit ($)</label><input id="sellingPrice" type="number" inputMode="decimal" min="0" step="0.01" value={sellingPrice} onChange={(e) => setSellingPrice(e.target.value)} placeholder="e.g. 50" className="w-full px-4 py-3 border border-orange-500/20 rounded-xl text-lg text-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400/50 bg-orange-50/30" /></div>
          <div><label htmlFor="targetProfit" className="block text-sm font-semibold text-gray-700 mb-1">Target Profit ($) <span className="text-gray-400">(optional)</span></label><input id="targetProfit" type="number" inputMode="decimal" min="0" step="0.01" value={targetProfit} onChange={(e) => setTargetProfit(e.target.value)} placeholder="e.g. 5000" className="w-full px-4 py-3 border border-orange-500/20 rounded-xl text-lg text-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400/50 bg-orange-50/30" /></div>
          <div className="flex gap-3 pt-2"><button onClick={loadExample} className="flex-1 px-4 py-3 bg-orange-500 text-slate-950 font-semibold rounded-xl hover:bg-orange-400 transition shadow-[0_6px_0_rgba(234,88,12,0.4)]">Load Example</button><button onClick={reset} className="flex-1 px-4 py-3 bg-white text-orange-700 font-semibold rounded-xl border border-orange-300 hover:bg-orange-50 transition">Reset</button></div>
        </div>
        {hasRequired && isInvalidPricing && <div className="mt-8 bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl">Selling price must be greater than variable cost per unit for a positive contribution margin.</div>}
        {hasRequired && !isInvalidPricing && <div className="mt-8 bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl border border-orange-100"><h2 className="text-xl font-bold text-gray-800 mb-4">Results</h2><div className="space-y-4"><div className="flex items-center justify-between"><span className="text-gray-600 font-medium">Contribution Margin per Unit</span><span className="text-2xl font-bold text-orange-300">${formatNumber(contributionMargin!)}</span></div><div className="flex items-center justify-between"><span className="text-gray-600 font-medium">Break-even Point (Units)</span><span className="text-2xl font-bold text-orange-300">{formatNumber(breakEvenUnits!)} units</span></div><div className="flex items-center justify-between"><span className="text-gray-600 font-medium">Break-even Revenue</span><span className="text-2xl font-bold text-orange-300">${formatNumber(breakEvenRevenue!)}</span></div>{unitsForTargetProfit !== null && <div className="flex items-center justify-between"><span className="text-gray-600 font-medium">Units for Target Profit (${formatNumber(profit)})</span><span className="text-2xl font-bold text-orange-300">{formatNumber(unitsForTargetProfit)} units</span></div>}</div></div>}
      </div>
    </div>
  );
}
