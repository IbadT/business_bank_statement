export interface StatementStepConfig {
  id: number;
  titleKey: string;
}

export const personalBankStatementSteps: StatementStepConfig[] = [
  { id: 1, titleKey: "personal_details" },
  { id: 2, titleKey: "employment_income" },
  { id: 3, titleKey: "housing_rent_mortgage" },
  { id: 4, titleKey: "manual_transactions" },
  { id: 5, titleKey: "period_balances" },
  { id: 6, titleKey: "review_checkout" },
];
