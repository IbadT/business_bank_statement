import { useState } from "react";
import { InputField } from "../../shared/components/Input/Input";
import { QuestionHelpToggle } from "../../shared/components/QuestionHelpToggle/QuestionHelpToggle";
import type { BusinessBankStatementData } from "./types";



export const CompanyDetails = () => {
  const [data, setData] = useState<BusinessBankStatementData>({
    profile: "",
    companyName: "",
    state: "",
    city: "",
    address: "",
    zipCode: "",
    accountNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev: BusinessBankStatementData) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-6 max-w-2/3">
      <InputField
        placeholder="Profile"
        value={data.profile}
        name="profile"
        onChange={handleChange}
        isGenerateButton={false}
      />

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="font-medium text-xl">Company Name</div>
          <QuestionHelpToggle />
        </div>

        <InputField
          placeholder="Company Name"
          value={data.companyName}
          name="companyName"
          onChange={handleChange}
          isGenerateButton={false}
        />

        <InputField
          placeholder="State"
          value={data.state}
          name="state"
          onChange={handleChange}
          isGenerateButton={false}
        />

        <InputField
          placeholder="City"
          value={data.city}
          name="city"
          onChange={handleChange}
          isGenerateButton={false}
        />

        <InputField
          placeholder="Address"
          value={data.address}
          name="address"
          onChange={handleChange}
          isGenerateButton={false}
        />

        <InputField
          placeholder="Zip Code"
          value={data.zipCode}
          name="zipCode"
          onChange={handleChange}
          isGenerateButton={false}
        />

        <InputField
          placeholder="Account Number"
          value={data.accountNumber}
          name="accountNumber"
          onChange={handleChange} 
          isGenerateButton={true}
        />
      </div>
    </div>
  );
};
