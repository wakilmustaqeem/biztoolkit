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
    !isNaN(fixed) && fixed >= 0 &&
    !isNaN(variable) && variable >= 0 &&
    !isNaN(price) && price > 0;

  const contributionMargin = hasRequired ? price - variable : null;
  const isInvalidPricing =
    hasRequired && contributionMargin !== null && contributionMargin <= 0;

  const breakEvenUnits =
    hasRequired && contributionMargin !== null && contributionMargin > 0
      ? fixed / contributionMargin
      : null;

  const breakEvenRevenue =
    breakEvenUnits !== null ? breakEvenUnits * price : null;

  const targetProfitValid =
    hasRequired &&
    !isNaN(profit) &&
    profit >= 0 &&
    contributionMargin !== null &&
    contributionMargin > 0;

  const unitsForTargetProfit =
    targetProfitValid && contributionMargin !== null
      ? (fixed + profit) / contributionMargin
      : null;

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
    <div className="mx-auto max-w-2xl p-4">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
        <h1 className="mb-4 text-2xl font-bold text-gray-800">Break-even Calculator</h1>

        <div className="grid gap-4">
          <div>
            <label htmlFor="fixedCosts" className="mb-1 block text-sm font-medium text-gray-700">
              Fixed Costs ($)
            </label>
            <input
              id="fixedCosts"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.01"
              value={fixedCosts}
              onChange={(e) => setFixedCosts(e.target.value)}
              placeholder="e.g. 10000"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="variableCost" className="mb-1 block text-sm font-medium text-gray-700">
              Variable Cost per Unit ($)
            </label>
            <input
              id="variableCost"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.01"
              value={variableCost}
              onChange={(e) => setVariableCost(e.target.value)}
              placeholder="e.g. 20"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="sellingPrice" className="mb-1 block text-sm font-medium text-gray-700">
              Selling Price per Unit ($)
            </label>
            <input
              id="sellingPrice"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.01"
              value={sellingPrice}
              onChange={(e) => setSellingPrice(e.target.value)}
              placeholder="e.g. 50"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="targetProfit" className="mb-1 block text-sm font-medium text-gray-700">
              Target Profit ($) <span className="text-gray-400">(optional)</span>
            </label>
            <input
              id="targetProfit"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.01"
              value={targetProfit}
              onChange={(e) => setTargetProfit(e.target.value)}
              placeholder="e.g. 5000"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mt-6 flex gap-2">
          <button
            type="button"
            onClick={loadExample}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            Load Example
          </button>
          <button
            type="button"
            onClick={reset}
            className="rounded-lg bg-gray-200 px-4 py-2 text-gray-700 transition hover:bg-gray-300"
          >
            Reset
          </button>
        </div>

        {hasRequired && isInvalidPricing && (
          <div role="alert" className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
            Selling price must be greater than variable cost per unit for a positive contribution margin.
          </div>
        )}

        {hasRequired && !isInvalidPricing && breakEvenUnits !== null && breakEvenRevenue !== null && (
          <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4">
            <h2 className="mb-3 text-xl font-semibold text-gray-800">Results</h2>
            <div className="space-y-2">
              <div className="flex justify-between gap-4">
                <span className="text-gray-600">Contribution Margin per Unit</span>
                <span className="font-bold text-blue-700">${formatNumber(contributionMargin!)}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-gray-600">Break-even Point (Units)</span>
                <span className="font-bold text-green-700">{formatNumber(breakEvenUnits)} units</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-gray-600">Break-even Revenue</span>
                <span className="font-bold text-purple-700">${formatNumber(breakEvenRevenue)}</span>
              </div>
              {unitsForTargetProfit !== null && (
                <div className="flex justify-between gap-4">
                  <span className="text-gray-600">
                    Units to Achieve Target Profit (${formatNumber(profit)})
                  </span>
                  <span className="font-bold text-teal-700">{formatNumber(unitsForTargetProfit)} units</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
