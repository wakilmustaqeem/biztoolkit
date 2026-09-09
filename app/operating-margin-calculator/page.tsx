import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Operating Margin Calculator | BizToolkit", description: "Calculate operating margin quickly with BizToolkit.", alternates: { canonical: "/operating-margin-calculator" } };
export default function Page(){ return <BusinessCalculator slug="operating-margin-calculator"/>; }
