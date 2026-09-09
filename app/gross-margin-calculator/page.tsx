import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Gross Margin Calculator", description: "Calculate gross margin with BizToolkit.", alternates: { canonical: "/gross-margin-calculator" } };
export default function Page(){return <BusinessCalculator slug="gross-margin-calculator"/>}
