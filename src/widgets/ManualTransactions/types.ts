export interface DepositeType {
    id: number;
    name: string;
}


export interface ManualTransactionsState {
    deposite_type: string;
    deposite_date: string;
    counterparty_name: string;
    deposit_amount: string;
}

export interface ManualExpensesState {
    expense_type: string;
    expense_date: string;
    expence_amount: string;
}