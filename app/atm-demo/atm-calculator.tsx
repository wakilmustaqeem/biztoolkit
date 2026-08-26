"use client";

import Link from "next/link";
import { useState } from "react";

const formatNumber = (num: number) =>
  new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(num);

export default function AtmCalculator() {
  const [currentValue, setCurrentValue] = useState<string>("0");
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [resetNext, setResetNext] = useState<boolean>(false);

  const handleNumber = (num: string) => {
    if (currentValue === "0" || resetNext) {
      setCurrentValue(num);
      setResetNext(false);
    } else {
      setCurrentValue(currentValue + num);
    }
  };

  const handleDecimal = () => {
    if (resetNext) {
      setCurrentValue("0.");
      setResetNext(false);
      return;
    }
    if (!currentValue.includes(".")) {
      setCurrentValue(currentValue + ".");
    }
  };

  const calculate = () => {
    if (previousValue === null || operation === null) return;
    const prev = parseFloat(previousValue);
    const curr = parseFloat(currentValue);
    let result = 0;

    switch (operation) {
      case "+":
        result = prev + curr;
        break;
      case "-":
        result = prev - curr;
        break;
      case "×":
        result = prev * curr;
        break;
      case "÷":
        result = curr !== 0 ? prev / curr : 0;
        break;
      default:
        return;
    }

    setCurrentValue(String(result));
    setPreviousValue(null);
    setOperation(null);
    setResetNext(true);
  };

  const handleOperation = (op: string) => {
    if (operation && previousValue !== null) {
      calculate();
      setPreviousValue(currentValue);
      setOperation(op);
      setResetNext(true);
    } else {
      setPreviousValue(currentValue);
      setOperation(op);
      setResetNext(true);
    }
  };

  const handleClear = () => {
    setCurrentValue("0");
    setPreviousValue(null);
    setOperation(null);
    setResetNext(false);
  };

  const handleBackspace = () => {
    if (currentValue.length > 1) {
      setCurrentValue(currentValue.slice(0, -1));
    } else {
      setCurrentValue("0");
    }
  };

  const neonText =
    "text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]";
  const neonBg =
    "bg-slate-900 border border-cyan-500/40 shadow-[0_0_20px_rgba(34,211,238,0.3)]";
  const keypadBtn =
    "w-16 h-16 text-xl font-bold text-cyan-300 bg-slate-800 border border-cyan-500/30 rounded-xl shadow-[0_0_10px_rgba(34,211,238,0.3)] hover:bg-slate-700 active:scale-95 transition";

  const renderKey = (key: string) => (
    <button
      key={key}
      className={keypadBtn}
      onClick={() => {
        if (["+", "-", "×", "÷"].includes(key)) handleOperation(key);
        else if (key === ".") handleDecimal();
        else if (key === "=") calculate();
        else if (key === "⌫") handleBackspace();
        else handleNumber(key);
      }}
      type="button"
    >
      {key}
    </button>
  );

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className={`max-w-sm w-full rounded-3xl p-6 ${neonBg}`}>
        <h1 className="text-center text-2xl font-bold text-pink-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.8)] mb-4">
          BizToolkit ATM
        </h1>

        <div className="bg-black/80 border border-cyan-400/40 rounded-xl p-4 mb-6">
          <p className="text-right text-lg text-slate-400">Current Value</p>
          <p className={`text-right text-3xl font-bold ${neonText}`}>
            {formatNumber(parseFloat(currentValue || "0"))}
          </p>
          {operation && (
            <p className="text-right text-sm text-pink-400 drop-shadow-[0_0_8px_rgba(236,72,153,0.7)]">
              {previousValue} {operation}
            </p>
          )}
        </div>

        <div className="grid grid-cols-4 gap-3 mb-6">
          {["7", "8", "9", "÷", "4", "5", "6", "×", "1", "2", "3", "-", "0", ".", "=", "+", "⌫"].map(renderKey)}
        </div>

        <div className="flex gap-3">
          <Link
            href="/"
            className="flex-1 py-2 text-center text-lg font-semibold text-lime-300 bg-slate-800 border border-lime-400/40 rounded-xl shadow-[0_0_15px_rgba(163,230,53,0.4)] hover:bg-slate-700"
          >
            Home
          </Link>
          <button
            className="flex-1 py-2 text-lg font-semibold text-orange-300 bg-slate-800 border border-orange-400/40 rounded-xl shadow-[0_0_15px_rgba(251,146,60,0.4)] hover:bg-slate-700"
            onClick={handleClear}
            type="button"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
