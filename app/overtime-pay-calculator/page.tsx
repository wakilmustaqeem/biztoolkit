import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Overtime Pay Calculator", description: "Calculate overtime pay and total earnings with BizToolkit.", alternates: { canonical: "/overtime-pay-calculator" } };
export default function Page() { return <BusinessCalculator slug="overtime-pay-calculator" />; }
