import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Future Value Calculator", description: "Calculate the future value of an investment.", alternates: { canonical: "/future-value-calculator" } };
export default function Page(){return <BusinessCalculator slug="future-value-calculator"/>}
