import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "ROI Percentage Calculator | BizToolkit", description: "Calculate ROI percentage quickly with BizToolkit.", alternates: { canonical: "/roi-percentage-calculator" } };
export default function Page(){ return <BusinessCalculator slug="roi-percentage-calculator"/>; }
