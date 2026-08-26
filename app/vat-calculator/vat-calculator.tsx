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

  const taxAmount =
    isValid && mode === "exclusive"
      ? (baseAmount * rate) / 100
      : isValid && mode === "inclusive"
      ? baseAmount - baseAmount / (1 + rate / 100)
      : null;

  const finalPrice =
    isValid && mode === "exclusive"
      ? baseAmount + (baseAmount * rate) / 100
      : isValid && mode === "inclusive"
      ? baseAmount
      : null;

  const netPrice =
    isValid && mode === "inclusive"
      ? baseAmount / (1 + rate / 100)
      : null;

  const loadExample = () => {
    setAmount("100");
    setTaxRate("15");
    setMode("exclusive");
  };

  const reset = () => {
    setAmount("");
    setTaxRate("");
    setMode("exclusive");
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          VAT / Sales Tax Calculator
        </h1>

        <div className="grid gap-4">
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
              Amount ($)
            </label>
            <input
              id="amount"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="e.g. 100"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="taxRate" className="block text-sm font-medium text-gray-700 mb-1">
              Tax Rate (%)
            </label>
            <input
              id="taxRate"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.01"
              value={taxRate}
              onChange={(e) => setTaxRate(e.target.value)}
              placeholder="e.g. 15"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <span className="block text-sm font-medium text-gray-700 mb-1">
              Calculation Mode
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setMode("exclusive")}
                className={`flex-1 px-4 py-2 rounded-lg border ${
                  mode === "exclusive"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                Tax Exclusive
              </button>
              <button
                onClick={() => setMode("inclusive")}
                className={`flex-1 px-4 py-2 rounded-lg border ${
                  mode === "inclusive"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                Tax Inclusive
              </button>
            </div>
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
              {mode === "exclusive" ? (
                <>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Net Price (Before Tax)</span>
                    <span className="font-bold text-blue-700">
                      ${formatNumber(baseAmount)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax Amount</span>
                    <span className="font-bold text-teal-700">
                      ${formatNumber(taxAmount!)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Final Price (After Tax)</span>
                    <span className="font-bold text-green-700">
                      ${formatNumber(finalPrice!)}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gross Price (Including Tax)</span>
                    <span className="font-bold text-blue-700">
                      ${formatNumber(baseAmount)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax Amount</span>
                    <span className="font-bold text-teal-700">
                      ${formatNumber(taxAmount!)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Net Price (Before Tax)</span>
                    <span className="font-bold text-green-700">
                      ${formatNumber(netPrice!)}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
