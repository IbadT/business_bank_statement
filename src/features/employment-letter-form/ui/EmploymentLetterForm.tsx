import { useTranslation } from "react-i18next";
import { HELP_TEXT_PLACEHOLDER } from "@/shared/config";
import { fieldChange } from "@/shared/lib/field-change";
import { SectionHeader } from "@/shared/ui/section-header";
import { InputCalendar, InputField } from "@/shared/ui/input";
import { Select } from "@/shared/ui/select";
import { ProfileSelect } from "@/entities/profile";
import { AddressFields, emptyAddress } from "@/entities/location";
import {
  defaultEmployee,
  defaultOfficer,
  defaultPayment,
  employmentTypeList,
  paidTypeList,
  salaryList,
} from "../config/defaults";
import { useEmploymentLetterStep } from "../model/store";

export const EmploymentLetterForm = () => {
  const { t } = useTranslation();
  const [employee, setEmployee] = useEmploymentLetterStep("employee", defaultEmployee);
  const [address, setAddress] = useEmploymentLetterStep("address", emptyAddress);
  const [payment, setPayment] = useEmploymentLetterStep("payment", defaultPayment);
  const [officer, setOfficer] = useEmploymentLetterStep("officer", defaultOfficer);

  const onEmployee = fieldChange(setEmployee);
  const onPayment = fieldChange(setPayment);
  const onOfficer = fieldChange(setOfficer);

  return (
    <div className="flex flex-col gap-6 w-full max-w-[480px] mx-auto">
      <ProfileSelect value={employee.profile} onChange={onEmployee} />

      <div className="form-section">
        <SectionHeader title={t("employee_information")} helpText={HELP_TEXT_PLACEHOLDER} />
        <InputField placeholder={t("name")} value={employee.name} name="name" onChange={onEmployee} />
        <InputField placeholder={t("surname")} value={employee.surname} name="surname" onChange={onEmployee} />
        <InputField placeholder={t("job_title")} value={employee.jobTitle} name="jobTitle" onChange={onEmployee} />
        <Select
          placeholder={t("employment_type")}
          value={employee.employmentType}
          name="employmentType"
          options={employmentTypeList}
          onChange={onEmployee}
        />
        <InputCalendar
          placeholder={t("date_of_hire")}
          value={employee.dateOfHire}
          name="dateOfHire"
          onChange={onEmployee}
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
