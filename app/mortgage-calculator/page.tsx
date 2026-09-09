import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Mortgage Calculator", description: "Estimate monthly mortgage payments.", alternates: { canonical: "/mortgage-calculator" } };
export default function Page(){return <BusinessCalculator slug="mortgage-calculator"/>}
