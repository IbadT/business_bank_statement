import { cn } from "@/shared/lib/cn";
import { createChangeEvent } from "@/shared/lib/change-event";
import type {FC, ReactNode} from "react";

export interface IInputFieldProps {
  placeholder: string;
  value: string;
  name: string;
  type?: "text" | "password" | "email";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isGenerateButton?: boolean;
  className?: string;
  leftIcon?: ReactNode;
  rightLabel?: string;
  rightButton?: {
    text: string | ReactNode;
    onClick: () => void;
  };
}

export const InputField: FC<IInputFieldProps> = ({
  placeholder,
  value,
  name,
  type = "text",
  onChange,
  isGenerateButton = false,
  className,
  leftIcon,
  rightLabel,
  rightButton,
}) => {
  const handleGenerate = () => {
    if (
      name === "monthlyNetProfitPercent" ||
      name === "ownerMonthlyNetProfitPercent"
    ) {
      const randomNumber = Math.floor(1 + Math.random() * 100);
      onChange(createChangeEvent(name, randomNumber.toString()));
      return;
    }
    const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);
    onChange(createChangeEvent(name, randomNumber.toString()));
  };

  return (
    <div
      className={cn(
        "w-full bg-white rounded-xl flex items-center justify-between px-3 py-1",
        className,
      )}
    >
      {leftIcon && (
        <div className="flex items-center shrink-0">{leftIcon}</div>
      )}
      <input
        type={type}
        autoComplete={type === "password" ? "current-password" : "off"}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        className="w-full bg-transparent outline-none px-2 py-[10px] text-sm text-[#171717] placeholder:text-[#9A9A99]"
      />
      {isGenerateButton && (
        <button
          type="button"
          onClick={handleGenerate}
          className="generate-btn"
        >
          Generate
        </button>
      )}
      {rightLabel && (
        <span className="text-[#9A9A99] font-medium text-sm whitespace-nowrap shrink-0">
          {rightLabel}
        </span>
      )}
      {rightButton && (
        <button
          type="button"
          onClick={rightButton.onClick}
          className="rounded-xl px-5 py-2 bg-(--primary-yellow-color) cursor-pointer text-sm whitespace-nowrap shrink-0 font-normal"
        >
          {rightButton.text}
        </button>
      )}
    </div>
  );
};
