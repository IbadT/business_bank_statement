import { useState } from 'react';
import { useNavigate } from 'react-router';
import { IoChevronBack } from 'react-icons/io5';
import { MdDone } from 'react-icons/md';
import { cn } from "@/shared/lib/cn";
import { InputField } from "@/shared/ui/input";
import { Select } from "@/shared/ui/select";
import { SectionHeader } from "@/shared/ui/section-header";
import { stateList } from "@/entities/location";
import { Button } from "@/shared/ui/button";

const steps = [
  { id: 1, label: "Tenant's Info" },
  { id: 2, label: 'Landlord Information' },
  { id: 3, label: "Property's Information" },
  { id: 4, label: 'Agreement Information' },
  { id: 5, label: 'Review & Checkout' },
];

const stateOptions = stateList.map((s) => ({ id: s.id, label: s.name }));

interface TenantInfo {
  name: string;
  surname: string;
  state: string;
  city: string;
  address: string;
  zipCode: string;
}

export const ResidentialLeaseAgreementPage = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const [tenantData, setTenantData] = useState<TenantInfo>({
    name: '',
    surname: '',
    state: '',
    city: '',
    address: '',
    zipCode: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTenantData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen">
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-white shadow-sm">
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Back"
            onClick={() => navigate(-1)}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
          >
            <IoChevronBack size={24} className="text-[#171717]" />
          </button>
          <span className="text-[#171717] text-xl font-semibold">
            Residential Lease Agreement
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button text="Save Draft" color="none" />
          <Button text="Order Summary" color="secondary" />
          <Button
            text="Continue"
            color="primary"
            onClick={() => setActiveStep((prev) => Math.min(prev + 1, steps.length))}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto mt-6 gap-6 px-6">
        <aside className="w-full md:w-[260px] shrink-0">
          <nav className="flex flex-col gap-1 bg-white rounded-2xl p-3 shadow-sm">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={cn(
                  'flex items-center gap-3 p-3 rounded-xl text-sm cursor-pointer transition-all',
                  activeStep === step.id
                    ? 'bg-[var(--primary-yellow-color)] text-[#171717] font-semibold'
                    : step.id < activeStep
                    ? 'text-[#171717] font-medium'
                    : 'text-[#8f8f8f]'
                )}
              >
                <span className="w-6 h-6 rounded-full bg-[#f0f0f0] flex items-center justify-center text-xs font-bold shrink-0">
                  {step.id < activeStep ? <MdDone size={14} /> : step.id}
                </span>
                {step.label}
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 min-w-0">
          <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-6">
            <div className="form-container">
              <div className="form-section">
                <SectionHeader title="Profile" />
                <InputField
                  name="name"
                  placeholder="Name"
                  value={tenantData.name}
                  onChange={handleChange}
                />
                <InputField
                  name="surname"
                  placeholder="Surname"
                  value={tenantData.surname}
                  onChange={handleChange}
                />
              </div>

              <div className="form-section">
                <SectionHeader title="Tenant's Address Info" />
                <span className="text-[#8f8f8f] text-xs">
                  Optional fields; if absent, the value from Property's Address is used.
                </span>
                <Select
                  placeholder="State"
                  value={tenantData.state}
                  name="state"
                  options={stateOptions}
                  onChange={handleChange}
                />
                <InputField
                  name="city"
                  placeholder="City"
                  value={tenantData.city}
                  onChange={handleChange}
                />
                <InputField
                  name="address"
                  placeholder="Address"
                  value={tenantData.address}
                  onChange={handleChange}
                />
                <InputField
                  name="zipCode"
                  placeholder="Zip Code"
                  value={tenantData.zipCode}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
