import type { Metadata } from "next";
import BusinessCalculator from "../components/business-calculator";

export const metadata: Metadata = {
  title: "Simple Interest Calculator | BizToolkit",
  alternates: { canonical: "/simple-interest-calculator" },
};

export default function Page() {
  return <BusinessCalculator slug="simple-interest-calculator" />;
}
