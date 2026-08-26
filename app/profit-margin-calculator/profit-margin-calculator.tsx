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
    <div className="py-10 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl border border-blue-100 p-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
          Profit Margin Calculator
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Calculate your net profit and profit margin instantly.
        </p>

        <div className="space-y-6">
          <div>
            <label htmlFor="revenue" className="block text-sm font-semibold text-gray-700 mb-1">
              Revenue ($)
            </label>
            <input
              id="revenue"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.01"
              value={revenue}
              onChange={(e) => setRevenue(e.target.value)}
              placeholder="e.g. 2000"
              className="w-full px-4 py-3 border border-blue-200 rounded-xl text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50/30"
            />
          </div>

          <div>
            <label htmlFor="totalCost" className="block text-sm font-semibold text-gray-700 mb-1">
              Total Cost ($)
            </label>
            <input
              id="totalCost"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.01"
              value={totalCost}
              onChange={(e) => setTotalCost(e.target.value)}
              placeholder="e.g. 1200"
              className="w-full px-4 py-3 border border-blue-200 rounded-xl text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50/30"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={loadExample}
              className="flex-1 px-4 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition shadow-md shadow-blue-200"
            >
              Load Example
            </button>
            <button
              onClick={reset}
              className="flex-1 px-4 py-3 bg-white text-blue-700 font-semibold rounded-xl border border-blue-300 hover:bg-blue-50 transition"
            >
              Reset
            </button>
          </div>
        </div>

        {isValid && (
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Results</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 font-medium">Net Profit</span>
                <span className="text-2xl font-bold text-green-600">
                  ${formatNumber(profit!)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 font-medium">Profit Margin</span>
                <span className="text-2xl font-bold text-blue-600">
                  {formatNumber(margin!)}%
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
