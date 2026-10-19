import { useTranslation } from "react-i18next";
import { HELP_TEXT_PLACEHOLDER } from "@/shared/config";
import { SectionHeader } from "@/shared/ui/section-header";
import { InputField } from "@/shared/ui/input";
import { Select } from "@/shared/ui/select";
import { stateList } from "@/entities/location";
import {
  countryList,
  defaultCustomerAddress,
  defaultCustomerInfo,
  defaultCustomerShipping,
} from "../config/defaults";
import { useInvoiceStep } from "../model/store";

const stateOptions = stateList.map((st) => ({ id: st.id, label: st.name }));

export const CustomerInformation = () => {
  const { t } = useTranslation();

  const [customer, setCustomer] = useInvoiceStep("customer", defaultCustomerInfo);
  const [address, setAddress] = useInvoiceStep("customerAddress", defaultCustomerAddress);
  const [shipping, setShipping] = useInvoiceStep("customerShipping", defaultCustomerShipping);

  const handleCustomer = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCustomer((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAddress((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleShipping = (e: React.ChangeEvent<HTMLInputElement>) =>
    setShipping((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <div className="form-container">
      <div className="form-section">
        <SectionHeader title={t("customer_information")} helpText={HELP_TEXT_PLACEHOLDER} />
        <InputField
          placeholder={t("customer_business_personal_name")}
          value={customer.businessName}
          name="businessName"
          onChange={handleCustomer}
        />
        <InputField
          placeholder={t("customer_officer_personal_name")}
          value={customer.officerName}
          name="officerName"
          onChange={handleCustomer}
        />
        <InputField
          placeholder={t("customer_email")}
          type="email"
          value={customer.email}
          name="email"
          onChange={handleCustomer}
        />
      </div>

      <div className="form-section">
        <SectionHeader title={t("customer_address_info")} helpText={HELP_TEXT_PLACEHOLDER} />
        <Select
          placeholder={t("country")}
          value={address.country}
          name="country"
          options={countryList}
          onChange={handleAddress}
        />
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

      <div className="form-section">
        <SectionHeader title={t("customer_shipping_info")} helpText={HELP_TEXT_PLACEHOLDER} />
        <Select
          placeholder={t("state")}
          value={shipping.state}
          name="state"
          options={stateOptions}
          onChange={handleShipping}
        />
        <InputField
          placeholder={t("street_address")}
          value={shipping.streetAddress}
          name="streetAddress"
          onChange={handleShipping}
        />
        <InputField placeholder={t("city")} value={shipping.city} name="city" onChange={handleShipping} />
        <InputField placeholder={t("zip_code")} value={shipping.zipCode} name="zipCode" onChange={handleShipping} />
      </div>
    </div>
  );
};
