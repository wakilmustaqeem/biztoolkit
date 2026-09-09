import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "EBITDA Calculator | BizToolkit", description: "Calculate EBITDA quickly with BizToolkit.", alternates: { canonical: "/ebitda-calculator" } };
export default function Page(){ return <BusinessCalculator slug="ebitda-calculator"/>; }
