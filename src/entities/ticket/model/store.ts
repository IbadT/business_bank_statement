import { create } from "zustand";
import { tickets as initialTickets, type Ticket } from "./tickets";

interface NewTicket {
  topic: string;
  title: string;
}

interface TicketsState {
  tickets: Ticket[];
  addTicket: (data: NewTicket) => void;
}

const generateId = () => String(Math.floor(1000000000 + Math.random() * 9000000000));

// TODO: заменить локальное хранилище на запросы к API, когда оно появится
export const useTicketsStore = create<TicketsState>((set) => ({
  tickets: initialTickets,
  addTicket: ({ topic, title }) =>
    set((state) => ({
      tickets: [
        {
          id: generateId(),
          topic,
          title,
          lastUpdate: "Just now",
          updatedAt: new Date().toISOString(),
          status: "under-review",
          isNew: true,
        },
        ...state.tickets,
      ],
    })),
}));
