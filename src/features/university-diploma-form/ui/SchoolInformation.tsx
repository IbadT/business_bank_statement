import { useState } from "react";
import { useTranslation } from "react-i18next";
import { fieldChange } from "@/shared/lib/field-change";
import { FileUpload } from "@/shared/ui/file-upload";
import { FilterTab } from "@/shared/ui/filter-tab";
import { InputField } from "@/shared/ui/input";
import { SectionHeader } from "@/shared/ui/section-header";
import { Select } from "@/shared/ui/select";
import { ProfileSelect } from "@/entities/profile";
import { stateList } from "@/entities/location";
import { defaultChairpersons, defaultSchool, schoolList } from "../config/defaults";
import { useUniversityDiplomaStep } from "../model/store";

const stateOptions = stateList.map((s) => ({ id: s.id, label: s.name }));

export const SchoolInformation = () => {
  const { t } = useTranslation();
  const [school, setSchool] = useUniversityDiplomaStep("school", defaultSchool);
  const [chair, setChair] = useUniversityDiplomaStep("chairpersons", defaultChairpersons);
  const [files, setFiles] = useState<Record<string, string>>({});

  const onSchool = fieldChange(setSchool);
  const onChair = fieldChange(setChair);
  const onFile = (key: string) => (file: File | null) =>
    setFiles((prev) => ({ ...prev, [key]: file?.name ?? "" }));

  const isOwn = school.source === "own";

  return (
    <div className="form-container">
      <ProfileSelect value={school.profile} onChange={onSchool} />

      <div className="form-section">
        <SectionHeader title={t("school_source")} />
        <div className="grid grid-cols-2 gap-4">
          <FilterTab
            label={t("my_own_school")}
            isSelected={isOwn}
            onClick={() => setSchool((prev) => ({ ...prev, source: "own" }))}
          />
          <FilterTab
            label={t("choose_from_list")}
            isSelected={!isOwn}
            onClick={() => setSchool((prev) => ({ ...prev, source: "list" }))}
          />
        </div>

        {isOwn ? (
          <>
            <InputField placeholder={t("school_university_name")} value={school.name} name="name" onChange={onSchool} />
            <Select placeholder={t("state")} value={school.state} name="state" options={stateOptions} onChange={onSchool} />
            <InputField placeholder={t("city")} value={school.city} name="city" onChange={onSchool} />
            <InputField placeholder={t("address")} value={school.address} name="address" onChange={onSchool} />
            <InputField placeholder={t("zip_code")} value={school.zipCode} name="zipCode" onChange={onSchool} />

            <hr className="border-gray-200" />
            <FileUpload label={t("school_logo")} hint={t("logo_hint")} fileName={files.logo} onChange={onFile("logo")} />
            <hr className="border-gray-200" />
            <FileUpload label={t("official_seal")} hint={t("logo_hint")} fileName={files.seal} onChange={onFile("seal")} />
            <hr className="border-gray-200" />
            <FileUpload label={t("official_seal")} hint={t("logo_hint")} fileName={files.seal2} onChange={onFile("seal2")} />
          </>
        ) : (
          <>
            <Select placeholder={t("state")} value={school.state} name="state" options={stateOptions} onChange={onSchool} />
            <Select
              placeholder={t("school")}
              value={school.listSchool}
              name="listSchool"
              options={schoolList}
              onChange={onSchool}
            />
          </>
        )}
      </div>

      {isOwn && (
        <div className="form-section">
          <SectionHeader title={t("chairperson_information")} />
          <InputField placeholder={t("first_chairperson_name")} value={chair.firstName} name="firstName" onChange={onChair} />
          <InputField
            placeholder={t("first_chairperson_position")}
            value={chair.firstPosition}
            name="firstPosition"
            onChange={onChair}
          />
          <FileUpload
            label={t("first_chairperson_signature")}
            hint={t("signature_png_hint")}
            fileName={files.sign1}
            onChange={onFile("sign1")}
          />
          <hr className="border-gray-200" />
          <InputField placeholder={t("first_chairperson_name")} value={chair.secondName} name="secondName" onChange={onChair} />
          <InputField
            placeholder={t("first_chairperson_position")}
            value={chair.secondPosition}
            name="secondPosition"
            onChange={onChair}
          />
          <FileUpload
            label={t("second_chairperson_signature")}
            hint={t("signature_png_hint")}
            fileName={files.sign2}
            onChange={onFile("sign2")}
          />
        </div>
      )}
    </div>
  );
};
