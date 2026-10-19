import { LuCalendar } from "react-icons/lu";
import { useState, useRef, useCallback } from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import "antd/dist/reset.css";
import { cn } from "@/shared/lib/cn";
import { createChangeEvent } from "@/shared/lib/change-event";
import { useClickOutside } from "@/shared/lib/click-outside";

export interface IInputCalendarProps {
  placeholder: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const InputCalendar = ({ placeholder, value, name, onChange, className }: IInputCalendarProps) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedDate = value ? dayjs(value, 'DD.MM.YYYY') : null;

  const handleDateChange = (date: dayjs.Dayjs | null) => {
    if (date) {
      const formattedDate = date.format('DD.MM.YYYY');
      onChange(createChangeEvent(name, formattedDate));
      setIsDatePickerOpen(false);
    } else {
      onChange(createChangeEvent(name, ''));
    }
  };

  const closePicker = useCallback(() => setIsDatePickerOpen(false), []);
  useClickOutside(containerRef, closePicker, isDatePickerOpen);

  return (
    <div ref={containerRef} className={cn("card-input relative", className)}>
      <DatePicker
        open={isDatePickerOpen}
        onOpenChange={setIsDatePickerOpen}
        value={selectedDate}
        onChange={handleDateChange}
        format="DD.MM.YYYY"
        placeholder={placeholder}
        suffixIcon={<LuCalendar size={20} className="text-[var(--primary-gray-text-color)]" />}
        className="w-full border-none bg-transparent shadow-none"
        style={{
          border: 'none',
          boxShadow: 'none',
          background: 'transparent',
          padding: '12px 16px'
        }}
      />
    </div>
  )
}
