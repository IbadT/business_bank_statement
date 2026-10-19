import type { InvoiceItem } from "../model/types";

export const DESCRIPTION_MAX_LENGTH = 500;

export const defaultBusinessInfo = {
  profile: "",
  businessName: "",
  businessType: "",
  einVatId: "",
  ownerName: "",
  businessEmail: "",
};

export const defaultBusinessAddress = { state: "", streetAddress: "", city: "", zipCode: "" };

export const defaultCustomerInfo = { businessName: "", officerName: "", email: "" };

export const defaultCustomerAddress = { country: "", state: "", streetAddress: "", city: "", zipCode: "" };

export const defaultCustomerShipping = { state: "", streetAddress: "", city: "", zipCode: "" };

export const createInvoiceItem = (id: number): InvoiceItem => ({
  id,
  name: "",
  description: "",
  quantity: "",
  pricePerItem: "",
  tax: "",
  discount: "",
  invoiceDate: "",
  notes: "",
  status: "",
  projectReference: "",
});

const toOptions = (labels: string[]) => labels.map((label, i) => ({ id: i + 1, label }));

export const businessTypeList = toOptions([
  "Sole proprietorship",
  "Partnership",
  "LLC",
  "C-Corporation",
  "S-Corporation",
  "Non-profit",
]);
export const countryList = toOptions(["United States", "Canada", "United Kingdom", "Germany", "France"]);
export const quantityList = toOptions(Array.from({ length: 10 }, (_, i) => String(i + 1)));
export const invoiceStatusList = toOptions(["Draft", "Sent", "Paid", "Overdue", "Cancelled"]);
