import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/shared/ui/section-header";
import { InputField } from "@/shared/ui/input";
import { Select } from "@/shared/ui/select";
import { ButtonPlus } from "@/shared/ui/button";
import { industryList } from "@/entities/industry";
import type { IContractors } from "../model/types";
import { useBusinessStatementStep } from "../model/store";

const industryOptions = industryList.map((i) => ({ id: i.id, label: i.name }));

const initialData: IContractors = { contractorName: "", industry: "" };

export const Contractors = () => {
  const { t } = useTranslation();
  const [contractors, setContractors] = useBusinessStatementStep("contractors", initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContractors((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="form-container">
      <div className="form-section">
        <SectionHeader title={t("contractors")} action={<ButtonPlus />} />
        <InputField
          placeholder={t("contractor_name")}
          value={contractors.contractorName}
          name="contractorName"
          onChange={handleChange}
        />
        <Select
          placeholder={t("industry")}
          value={contractors.industry}
          name="industry"
          options={industryOptions}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
