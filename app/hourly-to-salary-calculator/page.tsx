import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Hourly to Salary Calculator", description: "Convert an hourly rate to an annual salary with BizToolkit.", alternates: { canonical: "/hourly-to-salary-calculator" } };
export default function Page() { return <BusinessCalculator slug="hourly-to-salary-calculator" />; }
