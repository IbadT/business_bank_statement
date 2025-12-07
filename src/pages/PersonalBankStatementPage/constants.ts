export interface PersonalBankStatement {
    id: number;
    text_key: string;
}

export const personalBankStatementList: PersonalBankStatement[] = [
    {
        id: 1,
        text_key: 'personal_details'
    },
    {
        id: 2,
        text_key: 'employment_income'
    },
    {
        id: 3,
        text_key: 'housing_rent_mortgage'
    },
    {
        id: 4,
        text_key: 'manual_transactions'
    },
    {
        id: 5,
        text_key: 'period_balances'
    },
    {
        id: 6,
        text_key: 'review_checkout'
    }
]