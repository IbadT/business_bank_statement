import type { DepositeType, ManualExpensesState, ManualTransactionsState } from "./types";

export const defaultManualTransactionsState: ManualTransactionsState = {
    deposite_type: "",
    deposite_date: "",
    counterparty_name: "",
    deposit_amount: "",
};

export const defaultManualExpensesState: ManualExpensesState = {
    expense_type: "",
    expense_date: "",
    expence_amount: "",
};

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