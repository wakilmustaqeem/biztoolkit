import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Customer Acquisition Cost Calculator | BizToolkit", description: "Calculate customer acquisition cost quickly with BizToolkit.", alternates: { canonical: "/customer-acquisition-cost-calculator" } };
export default function Page(){ return <BusinessCalculator slug="customer-acquisition-cost-calculator"/>; }
