import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Percentage Calculator", description: "Calculate percentages quickly and accurately with BizToolkit.", alternates: { canonical: "/percentage-calculator" } };
export default function Page() { return <BusinessCalculator slug="percentage-calculator" />; }
