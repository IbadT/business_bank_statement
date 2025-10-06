import { useState, type FC } from "react";
import { InputField } from "../../shared/components/Input/Input"
import { b2bOrb2c } from "./constants";
import type { FinancialAndOwnersData, IB2BOrB2C, OwnerData } from "./types";
import { QuestionHelpToggle } from "../../shared/components/QuestionHelpToggle/QuestionHelpToggle";
import { useTranslation } from 'react-i18next';







export const FinancialAndOwners = () => {
    const { t } = useTranslation();
    const [data, setData] = useState<FinancialAndOwnersData>({
        monthlyTurnover: "",
        monthlyNetProfitPercent: "",
        industry: "", 
    });

    const [ownerData, setOwnerData] = useState<OwnerData>({
        ownerName: "",
        ownerMonthlyNetProfitPercent: "",
        industry: "",
    });

    const [businessModelID, setBusinessModelID] = useState<number | null>(null);

    const handleChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData((prev: FinancialAndOwnersData) => ({
            ...prev,
            [name]: value,
        }))
    };

    const handleChangeOwnerData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setOwnerData((prev: OwnerData) => ({
            ...prev,
            [name]: value,
        }))
    };
    return (
        <div className="flex flex-col gap-6 max-w-2/3">
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <div className="font-medium text-xl">{t('financial_snapshot')}</div>
                    <QuestionHelpToggle />
                </div>
                <InputField
                    placeholder={t('monthly_turnover')}
                    value={data.monthlyTurnover}
                    name="monthlyTurnover"
                    onChange={handleChangeData}
                    isGenerateButton={false}
                />

                <InputField
                    placeholder={t('monthly_net_profit_percent')}
                    value={data.monthlyNetProfitPercent}
                    name="monthlyNetProfitPercent"
                    onChange={handleChangeData}
                    isGenerateButton={true}
                />

                <InputField
                    placeholder={t('industry')}
                    value={data.industry}
                    name="industry"
                    onChange={handleChangeData}
                    isGenerateButton={false}
                />
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <div className="font-medium text-xl">{t('owner_info')}</div>
                    <QuestionHelpToggle />
                </div>
                <InputField
                    placeholder={t('owner_name')}
                    value={ownerData.ownerName}
                    name="ownerName"
                    onChange={handleChangeOwnerData}
                    isGenerateButton={false}
                />

                <InputField
                    placeholder={t('monthly_net_profit_percent')}
                    value={ownerData.ownerMonthlyNetProfitPercent}
                    name="ownerMonthlyNetProfitPercent"
                    onChange={handleChangeOwnerData}
                    isGenerateButton={true}
                />

                <InputField
                    placeholder={t('industry')}
                    value={ownerData.industry}
                    name="industry"
                    onChange={handleChangeOwnerData}
                    isGenerateButton={false}
                />
            </div>

            <div className="grid grid-cols-2">
                {b2bOrb2c.map((item: IB2BOrB2C) => (
                    <SwitchToggleButton 
                        key={item.id} 
                        id={item.id}
                        text={item.text} 
                        isSelected={businessModelID === item.id} 
                        setBusinessModelID={setBusinessModelID}
                    />
                ))}
            </div>
        </div>
    )
};

export interface ISwitchToggleButtonProps {
    id: number;
    text: string;
    isSelected: boolean;
    setBusinessModelID: (id: number) => void;
}

export const SwitchToggleButton: FC<ISwitchToggleButtonProps> = ({ id, text, isSelected, setBusinessModelID }) => {
    const handleClick = () => {
        setBusinessModelID(id);
    };

    return (
        <div 
            className="flex items-center gap-2 cursor-pointer transition-all duration-300 ease-in-out hover:opacity-80"
            onClick={handleClick}
        >
            <div className={`w-6 h-6 flex items-center justify-center p-[2px] rounded-full border-[2px] transition-all duration-300 ease-in-out ${
                isSelected ? 'border-[var(--primary-yellow-color)]' : 'border-[var(--primary-gray-text-color)]'
            }`}>
                <div className={`w-4 h-4 rounded-full transition-all duration-300 ease-in-out ${
                    isSelected ? 'bg-[var(--primary-yellow-color)] scale-100' : 'bg-transparent scale-0'
                }`}></div>
            </div>
            <div className={`transition-colors duration-300}`}>
                {text}
            </div>
        </div>
    )
}