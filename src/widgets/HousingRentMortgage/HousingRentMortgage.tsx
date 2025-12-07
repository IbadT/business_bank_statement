import { useState } from "react";
import { useTranslation } from "react-i18next";
import { InputDropdown, InputField } from "../../shared/components";
import type { HousingRentMortgageState, SelectRentOrMortgage } from "./types";
import {
  defaultHousingRentMortgageState,
  selectRentOrMortgageList,
} from "./constants";

export const HousingRentMortgage = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<HousingRentMortgageState>(
    defaultHousingRentMortgageState
  );
  const [isShowDropdown, setIsShowDropdown] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev: HousingRentMortgageState) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-6 max-w-2/3">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="font-medium text-xl">{t("housind")}</div>
        </div>

        <div className="relative">
          <InputDropdown
            placeholder={t("select_rent_or_mortgage")}
            value={data.selectRentOrMortgage}
            name="selectRentOrMortgage"
            onChange={handleChange}
            isShowDropdown={isShowDropdown}
            onClick={() => setIsShowDropdown((prev) => !prev)}
          />
          {isShowDropdown && (
            <div
              onClick={() => setIsShowDropdown(false)}
              className="absolute top-full left-0 w-full bg-white rounded-md shadow-md z-50 border border-gray-200"
            >
              {selectRentOrMortgageList.map((item: SelectRentOrMortgage) => (
                <div
                  key={item.id}
                  className="p-3 hover:bg-gray-50 cursor-pointer rounded-lg transition-colors duration-200"
                  onClick={() => {
                    setIsShowDropdown(false);
                    setData({ ...data, selectRentOrMortgage: item.name });
                  }}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>

        <InputField
          placeholder={t("rent_mortgage_amount")}
          value={data.rent_mortgage_amount}
          name="rent_mortgage_amount"
          onChange={handleChange}
        />

        <InputField
          placeholder={t("mortgage_bank_name")}
          value={data.mortgage_bank_name}
          name="mortgage_bank_name"
          onChange={handleChange}
        />

        <InputField
          placeholder={t("mortgage_bank_name2")}
          value={data.mortgage_bank_name2}
          name="mortgage_bank_name2"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
