import { StatementWizard, type WizardStep } from "@/widgets/statement-wizard";
import {
  ClientsAndPaymentGateways,
  CompanyDetails,
  Contractors,
  FinancialAndOwners,
  TopUpsAndExpenses,
} from "@/features/business-statement-form";
import { ReviewAndCheckout } from "@/features/review-checkout";
import { businessBankStatementSteps } from "../config/steps";

const stepContent: Record<number, React.ReactNode> = {
  1: <CompanyDetails />,
  2: <FinancialAndOwners />,
  3: <ClientsAndPaymentGateways />,
  4: <Contractors />,
  5: <TopUpsAndExpenses />,
  6: <ReviewAndCheckout />,
};

const steps: WizardStep[] = businessBankStatementSteps.map(({ id, titleKey }) => ({
  id,
  titleKey,
  content: stepContent[id],
}));

export const BusinessBankStatementPage = () => (
  <StatementWizard titleKey="business_bank_statement" steps={steps} />
);
