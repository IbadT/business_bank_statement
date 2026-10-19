import type { InputHTMLAttributes } from "react";
import { FiSearch } from "react-icons/fi";
import { cn } from "@/shared/lib/cn";

export const SearchInput = ({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) => (
  <label className={cn("flex-1 min-w-0 flex items-center gap-2 rounded-xl px-3 py-2.5 bg-white shadow-sm", className)}>
    <FiSearch size={18} className="text-[#8f8f8f] shrink-0" />
    <input
      type="text"
      className="flex-1 min-w-0 border-none outline-none bg-transparent text-sm text-[#171717] placeholder:text-[#8f8f8f]"
      {...props}
    />
  </label>
);
