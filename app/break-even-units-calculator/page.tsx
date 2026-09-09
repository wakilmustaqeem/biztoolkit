import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Break-Even Units Calculator | BizToolkit", description: "Calculate break-even units quickly with BizToolkit.", alternates: { canonical: "/break-even-units-calculator" } };
export default function Page(){ return <BusinessCalculator slug="break-even-units-calculator"/>; }
