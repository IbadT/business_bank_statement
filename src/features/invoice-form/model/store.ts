import { createStepStore } from "@/shared/lib/step-store";

export const { useStepState: useInvoiceStep, resetSteps: resetInvoice } = createStepStore();
