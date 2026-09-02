import type { Metadata } from "next";
import HourlyRateCalculator from "./hourly-rate-calculator";
export const metadata: Metadata={title:"Hourly Rate Calculator – Freelance Rate",description:"Calculate an estimated hourly freelance rate from target income, working hours, expenses, and taxes.",alternates:{canonical:"/hourly-rate-calculator"}};
export default function Page(){return <HourlyRateCalculator/>}
