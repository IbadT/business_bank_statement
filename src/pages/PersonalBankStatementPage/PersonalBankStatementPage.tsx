import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BBSHeader } from "../../widgets/Headers/BBSHeader";
import { personalBankStatementList } from "./constants";
import { ReviewAndCheckout, StepNavigation, } from "../../widgets";
import { PersonalDetails } from "../../widgets/PersonalDetails";
import { EmploymentAndIncome } from "../../widgets/EmploymentAndIncome";
import { HousingRentMortgage } from "../../widgets/HousingRentMortgage";
import { ManualTransactions } from "../../widgets/ManualTransactions";
import { PeriodAndBalances } from "../../widgets/PeriodAndBalances";
import { MdDone } from "react-icons/md";

const stepsComponents: React.ReactNode[] = [
    <PersonalDetails />,
    <EmploymentAndIncome />,
    <HousingRentMortgage />,
    <ManualTransactions />,
    <PeriodAndBalances />,
    <ReviewAndCheckout />
]


// Сделать hoc для шагов



// http://localhost:5173/personal-bank-statement
export const PersonalBankStatementPage = () => {
    const [activeStep, setActiveStep] = useState(1);
    const { t } = useTranslation();
    return (
        <div className="min-h-screen flex flex-col">
            <BBSHeader setActiveStep={setActiveStep} />
            <div className="flex-1 flex gap-6">
                <div className="w-1/4 p-5 border-r-2 border-gray-200">
                    {personalBankStatementList.map((item) => (
                        <div 
                            key={item.id} 
                            className={`
                                flex items-center gap-4 
                                ${activeStep === item.id 
                                    ? 'bg-[var(--primary-yellow-color)]' 
                                    : 'bg-transparent'}
                                rounded-xl p-3 cursor-pointer
                                transition-all duration-300
                                hover:bg-${activeStep !== item.id 
                                    ? 'yellow-100' 
                                    : 'transparent'
                                }
                            `}
                            onClick={() => setActiveStep(item.id)}
                        >
                            {
                                activeStep > item.id ? <div className="flex items-center justify-center bg-[var(--primary-second-yellow-color)] w-5 h-5 rounded-full"><MdDone /></div>
                                : <div>{item.id}</div>
                            }
                            {t(item.text_key)}
                        </div>
                    ))}
                </div>
                <StepNavigation step={activeStep} stepsComponents={stepsComponents} />
            </div>
        </div>
    )
};