import { FaAngleDown } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { HeaderButtons } from "../../shared/components/Button/HeaderButtons";
import type { FC } from "react";
import { useTranslation } from "react-i18next";


interface BBSHeaderProps {
    setActiveStep: (prevStep: (prev: number) => number) => void;
}

export const BBSHeader: FC<BBSHeaderProps> = ({ setActiveStep }) => {
    const { t } = useTranslation();
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-1 text-xl font-bold">
                <div className="cursor-pointer hover:text-gray-500 transition-all duration-100">
                    <FaAngleLeft /> 
                </div>
                {t('businss_bank_statement')}
            </div>
            
            <div className="flex items-center gap-2">
                <HeaderButtons text={t('save_draft')} color="none" />
                <HeaderButtons text={<div className="flex items-center gap-2">{t('order_summary')} <FaAngleDown /></div>} color="secondary" />
                <HeaderButtons text={t('continue')} color="primary" setActiveStep={setActiveStep} />
            </div>
        </div>
    )
}


