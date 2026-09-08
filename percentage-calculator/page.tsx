import type { Metadata } from "next";
import BusinessCalculator from "../components/business-calculator";

export const metadata: Metadata = {
  title: "Percentage Calculator | BizToolkit",
  alternates: { canonical: "/percentage-calculator" },
};

export default function Page() {
  return <BusinessCalculator slug="percentage-calculator" />;
}
