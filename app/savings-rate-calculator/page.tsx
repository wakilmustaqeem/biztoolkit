import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Savings Rate Calculator", description: "Calculate your savings rate and track progress with BizToolkit.", alternates: { canonical: "/savings-rate-calculator" } };
export default function Page() { return <BusinessCalculator slug="savings-rate-calculator" />; }
