import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/shared/ui/section-header";
import { HELP_TEXT_PLACEHOLDER } from "@/shared/config";
import { InputField } from "@/shared/ui/input";
import { Select } from "@/shared/ui/select";
import { useProfileStore } from "@/entities/profile";
import { stateList } from "@/entities/location";
import type { BusinessBankStatementData } from "../model/types";
import { useBusinessStatementStep } from "../model/store";

const stateOptions = stateList.map((s) => ({ id: s.id, label: s.name }));

const initialData: BusinessBankStatementData = {
  profile: "",
  companyName: "",
  state: "",
  city: "",
  address: "",
  zipCode: "",
  accountNumber: "",
};

export const CompanyDetails = () => {
  const profiles = useProfileStore((s) => s.profiles);
  const profileOptions = profiles
    .filter((p) => p.type === "business")
    .map((p) => ({ id: p.id, label: p.title }));
  const { t } = useTranslation();
  const [data, setData] = useBusinessStatementStep("companyDetails", initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="form-container">
      <Select
        placeholder={t("profile")}
        value={data.profile}
        name="profile"
        options={profileOptions}
        onChange={handleChange}
      />

      <div className="form-section">
        <SectionHeader title={t("company_name")} helpText={HELP_TEXT_PLACEHOLDER} />

        <InputField placeholder={t("company_name")} value={data.companyName} name="companyName" onChange={handleChange} />

        <Select placeholder={t("state")} value={data.state} name="state" options={stateOptions} onChange={handleChange} />

        <InputField placeholder={t("city")} value={data.city} name="city" onChange={handleChange} />
        <InputField placeholder={t("address")} value={data.address} name="address" onChange={handleChange} />
        <InputField placeholder={t("zip_code")} value={data.zipCode} name="zipCode" onChange={handleChange} />
        <InputField
          placeholder={t("account_number")}
          value={data.accountNumber}
          name="accountNumber"
          onChange={handleChange}
          isGenerateButton
        />
      </div>
    </div>
  );
};
