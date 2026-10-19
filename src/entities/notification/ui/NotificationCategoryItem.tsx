import type { FC } from "react";
import { cn } from "@/shared/lib/cn";
import type { NotificationCategory } from "../model/types";
import { NotificationIcon } from "./NotificationIcon";

interface NotificationCategoryItemProps {
  category: NotificationCategory;
  isSelected: boolean;
  onClick: () => void;
}

export const NotificationCategoryItem: FC<NotificationCategoryItemProps> = ({ category, isSelected, onClick }) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center gap-2.5 rounded-[14px] px-[14px] py-[10px] text-left cursor-pointer transition-all",
      isSelected ? "bg-[var(--primary-yellow-color)]" : "bg-transparent",
    )}
  >
    <NotificationIcon className={isSelected ? "ring-2 ring-white" : undefined} />
    <div className="flex flex-col items-start flex-1 min-w-0">
      <span className="text-sm font-semibold text-[#171717] max-w-full truncate">{category.label}</span>
      <span className="text-xs text-[#717171] max-w-full truncate">
        New Review: <span className="text-[#717171]">{"★".repeat(category.rating)}{"☆".repeat(5 - category.rating)}</span> from {category.email}
      </span>
    </div>
    <span className="text-xs text-[#717171] shrink-0 self-center">{category.date}</span>
  </button>
);
