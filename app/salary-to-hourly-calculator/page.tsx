import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Salary to Hourly Calculator", description: "Convert annual salary to an hourly rate with BizToolkit.", alternates: { canonical: "/salary-to-hourly-calculator" } };
export default function Page() { return <BusinessCalculator slug="salary-to-hourly-calculator" />; }
