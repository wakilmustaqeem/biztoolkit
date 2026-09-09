import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Sales Tax Calculator", description: "Calculate sales tax and total price with BizToolkit.", alternates: { canonical: "/sales-tax-calculator" } };
export default function Page() { return <BusinessCalculator slug="sales-tax-calculator" />; }
