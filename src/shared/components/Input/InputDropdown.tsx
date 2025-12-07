import { FaAngleDown, FaAngleUp } from "react-icons/fa6"


export interface IInputDropdownProps {
    placeholder: string;
    value: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isShowDropdown: boolean;
    onClick: () => void;
}

export const InputDropdown = ({ placeholder, value, name, onChange, isShowDropdown, onClick }: IInputDropdownProps) => {
    return (
        <div className="w-full bg-[var(--primary-background-color)] rounded-xl flex items-center justify-between">
            <input 
                type="text" 
                placeholder={placeholder} 
                value={value} 
                name={name}
                onChange={onChange} 
                className="w-full bg-transparent outline-none p-3" 
            />
            <div className="rounded-xl px-4 py-2 mr-1 cursor-pointer" onClick={onClick}>
                {isShowDropdown ? <FaAngleUp /> : <FaAngleDown />}
            </div>
        </div>
    )
}