import { type FC } from "react";
import { FaQuestion } from "react-icons/fa6";

export interface QuestionHelpToggleWithTextProps {
  text: string;
}

export const QuestionHelpToggleWithText: FC<QuestionHelpToggleWithTextProps> = ({ text }) => {
  return (
    <div className="relative group">
      <QuestionHelpToggle />
      <div className="tooltip">
        <div className="text-sm text-gray-700 leading-relaxed">
          {text}
        </div>
        <div className="tooltip-arrow"></div>
      </div>
    </div>
  )
}

export const QuestionHelpToggle = () => {
  return (
    <div className="question-icon">
      <div className="flex items-center justify-center w-full h-full"><FaQuestion /></div>
    </div>
  )
}
