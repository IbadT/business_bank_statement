import { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

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
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    
    // !!!! ВЫНЕСТИ В localstorage !!!
    const currentLanguage = languageList.find(lang => lang.code === i18n.language) || languageList[0];
    // !!!! ВЫНЕСТИ В localstorage !!!

    const handleSelectLanguage = (language: Language) => {
        i18n.changeLanguage(language.code);
        setIsOpen(false);
    }

    return (
        <div className="relative min-w-16">
            <div onClick={() => setIsOpen(prev => !prev)} className="font-semibold flex items-center gap-2 p-2 rounded-md border border-transparent hover:border-gray-300 cursor-pointer transition-all duration-100">
                <div>{currentLanguage.name}</div>
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
