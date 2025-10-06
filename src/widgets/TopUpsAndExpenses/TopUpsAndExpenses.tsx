import { useTranslation } from "react-i18next";
import { InputField } from "../../shared/components/Input/Input";
import { QuestionHelpToggleWithText } from "../../shared/components/QuestionHelpToggle/QuestionHelpToggle";
import { InputDropdown } from "../../shared/components/Input/InputDropdown";
import { useState } from "react";
import { InputCalendar } from "../../shared/components/Input/InputCalendar";
import type { ITopUpsAndExpenses } from "./types";
import { topUpsAndExpensesList } from "./constants";





export const TopUpsAndExpenses = () => {
  const { t } = useTranslation();
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const [topUpsAndExpenses, setTopUpsAndExpenses] = useState<ITopUpsAndExpenses>(
    {
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
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTopUpsAndExpenses((prev: ITopUpsAndExpenses) => ({
        ...prev,
        [name]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-6 max-w-2/3 pb-10">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="font-medium text-xl">Manual Top-Ups</div>
          <QuestionHelpToggleWithText text={"TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT"} />
        </div>

        <div className="relative">
          <InputDropdown
            placeholder={t("top_ups_and_expenses")}
            value={topUpsAndExpenses.type}
            name="type"
            onChange={handleChange}
            isShowDropdown={isShowDropdown}
            onClick={() => setIsShowDropdown((prev) => !prev)}
          />
          {isShowDropdown && (
            <div className="absolute top-full left-0 w-full bg-white rounded-md shadow-md z-50 border border-gray-200">
              {topUpsAndExpensesList.map((item: ITopUpsAndExpenses) => (
                <div
                  key={item.id}
                  className="p-3 hover:bg-gray-50 cursor-pointer rounded-lg transition-colors duration-200"
                  onClick={() => {
                    setIsShowDropdown(false);
                    setTopUpsAndExpenses({
                      ...topUpsAndExpenses,
                      type: item.type,
                    });
                  }}
                >
                  {item.type}
                </div>
              ))}
            </div>
          )}
        </div>

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

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="font-medium text-xl">Manual Expenses</div>
          {/* <QuestionHelpToggle /> */}
          <QuestionHelpToggleWithText text={"TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT"} />
        </div>

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

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="font-medium text-xl">Reporting Period</div>
          {/* <QuestionHelpToggle /> */}
          <QuestionHelpToggleWithText text={"TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT"} />
        </div>
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

        <InputDropdown 
          placeholder={t("quick_month_list")}
          value={topUpsAndExpenses.quick_month_list}
          name="quick_month_list"
          onChange={handleChange}
          isShowDropdown={isShowDropdown}
          onClick={() => setIsShowDropdown(prev => !prev)}
        />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="font-medium text-xl">Opening & Closing Balance</div>
          {/* <QuestionHelpToggle /> */}
          <QuestionHelpToggleWithText text={"TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT"} />
        </div>

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

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="font-medium text-xl">Linked Bank Card (optional)</div>
          {/* <QuestionHelpToggle /> */}
          <QuestionHelpToggleWithText text={"TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT"} />
        </div>

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

        <div className="grid grid-cols-2 gap-3">

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
