export interface ITopUpsAndExpenses {
  id: number;
  type: string;
  date: string;
  counter_party: string;
  amount: string;
  expenses_type: string;
  expenses_date: string;
  expenses_counter_party: string;
  expenses_amount: string;
  start_month: string;
  end_month: string;
  quick_month_list: string;
  opening_balance: string;
  closing_balance: string;
  linked_card_number: string;
  linked_card_holder_name: string;
  month_and_year: string;
  cvv: string;
}