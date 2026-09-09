import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Revenue Calculator", description: "Calculate business revenue with BizToolkit.", alternates: { canonical: "/revenue-calculator" } };
export default function Page(){return <BusinessCalculator slug="revenue-calculator"/>}
