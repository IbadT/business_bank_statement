export interface InvoiceItem {
  id: number;
  name: string;
  description: string;
  quantity: string;
  pricePerItem: string;
  tax: string;
  discount: string;
  invoiceDate: string;
  notes: string;
  status: string;
  projectReference: string;
}
