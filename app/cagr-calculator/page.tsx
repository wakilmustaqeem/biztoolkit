import type { Metadata } from "next";
import CagrCalculator from "./cagr-calculator";

export const metadata: Metadata = {
  title: "CAGR Calculator – Compound Annual Growth Rate",
  description: "Calculate compound annual growth rate (CAGR) from starting value, ending value, and investment period.",
  alternates: { canonical: "/cagr-calculator" },
};

export default function Page() {
  return <CagrCalculator />;
}
