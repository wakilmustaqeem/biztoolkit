"use client";

import { useState } from "react";

const formatNumber = (num: number) =>
  new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(num);

export default function RoiCalculator() {
  const [investment, setInvestment] = useState<string>("");
  const [returnValue, setReturnValue] = useState<string>("");
  const [timePeriod, setTimePeriod] = useState<string>("");
  const [periodUnit, setPeriodUnit] = useState<"years" | "months">("years");

  const inv = parseFloat(investment);
  const ret = parseFloat(returnValue);
  const years = periodUnit === "years" ? parseFloat(timePeriod) : parseFloat(timePeriod) / 12;
  const isValid = !isNaN(inv) && inv > 0 && !isNaN(ret) && ret >= 0;
  const netProfit = isValid ? ret - inv : null;
  const roiPercent = isValid ? ((ret - inv) / inv) * 100 : null;
  const roiMultiple = isValid ? ret / inv : null;
  const annualizedRoi =
    isValid && !isNaN(years) && years > 0
      ? (Math.pow(ret / inv, 1 / years) - 1) * 100
      : null;

  const loadExample = () => {
    setInvestment("1000");
    setReturnValue("1500");
    setTimePeriod("2");
    setPeriodUnit("years");
  };

  const reset = () => {
    setInvestment("");
    setReturnValue("");
    setTimePeriod("");
    setPeriodUnit("years");
  };

  return (
    <div className="py-10 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl border border-blue-100 p-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">ROI Calculator</h1>
        <p className="text-center text-gray-500 mb-8">Calculate return on investment and annualized ROI.</p>

        <div className="space-y-6">
          <div>
            <label htmlFor="investment" className="block text-sm font-semibold text-gray-700 mb-1">Initial Investment ($)</label>
            <input id="investment" type="number" inputMode="decimal" min="0" step="0.01" value={investment} onChange={(e) => setInvestment(e.target.value)} placeholder="e.g. 1000" className="w-full px-4 py-3 border border-blue-200 rounded-xl text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50/30" />
          </div>
          <div>
            <label htmlFor="returnValue" className="block text-sm font-semibold text-gray-700 mb-1">Total Return / Final Value ($)</label>
            <input id="returnValue" type="number" inputMode="decimal" min="0" step="0.01" value={returnValue} onChange={(e) => setReturnValue(e.target.value)} placeholder="e.g. 1500" className="w-full px-4 py-3 border border-blue-200 rounded-xl text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50/30" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="timePeriod" className="block text-sm font-semibold text-gray-700 mb-1">Time Period (optional)</label>
              <input id="timePeriod" type="number" inputMode="decimal" min="0" step="0.01" value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)} placeholder="e.g. 2" className="w-full px-4 py-3 border border-blue-200 rounded-xl text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50/30" />
            </div>
            <div>
              <label htmlFor="periodUnit" className="block text-sm font-semibold text-gray-700 mb-1">Unit</label>
              <select id="periodUnit" value={periodUnit} onChange={(e) => setPeriodUnit(e.target.value as "years" | "months")} className="w-full px-4 py-3 border border-blue-200 rounded-xl text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50/30">
                <option value="years">Years</option>
                <option value="months">Months</option>
              </select>
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <button onClick={loadExample} className="flex-1 px-4 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition shadow-md shadow-blue-200">Load Example</button>
            <button onClick={reset} className="flex-1 px-4 py-3 bg-white text-blue-700 font-semibold rounded-xl border border-blue-300 hover:bg-blue-50 transition">Reset</button>
          </div>
        </div>

        {isValid && (
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Results</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between"><span className="text-gray-600 font-medium">Net Profit</span><span className="text-2xl font-bold text-green-600">${formatNumber(netProfit!)}</span></div>
              <div className="flex items-center justify-between"><span className="text-gray-600 font-medium">ROI (%)</span><span className="text-2xl font-bold text-blue-600">{formatNumber(roiPercent!)}%</span></div>
              <div className="flex items-center justify-between"><span className="text-gray-600 font-medium">ROI Multiple</span><span className="text-2xl font-bold text-purple-600">{formatNumber(roiMultiple!)}x</span></div>
              {annualizedRoi !== null && <div className="flex items-center justify-between"><span className="text-gray-600 font-medium">Annualized ROI</span><span className="text-2xl font-bold text-teal-600">{formatNumber(annualizedRoi)}%</span></div>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
