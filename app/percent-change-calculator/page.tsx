import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Percent Change Calculator", description: "Calculate percentage change between two values with BizToolkit.", alternates: { canonical: "/percent-change-calculator" } };
export default function Page() { return <BusinessCalculator slug="percent-change-calculator" />; }
