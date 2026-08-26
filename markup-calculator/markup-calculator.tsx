"use client";

import { useState } from "react";

const formatNumber = (num: number) =>
  new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(num);

export default function MarkupCalculator() {
  const [cost, setCost] = useState<string>("");
  const [markup, setMarkup] = useState<string>("");

  const costValue = parseFloat(cost);
  const markupValue = parseFloat(markup);

  const hasValidInputs =
    !isNaN(costValue) && costValue >= 0 &&
    !isNaN(markupValue) && markupValue >= 0;

  const markupAmount = hasValidInputs
    ? costValue * (markupValue / 100)
    : null;

  const sellingPrice =
    markupAmount !== null ? costValue + markupAmount : null;

  const margin =
    sellingPrice !== null && sellingPrice > 0
      ? (markupAmount! / sellingPrice) * 100
      : 0;

  const reset = () => {
    setCost("");
    setMarkup("");
  };

  return (
    <div className="mx-auto max-w-2xl p-4">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
        <h1 className="mb-2 text-2xl font-bold text-gray-800">Markup Calculator</h1>
        <p className="mb-6 text-gray-600">
          Calculate markup amount, selling price, and profit margin from your cost and markup percentage.
        </p>

        <div className="grid gap-4">
          <div>
            <label htmlFor="cost" className="mb-1 block text-sm font-medium text-gray-700">
              Cost ($)
            </label>
            <input
              id="cost"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.01"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              placeholder="e.g. 50"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="markup" className="mb-1 block text-sm font-medium text-gray-700">
              Markup (%)
            </label>
            <input
              id="markup"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.01"
              value={markup}
              onChange={(e) => setMarkup(e.target.value)}
              placeholder="e.g. 60"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mt-6 flex gap-2">
          <button
            type="button"
            onClick={reset}
            className="rounded-lg bg-gray-200 px-4 py-2 text-gray-700 transition hover:bg-gray-300"
          >
            Reset
          </button>
        </div>

        {cost !== "" && markup !== "" && !hasValidInputs && (
          <div role="alert" className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
            Cost and markup must be valid non-negative numbers.
          </div>
        )}

        {hasValidInputs && markupAmount !== null && sellingPrice !== null && (
          <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4">
            <h2 className="mb-3 text-xl font-semibold text-gray-800">Results</h2>
            <div className="space-y-2">
              <div className="flex justify-between gap-4">
                <span className="text-gray-600">Markup Amount</span>
                <span className="font-bold text-blue-700">${formatNumber(markupAmount)}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-gray-600">Selling Price</span>
                <span className="font-bold text-green-700">${formatNumber(sellingPrice)}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-gray-600">Profit Margin</span>
                <span className="font-bold text-purple-700">{formatNumber(margin)}%</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
