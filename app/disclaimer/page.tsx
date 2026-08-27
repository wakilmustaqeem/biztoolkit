import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Disclaimer for BizToolkit calculators and business tools.",
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Disclaimer
        </h1>
        <div className="space-y-4 text-gray-700">
          <p>
            The calculators and information provided on BizToolkit are for
            general informational and educational purposes only.
          </p>
          <p>
            While we aim to provide accurate results, BizToolkit makes no
            guarantees about the completeness, reliability, or accuracy of
            the calculations.
          </p>
          <p>
            Business and financial decisions should not be based solely on
            these tools. We recommend consulting a qualified professional
            for specific advice.
          </p>
        </div>
      </div>
    </main>
  );
}
