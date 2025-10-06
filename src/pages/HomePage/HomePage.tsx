import { StepNavigation } from "../../widgets";
import { BBSHeader } from "../../widgets/Headers/BBSHeader"
import { useState } from "react";
import { MdDone } from "react-icons/md";



interface BusinessBankStatement {
    id: number;
    text: string;
}

export const businessBankStatementList: BusinessBankStatement[] = [
    {
        id: 1,
        text: " Company Details"
    },
    {
        id: 2,
        text: " Financial and Owners"
    },
    {
        id: 3,
        text: "Clients & Payment Gateways"
    },
    {
        id: 4,
        text: "Contractors"
    },
    {
        id: 5,
        text: "Top-ups & Expenses"
    },
    {
        id: 6,
        text: "Review & Checkout"
    }
]


export const HomePage = () => {
    const [activeStep, setActiveStep] = useState(1);
    return (
        <div className="h-full flex flex-col gap-6">
            <BBSHeader setActiveStep={setActiveStep} />
            <div className="h-full flex gap-6">
                <div className="w-1/4 pl-5 border-l-2 border-gray-200">
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
                            <div>{item.text}</div>
                        </div>
                    ))}
                </div>
                <StepNavigation step={activeStep} />
            </div>
        </div>
    )
};