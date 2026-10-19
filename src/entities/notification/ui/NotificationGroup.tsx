import type { FC } from "react";
import type { NotificationGroupData } from "../model/types";
import { NotificationItem } from "./NotificationItem";

export const NotificationGroup: FC<NotificationGroupData> = ({ date, items }) => (
  <div className="flex flex-col gap-3">
    <span className="text-[#171717] text-sm font-medium">{date}</span>
    {items.map((item, idx) => (
      <NotificationItem key={idx} {...item} />
    ))}
  </div>
);
