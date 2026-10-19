import type { FC } from "react";
import { cn } from "@/shared/lib/cn";

export interface RadioOptionProps {
  id: number;
  text: string;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

export const RadioOption: FC<RadioOptionProps> = ({ id, text, isSelected, onSelect }) => {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={isSelected}
      className="flex items-center gap-2 cursor-pointer transition-all duration-300 ease-in-out hover:opacity-80"
      onClick={() => onSelect(id)}
    >
      <div
        className={cn(
          "w-6 h-6 flex items-center justify-center p-[2px] rounded-full border-[2px] transition-all duration-300 ease-in-out",
          isSelected ? "border-[var(--primary-yellow-color)]" : "border-[var(--primary-gray-text-color)]",
        )}
      >
        <div
          className={cn(
            "w-4 h-4 rounded-full transition-all duration-300 ease-in-out",
            isSelected ? "bg-[var(--primary-yellow-color)] scale-100" : "bg-transparent scale-0",
          )}
        />
      </div>
      <div className="transition-colors duration-300">{text}</div>
    </button>
  );
};
