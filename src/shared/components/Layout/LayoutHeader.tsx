import { useNavigate } from "react-router";
import { useTranslation } from 'react-i18next';
import { LanguageSwitch } from "../LanguageSwitch";

export const LayoutHeader = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    return (
        <div className="flex justify-between items-center p-3 gap-2 relative overflow-visible">
            <div className="flex items-center justify-between gap-2 w-full">
                <div className='font-bold text-xl'>LOGO</div>
                <div 
                    style={{color: 'var(--primary-yellow-text-color-yellow)'}} 
                    className='cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[var(--primary-yellow-text-color-yellow)] after:transition-all after:duration-300 after:w-0 hover:after:w-full'
                    onClick={() => navigate('/')}
                >
                    {t('toHome')}
                </div>
            </div>

            <LanguageSwitch />

        </div>
    );
};