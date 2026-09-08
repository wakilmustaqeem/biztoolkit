import type { Metadata } from "next";
import InflationCalculator from "./inflation-calculator";

export const metadata: Metadata = {
  title: "Inflation Calculator – Free Business & Finance Tool",
  description: "Calculate the future cost of money after inflation with this free inflation calculator.",
  alternates: { canonical: "/inflation-calculator" },
};

export default function Page() {
  return <InflationCalculator />;
}
