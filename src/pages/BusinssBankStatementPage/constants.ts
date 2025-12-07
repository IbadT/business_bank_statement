export interface BusinessBankStatement {
    id: number;
    text_key: string;
}

export const businessBankStatementList: BusinessBankStatement[] = [
    {
        id: 1,
        text_key: 'company_details'
    },
    {
        id: 2,
        text_key: 'financial_and_owners'
    },
    {
        id: 3,
        text_key: 'clients_and_payment_gateways'
    },
    {
        id: 4,
        text_key: 'contractors'
    },
    {
        id: 5,
        text_key: 'top_ups_and_expenses'
    },
    {
        id: 6,
        text_key: 'review_and_checkout'
    }
]
