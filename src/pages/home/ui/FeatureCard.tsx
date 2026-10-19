import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  bordered?: boolean;
  className?: string;
}

export const FeatureCard = ({ title, description, icon, bordered, className }: FeatureCardProps) => (
  <div
    className={cn(
      "flex flex-col items-start gap-4",
      bordered && "bg-white border border-gray-200 rounded-3xl px-6 py-5 min-h-[181px]",
      className,
    )}
  >
    {icon && (
      <div className="flex items-center justify-center size-12 rounded-full bg-[var(--primary-yellow-color)] text-xl">
        {icon}
      </div>
    )}
    <h3 className="text-lg font-bold text-[var(--primary-black-text-color)]">{title}</h3>
    <p className="text-[var(--primary-gray-text-color)]">{description}</p>
  </div>
);
