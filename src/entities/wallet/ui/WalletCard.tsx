import { cn } from "@/shared/lib/cn";

interface WalletCardProps {
  title: string;
  active?: boolean;
  onClick?: () => void;
}

export const WalletCard = ({ title, active, onClick }: WalletCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-xl text-center px-2 py-[14px] flex-1 cursor-pointer transition-all duration-200",
        active
          ? "bg-[var(--primary-yellow-color)] text-[#171717]"
          : "bg-white text-[#171717] shadow-sm",
      )}
    >
      <span className="text-sm lg:text-base font-medium leading-tight">
        {title}
      </span>
    </button>
  );
};
