import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Markup Percentage Calculator | BizToolkit", description: "Calculate markup percentage quickly with BizToolkit.", alternates: { canonical: "/markup-percentage-calculator" } };
export default function Page(){ return <BusinessCalculator slug="markup-percentage-calculator"/>; }
