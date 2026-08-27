import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact BizToolkit with questions, feedback, or suggestions.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Contact BizToolkit
        </h1>
        <div className="space-y-4 text-gray-700">
          <p>
            Have a question, suggestion, or feedback about BizToolkit?
          </p>
          <p>
            We welcome feedback about our business calculators and ideas for
            new tools.
          </p>
          <p>
            For now, please use the available contact method associated with
            this website or project.
          </p>
        </div>
      </div>
    </main>
  );
}
