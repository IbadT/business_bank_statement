import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import {IoChevronBack} from "react-icons/io5";
import { ChatMessage, StatusBadge, useTicketsStore } from "@/entities/ticket";
import { Button } from "@/shared/ui/button";
import { InputField } from "@/shared/ui/input";
import {FaTelegramPlane} from "react-icons/fa";
import { ROUTES } from "@/shared/config";

const messages = [
  {
    text: "В современном мире технологии играют важнейшую роль во всех сферах жизни. Мы ежедневно сталкиваемся с инновациями, которые делают нашу жизнь проще, удобнее и эффективнее. Однако вместе с этим возникает необходимость понимать, как эти технологии работают, какие возможности они предоставляют и как их можно использовать во благо общества. Одним из ключевых направлений является автоматизация бизнес-процессов. Компании всё чаще обращаются к решениям, которые позволяют сократить ручной труд, минимизировать ошибки и повысить производительность. Например, внедрение CRM-систем значительно упрощает управление клиентами, делая коммуникацию более организованной и результативной.",
    time: "11:36",
    isOwn: true,
  },
  { text: "Привет", time: "11:36", isOwn: false },
];

export const HelpTopicPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [message, setMessage] = useState<string>("");

  const ticket = useTicketsStore((state) => state.tickets).find((t) => t.id === id);

  useEffect(() => {
    if (!ticket) navigate(ROUTES.help, { replace: true });
  }, [ticket, navigate]);

  const handleBack = () => navigate(ROUTES.help);
  if (!ticket) return null;

  return (
    <div className="flex flex-col gap-5 w-full max-w-200 min-h-[calc(100vh-40px)]">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Back"
              onClick={handleBack}
              className="w-8 h-8 flex items-center justify-center cursor-pointer"
            >
              <IoChevronBack size={28} className="text-[#171717]" />
            </button>
            <h1 className="text-[32px] text-[#171717] font-normal leading-tight tracking-[0.84px]">
              Topic
            </h1>
          </div>
        </div>
        <Button
          text={"Close This Ticket"}
          color="primary"
          onClick={() => {}}
          className="py-2.75 px-4 rounded-[14px] font-semibold text-base"
        />
      </header>

      <div className="flex flex-col gap-1 flex-1">
        <article className="bg-white rounded-[20px] p-4 pb-3 flex flex-col gap-3 shadow-sm">
          <h2 className="text-[#171717] text-2xl font-semibold leading-snug break-words">
            {ticket.title}
          </h2>
          <div className="flex flex-wrap items-center justify-between gap-x-4.5 gap-y-2">
            <div className="flex flex-wrap items-center gap-x-4.5 gap-y-1">
              <span className="text-sm font-semibold text-[#8F8F8F]">
                Тема:
                <span className="text-[#181818]"> Предложение</span>
              </span>
              <span className="text-sm font-semibold text-[#8F8F8F]">
                ID: <span className="text-[#181818]"> {ticket.id}</span>
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-x-4.5 gap-y-1">
              <span className="text-sm font-semibold text-[#8F8F8F]">
                Last update:
                <span className="text-[#181818]"> {ticket.lastUpdate}</span>
              </span>
              <StatusBadge status={ticket.status} />
            </div>
          </div>
        </article>

        <section className="flex flex-col gap-3 py-5 min-w-0 flex-1">
          {messages.map((msg, i) => (
            <ChatMessage key={i} {...msg} />
          ))}
        </section>

        <footer className="pb-6 pt-2">
          <div className="flex gap-2.5">
            <div className="w-10 h-10 rounded-full bg-(--primary-yellow-color) flex items-center justify-center shrink-0">
              <div className="flex flex-col items-center gap-0.5">
                <img src="/images.png" alt="" />
              </div>
            </div>
            <InputField
              placeholder={"Сообщение"}
              value={message}
              name={"message"}
              className="rounded-xl"
              onChange={(e) => setMessage(e.target.value)}
              rightButton={message && message.trim() !== "" ? {
                text: <FaTelegramPlane />,
                onClick: () => setMessage("")
              } : undefined}
            />
          </div>
        </footer>
      </div>
    </div>
  );
};
