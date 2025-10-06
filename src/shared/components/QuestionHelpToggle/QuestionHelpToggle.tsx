import { FaQuestion } from "react-icons/fa6";



export const QuestionHelpToggle = () => {
    return (
        <div className="flex items-center w-[22px] h-[22px] rounded-full bg-[var(--primary-yellow-color)] cursor-pointer">
            <div className="flex items-center justify-center w-full h-full"><FaQuestion /></div>
        </div>
    )
}