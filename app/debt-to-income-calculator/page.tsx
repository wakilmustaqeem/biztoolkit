import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Debt to Income Calculator", description: "Calculate your debt-to-income ratio with BizToolkit.", alternates: { canonical: "/debt-to-income-calculator" } };
export default function Page(){return <BusinessCalculator slug="debt-to-income-calculator"/>}
