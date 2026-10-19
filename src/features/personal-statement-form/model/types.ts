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

export interface HousingRentMortgageState {
    housingType: number | null;
    selectRentOrMortgage: string;
    rent_mortgage_amount: string;
    mortgage_bank_name: string;
    mortgage_bank_name2: string;
};

export interface SelectRentOrMortgage {
    id: number;
    name: string;
};

export interface DepositeType {
    id: number;
    name: string;
}


export type TransactionRow = Record<string, string>;

export interface ManualTransactionsState {
    topUps: TransactionRow[];
    expenses: TransactionRow[];
}

export interface PeriodAndBalancesState {
    firstMonth: string;
    lastMonth: string;
    openingBalance: string;
    closingBalance: string;
    balance: string;
    cardNumber: string;
};

export interface PersonalDetailsData {
    profile: string;
    fullName: string;
    numberOfChildren: string;
    state: string;
    city: string;
    address: string;
    zipCode: string;
    accountNumber: string;

    hasCar: boolean;
    numberOfCar?: string;

    hasChildren: boolean;
    numberOfChildren2?: string;
}


export interface HasCar {
    id: number;
    text: string;
};


export interface HasChildren {
    id: number;
    text: string;
};
