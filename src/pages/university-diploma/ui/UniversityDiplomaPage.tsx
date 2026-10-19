import { StatementWizard, type WizardStep } from "@/widgets/statement-wizard";
import { DegreeDetails, SchoolInformation, StudentInfoAndGraduation } from "@/features/university-diploma-form";
import { ReviewAndCheckout } from "@/features/review-checkout";
import { universityDiplomaSteps } from "../config/steps";

const stepContent: Record<number, React.ReactNode> = {
  1: <SchoolInformation />,
  2: <DegreeDetails />,
  3: <StudentInfoAndGraduation />,
  4: <ReviewAndCheckout />,
};

const steps: WizardStep[] = universityDiplomaSteps.map(({ id, titleKey }) => ({
  id,
  titleKey,
  content: stepContent[id],
}));

export const UniversityDiplomaPage = () => <StatementWizard titleKey="university_diploma" steps={steps} />;
