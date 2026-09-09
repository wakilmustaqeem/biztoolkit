import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Savings Calculator", description: "Estimate savings growth with regular deposits.", alternates: { canonical: "/savings-calculator" } };
export default function Page(){return <BusinessCalculator slug="savings-calculator"/>}
