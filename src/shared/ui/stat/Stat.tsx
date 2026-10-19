import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

interface StatProps {
  label: ReactNode;
  value: ReactNode;
  valueClassName?: string;
  className?: string;
}

export const Stat = ({ label, value, valueClassName, className }: StatProps) => (
  <div className={cn("flex flex-col gap-1 min-w-0", className)}>
    <span className="text-[#8f8f8f] text-sm">{label}</span>
    <span className={cn("text-[#171717] text-xl font-bold break-words", valueClassName)}>{value}</span>
  </div>
);
