import { StatementWizard, type WizardStep } from "@/widgets/statement-wizard";
import { BusinessInformation, CustomerInformation, InvoiceItems, InvoiceReview } from "@/features/invoice-form";
import { invoiceSteps } from "../config/steps";

const stepContent: Record<number, React.ReactNode> = {
  1: <BusinessInformation />,
  2: <CustomerInformation />,
  3: <InvoiceItems />,
  4: <InvoiceReview />,
};

const steps: WizardStep[] = invoiceSteps.map(({ id, titleKey }) => ({
  id,
  titleKey,
  content: stepContent[id],
}));

export const InvoicesPage = () => <StatementWizard titleKey="invoices" steps={steps} />;
