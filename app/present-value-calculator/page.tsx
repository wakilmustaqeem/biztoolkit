import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Present Value Calculator", description: "Calculate the present value of a future amount.", alternates: { canonical: "/present-value-calculator" } };
export default function Page(){return <BusinessCalculator slug="present-value-calculator"/>}
