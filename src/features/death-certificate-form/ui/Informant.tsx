import { useTranslation } from "react-i18next";
import { HELP_TEXT_PLACEHOLDER } from "@/shared/config";
import { fieldChange } from "@/shared/lib/field-change";
import { SectionHeader } from "@/shared/ui/section-header";
import { Select } from "@/shared/ui/select";
import { defaultInformant, informantList, relationshipList } from "../config/defaults";
import { useDeathCertificateStep } from "../model/store";

export const Informant = () => {
  const { t } = useTranslation();
  const [data, setData] = useDeathCertificateStep("informant", defaultInformant);
  const onChange = fieldChange(setData);

  return (
    <div className="form-container">
      <div className="form-section">
        <SectionHeader title={t("informant")} helpText={HELP_TEXT_PLACEHOLDER} />
        <Select placeholder={t("name")} value={data.name} name="name" options={informantList} onChange={onChange} />
        <Select
          placeholder={t("relationship_to_decedent")}
          value={data.relationship}
          name="relationship"
          options={relationshipList}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
