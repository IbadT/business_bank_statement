import { createStepStore } from "@/shared/lib/step-store";

export const { useStepState: useHippoStep, resetSteps: resetHippo } = createStepStore();
