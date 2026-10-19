import type { FC } from "react";
import type { NotificationItemData } from "../model/types";
import { NotificationIcon } from "./NotificationIcon";

export const NotificationItem: FC<NotificationItemData> = ({ title, time }) => (
  <div className="flex items-start gap-3 cursor-pointer">
    <NotificationIcon />
    <div className="flex flex-col gap-0.5 min-w-0">
      <span className="text-[#171717] text-sm leading-tight">{title}</span>
      <span className="text-[#717171] text-xs">{time}</span>
    </div>
  </div>
);
