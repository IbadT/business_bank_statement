import { useTranslation } from "react-i18next";
import { InputField } from "../../shared/components/Input/Input";
import { InputCalendar } from "../../shared/components/Input/InputCalendar";
import { QuestionHelpToggleWithText } from "../../shared/components/QuestionHelpToggle/QuestionHelpToggle";
import { useState } from "react";
import type { PeriodAndBalancesState } from "./types";
import { defaultPeriodAndBalancesState } from "./constants";

export const PeriodAndBalances = () => {
  const { t } = useTranslation();
  const [periodAndBalances, setPeriodAndBalances] =
    useState<PeriodAndBalancesState>(defaultPeriodAndBalancesState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPeriodAndBalances((prev: PeriodAndBalancesState) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="flex flex-col gap-6 max-w-2/3">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="font-medium text-xl">{t("selecting_months")}</div>
          <QuestionHelpToggleWithText
            text={
              "TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT"
            }
          />
        </div>
        <InputCalendar
          placeholder="Start Date"
          value={periodAndBalances.firstMonth}
          name="firstMonth"
          onChange={handleChange}
        />
        <InputCalendar
          placeholder="End Date"
          value={periodAndBalances.lastMonth}
          name="lastMonth"
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="font-medium text-xl">
            {t("first_month_start_or_end_balance")}
          </div>
          <QuestionHelpToggleWithText
            text={
              "TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT"
            }
          />
        </div>
        <InputField
          placeholder={t("opening_balance")}
          value={periodAndBalances.openingBalance}
          name="openingBalance"
          onChange={handleChange}
        />

        <InputField
          placeholder={t("closing_balance")}
          value={periodAndBalances.closingBalance}
          name="closingBalance"
          onChange={handleChange}
        />
        <div className="font-light text-[12px]">
          {t("optional_auto_generated")}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="font-medium text-xl">
            {t("last_month_end_balance")}
          </div>
          <QuestionHelpToggleWithText
            text={
              "TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT"
            }
          />
        </div>
        <InputField
          placeholder={t("balance")}
          value={periodAndBalances.balance}
          name="balance"
          onChange={handleChange}
        />
        <div className="font-light text-[12px]">
          {t("optional_auto_generated")}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="font-medium text-xl">{t("linked_bank_card")}</div>
          <QuestionHelpToggleWithText
            text={
              "TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT"
            }
          />
        </div>
        <InputField
          placeholder={t("card_number")}
          value={periodAndBalances.closingBalance}
          name="closingBalance"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
