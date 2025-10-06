import { FaAngleDown } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { HeaderButtons } from "../../shared/components/Button/HeaderButtons";
import type { FC } from "react";


interface BBSHeaderProps {
    setActiveStep: (prevStep: (prev: number) => number) => void;
}

export const BBSHeader: FC<BBSHeaderProps> = ({ setActiveStep }) => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-1 text-xl font-bold">
                <div className="cursor-pointer hover:text-gray-500 transition-all duration-100">
                    <FaAngleLeft /> 
                </div>
                Businss Bank Statement
            </div>
            
            <div className="flex items-center gap-2">
                <HeaderButtons text="Save Draft" color="none" />
                <HeaderButtons text={<div className="flex items-center gap-2">Order Summary<FaAngleDown /></div>} color="secondary" />
                <HeaderButtons text="Continue" color="primary" setActiveStep={setActiveStep} />
            </div>
        </div>
    )
}


