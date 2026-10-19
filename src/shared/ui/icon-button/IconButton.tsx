import type { ReactNode } from "react";

interface IconButtonProps {
  label: string;
  children: ReactNode;
  onClick?: () => void;
}

export const IconButton = ({ label, children, onClick }: IconButtonProps) => (
  <button
    type="button"
    aria-label={label}
    onClick={onClick}
    className="w-9 h-9 rounded-xl bg-white flex items-center justify-center cursor-pointer hover:shadow-sm transition-shadow"
  >
    {children}
  </button>
);
