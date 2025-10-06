import { useState } from "react";
import { InputField } from "../../shared/components/Input/Input";


export interface IContractors {
    contractorName: string;
    industry: string;
}

export const Contractors = () => {
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
                <div className="font-medium text-xl">Contractors</div>
                <InputField
                    placeholder="Contractor Name"
                    value={contractors.contractorName}
                    name="contractorName"
                    onChange={handleChange}
                    isGenerateButton={false}
                />
                
                <InputField
                    placeholder="Industry"
                    value={contractors.industry}
                    name="industry"
                    onChange={handleChange}
                    isGenerateButton={false}
                />
            </div>
        </div>
    )
}