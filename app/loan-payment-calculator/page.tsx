import type { Metadata } from "next";
import LoanPaymentCalculator from "./loan-payment-calculator";
export const metadata: Metadata = { title: "Loan Payment Calculator – Monthly Payment", description: "Calculate estimated monthly loan payments from loan amount, interest rate, and term.", alternates: { canonical: "/loan-payment-calculator" } };
export default function Page() { return <LoanPaymentCalculator />; }
