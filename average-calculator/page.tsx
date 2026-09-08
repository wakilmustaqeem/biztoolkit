import type { Metadata } from "next";
import BusinessCalculator from "../components/business-calculator";

export const metadata: Metadata = {
  title: "Average Calculator | BizToolkit",
  alternates: { canonical: "/average-calculator" },
};

export default function Page() {
  return <BusinessCalculator slug="average-calculator" />;
}
