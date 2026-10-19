import { createStepStore } from "@/shared/lib/step-store";

export const { useStepState: useArticlesStep, resetSteps: resetArticles } = createStepStore();
