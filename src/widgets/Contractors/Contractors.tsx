import { useState } from "react";
import { InputField } from "../../shared/components/Input/Input";
import { useTranslation } from "react-i18next";


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
                <div className="font-medium text-xl">{t('contractors')}</div>
                <InputField
                    placeholder={t('contractor_name')}
                    value={contractors.contractorName}
                    name="contractorName"
                    onChange={handleChange}
                    isGenerateButton={false}
                />
                
                <InputField
                    placeholder={t('industry')}
                    value={contractors.industry}
                    name="industry"
                    onChange={handleChange}
                    isGenerateButton={false}
                />
            </div>
        </div>
    )
}