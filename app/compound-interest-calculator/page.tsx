import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Compound Interest Calculator", description: "Calculate compound interest and future value with BizToolkit.", alternates: { canonical: "/compound-interest-calculator" } };
export default function Page() { return <BusinessCalculator slug="compound-interest-calculator" />; }
