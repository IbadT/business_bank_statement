export interface IB2BOrB2C {
    id: number;
    text: string;
    isSelected: boolean;
};

export interface FinancialAndOwnersData {
    monthlyTurnover: string;
    monthlyNetProfitPercent: string;
    industry: string;
};

export interface OwnerData {
    ownerName: string;
    ownerMonthlyNetProfitPercent: string;
    industry: string;
};