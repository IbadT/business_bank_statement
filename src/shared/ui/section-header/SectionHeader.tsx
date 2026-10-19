import type { ReactNode } from "react";
import { QuestionHelpToggleWithText } from "@/shared/ui/question-help-toggle";
import { cn } from "@/shared/lib/cn";

interface SectionHeaderProps {
  title: ReactNode;
  helpText?: string;
  action?: ReactNode;
  className?: string;
}

export const SectionHeader = ({ title, helpText, action, className }: SectionHeaderProps) => (
  <div className={cn("flex items-center justify-between gap-3", className)}>
    <div className="flex items-center gap-3 min-w-0">
      <div className="section-title break-words">{title}</div>
      {helpText && <QuestionHelpToggleWithText text={helpText} />}
    </div>
    {action}
  </div>
);
