import type { Metadata } from "next";
import BusinessCalculator from "../components/business-calculator";
export const metadata: Metadata = { title: "Sales Tax Calculator | BizToolkit", alternates: { canonical: "/sales-tax-calculator" } };
export default function Page(){return <BusinessCalculator slug="sales-tax-calculator"/>;}
