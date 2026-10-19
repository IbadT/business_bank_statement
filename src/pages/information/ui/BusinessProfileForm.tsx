import { InputField } from "@/shared/ui/input";
import { Select } from "@/shared/ui/select";
import { stateList } from "@/entities/location";
import type { BusinessFormData } from "../model/defaults";
import { SectionCard } from "./PersonalProfileForm";



const stateOptions = stateList.map((s) => ({ id: s.id, label: s.name }));

interface Props {
  data: BusinessFormData;
  onChange: (data: BusinessFormData) => void;
}

export const BusinessProfileForm = ({ data, onChange }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-[640px] mx-auto">
      <SectionCard title="Company info">
        <InputField placeholder="Company name" value={data.companyName} name="companyName" onChange={handleChange} />
        <Select placeholder="State" value={data.state} name="state" options={stateOptions} onChange={handleChange} />
        <InputField placeholder="City" value={data.city} name="city" onChange={handleChange} />
        <InputField placeholder="Address" value={data.address} name="address" onChange={handleChange} />
        <InputField placeholder="Zip code" value={data.zipCode} name="zipCode" onChange={handleChange} />
        <InputField
          placeholder="Account number"
          value={data.accountNumber}
          name="accountNumber"
          onChange={handleChange}
          isGenerateButton
        />
      </SectionCard>
    </div>
  );
};
