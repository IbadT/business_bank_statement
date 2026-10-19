import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui/button";
import { openPayAndGenerateModal } from "@/shared/ui/confirm-modal";
import { SectionHeader } from "@/shared/ui/section-header";

export const ReviewAndCheckout = () => {
  const { t } = useTranslation();
  return (
    <div className="form-container">
      <div className="form-section">
        <SectionHeader title={t("review_and_checkout")} />
        <Button text={t("pay_and_generate")} color="primary" className="self-start" onClick={() => openPayAndGenerateModal()} />
      </div>
    </div>
  );
};
