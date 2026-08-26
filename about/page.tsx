import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About BizToolkit",
  description:
    "Learn about BizToolkit and our free business calculators for freelancers, entrepreneurs, and small businesses.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          About BizToolkit
        </h1>

        <div className="space-y-4 text-gray-700">
          <p>
            BizToolkit provides free, easy-to-use business calculators for
            freelancers, entrepreneurs, and small business owners.
          </p>
          <p>
            Our goal is to simplify everyday business math — from profit
            margins and ROI to break-even analysis, markups, discounts,
            commissions, and VAT.
          </p>
          <p>
            All calculators run in your browser, so you can use them quickly
            without creating an account or sharing sensitive data.
          </p>
          <p>
            We are working to add more practical tools and helpful content to
            support better business decisions.
          </p>
        </div>
      </div>
    </main>
  );
}
