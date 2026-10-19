import { useTranslation } from "react-i18next";
import { HELP_TEXT_PLACEHOLDER } from "@/shared/config";
import { fieldChange } from "@/shared/lib/field-change";
import { InputField } from "@/shared/ui/input";
import { SectionHeader } from "@/shared/ui/section-header";
import { Select } from "@/shared/ui/select";
import { stateList } from "@/entities/location";
import { causeOfDeathList, defaultDeath, mannerOfDeathList } from "../config/defaults";
import { useDeathCertificateStep } from "../model/store";

const stateOptions = stateList.map((s) => ({ id: s.id, label: s.name }));

export const DeathDetails = () => {
  const { t } = useTranslation();
  const [data, setData] = useDeathCertificateStep("death", defaultDeath);
  const onChange = fieldChange(setData);

  return (
    <div className="form-container">
      <div className="form-section">
        <SectionHeader title={t("death_details")} helpText={HELP_TEXT_PLACEHOLDER} />
        <Select
          placeholder={t("cause_of_death")}
          value={data.causeOfDeath}
          name="causeOfDeath"
          options={causeOfDeathList}
          onChange={onChange}
        />
        <Select
          placeholder={t("manner_of_death")}
          value={data.mannerOfDeath}
          name="mannerOfDeath"
          options={mannerOfDeathList}
          onChange={onChange}
        />
        <InputField placeholder={t("place_of_birth_state_country")} value={data.placeOfBirth} name="placeOfBirth" onChange={onChange} />
      </div>

      <div className="form-section">
        <SectionHeader title={t("place_of_death")} helpText={HELP_TEXT_PLACEHOLDER} />
        <Select placeholder={t("state")} value={data.state} name="state" options={stateOptions} onChange={onChange} />
        <InputField placeholder={t("county")} value={data.county} name="county" onChange={onChange} />
        <InputField placeholder={t("city")} value={data.city} name="city" onChange={onChange} />
        <InputField placeholder={t("address")} value={data.address} name="address" onChange={onChange} />
        <InputField placeholder={t("zip_postal_code")} value={data.zipCode} name="zipCode" onChange={onChange} />
      </div>
    </div>
  );
};
