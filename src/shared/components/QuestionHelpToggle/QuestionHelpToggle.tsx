import { type FC } from "react";
import { FaQuestion } from "react-icons/fa6";



export interface QuestionHelpToggleWithTextProps {
    text: string;
}

export const QuestionHelpToggleWithText: FC<QuestionHelpToggleWithTextProps> = ({ text }) => {
    return (
        <>
            <div className="relative group">
                <QuestionHelpToggle />
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-80 max-w-sm bg-white rounded-xl shadow-2xl border border-gray-100 z-50 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                    <div className="text-sm text-gray-700 leading-relaxed">
                        {text}
                    </div>
                    {/* Стрелка */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45"></div>
                </div>
            </div>
        </>
    )
}

export const QuestionHelpToggle = () => {
    return (
        <div className="flex items-center w-[22px] h-[22px] rounded-full bg-[var(--primary-yellow-color)] cursor-pointer">
            <div className="flex items-center justify-center w-full h-full"><FaQuestion /></div>
        </div>
    )
}