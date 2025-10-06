import { LuCalendar } from "react-icons/lu";
import { useState, useEffect, useRef } from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import "antd/dist/reset.css";

export interface IInputCalendarProps {
    placeholder: string;
    value: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputCalendar = ({ placeholder, value, name, onChange }: IInputCalendarProps) => {
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Преобразуем value в dayjs объект
    const selectedDate = value ? dayjs(value, 'DD.MM.YYYY') : null;

    const handleDateChange = (date: dayjs.Dayjs | null) => {
        if (date) {
            const formattedDate = date.format('DD.MM.YYYY');
            onChange({ target: { name, value: formattedDate } } as React.ChangeEvent<HTMLInputElement>);
            setIsDatePickerOpen(false);
        } else {
            // Если дата очищена
            onChange({ target: { name, value: '' } } as React.ChangeEvent<HTMLInputElement>);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsDatePickerOpen(false);
            }
        };

        if (isDatePickerOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDatePickerOpen]);

    return (
        <div ref={containerRef} className="w-full bg-[var(--primary-background-color)] rounded-xl flex items-center justify-between relative">
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
