import type { InputHTMLAttributes } from "react";

interface LabeledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
}

export const LabeledInput = ({ label, hint, ...props }: LabeledInputProps) => (
  <label className="flex flex-col gap-1.5">
    <span className="text-[#8f8f8f] text-xs font-medium">{label}</span>
    <input
      className="w-full border border-[#e8e8e8] rounded-xl px-3 py-2.5 text-[#171717] text-base font-medium outline-none focus:border-[#d0d0d0]"
      {...props}
    />
    {hint && <span className="text-[#8f8f8f] text-xs">{hint}</span>}
  </label>
);
