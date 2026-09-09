import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Commission Rate Calculator", description: "Calculate commission earned from a sale.", alternates: { canonical: "/commission-rate-calculator" } };
export default function Page(){return <BusinessCalculator slug="commission-rate-calculator"/>}
