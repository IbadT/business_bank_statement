import { useCallback } from 'react';
import { InputField } from "@/shared/ui/input";
import { Select } from "@/shared/ui/select";
import { InputCalendar } from "@/shared/ui/input";
import { type PersonalFormData } from "../model/defaults";
import { QuestionHelpToggle } from "@/shared/ui/question-help-toggle";



const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
  'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
  'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
  'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
];

const rentTypes = ['Monthly', 'Weekly', 'Yearly'];

const toOptions = (items: string[]) => items.map((label) => ({ id: label, label }));
const statesOptions = toOptions(states);
const rentTypesOptions = toOptions(rentTypes);

interface Props {
  data: PersonalFormData;
  onChange: (data: PersonalFormData) => void;
}

export const PersonalProfileForm = ({ data, onChange }: Props) => {
  const updateField = useCallback((field: keyof PersonalFormData) => (value: string) => {
    onChange({ ...data, [field]: value });
  }, [data, onChange]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
      <div className="flex flex-col gap-6 w-full max-w-[640px] mx-auto">
        <SectionCard title="Personal info">
          <InputField
            placeholder="Name"
            value={data.name}
            name="name"
            onChange={handleChange}
          />
          <InputField
            placeholder="Surname"
            value={data.surname}
            name="surname"
            onChange={handleChange}
          />
          <InputField
            placeholder="Middle name (opt.)"
            value={data.middleName}
            name="middleName"
            onChange={handleChange}
          />
          <InputField
            placeholder="SSN"
            value={data.ssn}
            name="ssn"
            onChange={handleChange}
          />
          <InputCalendar
            placeholder="Date of birth"
            value={data.dateOfBirth}
            name="dateOfBirth"
            onChange={handleChange}
          />
        </SectionCard>

        <SectionCard title="Address info">
          <Select
            placeholder="State"
            value={data.state}
            name="state"
            options={statesOptions}
            onChange={handleChange}
          />
          <InputField
            placeholder="Street address"
            value={data.streetAddress}
            name="streetAddress"
            onChange={handleChange}
          />
          <InputField
            placeholder="Town"
            value={data.town}
            name="town"
            onChange={handleChange}
          />
          <InputField
            placeholder="Zip code"
            value={data.zipCode}
            name="zipCode"
            onChange={handleChange}
          />
        </SectionCard>

        <SectionCard title="Marital Status">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateField('maritalStatus')('married')}
                className={`w-5 h-5 flex items-center justify-center p-[2px] rounded-full border-2 transition-all duration-300 ease-in-out ${
                  data.maritalStatus === 'married'
                    ? 'border-[var(--primary-yellow-color)]'
                    : 'border-[var(--primary-gray-text-color)]'
                }`}
              >
                <div className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ease-in-out ${
                  data.maritalStatus === 'married'
                    ? 'bg-[var(--primary-yellow-color)] scale-100'
                    : 'bg-transparent scale-0'
                }`} />
              </button>
              <span className="text-sm font-medium">Married</span>
            </div>
            <div className="text-xs text-gray-400 font-medium ml-auto">Status</div>
          </div>
          {data.maritalStatus === 'married' && (
            <div className="flex flex-col gap-3 pt-2">
              <InputField
                placeholder="Spouse Name"
                value={data.spouseName}
                name="spouseName"
                onChange={handleChange}
              />
              <InputField
                placeholder="Spouse Surname"
                value={data.spouseSurname}
                name="spouseSurname"
                onChange={handleChange}
              />
              <InputField
                placeholder="Spouse SSN"
                value={data.spouseSsn}
                name="spouseSsn"
                onChange={handleChange}
              />
            </div>
          )}
        </SectionCard>

        <SectionCard title="Employment information">
          <InputField
            placeholder="Employer Name"
            value={data.employerName}
            name="employerName"
            onChange={handleChange}
          />
          <Select
            placeholder="Employer State"
            value={data.employerState}
            name="employerState"
            options={statesOptions}
            onChange={handleChange}
          />
          <InputField
            placeholder="Employer Street Address"
            value={data.employerStreetAddress}
            name="employerStreetAddress"
            onChange={handleChange}
          />
          <InputField
            placeholder="Employer ZIP"
            value={data.employerZip}
            name="employerZip"
            onChange={handleChange}
          />
          <InputField
            placeholder="Employer phone number"
            value={data.employerPhone}
            name="employerPhone"
            onChange={handleChange}
          />
          <InputField
            placeholder="EIN"
            value={data.ein}
            name="ein"
            onChange={handleChange}
          />
          <InputField
            placeholder="Salary Amount"
            value={data.salaryAmount}
            name="salaryAmount"
            onChange={handleChange}
          />
          <InputField
            placeholder="Position"
            value={data.position}
            name="position"
            onChange={handleChange}
          />
          <InputCalendar
            placeholder="Employed Since"
            value={data.employedSince}
            name="employedSince"
            onChange={handleChange}
          />
        </SectionCard>

        <SectionCard title="Rent information">
          <InputField
            placeholder="Landlord Name"
            value={data.landlordName}
            name="landlordName"
            onChange={handleChange}
          />
          <InputField
            placeholder="Landlord Street Address"
            value={data.landlordStreetAddress}
            name="landlordStreetAddress"
            onChange={handleChange}
          />
          <InputField
            placeholder="Landlord Town"
            value={data.landlordTown}
            name="landlordTown"
            onChange={handleChange}
          />
          <Select
            placeholder="Landlord State"
            value={data.landlordState}
            name="landlordState"
            options={statesOptions}
            onChange={handleChange}
          />
          <InputField
            placeholder="Landlord ZIP"
            value={data.landlordZip}
            name="landlordZip"
            onChange={handleChange}
          />
          <InputField
            placeholder="EIN"
            value={data.landlordEin}
            name="landlordEin"
            onChange={handleChange}
          />
          <Select
            placeholder="Rent Type"
            value={data.rentType}
            name="rentType"
            options={rentTypesOptions}
            onChange={handleChange}
          />
          <InputField
            placeholder="Rent Price"
            value={data.rentPrice}
            name="rentPrice"
            onChange={handleChange}
          />
          <InputCalendar
            placeholder="Lease Until"
            value={data.leaseUntil}
            name="leaseUntil"
            onChange={handleChange}
          />
        </SectionCard>
      </div>
  );
};

export function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl p-6 flex flex-col gap-3 [&_.card-input]:shadow-none">
      <div className="flex items-center gap-2 mb-1">
        <div className="font-semibold text-base text-[#333]">{title}</div>
        <QuestionHelpToggle />
      </div>
      {children}
    </div>
  );
}
