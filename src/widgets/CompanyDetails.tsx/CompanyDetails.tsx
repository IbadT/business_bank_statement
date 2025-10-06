import { useState } from "react";
import { QuestionHelpToggleWithText } from "../../shared/components/QuestionHelpToggle/QuestionHelpToggle";
import type { BusinessBankStatementData, Profile, State } from "./types";
import { useTranslation } from 'react-i18next';
import { InputDropdown, InputField } from "../../shared/components/Input";
import { profileList, stateList } from "./constants";










export const CompanyDetails = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<BusinessBankStatementData>({
    profile: "",
    companyName: "",
    state: "",
    city: "",
    address: "",
    zipCode: "",
    accountNumber: "",
  });

  const [isShowDropdownProfile, setIsShowDropdownProfile] = useState(false);
  const [isShowDropdownState, setIsShowDropdownState] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev: BusinessBankStatementData) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-6 max-w-2/3">
      <div className="relative">
        <InputDropdown
          placeholder={t('profile')}
          value={data.profile}
          name="profile"
          onChange={handleChange}
          isShowDropdown={isShowDropdownProfile}
          onClick={() => setIsShowDropdownProfile(prev => !prev)}
        />
        {isShowDropdownProfile && (
          <div onClick={() => setIsShowDropdownProfile(false)} className="absolute top-full left-0 w-full bg-white rounded-md shadow-md z-50 border border-gray-200">
            {profileList.map((item: Profile) => (
              <div key={item.id} className="p-3 hover:bg-gray-50 cursor-pointer rounded-lg transition-colors duration-200" onClick={() => { setIsShowDropdownProfile(false); setData({ ...data, profile: item.name + ' ' + item.lastName }); }}>
                {item.name} {item.lastName}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="font-medium text-xl">{t('company_name')}</div>
          {/* <QuestionHelpToggle /> */}
          <QuestionHelpToggleWithText text={"TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT"} />
        </div>

        <InputField
          placeholder={t('company_name')}
          value={data.companyName}
          name="companyName"
          onChange={handleChange}
        />

        <div className="relative">
          <InputDropdown
            placeholder={t('state')}
            value={data.state}
            name="state"
            onChange={handleChange}
            isShowDropdown={isShowDropdownState}
            onClick={() => setIsShowDropdownState(prev => !prev)}
          />
          {isShowDropdownState && (
            <div onClick={() => setIsShowDropdownState(false)} className="absolute top-full left-0 w-full bg-white rounded-md shadow-md z-50 border border-gray-200">
              {stateList.map((item: State) => (
                <div key={item.id} className="p-3 hover:bg-gray-50 cursor-pointer rounded-lg transition-colors duration-200" onClick={() => { setIsShowDropdownState(false); setData({ ...data, state: item.name }); }}>
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>

        <InputField
          placeholder={t('city')}
          value={data.city}
          name="city"
          onChange={handleChange}
        />

        <InputField
          placeholder={t('address')}
          value={data.address}
          name="address"
          onChange={handleChange}
        />

        <InputField
          placeholder={t('zip_code')}
          value={data.zipCode}
          name="zipCode"
          onChange={handleChange}
        />

        <InputField
          placeholder={t('account_number')}
          value={data.accountNumber}
          name="accountNumber"
          onChange={handleChange} 
          isGenerateButton={true}
        />
      </div>
    </div>
  );
};
