import { cn } from "@/shared/lib/cn";

export type StatusType = "under-review" | "resolved" | "closed";

const statusStyles: Record<StatusType, { label: string; className: string }> = {
  "under-review": {
    label: "Under review",
    className: "bg-[#F8F8F8] text-[#171717]",
  },
  resolved: {
    label: "Resolved",
    className: "bg-[rgba(255,215,0,1)] text-[#171717]",
  },
  closed: {
    label: "Closed",
    className: "bg-[rgba(255,25,29,1)] text-white",
  },
};

interface StatusBadgeProps {
  status: StatusType;
}

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  const { label, className } = statusStyles[status];

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center h-7 rounded-lg text-xs font-medium leading-tight px-2.5 whitespace-nowrap",
        className,
      )}
      style={status === "under-review" ? undefined : { boxShadow: "0px -1px 30px 0px rgba(198,198,198,0.25)" }}
    >
      {label}
    </span>
  );
};
