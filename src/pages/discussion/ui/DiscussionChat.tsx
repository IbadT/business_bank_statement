import { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { ChatMessage } from "@/entities/ticket";
import { InputField } from "@/shared/ui/input";
import { Select } from "@/shared/ui/select";
import type { ChatMessageItem } from "../model/content";
import { COUNTRIES, createInitialMessages, REVISION_DATES, STATES, USER_NAME } from "../model/content";
import type { DiscussionFilters } from "./DiscussionModal";

const formatTime = (date: Date) => date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });

const toOptions = (items: string[]) => items.map((label) => ({ id: label, label }));

export const DiscussionChat = ({ filters: initialFilters }: { filters: DiscussionFilters }) => {
  const { t } = useTranslation();
  const [filters, setFilters] = useState(initialFilters);
  const setFilter = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const [chats, setChats] = useState<Record<string, ChatMessageItem[]>>({});
  const chatKey = [filters.country, filters.state, filters.revisionDate].join("|");
  const messages = chats[chatKey] ?? createInitialMessages(filters.country, filters.state, filters.revisionDate);
  const [message, setMessage] = useState("");

  const send = () => {
    const text = message.trim();
    if (!text) return;
    const newMessage = { id: Date.now(), text, isOwn: true, author: USER_NAME, time: formatTime(new Date()) };
    setChats((prev) => ({
      ...prev,
      [chatKey]: [...(prev[chatKey] ?? createInitialMessages(filters.country, filters.state, filters.revisionDate)), newMessage],
    }));
    setMessage("");
  };

  return (
    <div className="flex flex-1 min-h-0 gap-3 p-5">
      <aside
        className="flex flex-col shrink-0"
        style={{ width: 260, height: 763, gap: 12, paddingRight: 12, borderRightWidth: 1, borderRightStyle: "solid", borderRightColor: "#e8e8e8", opacity: 1 }}
      >
        <Select name="country" placeholder={t("discussion.country")} value={filters.country} options={toOptions(COUNTRIES)} onChange={setFilter} readOnly />
        <Select name="state" placeholder={t("discussion.state")} value={filters.state} options={toOptions(STATES)} onChange={setFilter} readOnly />
        <Select name="revisionDate" placeholder={t("discussion.revisionDate")} value={filters.revisionDate} options={toOptions(REVISION_DATES)} onChange={setFilter} readOnly />
      </aside>

      <section className="flex flex-col flex-1 min-w-0 gap-3">
        <div className="flex flex-col flex-1 gap-3 overflow-y-auto">
          <p className="text-center text-sm font-semibold text-[#8F8F8F]">May 25</p>
          {messages.map(({ id, ...msg }) => (
            <ChatMessage key={id} {...msg} />
          ))}
        </div>
        <InputField
          placeholder={t("discussion.message")}
          value={message}
          name="message"
          className="rounded-xl"
          onChange={(e) => setMessage(e.target.value)}
          rightButton={message.trim() ? { text: <FaTelegramPlane />, onClick: send } : undefined}
        />
      </section>
    </div>
  );
};
