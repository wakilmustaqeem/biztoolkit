"use client";

import { useState } from "react";

const formatNumber = (num: number) => new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(num);

export default function CommissionCalculator() {
  const [baseAmount, setBaseAmount] = useState<string>("");
  const [commissionPercent, setCommissionPercent] = useState<string>("");
  const amount = parseFloat(baseAmount);
  const commissionRate = parseFloat(commissionPercent);
  const isValid = !isNaN(amount) && amount >= 0 && !isNaN(commissionRate) && commissionRate >= 0;
  const commissionAmount = isValid ? amount * (commissionRate / 100) : null;
  const netPay = commissionAmount !== null ? amount + commissionAmount : null;
  const loadExample = () => { setBaseAmount("1000"); setCommissionPercent("10"); };
  const reset = () => { setBaseAmount(""); setCommissionPercent(""); };

  return (
    <div className="mx-auto max-w-2xl p-4">
      <div className="rounded-2xl border border-teal-200 bg-white p-6 shadow-lg">
        <h1 className="mb-2 text-2xl font-bold text-gray-800">Commission Calculator</h1>
        <p className="mb-6 text-gray-600">Calculate commission amount and total earnings from a base amount and commission percentage.</p>
        <div className="grid gap-4">
          <div><label htmlFor="baseAmount" className="mb-1 block text-sm font-medium text-gray-700">Base Amount ($)</label><input id="baseAmount" type="number" inputMode="decimal" min="0" step="0.01" value={baseAmount} onChange={(e) => setBaseAmount(e.target.value)} placeholder="e.g. 1000" className="w-full rounded-lg border border-teal-500/20 px-4 py-2 text-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400/50" /></div>
          <div><label htmlFor="commissionPercent" className="mb-1 block text-sm font-medium text-gray-700">Commission Percentage (%)</label><input id="commissionPercent" type="number" inputMode="decimal" min="0" step="0.01" value={commissionPercent} onChange={(e) => setCommissionPercent(e.target.value)} placeholder="e.g. 10" className="w-full rounded-lg border border-teal-500/20 px-4 py-2 text-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400/50" /></div>
        </div>
        <div className="mt-6 flex gap-2">
          <button type="button" onClick={loadExample} className="rounded-lg bg-teal-500 px-4 py-2 text-white transition hover:bg-teal-600">Load Example</button>
          <button type="button" onClick={reset} className="rounded-lg bg-gray-200 px-4 py-2 text-gray-700 transition hover:bg-gray-300">Reset</button>
        </div>
        {baseAmount !== "" && commissionPercent !== "" && !isValid && <div role="alert" className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">Base amount and commission percentage must be valid non-negative numbers.</div>}
        {isValid && commissionAmount !== null && netPay !== null && <div className="mt-6 rounded-xl border border-teal-200 bg-teal-50/50 p-4"><h2 className="mb-3 text-xl font-semibold text-gray-800">Results</h2><div className="space-y-2"><div className="flex justify-between gap-4"><span className="text-gray-600">Commission Amount</span><span className="font-bold text-teal-300">${formatNumber(commissionAmount)}</span></div><div className="flex justify-between gap-4"><span className="text-gray-600">Total Earnings</span><span className="font-bold text-teal-300">${formatNumber(netPay)}</span></div></div></div>}
      </div>
    </div>
  );
}
