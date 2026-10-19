import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/shared/ui/section-header";
import { HELP_TEXT_PLACEHOLDER } from "@/shared/config";
import { InputField } from "@/shared/ui/input";
import { Select } from "@/shared/ui/select";
import { RadioOption } from "@/shared/ui/radio-option";
import { industryList } from "@/entities/industry";
import { b2bOrb2c } from "../config/defaults";
import type { FinancialAndOwnersData, IB2BOrB2C, OwnerData } from "../model/types";
import { useBusinessStatementStep } from "../model/store";

const industryOptions = industryList.map((i) => ({ id: i.id, label: i.name }));

const initialData: FinancialAndOwnersData = {
  monthlyTurnover: "",
  monthlyNetProfitPercent: "",
  industry: "",
};

const initialOwnerData: OwnerData = {
  ownerName: "",
  ownerMonthlyNetProfitPercent: "",
  industry: "",
};

export const FinancialAndOwners = () => {
  const { t } = useTranslation();
  const [data, setData] = useBusinessStatementStep("financial", initialData);
  const [ownerData, setOwnerData] = useBusinessStatementStep("owner", initialOwnerData);
  const [businessModelID, setBusinessModelID] = useBusinessStatementStep<number | null>("businessModel", null);

  const handleChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeOwnerData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOwnerData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="form-container">
      <div className="form-section">
        <SectionHeader title={t("financial_snapshot")} helpText={HELP_TEXT_PLACEHOLDER} />
        <InputField
          placeholder={t("monthly_turnover")}
          value={data.monthlyTurnover}
          name="monthlyTurnover"
          onChange={handleChangeData}
        />
        <InputField
          placeholder={t("monthly_net_profit_percent")}
          value={data.monthlyNetProfitPercent}
          name="monthlyNetProfitPercent"
          onChange={handleChangeData}
          isGenerateButton
        />
        <Select
          placeholder={t("industry")}
          value={data.industry}
          name="industry"
          options={industryOptions}
          onChange={handleChangeData}
        />
      </div>

      <div className="form-section">
        <SectionHeader title={t("owner_info")} helpText={HELP_TEXT_PLACEHOLDER} />
        <InputField placeholder={t("owner_name")} value={ownerData.ownerName} name="ownerName" onChange={handleChangeOwnerData} />
        <InputField
          placeholder={t("monthly_net_profit_percent")}
          value={ownerData.ownerMonthlyNetProfitPercent}
          name="ownerMonthlyNetProfitPercent"
          onChange={handleChangeOwnerData}
          isGenerateButton
        />
        <Select
          placeholder={t("industry")}
          value={ownerData.industry}
          name="industry"
          options={industryOptions}
          onChange={handleChangeOwnerData}
        />
      </div>

      <div className="grid grid-cols-2 gap-4" role="radiogroup">
        {b2bOrb2c.map((item: IB2BOrB2C) => (
          <RadioOption
            key={item.id}
            id={item.id}
            text={item.text}
            isSelected={businessModelID === item.id}
            onSelect={setBusinessModelID}
          />
        ))}
      </div>
    </div>
  );
};
