import { GoPlus } from "react-icons/go";
import { cn } from "@/shared/lib/cn";

interface ButtonPlusProps {
  className?: string;
  onClick?: () => void;
}

export const ButtonPlus = ({ className, onClick }: ButtonPlusProps) => {
  return (
    <div className={cn("icon-btn", className)} onClick={onClick}>
      <GoPlus size={24} />
    </div>
  )
};
