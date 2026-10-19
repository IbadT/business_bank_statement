import { cn } from "@/shared/lib/cn";
import type { FC, ReactNode } from "react";

interface FilterTabProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  icon?: ReactNode;
}

export const FilterTab: FC<FilterTabProps> = ({ label, isSelected, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-normal cursor-pointer transition-colors",
        isSelected
          ? "bg-[var(--primary-yellow-color)] text-[#171717]"
          : "bg-transparent text-[#171717]",
      )}
    >
      {icon}
      {label}
    </button>
  );
};
