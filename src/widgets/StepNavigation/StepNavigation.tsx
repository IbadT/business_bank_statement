import type { FC } from "react";
import React from "react";


interface StepNavigationProps {
    step: number;
    stepsComponents: React.ReactNode[];
};

export const StepNavigation: FC<StepNavigationProps> = React.memo(({ step, stepsComponents }) => {
    return (
        <div className="w-3/4 p-5 flex flex-col">
            {stepsComponents[step - 1]}
        </div>
    );
});