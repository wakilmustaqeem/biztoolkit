import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Sales Growth Calculator | BizToolkit", description: "Calculate sales growth quickly with BizToolkit.", alternates: { canonical: "/sales-growth-calculator" } };
export default function Page(){ return <BusinessCalculator slug="sales-growth-calculator"/>; }
