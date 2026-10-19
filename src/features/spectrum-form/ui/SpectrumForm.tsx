import { useTranslation } from "react-i18next";
import { HELP_TEXT_PLACEHOLDER } from "@/shared/config";
import { SectionHeader } from "@/shared/ui/section-header";
import { InputCalendar, InputField } from "@/shared/ui/input";
import { Select } from "@/shared/ui/select";
import { useProfileStore } from "@/entities/profile";
import { stateList } from "@/entities/location";
import { defaultAddress, defaultBilling, planList } from "../config/defaults";
import { useSpectrumStep } from "../model/store";

const stateOptions = stateList.map((st) => ({ id: st.id, label: st.name }));

export const SpectrumForm = () => {
  const { t } = useTranslation();
  const profiles = useProfileStore((s) => s.profiles);
  const profileOptions = profiles.map((p) => ({ id: p.id, label: p.title }));

  const [billing, setBilling] = useSpectrumStep("billing", defaultBilling);
  const [address, setAddress] = useSpectrumStep("address", defaultAddress);

  const handleBilling = (e: React.ChangeEvent<HTMLInputElement>) =>
    setBilling((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAddress((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <div className="flex flex-col gap-6 w-full max-w-[480px] mx-auto">
      <Select
        placeholder={t("profile")}
        value={billing.profile}
        name="profile"
        options={profileOptions}
        onChange={handleBilling}
      />

      <div className="form-section">
        <SectionHeader title={t("billing_information")} helpText={HELP_TEXT_PLACEHOLDER} />
        <InputField placeholder={t("name")} value={billing.name} name="name" onChange={handleBilling} />
        <InputField placeholder={t("surname")} value={billing.surname} name="surname" onChange={handleBilling} />
        <Select
          placeholder={t("select_plan")}
          value={billing.plan}
          name="plan"
          options={planList}
          onChange={handleBilling}
        />
        <InputField
          placeholder={t("account_number")}
          value={billing.accountNumber}
          name="accountNumber"
          onChange={handleBilling}
        />
        <InputField placeholder={t("tarif_base")} value={billing.tarifBase} name="tarifBase" onChange={handleBilling} />
        <InputCalendar
          placeholder={t("billing_date")}
          value={billing.billingDate}
          name="billingDate"
          onChange={handleBilling}
        />
        <span className="text-sm px-1">{t("optional_note")}</span>
      </div>

      <div className="form-section">
        <SectionHeader title={t("address_info")} helpText={HELP_TEXT_PLACEHOLDER} />
        <Select
          placeholder={t("state")}
          value={address.state}
          name="state"
          options={stateOptions}
          onChange={handleAddress}
        />
        <InputField
          placeholder={t("street_address")}
          value={address.streetAddress}
          name="streetAddress"
          onChange={handleAddress}
        />
        <InputField placeholder={t("city")} value={address.city} name="city" onChange={handleAddress} />
        <InputField placeholder={t("zip_code")} value={address.zipCode} name="zipCode" onChange={handleAddress} />
      </div>
    </div>
  );
};
