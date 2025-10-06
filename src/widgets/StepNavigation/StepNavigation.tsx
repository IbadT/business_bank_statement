import type { FC } from "react";
import { ClientsAndPaymentGateways } from "../ClientsAndPaymentGateways";
import { CompanyDetails } from "../CompanyDetails.tsx";
import { Contractors } from "../Contractors";
import { FinancialAndOwners } from "../FinancialAndOwners";
import { ReviewAndCheckout } from "../ReviewAndCheckout";
import { TopUpsAndExpenses } from "../TopUpsAndExpenses";

interface StepNavigationProps {
    step: number;
};

export const StepNavigation: FC<StepNavigationProps> = ({ step }) => {
    return (
        <div className="w-3/4 flex flex-col">
            {step === 1 && <CompanyDetails />}
            {step === 2 && <FinancialAndOwners />}
            {step === 3 && <ClientsAndPaymentGateways />}
            {step === 4 && <Contractors />}
            {step === 5 && <TopUpsAndExpenses />}
            {step === 6 && <ReviewAndCheckout />}
        </div>
    );
};