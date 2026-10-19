import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoChevronDown, IoChevronUp, IoClose } from "react-icons/io5";
import { InputCalendar, InputField, TextareaField } from "@/shared/ui/input";
import { Select } from "@/shared/ui/select";
import { Button } from "@/shared/ui/button";
import {
  createInvoiceItem,
  DESCRIPTION_MAX_LENGTH,
  invoiceStatusList,
  quantityList,
} from "../config/defaults";
import type { InvoiceItem } from "../model/types";
import { useInvoiceStep } from "../model/store";

export const InvoiceItems = () => {
  const { t } = useTranslation();
  const [items, setItems] = useInvoiceStep<InvoiceItem[]>("items", [createInvoiceItem(1)]);
  const [collapsed, setCollapsed] = useState<number[]>([]);

  const handleChange =
    (id: number) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setItems((prev) => prev.map((item) => (item.id === id ? { ...item, [name]: value } : item)));
    };

  const addItem = () => {
    const nextId = Math.max(0, ...items.map((i) => i.id)) + 1;
    setItems((prev) => [...prev, createInvoiceItem(nextId)]);
    setCollapsed((prev) => [...prev, ...items.map((i) => i.id).filter((id) => !prev.includes(id))]);
  };

  const removeItem = (id: number) => setItems((prev) => prev.filter((item) => item.id !== id));

  const toggle = (id: number) =>
    setCollapsed((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  return (
    <div className="form-container">
      {items.map((item, index) => {
        const isCollapsed = collapsed.includes(item.id);
        const onChange = handleChange(item.id);
        return (
          <div key={item.id} className="form-section border-b border-gray-200 pb-6 last:border-b-0">
            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                aria-expanded={!isCollapsed}
                className="flex items-center gap-3 section-title cursor-pointer"
                onClick={() => toggle(item.id)}
              >
                {isCollapsed ? <IoChevronDown size={20} /> : <IoChevronUp size={20} />}
                {t("item")} {index + 1}
              </button>
              <button
                type="button"
                aria-label={t("remove")}
                className="cursor-pointer hover:opacity-60 transition-opacity"
                onClick={() => removeItem(item.id)}
              >
                <IoClose size={24} />
              </button>
            </div>

            {!isCollapsed && (
              <>
                <InputField placeholder={t("item_name")} value={item.name} name="name" onChange={onChange} />
                <div className="flex flex-col gap-1">
                  <TextareaField
                    placeholder={t("item_description")}
                    value={item.description}
                    name="description"
                    maxLength={DESCRIPTION_MAX_LENGTH}
                    onChange={onChange}
                  />
                  <span className="text-xs px-1">
                    {item.description.length} / {DESCRIPTION_MAX_LENGTH}
                  </span>
                </div>
                <Select
                  placeholder={t("quantity")}
                  value={item.quantity}
                  name="quantity"
                  options={quantityList}
                  onChange={onChange}
                />
                <InputField
                  placeholder={t("price_per_item")}
                  value={item.pricePerItem}
                  name="pricePerItem"
                  onChange={onChange}
                />
                <InputField placeholder={t("tax_percent")} value={item.tax} name="tax" onChange={onChange} />
                <InputField
                  placeholder={t("discount_percent")}
                  value={item.discount}
                  name="discount"
                  onChange={onChange}
                />
                <InputCalendar
                  placeholder={t("invoice_date")}
                  value={item.invoiceDate}
                  name="invoiceDate"
                  onChange={onChange}
                />
                <InputField placeholder={t("invoice_notes")} value={item.notes} name="notes" onChange={onChange} />
                <Select
                  placeholder={t("invoice_status")}
                  value={item.status}
                  name="status"
                  options={invoiceStatusList}
                  onChange={onChange}
                />
                <InputField
                  placeholder={t("project_reference")}
                  value={item.projectReference}
                  name="projectReference"
                  onChange={onChange}
                />
              </>
            )}
          </div>
        );
      })}

      <Button text={t("add_more_product")} color="primary" fullWidth onClick={addItem} />
    </div>
  );
};
