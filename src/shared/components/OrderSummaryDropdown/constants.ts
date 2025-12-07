import type { OrderItem } from "./types";

export const orderItemsList: OrderItem[] = [
    { id: 'basic_report', name_key: 'basic_bank_statement', price: 29.99, selected: true },
    { id: 'advanced_analytics', name_key: 'advanced_analytics', price: 19.99, selected: false },
    { id: 'priority_support', name_key: 'priority_support', price: 9.99, selected: false },
    { id: 'data_export', name_key: 'data_export', price: 14.99, selected: false },
    { id: 'api_access', name_key: 'api_access', price: 39.99, selected: false }
];