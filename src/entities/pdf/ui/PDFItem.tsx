import { FiFileText } from 'react-icons/fi';

interface PDFItemProps {
  title: string;
  subtitle: string;
  time: string;
  draft?: boolean;
}

export const PDFItem = ({ title, subtitle, time, draft }: PDFItemProps) => {
  return (
    <div className="flex items-center gap-2 rounded-xl px-[14px] py-[10px] bg-white cursor-pointer hover:shadow-sm transition-shadow">
      <div className="w-9 h-9 rounded-xl bg-[var(--primary-yellow-color)] flex items-center justify-center shrink-0">
        <FiFileText size={18} className="text-[#171717]" />
      </div>
      <div className="flex-1 min-w-0 flex flex-col">
        <div className="flex items-center gap-2">
          {draft && (
            <span className="text-sm font-semibold text-[#e2c013] leading-tight">DRAFT</span>
          )}
          <span className="text-base font-medium text-[#000000] leading-tight truncate">{title}</span>
        </div>
        <span className="text-sm font-medium text-[#998721] leading-tight truncate">{subtitle}</span>
      </div>
      <span className="text-sm font-normal text-[#888888] shrink-0 whitespace-nowrap">{time}</span>
    </div>
  );
};
