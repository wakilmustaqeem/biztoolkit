"use client";

import { useState } from "react";

const formatNumber = (num: number) =>
  new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(num);

export default function DiscountCalculator() {
  const [originalPrice, setOriginalPrice] = useState<string>("");
  const [discountPercent, setDiscountPercent] = useState<string>("");

  const price = parseFloat(originalPrice);
  const discount = parseFloat(discountPercent);

  const isValid =
    !isNaN(price) &&
    price > 0 &&
    !isNaN(discount) &&
    discount >= 0 &&
    discount <= 100;

  const discountAmount = isValid ? (price * discount) / 100 : null;
  const finalPrice = isValid ? price - discountAmount! : null;

  const loadExample = () => {
    setOriginalPrice("200");
    setDiscountPercent("25");
  };

  const reset = () => {
    setOriginalPrice("");
    setDiscountPercent("");
  };

  return (
    <div className="mx-auto max-w-2xl p-4">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
        <h1 className="mb-4 text-2xl font-bold text-gray-800">
          Discount Calculator
        </h1>

        <div className="grid gap-4">
          <div>
            <label htmlFor="originalPrice" className="mb-1 block text-sm font-medium text-gray-700">
              Original Price ($)
            </label>
            <input
              id="originalPrice"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.01"
              value={originalPrice}
              onChange={(e) => setOriginalPrice(e.target.value)}
              placeholder="e.g. 200"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="discountPercent" className="mb-1 block text-sm font-medium text-gray-700">
              Discount Percentage (%)
            </label>
            <input
              id="discountPercent"
              type="number"
              inputMode="decimal"
              min="0"
              max="100"
              step="0.01"
              value={discountPercent}
              onChange={(e) => setDiscountPercent(e.target.value)}
              placeholder="e.g. 25"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mt-6 flex gap-2">
          <button
            onClick={loadExample}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            Load Example
          </button>
          <button
            onClick={reset}
            className="rounded-lg bg-gray-200 px-4 py-2 text-gray-700 transition hover:bg-gray-300"
          >
            Reset
          </button>
        </div>

        {isValid && (
          <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4">
            <h2 className="mb-3 text-xl font-semibold text-gray-800">Results</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Discount Amount</span>
                <span className="font-bold text-blue-700">${formatNumber(discountAmount!)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Final Price</span>
                <span className="font-bold text-green-700">${formatNumber(finalPrice!)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">You Save</span>
                <span className="font-bold text-purple-700">${formatNumber(discountAmount!)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
