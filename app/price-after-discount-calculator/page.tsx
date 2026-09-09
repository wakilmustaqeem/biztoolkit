import type { Metadata } from "next";
import BusinessCalculator from "@/components/business-calculator";
export const metadata: Metadata = { title: "Price After Discount Calculator | BizToolkit", description: "Calculate price after discount quickly with BizToolkit.", alternates: { canonical: "/price-after-discount-calculator" } };
export default function Page(){ return <BusinessCalculator slug="price-after-discount-calculator"/>; }
