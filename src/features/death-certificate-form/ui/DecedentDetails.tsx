import { useTranslation } from "react-i18next";
import { HELP_TEXT_PLACEHOLDER } from "@/shared/config";
import { fieldChange } from "@/shared/lib/field-change";
import { InputCalendar, InputField } from "@/shared/ui/input";
import { SectionHeader } from "@/shared/ui/section-header";
import { Select } from "@/shared/ui/select";
import { stateList } from "@/entities/location";
import {
  defaultDecedent,
  defaultResidence,
  maritalStatusList,
  raceList,
  sexList,
} from "../config/defaults";
import { useDeathCertificateStep } from "../model/store";

const stateOptions = stateList.map((s) => ({ id: s.id, label: s.name }));

export const DecedentDetails = () => {
  const { t } = useTranslation();
  const [decedent, setDecedent] = useDeathCertificateStep("decedent", defaultDecedent);
  const [residence, setResidence] = useDeathCertificateStep("residence", defaultResidence);
  const onDecedent = fieldChange(setDecedent);
  const onResidence = fieldChange(setResidence);

  return (
    <div className="form-container">
      <div className="form-section">
        <SectionHeader title={t("decedent_details")} helpText={HELP_TEXT_PLACEHOLDER} />
        <InputField placeholder={t("name")} value={decedent.name} name="name" onChange={onDecedent} />
        <InputCalendar placeholder={t("date_of_birth")} value={decedent.dateOfBirth} name="dateOfBirth" onChange={onDecedent} />
        <InputCalendar placeholder={t("date_of_death")} value={decedent.dateOfDeath} name="dateOfDeath" onChange={onDecedent} />
        <InputField placeholder={t("ssn")} value={decedent.ssn} name="ssn" onChange={onDecedent} />
        <Select placeholder={t("sex")} value={decedent.sex} name="sex" options={sexList} onChange={onDecedent} />
        <Select
          placeholder={t("marital_status")}
          value={decedent.maritalStatus}
          name="maritalStatus"
          options={maritalStatusList}
          onChange={onDecedent}
        />
        <Select placeholder={t("race")} value={decedent.race} name="race" options={raceList} onChange={onDecedent} />
      </div>

      <div className="form-section">
        <SectionHeader title={t("residence_address")} helpText={HELP_TEXT_PLACEHOLDER} />
        <Select placeholder={t("state")} value={residence.state} name="state" options={stateOptions} onChange={onResidence} />
        <InputField placeholder={t("city")} value={residence.city} name="city" onChange={onResidence} />
        <InputField placeholder={t("street_house_apt")} value={residence.address} name="address" onChange={onResidence} />
        <InputField placeholder={t("zip_postal_code")} value={residence.zipCode} name="zipCode" onChange={onResidence} />
      </div>
    </div>
  );
};
