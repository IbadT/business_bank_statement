import type { Application, CustomerAddress, CustomerInfo } from "../model/types";

export const defaultCustomerInfo: CustomerInfo = { profile: "", name: "", surname: "", email: "" };

export const defaultCustomerAddress: CustomerAddress = { state: "", city: "", address: "", zipCode: "" };

export const createApplication = (id: number): Application => ({
  id,
  applianceType: "",
  applianceModel: "",
  serialNumber: "",
  reportedIssue: "",
});

export const applianceTypeList = [
  "Refrigerator",
  "Washing machine",
  "Dishwasher",
  "Dryer",
  "Oven",
  "Microwave",
  "Air conditioner",
].map((label, i) => ({ id: i + 1, label }));

export const reportedIssueList = [
  "Does not turn on",
  "Leaking",
  "Strange noise",
  "Overheating",
  "Not cooling / heating",
  "Physical damage",
].map((label, i) => ({ id: i + 1, label }));
