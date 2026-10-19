import { useCallback, useRef, useState } from "react";
import { InputDropdown } from "@/shared/ui/input";
import { useClickOutside } from "@/shared/lib/click-outside";
import { createChangeEvent } from "@/shared/lib/change-event";

export interface SelectOption {
  id: number | string;
  label: string;
}

export interface SelectProps {
  placeholder: string;
  value: string;
  name: string;
  options: SelectOption[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  readOnly?: boolean;
}

export const Select = ({ placeholder, value, name, options, onChange, className, readOnly }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setIsOpen(false), []);

  useClickOutside(ref, close, isOpen);

  return (
    <div ref={ref} className="relative">
      <InputDropdown
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        isShowDropdown={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className={className}
        readOnly={readOnly}
      />
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option) => (
            <div
              key={option.id}
              className="dropdown-item"
              onClick={() => {
                onChange(createChangeEvent(name, option.label));
                close();
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
