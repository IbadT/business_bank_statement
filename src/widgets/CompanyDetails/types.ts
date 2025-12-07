export interface BusinessBankStatementData {
    profile: string;
    companyName: string;
    state: string;
    city: string;
    address: string;
    zipCode: string;
    accountNumber: string;
};

export interface Profile {
  id: number;
  name: string;
  lastName: string;
};



export interface State {
  id: number;
  name: string;
};