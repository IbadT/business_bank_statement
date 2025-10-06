import { FaAngleLeft, FaAngleDown } from "react-icons/fa6";
import { HeaderButtons } from "../../shared/components/Button/HeaderButtons";
import { OrderSummaryDropdown } from "../../shared/components/OrderSummaryDropdown";
import { useState, type FC } from "react";
import { useTranslation } from "react-i18next";


interface BBSHeaderProps {
    setActiveStep: (prevStep: (prev: number) => number) => void;
}

export const BBSHeader: FC<BBSHeaderProps> = ({ setActiveStep }) => {
    const { t } = useTranslation();
    const [isOpenOrderSummary, setIsOpenOrderSummary] = useState(false);
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-1 text-xl font-bold">
                <div className="cursor-pointer hover:text-gray-500 transition-all duration-100">
                    <FaAngleLeft /> 
                </div>
                {t('businss_bank_statement')}
            </div>
            
            <div className="flex items-center gap-2">
                <HeaderButtons text={<div className=" cursor-pointer hover:text-gray-500 transition-all duration-100">{t('save_draft')}</div>} color="none" onClick={() => alert("save draft")}/>
                <div className="relative">
                    <HeaderButtons 
                        onClick={() => setIsOpenOrderSummary(prev => !prev)} 
                        text={
                            <div className="flex items-center gap-2">
                                {t('order_summary')} 
                                <FaAngleDown />
                            </div>
                        } 
                        color="secondary" 
                    />
                    <OrderSummaryDropdown 
                        isOpen={isOpenOrderSummary} 
                        onClose={() => setIsOpenOrderSummary(false)} 
                    />
                </div>
                <HeaderButtons text={t('continue')} color="primary" setActiveStep={setActiveStep} />
            </div>
        </div>
    )
}


