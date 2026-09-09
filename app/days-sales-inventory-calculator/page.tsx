import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Days Sales Inventory Calculator", description: "Calculate days sales of inventory with BizToolkit.", alternates: { canonical: "/days-sales-inventory-calculator" } };
export default function Page() { return <BusinessCalculator slug="days-sales-inventory-calculator" />; }
