import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Cash Flow Calculator | BizToolkit", description: "Calculate cash flow quickly with BizToolkit.", alternates: { canonical: "/cash-flow-calculator" } };
export default function Page(){ return <BusinessCalculator slug="cash-flow-calculator"/>; }
