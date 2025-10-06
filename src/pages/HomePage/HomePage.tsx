import { StepNavigation } from "../../widgets";
import { BBSHeader } from "../../widgets/Headers/BBSHeader"
import { useState } from "react";
import { MdDone } from "react-icons/md";
import { businessBankStatementList } from "./constants";
import { useTranslation } from 'react-i18next';


export const HomePage = () => {
    const [activeStep, setActiveStep] = useState(1);
    const { t } = useTranslation();
    return (
        <div className="h-full flex flex-col gap-6">
            <BBSHeader setActiveStep={setActiveStep} />
            <div className="h-full flex gap-6">
                <div className="w-1/4 p-5 border-r-2 border-gray-200">
                    {businessBankStatementList.map((item) => (
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
                            <div>{t(item.text_key)}</div>
                        </div>
                    ))}
                </div>
                <StepNavigation step={activeStep} />
            </div>
        </div>
    )
};