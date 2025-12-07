import type { FC } from "react"

export interface IInputFieldProps {
    placeholder: string;
    value: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isGenerateButton?: boolean;
}

export const InputField: FC<IInputFieldProps> = ({ placeholder, value, name, onChange, isGenerateButton = false }) => {
    const handleGenerate = () => {
        if (name === "monthlyNetProfitPercent" || name === "ownerMonthlyNetProfitPercent") {
            const randomNumber = Math.floor(1 + Math.random() * 100);
            onChange({ target: { name, value: randomNumber.toString() } } as React.ChangeEvent<HTMLInputElement>);
            return;
        }
        const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);
        onChange({ target: { name, value: randomNumber.toString() } } as React.ChangeEvent<HTMLInputElement>);
    }

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
            {isGenerateButton && (
                <button 
                    type="button" 
                    onClick={handleGenerate} 
                    className="rounded-xl px-4 py-2 mr-1 shadow-md cursor-pointer bg-white hover:bg-gray-50 active:bg-gray-100 transition-all duration-200 ease-in-out hover:shadow-lg active:shadow-md active:scale-98 hover:scale-102 transform"
                >
                    Generate
                </button>
            )}
        </div>
    )
}