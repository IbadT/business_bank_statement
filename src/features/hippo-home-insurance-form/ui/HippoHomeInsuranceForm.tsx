import { useTranslation } from "react-i18next";
import { HELP_TEXT_PLACEHOLDER } from "@/shared/config";
import { fieldChange } from "@/shared/lib/field-change";
import { SectionHeader } from "@/shared/ui/section-header";
import { InputCalendar, InputField } from "@/shared/ui/input";
import { ProfileSelect } from "@/entities/profile";
import { AddressFields, emptyAddress } from "@/entities/location";
import { defaultHomeowner, defaultProperty } from "../config/defaults";
import { useHippoStep } from "../model/store";

export const HippoHomeInsuranceForm = () => {
  const { t } = useTranslation();
  const [homeowner, setHomeowner] = useHippoStep("homeowner", defaultHomeowner);
  const [homeownerAddress, setHomeownerAddress] = useHippoStep("homeownerAddress", emptyAddress);
  const [property, setProperty] = useHippoStep("property", defaultProperty);
  const [propertyAddress, setPropertyAddress] = useHippoStep("propertyAddress", emptyAddress);

  const onHomeowner = fieldChange(setHomeowner);
  const onProperty = fieldChange(setProperty);

  return (
    <div className="flex flex-col gap-6 w-full max-w-[480px] mx-auto">
      <ProfileSelect value={homeowner.profile} onChange={onHomeowner} />

      <div className="form-section">
        <SectionHeader title={t("homeowner_information")} helpText={HELP_TEXT_PLACEHOLDER} />
        <InputField placeholder={t("name")} value={homeowner.name} name="name" onChange={onHomeowner} />
        <InputField placeholder={t("surname")} value={homeowner.surname} name="surname" onChange={onHomeowner} />
      </div>

      <div className="form-section">
        <SectionHeader title={t("homeowner_address_info")} helpText={HELP_TEXT_PLACEHOLDER} />
        <AddressFields value={homeownerAddress} onChange={fieldChange(setHomeownerAddress)} />
      </div>

      <div className="form-section">
        <SectionHeader title={t("property_information")} helpText={HELP_TEXT_PLACEHOLDER} />
        <InputField
          placeholder={t("property_built_year")}
          value={property.builtYear}
          name="builtYear"
          onChange={onProperty}
        />
        <InputField placeholder={t("property_square")} value={property.square} name="square" onChange={onProperty} />
        <InputCalendar
          placeholder={t("policy_creation_date")}
          value={property.policyCreationDate}
          name="policyCreationDate"
          onChange={onProperty}
        />
      </div>

      <div className="form-section">
        <SectionHeader title={t("property_address_info")} helpText={HELP_TEXT_PLACEHOLDER} />
        <AddressFields value={propertyAddress} onChange={fieldChange(setPropertyAddress)} cityLabelKey="town" />
      </div>
    </div>
  );
};
