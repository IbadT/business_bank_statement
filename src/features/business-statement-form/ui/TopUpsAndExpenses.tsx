import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/shared/ui/section-header";
import { HELP_TEXT_PLACEHOLDER } from "@/shared/config";
import { InputField, InputCalendar } from "@/shared/ui/input";
import { Select } from "@/shared/ui/select";
import type { ITopUpsAndExpenses } from "../model/types";
import { topUpsAndExpensesList } from "../config/defaults";
import { useBusinessStatementStep } from "../model/store";

const typeOptions = topUpsAndExpensesList.map((item) => ({ id: item.id, label: item.type }));

const initialData: ITopUpsAndExpenses = {
    id: 1,
    type: "",
    date: "",
    amount: "",
    counter_party: "",
    expenses_type: "",
    expenses_date: "",
    expenses_counter_party: "",
    expenses_amount: "",
    start_month: "",
    end_month: "",
    quick_month_list: "",
    opening_balance: "",
    closing_balance: "",
    linked_card_number: "",
    linked_card_holder_name: "",
    month_and_year: "",
    cvv: "",
  };

export const TopUpsAndExpenses = () => {
  const { t } = useTranslation();
  const [topUpsAndExpenses, setTopUpsAndExpenses] = useBusinessStatementStep("topUpsAndExpenses", initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTopUpsAndExpenses((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="form-container pb-10">
      <div className="form-section">
        <SectionHeader title="Manual Top-Ups" helpText={HELP_TEXT_PLACEHOLDER} />

        <Select
          placeholder={t("top_ups_and_expenses")}
          value={topUpsAndExpenses.type}
          name="type"
          options={typeOptions}
          onChange={handleChange}
        />

        <InputCalendar
          placeholder={t("date")}
          value={topUpsAndExpenses.date}
          name="date"
          onChange={handleChange}
        />

        <InputField
          placeholder={t("amount")}
          value={topUpsAndExpenses.amount}
          name="amount"
          onChange={handleChange}
        />

        <InputField
          placeholder={t("counter_party")}
          value={topUpsAndExpenses.counter_party}
          name="counter_party"
          onChange={handleChange}
        />
      </div>

      <div className="form-section">
        <SectionHeader title="Manual Expenses" helpText={HELP_TEXT_PLACEHOLDER} />

        <InputCalendar
          placeholder={t("expense_type")}
          value={topUpsAndExpenses.expenses_type}
          name="expenses_type"
          onChange={handleChange}
        />

        <InputField
          placeholder={t("expenses_date")}
          value={topUpsAndExpenses.expenses_date}
          name="expenses_date"
          onChange={handleChange}
        />

        <InputField
          placeholder={t("counter_party")}
          value={topUpsAndExpenses.expenses_counter_party}
          name="expenses_counter_party"
          onChange={handleChange}
        />

        <InputField
          placeholder={t("expenses_amount")}
          value={topUpsAndExpenses.expenses_amount}
          name="expenses_amount"
          onChange={handleChange}
        />
      </div>

      <div className="form-section">
        <SectionHeader title="Reporting Period" helpText={HELP_TEXT_PLACEHOLDER} />
        <InputCalendar
          placeholder={t("start_month")}
          value={topUpsAndExpenses.start_month}
          name="start_month"
          onChange={handleChange}
        />

        <InputCalendar
          placeholder={t("end_month")}
          value={topUpsAndExpenses.end_month}
          name="end_month"
          onChange={handleChange}
        />

        <Select
          placeholder={t("quick_month_list")}
          value={topUpsAndExpenses.quick_month_list}
          name="quick_month_list"
          options={[]}
          onChange={handleChange}
        />
      </div>

      <div className="form-section">
        <SectionHeader title="Opening & Closing Balance" helpText={HELP_TEXT_PLACEHOLDER} />

        <InputField
          placeholder={t("opening_balance")}
          value={topUpsAndExpenses.opening_balance}
          name="opening_balance"
          onChange={handleChange}
        />

        <InputField
          placeholder={t("closing_balance")}
          value={topUpsAndExpenses.closing_balance}
          name="closing_balance"
          onChange={handleChange}
        />
      </div>

      <div className="form-section">
        <SectionHeader title="Linked Bank Card (optional)" helpText={HELP_TEXT_PLACEHOLDER} />

        <InputField
          placeholder={t("linked_card_number")}
          value={topUpsAndExpenses.linked_card_number}
          name="linked_card_number"
          onChange={handleChange}
        />

        <InputField
          placeholder={t("linked_card_holder_name")}
          value={topUpsAndExpenses.linked_card_holder_name}
          name="linked_card_holder_name"
          onChange={handleChange}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <InputField
            placeholder={t("month_and_year")}
            value={topUpsAndExpenses.month_and_year}
            name="month_and_year"
            onChange={handleChange}
          />

          <InputField
            placeholder={t("cvv")}
            value={topUpsAndExpenses.cvv}
            name="cvv"
            onChange={handleChange}
          />
        </div>
      </div>

      <div>*{t("optional_auto_generated")}</div>
    </div>
  );
};
