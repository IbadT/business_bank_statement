import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui/button";
import type { InvoiceItem } from "../model/types";
import { useInvoiceStep } from "../model/store";

const lineTotal = (item: InvoiceItem) => {
  const quantity = Number(item.quantity) || 0;
  const price = Number(item.pricePerItem) || 0;
  const tax = Number(item.tax) || 0;
  const discount = Number(item.discount) || 0;
  return quantity * price * (1 + tax / 100) * (1 - discount / 100);
};

const formatMoney = (value: number) =>
  `$${value.toLocaleString("en-US", { maximumFractionDigits: 2 })}`;

export const InvoiceReview = () => {
  const { t } = useTranslation();
  const [items] = useInvoiceStep<InvoiceItem[]>("items", []);
  const total = items.reduce((sum, item) => sum + lineTotal(item), 0);

  return (
    <div className="form-container">
      <div className="flex flex-col gap-3 bg-white rounded-2xl p-6">
        <h2 className="font-bold text-lg">{t("order_summary")}</h2>
        <div className="flex flex-col gap-2 text-gray-500">
          {items.map((item, index) => (
            <div key={item.id} className="flex justify-between gap-4">
              <span className="break-words min-w-0">{item.name || `${t("item")} ${index + 1}`}</span>
              <span className="font-semibold shrink-0">{formatMoney(lineTotal(item))}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center border-t border-gray-200 pt-4 mt-1">
          <span className="font-bold text-xl">{t("total")}</span>
          <span className="font-bold text-2xl">{formatMoney(total)}</span>
        </div>
        <Button text={t("generate")} color="primary" fullWidth className="mt-2 py-3" />
      </div>
    </div>
  );
};
