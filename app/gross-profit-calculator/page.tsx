import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Gross Profit Calculator", description: "Calculate gross profit from sales and cost of goods.", alternates: { canonical: "/gross-profit-calculator" } };
export default function Page(){return <BusinessCalculator slug="gross-profit-calculator"/>}
