import { useState } from "react";
import { FaAngleLeft, FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui/button";
import { openSaveDraftModal } from "@/shared/ui/confirm-modal";
import { OrderSummaryDropdown } from "@/features/order-summary";

interface StatementWizardHeaderProps {
  titleKey: string;
  onContinue: () => void;
}

export const StatementWizardHeader = ({ titleKey, onContinue }: StatementWizardHeaderProps) => {
  const { t } = useTranslation();
  const [isOpenOrderSummary, setIsOpenOrderSummary] = useState(false);

  return (
    <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
      <div className="flex items-center gap-1 text-xl font-bold">
        <div className="cursor-pointer hover:text-gray-500 transition-all duration-100">
          <FaAngleLeft />
        </div>
        {t(titleKey)}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Button
          text={<div className="cursor-pointer hover:text-gray-500 transition-all duration-100">{t("save_draft")}</div>}
          color="none"
          onClick={() => openSaveDraftModal()}
        />
        <div className="relative">
          <Button
            onClick={() => setIsOpenOrderSummary((prev) => !prev)}
            text={
              <div className="flex items-center gap-2">
                {t("order_summary")}
                {isOpenOrderSummary ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            }
            color="secondary"
          />
          <OrderSummaryDropdown isOpen={isOpenOrderSummary} onClose={() => setIsOpenOrderSummary(false)} />
        </div>
        <Button text={t("continue")} color="primary" onClick={onContinue} />
      </div>
    </div>
  );
};
