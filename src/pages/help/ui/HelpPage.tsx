import { useState } from "react";
import { useNavigate } from "react-router";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa6";
import { FiPaperclip } from "react-icons/fi";
import { CheckIcon } from "@/shared/ui/check-icon";
import { FilterTab } from "@/shared/ui/filter-tab";
import { InputField, TextareaField } from "@/shared/ui/input";
import { Select } from "@/shared/ui/select";
import { Button } from "@/shared/ui/button";
import { IconButton } from "@/shared/ui/icon-button";
import { TicketList, useTicketsStore } from "@/entities/ticket";
import { FaTelegramPlane } from "react-icons/fa";
import { helpTicketPath } from "@/shared/config";

const sortOptions = ["Newest First", "Oldest First"].map((label) => ({ id: label, label }));
const topicOptions = ["Suggestion", "Bug report", "Billing", "Other"].map((label) => ({ id: label, label }));

type TabType = "all" | "in-progress" | "closed";

const tabs: { key: TabType; label: string }[] = [
  { key: "all", label: "All" },
  { key: "in-progress", label: "In progress" },
  { key: "closed", label: "Closed" },
];

export const HelpPage = () => {
  const navigate = useNavigate();
  const [selectedTabs, setSelectedTabs] = useState<Set<TabType>>(
    new Set(["all"]),
  );
  // const [searchQuery, setSearchQuery] = useState("");
  const [form, setForm] = useState({ name: "", topic: "", message: "" });
  const [sortBy, setSortBy] = useState("Newest First");
  const tickets = useTicketsStore((state) => state.tickets);
  const addTicket = useTicketsStore((state) => state.addTicket);

  const canSend = Boolean(form.name.trim() && form.topic && form.message.trim());

  const handleSend = () => {
    if (!canSend) return;
    addTicket({ topic: form.topic, title: form.name.trim() });
    setForm({ name: "", topic: "", message: "" });
    setSelectedTabs(new Set(["all"]));
    setSortBy("Newest First");
  };


  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleTabClick = (tab: TabType) => {
    setSelectedTabs((prev) => {
      const next = new Set(prev);

      if (tab === "all") {
        return new Set(["all"]);
      }

      next.delete("all");

      if (next.has(tab)) {
        next.delete(tab);
      } else {
        next.add(tab);
      }

      return next.size === 0 ? new Set(["all"]) : next;
    });
  };

  const filteredTickets = tickets.filter((t) => {
    if (selectedTabs.has("all")) return true;
    if (
      selectedTabs.has("in-progress") &&
      (t.status === "under-review" || t.status === "resolved")
    )
      return true;
    if (selectedTabs.has("closed") && t.status === "closed") return true;
    return false;
  }).sort((a, b) => {
    if (a.isNew !== b.isNew) return a.isNew ? -1 : 1;
    const diff = Date.parse(b.updatedAt) - Date.parse(a.updatedAt);
    return sortBy === "Newest First" ? diff : -diff;
  });

  return (
    <div className="flex flex-col gap-[38px] min-h-full pb-2.5 pr-6 min-w-0">
      <div className="flex items-center justify-between">
        <h1 className="text-[#171717] text-[32px] leading-tight font-normal">
          Help
        </h1>
        <div className="flex items-center gap-3">
          <IconButton label="Telegram"><FaTelegramPlane size={18} /></IconButton>
          <IconButton label="WhatsApp"><FaWhatsapp size={18} className="text-[#000000]" /></IconButton>
          <IconButton label="Email"><FaEnvelope size={18} className="text-[#000000]" /></IconButton>
        </div>
      </div>

      <div className="flex flex-col items-center gap-10 pb-10">
        <div className="flex flex-col items-center gap-9.5 w-full max-w-125">
          <div className="flex flex-col gap-2 w-full">
            <InputField
              placeholder="Title"
              value={form.name}
              name="name"
              onChange={handleFormChange}
              className="bg-[#F8F8F8]"
            />
            <Select
              placeholder="Topic"
              value={form.topic}
              name="topic"
              options={topicOptions}
              onChange={handleFormChange}
              readOnly
              className="bg-[#F8F8F8]! shadow-none"
            />
            <button type="button" className="flex items-center gap-2.5 rounded-xl px-4 py-3 bg-[#F8F8F8] cursor-pointer text-left">
              <FiPaperclip size={16} className="text-[#171717]" />
              <span className="text-sm font-medium text-[#8f8f8f]">
                Attach Files
              </span>
            </button>
            <TextareaField
              placeholder="Text..."
              value={form.message}
              name="message"
              onChange={handleTextareaChange}
              className="w-full h-45.25 bg-[#F8F8F8]"
            />
          </div>
          <Button fullWidth color="primary" text="Send" onClick={handleSend} disabled={!canSend} className="py-[11px] font-semibold text-base" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-[28px] font-semibold text-[#171717] leading-snug">
            Tickets
          </span>

          <Select
            placeholder="Newest First"
            value={sortBy}
            name="ticketFilter"
            options={sortOptions}
            onChange={(e) => setSortBy(e.target.value)}
            readOnly
            className="min-w-[180px] bg-[#F8F8F8]! shadow-none"
          />
        </div>

        <div className="flex items-center gap-1">
          {tabs.map((tab) => (
            <FilterTab
              key={tab.key}
              label={tab.label}
              isSelected={selectedTabs.has(tab.key)}
              onClick={() => handleTabClick(tab.key)}
              icon={selectedTabs.has(tab.key) ? <CheckIcon /> : undefined}
            />
          ))}
        </div>

        <TicketList tickets={filteredTickets} onSelect={(ticket) => navigate(helpTicketPath(ticket.id))} />
      </div>
    </div>
  );
};
