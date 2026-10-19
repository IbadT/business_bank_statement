import { createStepStore } from "@/shared/lib/step-store";

export const { useStepState: usePersonalStatementStep, resetSteps: resetPersonalStatement } =
  createStepStore();
