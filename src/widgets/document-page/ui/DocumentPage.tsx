import { useState, type ReactNode } from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { FaAngleDown, FaAngleLeft, FaAngleUp } from "react-icons/fa6";
import { Button } from "@/shared/ui/button";
import { openSaveDraftModal } from "@/shared/ui/confirm-modal";
import { OrderSummaryDropdown } from "@/features/order-summary";

interface DocumentPageProps {
  titleKey: string;
  children: ReactNode;
}

export const DocumentPage = ({ titleKey, children }: DocumentPageProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isOpenOrderSummary, setIsOpenOrderSummary] = useState(false);

  return (
    <div className="min-h-full flex flex-col gap-6 p-5">
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
        <button
          type="button"
          className="flex items-center gap-1 text-xl font-bold cursor-pointer hover:text-gray-500 transition-all duration-100"
          onClick={() => navigate(-1)}
        >
          <FaAngleLeft />
          {t(titleKey)}
        </button>

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
              color="white"
            />
            <OrderSummaryDropdown isOpen={isOpenOrderSummary} onClose={() => setIsOpenOrderSummary(false)} />
          </div>
          <Button text={t("generate")} color="primary" onClick={() => alert("generate")} />
        </div>
      </div>

      {children}
    </div>
  );
};
