import { useTranslation } from "react-i18next";
import { HELP_TEXT_PLACEHOLDER } from "@/shared/config";
import { SectionHeader } from "@/shared/ui/section-header";
import { InputField } from "@/shared/ui/input";
import { Select } from "@/shared/ui/select";
import { RadioOption } from "@/shared/ui/radio-option";
import { defaultHousingRentMortgageState, housingTypeList, selectRentOrMortgageList } from "../config/defaults";
import { usePersonalStatementStep } from "../model/store";

const rentOrMortgageOptions = selectRentOrMortgageList.map((item) => ({ id: item.id, label: item.name }));

export const HousingRentMortgage = () => {
  const { t } = useTranslation();
  const [data, setData] = usePersonalStatementStep("housing", defaultHousingRentMortgageState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="form-container">
      <div className="form-section">
        <SectionHeader title={t("housing_type")} />
        <div className="grid grid-cols-3 gap-4">
          {housingTypeList.map((item) => (
            <RadioOption
              key={item.id}
              id={item.id}
              text={t(item.text.toLowerCase())}
              isSelected={data.housingType === item.id}
              onSelect={(id) => setData((prev) => ({ ...prev, housingType: id }))}
            />
          ))}
        </div>
      </div>

      <div className="form-section">
        <SectionHeader title={t("housing")} helpText={HELP_TEXT_PLACEHOLDER} />

        <Select
          placeholder={t("select_rent_or_mortgage")}
          value={data.selectRentOrMortgage}
          name="selectRentOrMortgage"
          options={rentOrMortgageOptions}
          onChange={handleChange}
        />

        <InputField
          placeholder={t("rent_mortgage_amount")}
          value={data.rent_mortgage_amount}
          name="rent_mortgage_amount"
          onChange={handleChange}
        />

        <InputField
          placeholder={t("mortgage_bank_name")}
          value={data.mortgage_bank_name}
          name="mortgage_bank_name"
          onChange={handleChange}
        />

        <InputField
          placeholder={t("mortgage_bank_name2")}
          value={data.mortgage_bank_name2}
          name="mortgage_bank_name2"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
