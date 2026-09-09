import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Price Increase Calculator", description: "Calculate the new price after a percentage increase with BizToolkit.", alternates: { canonical: "/price-increase-calculator" } };
export default function Page() { return <BusinessCalculator slug="price-increase-calculator" />; }
