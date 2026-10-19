export interface PersonalFormData {
  name: string;
  surname: string;
  middleName: string;
  ssn: string;
  dateOfBirth: string;
  state: string;
  streetAddress: string;
  town: string;
  zipCode: string;
  maritalStatus: 'single' | 'married';
  spouseName: string;
  spouseSurname: string;
  spouseSsn: string;
  employerName: string;
  employerState: string;
  employerStreetAddress: string;
  employerZip: string;
  employerPhone: string;
  ein: string;
  salaryAmount: string;
  position: string;
  employedSince: string;
  landlordName: string;
  landlordStreetAddress: string;
  landlordTown: string;
  landlordState: string;
  landlordZip: string;
  landlordEin: string;
  rentType: string;
  rentPrice: string;
  leaseUntil: string;
}

export const defaultPersonalData: PersonalFormData = {
  name: '', surname: '', middleName: '', ssn: '', dateOfBirth: '',
  state: '', streetAddress: '', town: '', zipCode: '',
  maritalStatus: 'single',
  spouseName: '', spouseSurname: '', spouseSsn: '',
  employerName: '', employerState: '', employerStreetAddress: '', employerZip: '',
  employerPhone: '', ein: '', salaryAmount: '', position: '', employedSince: '',
  landlordName: '', landlordStreetAddress: '', landlordTown: '', landlordState: '',
  landlordZip: '', landlordEin: '', rentType: '', rentPrice: '', leaseUntil: '',
};

export interface BusinessFormData {
  companyName: string;
  state: string;
  city: string;
  address: string;
  zipCode: string;
  accountNumber: string;
}

export const defaultBusinessData: BusinessFormData = {
  companyName: "",
  state: "",
  city: "",
  address: "",
  zipCode: "",
  accountNumber: "",
};
