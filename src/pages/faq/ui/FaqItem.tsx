import { FaPlus } from "react-icons/fa6";
import { cn } from "@/shared/lib/cn";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const FaqItem = ({ question, answer, isOpen, onToggle }: FaqItemProps) => (
  <div>
    <button
      type="button"
      aria-expanded={isOpen}
      onClick={onToggle}
      className="flex items-center justify-between w-full gap-4 py-5 text-left cursor-pointer"
    >
      <span className="text-lg font-bold text-[var(--primary-black-text-color)]">{question}</span>
      <span className="flex items-center justify-center shrink-0 size-8">
        <FaPlus aria-hidden className={cn("transition-transform duration-200", isOpen && "rotate-45")} />
      </span>
    </button>
    <div className={cn("grid transition-[grid-template-rows] duration-200", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
      <div className="overflow-hidden">
        <p className="pb-5 text-[#717171]">{answer}</p>
      </div>
    </div>
  </div>
);
