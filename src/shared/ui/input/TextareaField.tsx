import { cn } from "@/shared/lib/cn";
import type { FC, ReactNode, TextareaHTMLAttributes } from "react";

export interface ITextareaFieldProps extends Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "onChange"
> {
  placeholder: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  leftIcon?: ReactNode;
  rightLabel?: string;
  rightButton?: {
    text: string;
    onClick: () => void;
  };
  rows?: number;
}

export const TextareaField: FC<ITextareaFieldProps> = ({
  placeholder,
  value,
  name,
  onChange,
  className,
  leftIcon,
  rightLabel,
  rightButton,
  rows = 3,
  ...props
}) => {
  return (
    <div
      className={cn(
        "w-full bg-white rounded-xl flex items-start justify-between px-3 py-1",
        className,
      )}
    >
      {leftIcon && (
        <div className="flex items-center shrink-0 mt-2.5">{leftIcon}</div>
      )}

      <textarea
        style={{ resize: "none" }}
        {...props}
        autoComplete="off"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        rows={rows}
        className="w-full bg-transparent outline-none px-2 py-2.5 text-sm text-[#171717] placeholder:text-[#9A9A99] resize-none overflow-hidden"
      />

      {rightLabel && (
        <span className="text-[#9A9A99] font-medium text-sm whitespace-nowrap shrink-0 mt-2.5">
          {rightLabel}
        </span>
      )}

      {rightButton && (
        <button
          type="button"
          onClick={rightButton.onClick}
          className="rounded-xl px-5 py-2 bg-[var(--primary-yellow-color)] cursor-pointer text-sm whitespace-nowrap shrink-0 font-normal mt-1"
        >
          {rightButton.text}
        </button>
      )}
    </div>
  );
};
