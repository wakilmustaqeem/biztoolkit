import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Net Margin Calculator", description: "Calculate net profit margin.", alternates: { canonical: "/net-margin-calculator" } };
export default function Page(){return <BusinessCalculator slug="net-margin-calculator"/>}
