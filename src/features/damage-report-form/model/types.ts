export interface CustomerInfo {
  profile: string;
  name: string;
  surname: string;
  email: string;
}

export interface CustomerAddress {
  state: string;
  city: string;
  address: string;
  zipCode: string;
}

export interface Application {
  id: number;
  applianceType: string;
  applianceModel: string;
  serialNumber: string;
  reportedIssue: string;
}
