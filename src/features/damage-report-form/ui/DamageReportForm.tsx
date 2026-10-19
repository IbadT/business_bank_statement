import { useTranslation } from "react-i18next";
import { IoClose } from "react-icons/io5";
import { HELP_TEXT_PLACEHOLDER } from "@/shared/config";
import { SectionHeader } from "@/shared/ui/section-header";
import { InputField } from "@/shared/ui/input";
import { Select } from "@/shared/ui/select";
import { Button } from "@/shared/ui/button";
import { useProfileStore } from "@/entities/profile";
import { stateList } from "@/entities/location";
import {
  createApplication,
  defaultCustomerAddress,
  defaultCustomerInfo,
  applianceTypeList,
  reportedIssueList,
} from "../config/defaults";
import type { Application } from "../model/types";
import { useDamageReportStep } from "../model/store";

const stateOptions = stateList.map((st) => ({ id: st.id, label: st.name }));

export const DamageReportForm = () => {
  const { t } = useTranslation();
  const profiles = useProfileStore((s) => s.profiles);
  const profileOptions = profiles.map((p) => ({ id: p.id, label: p.title }));

  const [customer, setCustomer] = useDamageReportStep("customer", defaultCustomerInfo);
  const [address, setAddress] = useDamageReportStep("address", defaultCustomerAddress);
  const [applications, setApplications] = useDamageReportStep<Application[]>("applications", [
    createApplication(1),
  ]);

  const handleCustomer = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplication = (id: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setApplications((prev) => prev.map((a) => (a.id === id ? { ...a, [name]: value } : a)));
  };

  const addApplication = () =>
    setApplications((prev) => [...prev, createApplication(Math.max(0, ...prev.map((a) => a.id)) + 1)]);

  const removeApplication = (id: number) => setApplications((prev) => prev.filter((a) => a.id !== id));

  return (
    <div className="flex flex-col gap-6 w-full max-w-[480px] mx-auto">
      <Select
        placeholder={t("profile")}
        value={customer.profile}
        name="profile"
        options={profileOptions}
        onChange={handleCustomer}
      />

      <div className="form-section">
        <SectionHeader title={t("customer_info")} helpText={HELP_TEXT_PLACEHOLDER} />
        <InputField placeholder={t("name")} value={customer.name} name="name" onChange={handleCustomer} />
        <InputField placeholder={t("surname")} value={customer.surname} name="surname" onChange={handleCustomer} />
        <InputField
          placeholder={t("email")}
          type="email"
          value={customer.email}
          name="email"
          onChange={handleCustomer}
        />
      </div>

      <div className="form-section">
        <SectionHeader title={t("customer_address_info")} helpText={HELP_TEXT_PLACEHOLDER} />
        <Select
          placeholder={t("state")}
          value={address.state}
          name="state"
          options={stateOptions}
          onChange={handleAddress}
        />
        <InputField placeholder={t("city")} value={address.city} name="city" onChange={handleAddress} />
        <InputField placeholder={t("address")} value={address.address} name="address" onChange={handleAddress} />
        <InputField placeholder={t("zip_code")} value={address.zipCode} name="zipCode" onChange={handleAddress} />
      </div>

      {applications.map((app, index) => {
        const onChange = handleApplication(app.id);
        return (
          <div className="form-section" key={app.id}>
            <SectionHeader
              title={`${t("application")} ${index + 1}`}
              helpText={HELP_TEXT_PLACEHOLDER}
              action={
                <button
                  type="button"
                  aria-label={t("remove")}
                  className="cursor-pointer hover:opacity-60 transition-opacity"
                  onClick={() => removeApplication(app.id)}
                >
                  <IoClose size={24} />
                </button>
              }
            />
            <Select
              placeholder={t("appliance_type")}
              value={app.applianceType}
              name="applianceType"
              options={applianceTypeList}
              onChange={onChange}
            />
            <InputField
              placeholder={t("appliance_model")}
              value={app.applianceModel}
              name="applianceModel"
              onChange={onChange}
            />
            <InputField
              placeholder={t("serial_number")}
              value={app.serialNumber}
              name="serialNumber"
              onChange={onChange}
            />
            <Select
              placeholder={t("customer_reported_issue")}
              value={app.reportedIssue}
              name="reportedIssue"
              options={reportedIssueList}
              onChange={onChange}
            />
          </div>
        );
      })}

      <div className="border-t border-gray-400 pt-3">
        <Button text={t("add_more_product")} color="primary" fullWidth onClick={addApplication} />
      </div>
    </div>
  );
};
