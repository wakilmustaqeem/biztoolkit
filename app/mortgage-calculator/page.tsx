import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Mortgage Calculator", description: "Estimate mortgage payments with BizToolkit.", alternates: { canonical: "/mortgage-calculator" } };
export default function Page(){return <BusinessCalculator slug="mortgage-calculator"/>}
