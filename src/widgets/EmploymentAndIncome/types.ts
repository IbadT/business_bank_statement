export interface NewPaycheckOrAnnualSalary {
  id: number;
  name: string;
};

export interface PaycheckPeriod {
  id: number;
  name: string;
};

export interface EmploymentAndIncomeState {
  employerName: string;
  paycheckPeriod: string;
  payPeriodStartDate: string;
  newPaycheckOrAnnualSalary: string;
};