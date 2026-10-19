import type { Ticket } from "../model/tickets";
import { StatusBadge } from "./StatusBadge";

interface TicketListProps {
  tickets: Ticket[];
  onSelect: (ticket: Ticket) => void;
}

const columns = {
  id: "w-[120px] shrink-0",
  topic: "w-[120px] shrink-0",
  update: "w-[100px] shrink-0",
  status: "w-[140px] shrink-0",
  title: "flex-1 min-w-0",
};

const headCell = "text-sm font-medium text-[#171717] truncate";
const cell = "text-base font-medium text-[#171717] truncate";

export const TicketList = ({ tickets, onSelect }: TicketListProps) => (
  <div className="overflow-x-auto">
    <div className="flex flex-col gap-1 min-w-[760px]">
      <div className="flex items-center gap-2.5 px-[30px] py-2">
        <span className={`${columns.id} ${headCell}`}>ID ticket</span>
        <span className={`${columns.topic} ${headCell}`}>Topic</span>
        <span className={`${columns.update} ${headCell}`}>Last update</span>
        <span className={`${columns.status} ${headCell}`}>Status</span>
        <span className={`${columns.title} ${headCell}`}>Title</span>
      </div>

      <div className="flex flex-col gap-[5px]">
        {tickets.map((ticket) => (
          <button
            type="button"
            key={ticket.id}
            onClick={() => onSelect(ticket)}
            className="flex items-center gap-2.5 rounded-xl px-[30px] py-3 cursor-pointer text-left"
          >
            <span className={`${columns.id} ${cell}`}>{ticket.id}</span>
            <span className={`${columns.topic} ${cell}`} title={ticket.topic}>{ticket.topic}</span>
            <span className={`${columns.update} ${cell}`}>{ticket.lastUpdate}</span>
            <span className={columns.status}>
              <StatusBadge status={ticket.status} />
            </span>
            <span className={`${columns.title} ${cell}`} title={ticket.title}>{ticket.title}</span>
          </button>
        ))}
      </div>
    </div>
  </div>
);
