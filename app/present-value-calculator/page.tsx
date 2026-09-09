import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Present Value Calculator", description: "Calculate the present value of future money with BizToolkit.", alternates: { canonical: "/present-value-calculator" } };
export default function Page(){return <BusinessCalculator slug="present-value-calculator"/>}
