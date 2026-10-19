import type { FC } from "react";
import { cn } from "@/shared/lib/cn";

interface NotificationIconProps {
  className?: string;
}

export const NotificationIcon: FC<NotificationIconProps> = ({ className }) => (
  <div className={cn("w-10 h-10 rounded-[12px] bg-[#FFD700] flex items-center justify-center shrink-0", className)}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  </div>
);
