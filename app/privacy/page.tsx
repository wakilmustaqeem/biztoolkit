import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy information for BizToolkit visitors and users.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>
        <div className="space-y-4 text-gray-700">
          <p>
            BizToolkit provides free business calculators for informational and
            practical use.
          </p>
          <p>
            We may use analytics and performance tools to understand website
            traffic, page usage, and site performance.
          </p>
          <p>
            We do not ask users to provide sensitive personal information in
            order to use the calculators.
          </p>
        </div>
      </div>
    </main>
  );
}
