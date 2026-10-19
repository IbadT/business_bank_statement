import { FaAngleDown, FaAngleUp } from "react-icons/fa6"
import { cn } from "@/shared/lib/cn";

export interface IInputDropdownProps {
  placeholder: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isShowDropdown: boolean;
  onClick: () => void;
  className?: string;
  readOnly?: boolean;
}

export const InputDropdown = ({
  placeholder,
  value,
  name,
  onChange,
  isShowDropdown,
  onClick,
  className,
  readOnly,
}: IInputDropdownProps) => {
  return (
    <div className={cn("card-input", className)}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        readOnly={readOnly}
        onClick={readOnly ? onClick : undefined}
        className={cn("input-base", readOnly && "cursor-pointer")}
      />
      <button type="button" aria-label="Toggle options" className="rounded-xl px-4 py-2 mr-1 cursor-pointer" onClick={onClick}>
        {isShowDropdown ? <FaAngleUp /> : <FaAngleDown />}
      </button>
    </div>
  )
}
