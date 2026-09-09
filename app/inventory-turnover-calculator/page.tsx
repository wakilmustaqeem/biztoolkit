import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Inventory Turnover Calculator", description: "Calculate inventory turnover and understand stock efficiency with BizToolkit.", alternates: { canonical: "/inventory-turnover-calculator" } };
export default function Page() { return <BusinessCalculator slug="inventory-turnover-calculator" />; }
