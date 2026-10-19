import { cn } from "@/shared/lib/cn";

interface ChatMessageProps {
  text: string;
  time: string;
  isOwn?: boolean;
  author?: string;
}

export const ChatMessage = ({ text, time, isOwn, author }: ChatMessageProps) => {
  return (
    <div className={cn("flex flex-col gap-1", isOwn ? "items-end" : "items-start")}>
      <div
        className={cn(
          "max-w-[70%] rounded-2xl px-3.5 py-1.75",
          isOwn ? "bg-(--primary-yellow-color)" : "bg-white shadow-sm",
        )}
      >
        <p className="text-sm text-[#171717] leading-relaxed break-words whitespace-pre-wrap">{text}</p>
        <p className="text-[10px] font-semibold text-[#a6a6a6] text-right mt-1">
          {time}
        </p>
      </div>
      {author && <p className="text-xs font-semibold text-[#8F8F8F] px-1">{author}</p>}
    </div>
  );
};
