import { useTranslation } from "react-i18next";
import { InputDropdown } from "../../shared/components/Input/InputDropdown";
import { useState } from "react";
import { profileList, stateList } from "../CompanyDetails/constants";
import type { Profile, State } from "../CompanyDetails/types";
import { QuestionHelpToggleWithText } from "../../shared/components/QuestionHelpToggle/QuestionHelpToggle";
import { InputField } from "../../shared/components/Input/Input";
import { SwitchToggleButton } from "../FinancialAndOwners";
import {
  defaultPersonalDetailsData,
  hasCarList,
  hasChildrenList,
} from "./constants";
import type { HasCar, HasChildren, PersonalDetailsData } from "./types";

export const PersonalDetails = () => {
  const { t } = useTranslation();

  const [data, setData] = useState<PersonalDetailsData>(
    defaultPersonalDetailsData
  );

  const [hasChildrenID, setHasChildrenID] = useState<number | null>(null);
  const [isShowDropdownProfile, setIsShowDropdownProfile] = useState(false);
  const [hasCarID, setHasCarID] = useState<number | null>(null);
  const [isShowDropdownState, setIsShowDropdownState] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev: PersonalDetailsData) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-6 max-w-2/3">
      <div className="relative">
        <InputDropdown
          placeholder={t("profile")}
          value={data.profile}
          name="profile"
          onChange={handleChange}
          isShowDropdown={isShowDropdownProfile}
          onClick={() => setIsShowDropdownProfile((prev) => !prev)}
        />
        {isShowDropdownProfile && (
          <div
            onClick={() => setIsShowDropdownProfile(false)}
            className="absolute top-full left-0 w-full bg-white rounded-md shadow-md z-50 border border-gray-200"
          >
            {profileList.map((item: Profile) => (
              <div
                key={item.id}
                className="p-3 hover:bg-gray-50 cursor-pointer rounded-lg transition-colors duration-200"
                onClick={() => {
                  setIsShowDropdownProfile(false);
                  setData({
                    ...data,
                    profile: item.name + " " + item.lastName,
                  });
                }}
              >
                {item.name} {item.lastName}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="font-medium text-xl">{t("personal_information")}</div>
          <QuestionHelpToggleWithText
            text={
              "TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT"
            }
          />
        </div>
        <InputField
          placeholder={t("full_name")}
          value={data.fullName}
          name="fullName"
          onChange={handleChange}
        />
        <InputField
          placeholder={t("number_of_children")}
          value={data.numberOfChildren}
          name="numberOfChildren"
          onChange={handleChange}
        />

        <div className="relative">
          <InputDropdown
            placeholder={t("state")}
            value={data.state}
            name="state"
            onChange={handleChange}
            isShowDropdown={isShowDropdownState}
            onClick={() => setIsShowDropdownState((prev) => !prev)}
          />
          {isShowDropdownState && (
            <div
              onClick={() => setIsShowDropdownState(false)}
              className="absolute top-full left-0 w-full bg-white rounded-md shadow-md z-50 border border-gray-200"
            >
              {stateList.map((item: State) => (
                <div
                  key={item.id}
                  className="p-3 hover:bg-gray-50 cursor-pointer rounded-lg transition-colors duration-200"
                  onClick={() => {
                    setIsShowDropdownState(false);
                    setData({ ...data, state: item.name });
                  }}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>

        <InputField
          placeholder={t("city")}
          value={data.city}
          name="city"
          onChange={handleChange}
        />
        <InputField
          placeholder={t("address")}
          value={data.address}
          name="address"
          onChange={handleChange}
        />
        <InputField
          placeholder={t("zip_code")}
          value={data.zipCode}
          name="zipCode"
          onChange={handleChange}
        />
        <InputField
          placeholder={t("account_number")}
          value={data.accountNumber}
          name="accountNumber"
          isGenerateButton
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="font-medium text-xl">{t("do_you_own_a_car")}</div>
        </div>
        <div className="grid grid-cols-2">
          {hasCarList.map((item: HasCar) => (
            <SwitchToggleButton
              key={item.id}
              id={item.id}
              text={item.text}
              isSelected={hasCarID === item.id}
              setBusinessModelID={setHasCarID}
            />
          ))}
        </div>
        <InputField
          placeholder={t("number_of_car")}
          value={data.numberOfCar || ""}
          name="numberOfCar"
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="font-medium text-xl">
            {t("do_you_have_a_children")}
          </div>
        </div>
        <div className="grid grid-cols-2">
          {hasChildrenList.map((item: HasChildren) => (
            <SwitchToggleButton
              key={item.id}
              id={item.id}
              text={item.text}
              isSelected={hasChildrenID === item.id}
              setBusinessModelID={setHasChildrenID}
            />
          ))}
        </div>
      </div>
      <InputField
        placeholder={t("number_of_children")}
        value={data.numberOfChildren2 || ""}
        name="numberOfChildren2"
        onChange={handleChange}
      />
    </div>
  );
};
