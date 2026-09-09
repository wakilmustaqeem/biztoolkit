import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Business Growth Calculator", description: "Estimate business growth and future revenue with BizToolkit.", alternates: { canonical: "/business-growth-calculator" } };
export default function Page() { return <BusinessCalculator slug="business-growth-calculator" />; }
