export interface StatementStepConfig {
  id: number;
  titleKey: string;
}

export const businessBankStatementSteps: StatementStepConfig[] = [
  { id: 1, titleKey: "company_details" },
  { id: 2, titleKey: "financial_and_owners" },
  { id: 3, titleKey: "clients_and_payment_gateways" },
  { id: 4, titleKey: "contractors" },
  { id: 5, titleKey: "top_ups_and_expenses" },
  { id: 6, titleKey: "review_and_checkout" },
];
