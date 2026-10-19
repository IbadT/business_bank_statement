import { useState, type ReactNode } from "react";
import { MdDone } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { cn } from "@/shared/lib/cn";
import { StatementWizardHeader } from "./StatementWizardHeader";

export interface WizardStep {
  id: number;
  titleKey: string;
  content: ReactNode;
}

interface StatementWizardProps {
  titleKey: string;
  steps: WizardStep[];
}

export const StatementWizard = ({ titleKey, steps }: StatementWizardProps) => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(1);

  const goNext = () => setActiveStep((prev) => Math.min(prev + 1, steps.length));
  const current = steps.find((step) => step.id === activeStep);

  return (
    <div className="min-h-full flex flex-col">
      <StatementWizardHeader titleKey={titleKey} onContinue={goNext} />
      <div className="flex-1 flex flex-col lg:flex-row gap-6">
        <nav className="w-full lg:w-72 lg:shrink-0 p-5 border-r-0 lg:border-r-2 border-gray-200">
          {steps.map((step) => (
            <button
              type="button"
              key={step.id}
              aria-current={activeStep === step.id ? "step" : undefined}
              className={cn(
                "sidebar-step w-full text-left",
                activeStep === step.id ? "bg-[var(--primary-yellow-color)]" : "bg-transparent",
              )}
              onClick={() => setActiveStep(step.id)}
            >
              {activeStep > step.id ? (
                <div className="step-circle bg-[var(--primary-second-yellow-color)]">
                  <MdDone />
                </div>
              ) : (
                <div className="step-circle">{step.id}</div>
              )}
              <div className="min-w-0 break-words">{t(step.titleKey)}</div>
            </button>
          ))}
        </nav>
        <div className="w-full lg:flex-1 min-w-0 p-5 flex flex-col">{current?.content}</div>
      </div>
    </div>
  );
};
