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
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Profit Margin Calculator
        </h1>

        <div className="grid gap-4">
          <div>
            <label htmlFor="revenue" className="block text-sm font-medium text-gray-700 mb-1">
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="totalCost" className="block text-sm font-medium text-gray-700 mb-1">
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex gap-2 mt-6">
          <button
            onClick={loadExample}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Load Example
          </button>
          <button
            onClick={reset}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
          >
            Reset
          </button>
        </div>

        {isValid && (
          <div className="mt-6 bg-gray-50 p-4 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Results</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Net Profit</span>
                <span className="font-bold text-green-700">
                  ${formatNumber(profit!)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Profit Margin</span>
                <span className="font-bold text-blue-700">
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
