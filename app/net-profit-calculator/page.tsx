import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Net Profit Calculator", description: "Calculate net profit with BizToolkit.", alternates: { canonical: "/net-profit-calculator" } };
export default function Page(){return <BusinessCalculator slug="net-profit-calculator"/>}
