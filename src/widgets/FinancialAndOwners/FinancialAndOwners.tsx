import { useState, type FC } from "react";
import { InputField } from "../../shared/components/Input/Input"
import { b2bOrb2c, industryList } from "./constants";
import type { FinancialAndOwnersData, IB2BOrB2C, Industry, OwnerData } from "./types";
import { QuestionHelpToggleWithText } from "../../shared/components/QuestionHelpToggle/QuestionHelpToggle";
import { useTranslation } from 'react-i18next';
import { InputDropdown } from "../../shared/components/Input/InputDropdown";







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
    const [isShowDropdownIndustry, setIsShowDropdownIndustry] = useState(false);
    const [isShowDropdownOwnerIndustry, setIsShowDropdownOwnerIndustry] = useState(false);

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
                    {/* <QuestionHelpToggle /> */}
                    <QuestionHelpToggleWithText text={"TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT"} />
                </div>
                <InputField
                    placeholder={t('monthly_turnover')}
                    value={data.monthlyTurnover}
                    name="monthlyTurnover"
                    onChange={handleChangeData}
                />

                <InputField
                    placeholder={t('monthly_net_profit_percent')}
                    value={data.monthlyNetProfitPercent}
                    name="monthlyNetProfitPercent"
                    onChange={handleChangeData}
                    isGenerateButton={true}
                />

                <div className="relative">
                    <InputDropdown
                        placeholder={t('industry')}
                        value={data.industry}
                        name="industry"
                        onChange={handleChangeData}
                        isShowDropdown={isShowDropdownIndustry}
                        onClick={() => setIsShowDropdownIndustry(prev => !prev)}
                    />
                    {isShowDropdownIndustry && (
                        <div onClick={() => setIsShowDropdownIndustry(false)} className="absolute top-full left-0 w-full bg-white rounded-md shadow-md z-50 border border-gray-200">
                            {industryList.map((item: Industry) => (
                                <div key={item.id} className="p-3 hover:bg-gray-50 cursor-pointer rounded-lg transition-colors duration-200" onClick={() => { setIsShowDropdownIndustry(false); setData({ ...data, industry: item.name }); }}>
                                    {item.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <div className="font-medium text-xl">{t('owner_info')}</div>
                    {/* <QuestionHelpToggle /> */}
                    <QuestionHelpToggleWithText text={"TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT"} />
                </div>
                <InputField
                    placeholder={t('owner_name')}
                    value={ownerData.ownerName}
                    name="ownerName"
                    onChange={handleChangeOwnerData}
                />

                <InputField
                    placeholder={t('monthly_net_profit_percent')}
                    value={ownerData.ownerMonthlyNetProfitPercent}
                    name="ownerMonthlyNetProfitPercent"
                    onChange={handleChangeOwnerData}
                    isGenerateButton={true}
                />

                <div className="relative">
                    <InputDropdown
                    placeholder={t('industry')}
                    value={ownerData.industry}
                    name="industry"
                    onChange={handleChangeOwnerData}
                    isShowDropdown={isShowDropdownOwnerIndustry}
                    onClick={() => setIsShowDropdownOwnerIndustry(prev => !prev)}
                />
                {isShowDropdownOwnerIndustry && (
                    <div onClick={() => setIsShowDropdownOwnerIndustry(false)} className="absolute top-full left-0 w-full bg-white rounded-md shadow-md z-50 border border-gray-200">
                        {industryList.map((item: Industry) => (
                            <div key={item.id} className="p-3 hover:bg-gray-50 cursor-pointer rounded-lg transition-colors duration-200" onClick={() => { setIsShowDropdownOwnerIndustry(false); setOwnerData({ ...ownerData, industry: item.name }); }}>
                                {item.name}
                            </div>
                        ))}
                    </div>
                )}
                </div>
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