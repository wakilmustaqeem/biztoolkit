import type { Metadata } from "next";
import AtmCalculator from "./atm-calculator";

export const metadata: Metadata = {
  title: "ATM Neon Calculator Demo | BizToolkit",
  description:
    "A neon ATM-style calculator demo with on-screen keypad and glowing numeric display.",
  alternates: {
    canonical: "/atm-demo",
  },
};

export default function AtmDemoPage() {
  return <AtmCalculator />;
}
