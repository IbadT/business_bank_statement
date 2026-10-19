import type { ReactNode } from "react";
import { IoChevronBack } from "react-icons/io5";

interface PageHeaderProps {
  title: ReactNode;
  onBack: () => void;
  backLabel?: string;
}

export const PageHeader = ({ title, onBack, backLabel = "Back" }: PageHeaderProps) => (
  <div className="relative flex items-center justify-center w-full min-h-10 px-12">
    <button
      type="button"
      aria-label={backLabel}
      onClick={onBack}
      className="absolute left-0 p-1 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
    >
      <IoChevronBack size={24} className="text-[#171717]" />
    </button>
    <h1 className="text-[#171717] text-[28px] leading-tight tracking-[0.84px] text-center break-words">
      {title}
    </h1>
  </div>
);
