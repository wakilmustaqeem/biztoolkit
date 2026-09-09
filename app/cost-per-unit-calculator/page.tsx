import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Cost Per Unit Calculator", description: "Calculate cost per unit with BizToolkit.", alternates: { canonical: "/cost-per-unit-calculator" } };
export default function Page(){return <BusinessCalculator slug="cost-per-unit-calculator"/>}
