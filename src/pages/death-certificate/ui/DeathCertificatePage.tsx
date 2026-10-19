import { StatementWizard, type WizardStep } from "@/widgets/statement-wizard";
import { DeathDetails, DecedentDetails, Informant } from "@/features/death-certificate-form";
import { ReviewAndCheckout } from "@/features/review-checkout";
import { deathCertificateSteps } from "../config/steps";

const stepContent: Record<number, React.ReactNode> = {
  1: <DecedentDetails />,
  2: <DeathDetails />,
  3: <Informant />,
  4: <ReviewAndCheckout />,
};

const steps: WizardStep[] = deathCertificateSteps.map(({ id, titleKey }) => ({
  id,
  titleKey,
  content: stepContent[id],
}));

export const DeathCertificatePage = () => <StatementWizard titleKey="death_certificate" steps={steps} />;
