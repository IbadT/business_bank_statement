export interface InvoiceStepConfig {
  id: number;
  titleKey: string;
}

export const invoiceSteps: InvoiceStepConfig[] = [
  { id: 1, titleKey: "business_information" },
  { id: 2, titleKey: "customer_information" },
  { id: 3, titleKey: "items" },
  { id: 4, titleKey: "review_and_checkout" },
];
