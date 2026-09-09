import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Cost Per Unit Calculator", description: "Calculate average cost per unit.", alternates: { canonical: "/cost-per-unit-calculator" } };
export default function Page(){return <BusinessCalculator slug="cost-per-unit-calculator"/>}
