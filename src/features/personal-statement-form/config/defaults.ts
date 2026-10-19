import type { NewPaycheckOrAnnualSalary, PaycheckPeriod, HousingRentMortgageState, SelectRentOrMortgage, DepositeType, ManualTransactionsState, PeriodAndBalancesState, PersonalDetailsData } from "../model/types";

export const paycheckPeriodList: PaycheckPeriod[] = [
  {
    id: 1,
    name: "Weekly",
  },
  {
    id: 2,
    name: "Monthly",
  },
  {
    id: 3,
    name: "Yearly",
  },
];

export const newPaycheckOrAnnualSalaryList: NewPaycheckOrAnnualSalary[] = [
  {
    id: 1,
    name: "New Paycheck",
  },
  {
    id: 2,
    name: "Annual Salary",
  },
  {
    id: 3,
    name: "Hourly",
  },
  {
    id: 4,
    name: "Daily",
  },
  {
    id: 5,
    name: "Weekly",
  },
  {
    id: 6,
    name: "Monthly",
  },
  {
    id: 7,
    name: "Yearly",
  },
];

export const defaultHousingRentMortgageState: HousingRentMortgageState = {
    housingType: null,
    selectRentOrMortgage: "",
    rent_mortgage_amount: "",
    mortgage_bank_name: "",
    mortgage_bank_name2: "",
};




export const selectRentOrMortgageList: SelectRentOrMortgage[] = [
    {
        id: 1,
        name: "Rent",
    },
    {
        id: 2,
        name: "Mortgage",
    },
];

export const defaultManualTransactionsState: ManualTransactionsState = {
    topUps: [{}],
    expenses: [{}],
};

export const housingTypeList = [
    { id: 1, text: "Rent" },
    { id: 2, text: "Mortgage" },
    { id: 3, text: "None" },
];

export const depositeTypeList: DepositeType[] = [
    {
        id: 1,
        name: "Deposit",
    },
    
    {
        id: 2,
        name: "Withdrawal",
    },
];

export const defaultPeriodAndBalancesState: PeriodAndBalancesState = {
    firstMonth: "",
    lastMonth: "",
    openingBalance: "",
    closingBalance: "",
    balance: "",
    cardNumber: "",
};

export const defaultPersonalDetailsData: PersonalDetailsData = {
    profile: "",
    fullName: "",
    numberOfChildren: "",
    state: "",
    city: "",
    address: "",
    zipCode: "",
    accountNumber: "",
    hasCar: false,
    numberOfCar: "",
    hasChildren: false,
    numberOfChildren2: "",
}


export const hasChildrenList = [
    {
        id: 1,
        text: "Yes",
    },
    
    {
        id: 2,
        text: "No",
    }
];

export const hasCarList = [
    {
        id: 1,
        text: "Yes",
    },
    
    {
        id: 2,
        text: "No",
    }
];
