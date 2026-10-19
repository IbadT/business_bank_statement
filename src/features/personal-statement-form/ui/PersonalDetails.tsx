import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/shared/ui/section-header";
import { HELP_TEXT_PLACEHOLDER } from "@/shared/config";
import { Select } from "@/shared/ui/select";
import { RadioOption } from "@/shared/ui/radio-option";
import { useProfileStore } from "@/entities/profile";
import { stateList } from "@/entities/location";
import { InputField } from "@/shared/ui/input";
import { defaultPersonalDetailsData, hasCarList, hasChildrenList } from "../config/defaults";
import type { HasCar, HasChildren } from "../model/types";
import { usePersonalStatementStep } from "../model/store";

const stateOptions = stateList.map((st) => ({ id: st.id, label: st.name }));

export const PersonalDetails = () => {
  const profiles = useProfileStore((s) => s.profiles);
  const profileOptions = profiles
    .filter((p) => p.type === "personal")
    .map((p) => ({ id: p.id, label: p.title }));
  const { t } = useTranslation();

  const [data, setData] = usePersonalStatementStep("personalDetails", defaultPersonalDetailsData);
  const [hasChildrenID, setHasChildrenID] = usePersonalStatementStep<number | null>("hasChildren", null);
  const [hasCarID, setHasCarID] = usePersonalStatementStep<number | null>("hasCar", null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="form-container">
      <Select
        placeholder={t("profile")}
        value={data.profile}
        name="profile"
        options={profileOptions}
        onChange={handleChange}
      />

      <div className="form-section">
        <SectionHeader title={t("personal_information")} helpText={HELP_TEXT_PLACEHOLDER} />
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

        <Select
          placeholder={t("state")}
          value={data.state}
          name="state"
          options={stateOptions}
          onChange={handleChange}
        />

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

      <div className="form-section">
        <SectionHeader title={t("do_you_own_a_car")} />
        <div className="grid grid-cols-2 gap-4">
          {hasCarList.map((item: HasCar) => (
            <RadioOption
              key={item.id}
              id={item.id}
              text={item.text}
              isSelected={hasCarID === item.id}
              onSelect={setHasCarID}
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

      <div className="form-section">
        <SectionHeader title={t("do_you_have_a_children")} />
        <div className="grid grid-cols-2 gap-4">
          {hasChildrenList.map((item: HasChildren) => (
            <RadioOption
              key={item.id}
              id={item.id}
              text={item.text}
              isSelected={hasChildrenID === item.id}
              onSelect={setHasChildrenID}
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
