import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Loan Interest Calculator", description: "Estimate loan interest and repayment costs with BizToolkit.", alternates: { canonical: "/loan-interest-calculator" } };
export default function Page() { return <BusinessCalculator slug="loan-interest-calculator" />; }
