import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Customer Lifetime Value Calculator | BizToolkit", description: "Calculate customer lifetime value quickly with BizToolkit.", alternates: { canonical: "/customer-lifetime-value-calculator" } };
export default function Page(){ return <BusinessCalculator slug="customer-lifetime-value-calculator"/>; }
