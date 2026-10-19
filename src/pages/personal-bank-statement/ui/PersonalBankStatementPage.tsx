import { StatementWizard, type WizardStep } from "@/widgets/statement-wizard";
import {
  EmploymentAndIncome,
  HousingRentMortgage,
  ManualTransactions,
  PeriodAndBalances,
  PersonalDetails,
} from "@/features/personal-statement-form";
import { ReviewAndCheckout } from "@/features/review-checkout";
import { personalBankStatementSteps } from "../config/steps";

const stepContent: Record<number, React.ReactNode> = {
  1: <PersonalDetails />,
  2: <EmploymentAndIncome />,
  3: <HousingRentMortgage />,
  4: <ManualTransactions />,
  5: <PeriodAndBalances />,
  6: <ReviewAndCheckout />,
};

const steps: WizardStep[] = personalBankStatementSteps.map(({ id, titleKey }) => ({
  id,
  titleKey,
  content: stepContent[id],
}));

export const PersonalBankStatementPage = () => (
  <StatementWizard titleKey="personal_bank_statement" steps={steps} />
);
