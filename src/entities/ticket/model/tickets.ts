import type { StatusType } from "../ui/StatusBadge";

export interface Ticket {
  id: string;
  topic: string;
  lastUpdate: string;
  updatedAt: string;
  status: StatusType;
  title: string;
  isNew?: boolean;
}

export const tickets: Ticket[] = [
  {
    id: "8923210932",
    topic: "Potujno_Zel",
    lastUpdate: "8h ago",
    updatedAt: "2025-02-10T04:00:00",
    status: "under-review",
    title: "Типо загаловок и все больше и не надо",
  },
  {
    id: "8923210932",
    topic: "Potujno_Zel",
    lastUpdate: "5h ago",
    updatedAt: "2025-02-10T07:00:00",
    status: "resolved",
    title: "Типо загаловок и все больше и не надо",
  },
  {
    id: "8923210932",
    topic: "Potujno_Zel",
    lastUpdate: "30h ago",
    updatedAt: "2025-02-09T06:00:00",
    status: "closed",
    title: "Типо загаловок и все больше и не надо",
  },
  {
    id: "8923210932",
    topic: "Potujno_Zel",
    lastUpdate: "2h ago",
    updatedAt: "2025-02-10T10:00:00",
    status: "under-review",
    title: "Типо загаловок и все больше и не надо",
  },
  {
    id: "8923210932",
    topic: "Potujno_Zel",
    lastUpdate: "50h ago",
    updatedAt: "2025-02-08T10:00:00",
    status: "closed",
    title: "Типо загаловок и все больше и не надо",
  },
  {
    id: "8923210932",
    topic: "Potujno_Zel",
    lastUpdate: "72h ago",
    updatedAt: "2025-02-07T12:00:00",
    status: "closed",
    title: "Типо загаловок и все больше и не надо",
  },
];
