import { useState } from "react";
import { InputField } from "../../shared/components/Input/Input";
import { useTranslation } from "react-i18next";
import { InputDropdown } from "../../shared/components/Input/InputDropdown";
import type { Industry } from "../FinancialAndOwners/types";
import { industryList } from "../FinancialAndOwners/constants";
import { ButtonPlus } from "../../shared/components/Button";


export interface IContractors {
    contractorName: string;
    industry: string;
}

export const Contractors = () => {
    const { t } = useTranslation();
    const [contractors, setContractors] = useState<IContractors>({
        contractorName: "",
        industry: "",
    });

    const [isShowDropdownIndustry, setIsShowDropdownIndustry] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setContractors((prev: IContractors) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="flex flex-col gap-6 max-w-2/3">
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <div className="font-medium text-xl">{t('contractors')}</div>
                    <ButtonPlus />
                </div>
                <InputField
                    placeholder={t('contractor_name')}
                    value={contractors.contractorName}
                    name="contractorName"
                    onChange={handleChange}
                    isGenerateButton={false}
                />
                <div className="relative">
                    <InputDropdown
                    placeholder={t('industry')}
                    value={contractors.industry}
                    name="industry"
                    onChange={handleChange}
                    isShowDropdown={isShowDropdownIndustry}
                    onClick={() => setIsShowDropdownIndustry(prev => !prev)}
                />
                {isShowDropdownIndustry && (
                    <div onClick={() => setIsShowDropdownIndustry(false)} className="absolute top-full left-0 w-full bg-white rounded-md shadow-md z-50 border border-gray-200">
                        {industryList.map((item: Industry) => (
                            <div key={item.id} className="p-3 hover:bg-gray-50 cursor-pointer rounded-lg transition-colors duration-200" onClick={() => { setIsShowDropdownIndustry(false); setContractors({ ...contractors, industry: item.name }); }}>
                                {item.name}
                            </div>
                        ))}
                    </div>
                )}

                </div>
            </div>
        </div>
    )
}