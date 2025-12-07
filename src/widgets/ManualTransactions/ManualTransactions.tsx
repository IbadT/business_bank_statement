import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  InputCalendar,
  InputDropdown,
  InputField,
  QuestionHelpToggleWithText,
} from "../../shared/components";
import type {
  DepositeType,
  ManualExpensesState,
  ManualTransactionsState,
} from "./types";
import {
  defaultManualExpensesState,
  defaultManualTransactionsState,
  depositeTypeList,
} from "./constants";

export const ManualTransactions = () => {
  const { t } = useTranslation();
  const [manualTransactions, setManualTransactions] =
    useState<ManualTransactionsState>(defaultManualTransactionsState);
  const [manualExpenses, setManualExpenses] = useState<ManualExpensesState>(
    defaultManualExpensesState
  );
  const [isShowDropdownDepositeType, setIsShowDropdownDepositeType] =
    useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setManualTransactions((prev: ManualTransactionsState) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeExpenses = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setManualExpenses((prev: ManualExpensesState) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="flex flex-col gap-6 max-w-2/3">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="font-medium text-xl">{t("manual_top_ups")}</div>
          <QuestionHelpToggleWithText
            text={
              "TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT"
            }
          />
        </div>

        <InputField
          placeholder={t("deposite_type")}
          value={manualTransactions.deposite_type}
          name="deposite_type"
          onChange={handleChange}
        />

        <InputCalendar
          placeholder={t("deposite_date")}
          value={manualTransactions.deposite_date}
          name="deposite_date"
          onChange={handleChange}
        />

        <InputField
          placeholder={t("counterparty_name")}
          value={manualTransactions.counterparty_name}
          name="counterparty_name"
          onChange={handleChange}
        />

        <InputField
          placeholder={t("deposit_amount")}
          value={manualTransactions.deposit_amount}
          name="deposit_amount"
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="font-medium text-xl">{t("manual_expenses")}</div>
          <QuestionHelpToggleWithText
            text={
              "TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT"
            }
          />
        </div>

        <div className="relative">
          <InputDropdown
            placeholder={t("expense_type")}
            value={manualExpenses.expense_type}
            name="expense_type"
            onChange={handleChangeExpenses}
            isShowDropdown={isShowDropdownDepositeType}
            onClick={() => setIsShowDropdownDepositeType((prev) => !prev)}
          />
          {isShowDropdownDepositeType && (
            <div
              onClick={() => setIsShowDropdownDepositeType(false)}
              className="absolute top-full left-0 w-full bg-white rounded-md shadow-md z-50 border border-gray-200"
            >
              {depositeTypeList.map((item: DepositeType) => (
                <div
                  key={item.id}
                  className="p-3 hover:bg-gray-50 cursor-pointer rounded-lg transition-colors duration-200"
                  onClick={() => {
                    setIsShowDropdownDepositeType(false);
                    setManualTransactions({
                      ...manualTransactions,
                      deposite_type: item.name,
                    });
                  }}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>

        <InputCalendar
          placeholder={t("expenses_date")}
          value={manualExpenses.expense_date}
          name="expense_date"
          onChange={handleChangeExpenses}
        />

        <InputField
          placeholder={t("expenses_amount")}
          value={manualExpenses.expence_amount}
          name="expence_amount"
          onChange={handleChangeExpenses}
        />
      </div>
    </div>
  );
};
