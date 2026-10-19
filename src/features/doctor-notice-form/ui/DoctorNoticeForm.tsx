import { useTranslation } from "react-i18next";
import { HELP_TEXT_PLACEHOLDER } from "@/shared/config";
import { SectionHeader } from "@/shared/ui/section-header";
import { InputCalendar, InputField } from "@/shared/ui/input";
import { Select } from "@/shared/ui/select";
import { useProfileStore } from "@/entities/profile";
import { stateList } from "@/entities/location";
import {
  causeList,
  defaultAddress,
  defaultAppointment,
  defaultPersonalInfo,
  excuseFromList,
} from "../config/defaults";
import { useDoctorNoticeStep } from "../model/store";

const stateOptions = stateList.map((st) => ({ id: st.id, label: st.name }));

export const DoctorNoticeForm = () => {
  const { t } = useTranslation();
  const profiles = useProfileStore((s) => s.profiles);
  const profileOptions = profiles.map((p) => ({ id: p.id, label: p.title }));

  const [personal, setPersonal] = useDoctorNoticeStep("personal", defaultPersonalInfo);
  const [address, setAddress] = useDoctorNoticeStep("address", defaultAddress);
  const [appointment, setAppointment] = useDoctorNoticeStep("appointment", defaultAppointment);

  const handlePersonal = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPersonal((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAddress((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleAppointment = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAppointment((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <div className="flex flex-col gap-6 w-full max-w-[480px] mx-auto">
      <Select
        placeholder={t("profile")}
        value={personal.profile}
        name="profile"
        options={profileOptions}
        onChange={handlePersonal}
      />

      <div className="form-section">
        <SectionHeader title={t("personal_information")} helpText={HELP_TEXT_PLACEHOLDER} />
        <InputField placeholder={t("name")} value={personal.name} name="name" onChange={handlePersonal} />
        <InputField placeholder={t("surname")} value={personal.surname} name="surname" onChange={handlePersonal} />
        <InputField placeholder={t("email")} type="email" value={personal.email} name="email" onChange={handlePersonal} />
        <InputField placeholder={t("phone_number")} value={personal.phone} name="phone" onChange={handlePersonal} />
        <InputCalendar
          placeholder={t("date_of_birth")}
          value={personal.dateOfBirth}
          name="dateOfBirth"
          onChange={handlePersonal}
        />
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
        <InputField placeholder={t("city")} value={address.city} name="city" onChange={handleAddress} />
        <InputField placeholder={t("address")} value={address.address} name="address" onChange={handleAddress} />
        <InputField placeholder={t("zip")} value={address.zip} name="zip" onChange={handleAddress} />
      </div>

      <div className="form-section">
        <SectionHeader title={t("appointment_info")} helpText={HELP_TEXT_PLACEHOLDER} />
        <InputCalendar
          placeholder={t("appointment_date")}
          value={appointment.appointmentDate}
          name="appointmentDate"
          onChange={handleAppointment}
        />
        <Select
          placeholder={t("cause")}
          value={appointment.cause}
          name="cause"
          options={causeList}
          onChange={handleAppointment}
        />
        <Select
          placeholder={t("excuse_from")}
          value={appointment.excuseFrom}
          name="excuseFrom"
          options={excuseFromList}
          onChange={handleAppointment}
        />
        <InputCalendar
          placeholder={t("excuse_until")}
          value={appointment.excuseUntil}
          name="excuseUntil"
          onChange={handleAppointment}
        />
        <InputField
          placeholder={t("street_address")}
          value={appointment.streetAddress}
          name="streetAddress"
          onChange={handleAppointment}
        />
        <InputField
          placeholder={t("weight_lbs")}
          value={appointment.weight}
          name="weight"
          onChange={handleAppointment}
        />
      </div>
    </div>
  );
};
