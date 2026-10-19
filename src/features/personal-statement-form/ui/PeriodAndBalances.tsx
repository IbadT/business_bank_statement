import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/shared/ui/section-header";
import { HELP_TEXT_PLACEHOLDER } from "@/shared/config";
import { InputField, InputCalendar } from "@/shared/ui/input";
import { defaultPeriodAndBalancesState } from "../config/defaults";
import { usePersonalStatementStep } from "../model/store";

export const PeriodAndBalances = () => {
  const { t } = useTranslation();
  const [periodAndBalances, setPeriodAndBalances] = usePersonalStatementStep("periodAndBalances", defaultPeriodAndBalancesState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPeriodAndBalances((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="form-container">
      <div className="form-section">
        <SectionHeader title={t("selecting_months")} helpText={HELP_TEXT_PLACEHOLDER} />
        <InputCalendar
          placeholder={t("first_month")}
          value={periodAndBalances.firstMonth}
          name="firstMonth"
          onChange={handleChange}
        />
        <InputCalendar
          placeholder={t("last_month")}
          value={periodAndBalances.lastMonth}
          name="lastMonth"
          onChange={handleChange}
        />
      </div>

      <div className="form-section">
        <SectionHeader title={t("first_month_start_or_end_balance")} helpText={HELP_TEXT_PLACEHOLDER} />
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

      <div className="form-section">
        <SectionHeader title={t("last_month_end_balance")} helpText={HELP_TEXT_PLACEHOLDER} />
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

      <div className="form-section">
        <SectionHeader title={t("linked_bank_card")} helpText={HELP_TEXT_PLACEHOLDER} />
        <InputField
          placeholder={t("card_number")}
          value={periodAndBalances.cardNumber}
          name="cardNumber"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
