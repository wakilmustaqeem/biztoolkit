"use client";

import { useState } from "react";

const formatNumber = (num: number) =>
  new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(num);

export default function MarkupCalculator() {
  const [costPrice, setCostPrice] = useState<string>("");
  const [markupPercent, setMarkupPercent] = useState<string>("");

  const cost = parseFloat(costPrice);
  const markup = parseFloat(markupPercent);
  const isValid = !isNaN(cost) && cost >= 0 && !isNaN(markup) && markup >= 0;
  const markupAmount = isValid ? (cost * markup) / 100 : null;
  const sellingPrice = isValid ? cost + markupAmount! : null;
  const grossMargin = isValid && sellingPrice! > 0 ? ((sellingPrice! - cost) / sellingPrice!) * 100 : null;

  const loadExample = () => { setCostPrice("50"); setMarkupPercent("60"); };
  const reset = () => { setCostPrice(""); setMarkupPercent(""); };

  return (
    <div className="py-10 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl border border-blue-100 p-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">Markup Calculator</h1>
        <p className="text-center text-gray-500 mb-8">Calculate selling price and understand markup vs margin.</p>
        <div className="space-y-6">
          <div><label htmlFor="costPrice" className="block text-sm font-semibold text-gray-700 mb-1">Cost Price ($)</label><input id="costPrice" type="number" inputMode="decimal" min="0" step="0.01" value={costPrice} onChange={(e) => setCostPrice(e.target.value)} placeholder="e.g. 50" className="w-full px-4 py-3 border border-blue-200 rounded-xl text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50/30" /></div>
          <div><label htmlFor="markupPercent" className="block text-sm font-semibold text-gray-700 mb-1">Markup Percentage (%)</label><input id="markupPercent" type="number" inputMode="decimal" min="0" step="0.01" value={markupPercent} onChange={(e) => setMarkupPercent(e.target.value)} placeholder="e.g. 60" className="w-full px-4 py-3 border border-blue-200 rounded-xl text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50/30" /></div>
          <div className="flex gap-3 pt-2"><button onClick={loadExample} className="flex-1 px-4 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition shadow-md shadow-blue-200">Load Example</button><button onClick={reset} className="flex-1 px-4 py-3 bg-white text-blue-700 font-semibold rounded-xl border border-blue-300 hover:bg-blue-50 transition">Reset</button></div>
        </div>
        {isValid && <div className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100"><h2 className="text-xl font-bold text-gray-800 mb-4">Results</h2><div className="space-y-4"><div className="flex items-center justify-between"><span className="text-gray-600 font-medium">Markup Amount</span><span className="text-2xl font-bold text-blue-600">${formatNumber(markupAmount!)}</span></div><div className="flex items-center justify-between"><span className="text-gray-600 font-medium">Selling Price</span><span className="text-2xl font-bold text-green-600">${formatNumber(sellingPrice!)}</span></div><div className="flex items-center justify-between"><span className="text-gray-600 font-medium">Gross Profit Margin</span><span className="text-2xl font-bold text-purple-600">{formatNumber(grossMargin!)}%</span></div></div></div>}
      </div>
    </div>
  );
}
