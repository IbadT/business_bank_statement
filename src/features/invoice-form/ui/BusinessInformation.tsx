import { useTranslation } from "react-i18next";
import { HELP_TEXT_PLACEHOLDER } from "@/shared/config";
import { SectionHeader } from "@/shared/ui/section-header";
import { InputField } from "@/shared/ui/input";
import { Select } from "@/shared/ui/select";
import { useProfileStore } from "@/entities/profile";
import { stateList } from "@/entities/location";
import { businessTypeList, defaultBusinessAddress, defaultBusinessInfo } from "../config/defaults";
import { useInvoiceStep } from "../model/store";

const stateOptions = stateList.map((st) => ({ id: st.id, label: st.name }));

export const BusinessInformation = () => {
  const { t } = useTranslation();
  const profiles = useProfileStore((s) => s.profiles);
  const profileOptions = profiles.map((p) => ({ id: p.id, label: p.title }));

  const [business, setBusiness] = useInvoiceStep("business", defaultBusinessInfo);
  const [address, setAddress] = useInvoiceStep("businessAddress", defaultBusinessAddress);

  const handleBusiness = (e: React.ChangeEvent<HTMLInputElement>) =>
    setBusiness((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAddress((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <div className="form-container">
      <Select
        placeholder={t("profile")}
        value={business.profile}
        name="profile"
        options={profileOptions}
        onChange={handleBusiness}
      />

      <div className="form-section">
        <SectionHeader title={t("business_information")} helpText={HELP_TEXT_PLACEHOLDER} />
        <InputField
          placeholder={t("name_of_business")}
          value={business.businessName}
          name="businessName"
          onChange={handleBusiness}
        />
        <Select
          placeholder={t("type_of_business")}
          value={business.businessType}
          name="businessType"
          options={businessTypeList}
          onChange={handleBusiness}
        />
        <InputField placeholder={t("ein_vat_id")} value={business.einVatId} name="einVatId" onChange={handleBusiness} />
        <InputField placeholder={t("owner_name")} value={business.ownerName} name="ownerName" onChange={handleBusiness} />
        <InputField
          placeholder={t("business_email")}
          type="email"
          value={business.businessEmail}
          name="businessEmail"
          onChange={handleBusiness}
        />
      </div>

      <div className="form-section">
        <SectionHeader title={t("business_address_info")} helpText={HELP_TEXT_PLACEHOLDER} />
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
