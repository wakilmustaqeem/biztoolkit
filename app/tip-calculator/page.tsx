import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Tip Calculator", description: "Calculate tips and split a bill quickly with BizToolkit.", alternates: { canonical: "/tip-calculator" } };
export default function Page() { return <BusinessCalculator slug="tip-calculator" />; }
