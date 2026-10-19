import { IoWalletOutline } from "react-icons/io5";
import { cn } from "@/shared/lib/cn";

interface WalletSourceCardProps {
  walletName: string;
  label?: string;
  className?: string;
}

export const WalletSourceCard = ({ walletName, label = "From", className }: WalletSourceCardProps) => (
  <div className={cn("flex items-center gap-3 rounded-2xl p-3", className)}>
    <div className="w-10 h-10 rounded-full bg-[#e8e8e8] flex items-center justify-center text-[#171717] shrink-0">
      <IoWalletOutline size={20} />
    </div>
    <div className="flex-1 min-w-0">
      <span className="text-[#8f8f8f] text-xs font-medium">{label}</span>
      <div className="text-[#171717] text-sm font-medium truncate">{walletName}</div>
    </div>
  </div>
);
