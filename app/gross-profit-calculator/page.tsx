import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Gross Profit Calculator", description: "Calculate gross profit with BizToolkit.", alternates: { canonical: "/gross-profit-calculator" } };
export default function Page(){return <BusinessCalculator slug="gross-profit-calculator"/>}
