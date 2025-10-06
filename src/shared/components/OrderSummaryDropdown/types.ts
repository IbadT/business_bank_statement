export interface OrderItem {
  id: string;
  name_key: string;
  price: number;
  selected: boolean;
}

export interface OrderSummaryDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}