import type { FC } from "react"

export interface IInputFieldProps {
    placeholder: string;
    value: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isGenerateButton: boolean;
}

export const InputField: FC<IInputFieldProps> = ({ placeholder, value, name, onChange, isGenerateButton }) => {
    return (
        // <div className="w-full bg-[var(--primary-background-color)] rounded-xl p-3 flex items-center justify-between">
        <div className="w-full bg-[var(--primary-background-color)] rounded-xl flex items-center justify-between">
            <input 
                type="text" 
                placeholder={placeholder} 
                value={value} 
                name={name}
                onChange={onChange} 
                className="w-full bg-transparent outline-none p-3" 
            />
            {isGenerateButton && <div className="rounded-xl px-4 py-2 mr-1 shadow-md cursor-pointer">Generate</div>}
        </div>
    )
}