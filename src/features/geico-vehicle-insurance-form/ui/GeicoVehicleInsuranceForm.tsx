import { useTranslation } from "react-i18next";
import { HELP_TEXT_PLACEHOLDER } from "@/shared/config";
import { fieldChange } from "@/shared/lib/field-change";
import { SectionHeader } from "@/shared/ui/section-header";
import { InputCalendar, InputField } from "@/shared/ui/input";
import { Select } from "@/shared/ui/select";
import { ProfileSelect } from "@/entities/profile";
import { AddressFields, emptyAddress } from "@/entities/location";
import {
  defaultGeneral,
  defaultOfficer,
  defaultPayment,
  paidTypeList,
  salaryList,
  vehicleYearList,
} from "../config/defaults";
import { useGeicoStep } from "../model/store";

export const GeicoVehicleInsuranceForm = () => {
  const { t } = useTranslation();
  const [general, setGeneral] = useGeicoStep("general", defaultGeneral);
  const [address, setAddress] = useGeicoStep("address", emptyAddress);
  const [payment, setPayment] = useGeicoStep("payment", defaultPayment);
  const [officer, setOfficer] = useGeicoStep("officer", defaultOfficer);

  const onGeneral = fieldChange(setGeneral);
  const onPayment = fieldChange(setPayment);
  const onOfficer = fieldChange(setOfficer);

  return (
    <div className="flex flex-col gap-6 w-full max-w-[480px] mx-auto">
      <ProfileSelect value={general.profile} onChange={onGeneral} />

      <div className="form-section">
        <SectionHeader title={t("general_information")} helpText={HELP_TEXT_PLACEHOLDER} />
        <InputField placeholder={t("name")} value={general.name} name="name" onChange={onGeneral} />
        <InputField placeholder={t("surname")} value={general.surname} name="surname" onChange={onGeneral} />
        <Select
          placeholder={t("vehicle_year")}
          value={general.vehicleYear}
          name="vehicleYear"
          options={vehicleYearList}
          onChange={onGeneral}
        />
        <InputField
          placeholder={t("vehicle_model")}
          value={general.vehicleModel}
          name="vehicleModel"
          onChange={onGeneral}
        />
        <InputField placeholder={t("vin")} value={general.vin} name="vin" onChange={onGeneral} />
        <InputCalendar
          placeholder={t("effective_date")}
          value={general.effectiveDate}
          name="effectiveDate"
          onChange={onGeneral}
        />
        <InputField
          placeholder={t("additional_driver")}
          value={general.additionalDriver}
          name="additionalDriver"
          onChange={onGeneral}
        />
      </div>

      <div className="form-section">
        <SectionHeader title={t("address_info")} helpText={HELP_TEXT_PLACEHOLDER} />
        <AddressFields value={address} onChange={fieldChange(setAddress)} />
      </div>

      <div className="form-section">
        <SectionHeader title={t("payment_information")} helpText={HELP_TEXT_PLACEHOLDER} />
        <Select
          placeholder={t("salary")}
          value={payment.salary}
          name="salary"
          options={salaryList}
          onChange={onPayment}
        />
        <Select
          placeholder={t("paid_type")}
          value={payment.paidType}
          name="paidType"
          options={paidTypeList}
          onChange={onPayment}
        />
      </div>

      <div className="form-section">
        <SectionHeader title={t("officer_information")} helpText={HELP_TEXT_PLACEHOLDER} />
        <InputField placeholder={t("name")} value={officer.name} name="name" onChange={onOfficer} />
        <InputField placeholder={t("officer_title")} value={officer.title} name="title" onChange={onOfficer} />
        <InputField
          placeholder={t("email_required")}
          type="email"
          value={officer.email}
          name="email"
          onChange={onOfficer}
        />
        <InputField placeholder={t("phone_number_required")} value={officer.phone} name="phone" onChange={onOfficer} />
        <span className="text-sm px-1">{t("optional_fields_note")}</span>
      </div>
    </div>
  );
};
