import { useTranslation } from "react-i18next";
import { fieldChange } from "@/shared/lib/field-change";
import { SectionHeader } from "@/shared/ui/section-header";
import { Select } from "@/shared/ui/select";
import { defaultDegree, degreeList, specialityList } from "../config/defaults";
import { useUniversityDiplomaStep } from "../model/store";

export const DegreeDetails = () => {
  const { t } = useTranslation();
  const [data, setData] = useUniversityDiplomaStep("degree", defaultDegree);
  const onChange = fieldChange(setData);

  return (
    <div className="form-container">
      <div className="form-section">
        <SectionHeader title={t("degree")} />
        <Select placeholder={t("degree")} value={data.degree} name="degree" options={degreeList} onChange={onChange} />
        <Select
          placeholder={t("speciality")}
          value={data.speciality}
          name="speciality"
          options={specialityList}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
