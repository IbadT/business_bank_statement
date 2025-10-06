import { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";

interface Language {
    id: number;
    name: string;
    code: string;
}

const languageList: Language[] = [
    { id: 1, name: 'EN', code: 'en' },
    { id: 2, name: 'RU', code: 'ru' },
    { id: 3, name: 'FR', code: 'fr' },
];

export const LanguageSwitch = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(languageList[0]);

    const handleSelectLanguage = (language: Language) => {
        setSelectedLanguage(language);
        setIsOpen(false);
    }

    return (
        <div className="relative min-w-16">
            <div onClick={() => setIsOpen(prev => !prev)} className="font-semibold flex items-center gap-2 p-2 rounded-md border border-transparent hover:border-gray-300 cursor-pointer transition-all duration-100">
                <div>{selectedLanguage.name}</div>
                <FaAngleDown />
            </div>

            {isOpen && (
                <div className='absolute top-full left-0 w-full bg-white rounded-md shadow-md z-50 border border-gray-200'>
                    {languageList.map((item) => (
                        <div onClick={() => handleSelectLanguage(item)} key={item.id} className='p-2 hover:bg-gray-100 cursor-pointer'>
                            {item.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
