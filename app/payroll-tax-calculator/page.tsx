import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Payroll Tax Calculator", description: "Estimate payroll taxes with BizToolkit.", alternates: { canonical: "/payroll-tax-calculator" } };
export default function Page() { return <BusinessCalculator slug="payroll-tax-calculator" />; }
