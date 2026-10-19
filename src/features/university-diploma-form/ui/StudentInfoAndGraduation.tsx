import { useTranslation } from "react-i18next";
import { fieldChange } from "@/shared/lib/field-change";
import { InputCalendar, InputField } from "@/shared/ui/input";
import { SectionHeader } from "@/shared/ui/section-header";
import { defaultStudent } from "../config/defaults";
import { useUniversityDiplomaStep } from "../model/store";

export const StudentInfoAndGraduation = () => {
  const { t } = useTranslation();
  const [data, setData] = useUniversityDiplomaStep("student", defaultStudent);
  const onChange = fieldChange(setData);

  return (
    <div className="form-container">
      <div className="form-section">
        <SectionHeader title={t("student_information")} />
        <InputField placeholder={t("student_name")} value={data.name} name="name" onChange={onChange} />
        <InputCalendar placeholder={t("date_of_birth")} value={data.dateOfBirth} name="dateOfBirth" onChange={onChange} />
      </div>

      <div className="form-section">
        <SectionHeader title={t("graduation")} />
        <InputCalendar
          placeholder={t("graduation_date")}
          value={data.graduationDate}
          name="graduationDate"
          onChange={onChange}
        />
      </div>
    </div>
  );
};
