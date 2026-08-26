"use client";

import { useState } from "react";

const formatNumber = (num: number) =>
  new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(num);

export default function RoiCalculator() {
  const [investment, setInvestment] = useState<string>("");
  const [returnValue, setReturnValue] = useState<string>("");
  const [timePeriod, setTimePeriod] = useState<string>("");
  const [periodUnit, setPeriodUnit] = useState<"months" | "years">("years");

  const inv = parseFloat(investment);
  const ret = parseFloat(returnValue);
  const years =
    periodUnit === "years"
      ? parseFloat(timePeriod)
      : parseFloat(timePeriod) / 12;

  const isValid = !isNaN(inv) && inv > 0 && !isNaN(ret) && ret >= 0;

  const netProfit = isValid ? ret - inv : null;
  const roiPercent = isValid ? ((ret - inv) / inv) * 100 : null;
  const roiMultiple = isValid ? ret / inv : null;
  const annualizedRoi =
    isValid && !isNaN(years) && years > 0 && ret > 0
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
    <div className="mx-auto max-w-2xl p-4">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
        <h1 className="mb-4 text-2xl font-bold text-gray-800">ROI Calculator</h1>

        <div className="grid gap-4">
          <div>
            <label htmlFor="investment" className="mb-1 block text-sm font-medium text-gray-700">
              Initial Investment ($)
            </label>
            <input
              id="investment"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.01"
              value={investment}
              onChange={(e) => setInvestment(e.target.value)}
              placeholder="e.g. 1000"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="return" className="mb-1 block text-sm font-medium text-gray-700">
              Total Return / Final Value ($)
            </label>
            <input
              id="return"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.01"
              value={returnValue}
              onChange={(e) => setReturnValue(e.target.value)}
              placeholder="e.g. 1500"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="time-period" className="mb-1 block text-sm font-medium text-gray-700">
                Time Period (optional)
              </label>
              <input
                id="time-period"
                type="number"
                inputMode="decimal"
                min="0"
                step="0.01"
                value={timePeriod}
                onChange={(e) => setTimePeriod(e.target.value)}
                placeholder="e.g. 2"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="period-unit" className="mb-1 block text-sm font-medium text-gray-700">
                Unit
              </label>
              <select
                id="period-unit"
                value={periodUnit}
                onChange={(e) => setPeriodUnit(e.target.value as "months" | "years")}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="years">Years</option>
                <option value="months">Months</option>
              </select>
            </div>
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

        {isValid && (
          <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4">
            <h2 className="mb-3 text-xl font-semibold text-gray-800">Results</h2>
            <div className="space-y-2">
              <div className="flex justify-between gap-4">
                <span className="text-gray-600">Net Profit</span>
                <span className={`font-bold ${netProfit! >= 0 ? "text-green-700" : "text-red-700"}`}>
                  ${formatNumber(netProfit!)}
                </span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-gray-600">ROI (%)</span>
                <span className={`font-bold ${roiPercent! >= 0 ? "text-blue-700" : "text-red-700"}`}>
                  {formatNumber(roiPercent!)}%
                </span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-gray-600">ROI Multiple</span>
                <span className="font-bold text-purple-700">{formatNumber(roiMultiple!)}x</span>
              </div>
              {annualizedRoi !== null && (
                <div className="flex justify-between gap-4">
                  <span className="text-gray-600">Annualized ROI</span>
                  <span className={`font-bold ${annualizedRoi >= 0 ? "text-teal-700" : "text-red-700"}`}>
                    {formatNumber(annualizedRoi)}%
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
