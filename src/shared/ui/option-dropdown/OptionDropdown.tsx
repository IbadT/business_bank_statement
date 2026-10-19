import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { IoChevronDown } from "react-icons/io5";
import { cn } from "@/shared/lib/cn";

export interface DropdownOption {
  id: string;
  title: string;
  subtitle: string;
  icon: ReactNode;
  iconClassName?: string;
}

interface OptionDropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (id: string) => void;
  className?: string;
}

const OptionRow = ({ option }: { option: DropdownOption }) => (
  <>
    <div
      className={cn(
        "w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-[#171717]",
        option.iconClassName,
      )}
    >
      {option.icon}
    </div>
    <div className="flex-1 min-w-0">
      <div className="text-[#171717] text-sm font-medium">{option.title}</div>
      <div className="text-[#8f8f8f] text-xs font-medium truncate">{option.subtitle}</div>
    </div>
  </>
);

export const OptionDropdown = ({ options, value, onChange, className }: OptionDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = options.find((o) => o.id === value) ?? options[0];

  useEffect(() => {
    if (!isOpen) return;
    const onPointerDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [isOpen]);

  return (
    <div ref={ref} className={cn("relative w-full", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
        className="flex items-center gap-3 w-full text-left cursor-pointer"
      >
        <OptionRow option={selected} />
        <IoChevronDown
          size={20}
          className={cn("text-[#8f8f8f] transition-transform", isOpen && "rotate-180")}
        />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          className="absolute left-0 right-0 top-full mt-3 z-10 bg-white rounded-2xl shadow-lg p-2 flex flex-col gap-1"
        >
          {options.map((option) => (
            <li key={option.id} role="option" aria-selected={option.id === selected.id}>
              <button
                type="button"
                onClick={() => {
                  onChange(option.id);
                  setIsOpen(false);
                }}
                className={cn(
                  "flex items-center gap-3 w-full text-left px-2 py-2 rounded-xl cursor-pointer hover:bg-[#f7f7f7]",
                  option.id === selected.id && "bg-[#f7f7f7]",
                )}
              >
                <OptionRow option={option} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
