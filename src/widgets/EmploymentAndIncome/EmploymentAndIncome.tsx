import { useTranslation } from "react-i18next";
import { InputField } from "../../shared/components/Input/Input";
import { useState } from "react";
import {
  InputCalendar,
  InputDropdown,
  QuestionHelpToggleWithText,
} from "../../shared/components";
import type { EmploymentAndIncomeState, NewPaycheckOrAnnualSalary, PaycheckPeriod } from "./types";
import { newPaycheckOrAnnualSalaryList, paycheckPeriodList } from "./constants";





export const EmploymentAndIncome = () => {
  const { t } = useTranslation();
  const [employmentAndIncome, setEmploymentAndIncome] =
    useState<EmploymentAndIncomeState>({
      employerName: "",
      paycheckPeriod: "",
      payPeriodStartDate: "",
      newPaycheckOrAnnualSalary: "",
    });
  const [isShowDropdownPaycheckPeriod, setIsShowDropdownPaycheckPeriod] =
    useState(false);
  const [
    isShowDropdownNewPaycheckOrAnnualSalary,
    setIsShowDropdownNewPaycheckOrAnnualSalary,
  ] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmploymentAndIncome((prev: EmploymentAndIncomeState) => ({
      ...prev,
      [name]: value,
    }));
  };


  return (
    <div className="flex flex-col gap-6 max-w-2/3">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="font-medium text-xl">{t("details")}</div>
          <QuestionHelpToggleWithText
            text={
              "TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT"
            }
          />
        </div>
        <InputField
          placeholder={t("employer_name")}
          value={employmentAndIncome.employerName}
          name="employerName"
          onChange={handleChange}
        />

        <div className="relative">
          <InputDropdown
            placeholder={t("paycheck_period")}
            value={employmentAndIncome.paycheckPeriod}
            name="paycheckPeriod"
            onChange={handleChange}
            isShowDropdown={isShowDropdownPaycheckPeriod}
            onClick={() => setIsShowDropdownPaycheckPeriod(prev => !prev)}
          />
          {isShowDropdownPaycheckPeriod && (
            <div onClick={() => setIsShowDropdownPaycheckPeriod(false)} className="absolute top-full left-0 w-full bg-white rounded-md shadow-md z-50 border border-gray-200">
              {paycheckPeriodList.map((item: PaycheckPeriod) => (
                <div
                  key={item.id}
                  className="p-3 hover:bg-gray-50 cursor-pointer rounded-lg transition-colors duration-200"
                  onClick={() => {
                    setIsShowDropdownPaycheckPeriod(false);
                    setEmploymentAndIncome({
                      ...employmentAndIncome,
                      paycheckPeriod: item.name,
                    });
                  }}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>

        <InputCalendar
          placeholder={t("pay_period_start_date")}
          value={employmentAndIncome.payPeriodStartDate}
          name="payPeriodStartDate"
          onChange={handleChange}
        />

        <div className="relative">
          <InputDropdown
            placeholder={t("new_paycheck_or_annual_salary")}
            value={employmentAndIncome.newPaycheckOrAnnualSalary}
            name="newPaycheckOrAnnualSalary"
            onChange={handleChange}
            isShowDropdown={isShowDropdownNewPaycheckOrAnnualSalary}
            onClick={() => setIsShowDropdownNewPaycheckOrAnnualSalary(prev => !prev)}
          />
          {isShowDropdownNewPaycheckOrAnnualSalary && (
            <div onClick={() => setIsShowDropdownNewPaycheckOrAnnualSalary(false)} className="absolute top-full left-0 w-full bg-white rounded-md shadow-md z-50 border border-gray-200">
              {newPaycheckOrAnnualSalaryList.map(
                (item: NewPaycheckOrAnnualSalary) => (
                  <div
                    key={item.id}
                    className="p-3 hover:bg-gray-50 cursor-pointer rounded-lg transition-colors duration-200"
                    onClick={() => {
                      setIsShowDropdownNewPaycheckOrAnnualSalary(false);
                      setEmploymentAndIncome({
                        ...employmentAndIncome,
                        newPaycheckOrAnnualSalary: item.name,
                      });
                    }}
                  >
                    {item.name}
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
