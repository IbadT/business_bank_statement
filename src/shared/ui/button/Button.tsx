import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

type ButtonColor = "primary" | "secondary" | "white" | "none";

interface ButtonProps {
  text: string | ReactNode;
  color: ButtonColor;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: "button" | "submit";
}

const colorMap: Record<ButtonColor, string> = {
  primary: "bg-[var(--primary-yellow-color)]",
  secondary: "bg-[var(--primary-background-menu-color)]",
  white: "bg-white shadow-sm",
  none: "bg-transparent",
};

export const Button = ({
  text,
  color,
  onClick,
  className,
  icon,
  fullWidth,
  disabled,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-bold px-4 py-2 rounded-xl cursor-pointer whitespace-nowrap transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed",
        colorMap[color],
        fullWidth && "w-full",
        className,
      )}
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
};
