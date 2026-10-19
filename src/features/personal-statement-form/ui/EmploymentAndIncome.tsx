import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/shared/ui/section-header";
import { HELP_TEXT_PLACEHOLDER } from "@/shared/config";
import { InputField, InputCalendar } from "@/shared/ui/input";
import { Select } from "@/shared/ui/select";
import type { EmploymentAndIncomeState } from "../model/types";
import { newPaycheckOrAnnualSalaryList, paycheckPeriodList } from "../config/defaults";
import { usePersonalStatementStep } from "../model/store";

const paycheckPeriodOptions = paycheckPeriodList.map((item) => ({ id: item.id, label: item.name }));
const newPaycheckOptions = newPaycheckOrAnnualSalaryList.map((item) => ({ id: item.id, label: item.name }));

const initialData: EmploymentAndIncomeState = {
  employerName: "",
  paycheckPeriod: "",
  payPeriodStartDate: "",
  newPaycheckOrAnnualSalary: "",
};

export const EmploymentAndIncome = () => {
  const { t } = useTranslation();
  const [employmentAndIncome, setEmploymentAndIncome] = usePersonalStatementStep("employment", initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmploymentAndIncome((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="form-container">
      <div className="form-section">
        <SectionHeader title={t("details")} helpText={HELP_TEXT_PLACEHOLDER} />
        <InputField
          placeholder={t("employer_name")}
          value={employmentAndIncome.employerName}
          name="employerName"
          onChange={handleChange}
        />
        <Select
          placeholder={t("paycheck_period")}
          value={employmentAndIncome.paycheckPeriod}
          name="paycheckPeriod"
          options={paycheckPeriodOptions}
          onChange={handleChange}
        />
        <InputCalendar
          placeholder={t("pay_period_start_date")}
          value={employmentAndIncome.payPeriodStartDate}
          name="payPeriodStartDate"
          onChange={handleChange}
        />
        <Select
          placeholder={t("new_paycheck_or_annual_salary")}
          value={employmentAndIncome.newPaycheckOrAnnualSalary}
          name="newPaycheckOrAnnualSalary"
          options={newPaycheckOptions}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
