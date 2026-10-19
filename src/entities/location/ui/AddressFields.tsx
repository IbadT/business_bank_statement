import { useTranslation } from "react-i18next";
import { InputField } from "@/shared/ui/input";
import { Select } from "@/shared/ui/select";
import { stateList } from "../config/states";
import type { AddressValue } from "../model/types";


interface AddressFieldsProps {
  value: AddressValue;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Ключ перевода подписи поля города (`city` или `town`) */
  cityLabelKey?: "city" | "town";
}

const stateOptions = stateList.map((st) => ({ id: st.id, label: st.name }));

export const AddressFields = ({ value, onChange, cityLabelKey = "city" }: AddressFieldsProps) => {
  const { t } = useTranslation();
  return (
    <>
      <Select placeholder={t("state")} value={value.state} name="state" options={stateOptions} onChange={onChange} />
      <InputField
        placeholder={t("street_address")}
        value={value.streetAddress}
        name="streetAddress"
        onChange={onChange}
      />
      <InputField placeholder={t(cityLabelKey)} value={value.city} name="city" onChange={onChange} />
      <InputField placeholder={t("zip_code")} value={value.zipCode} name="zipCode" onChange={onChange} />
    </>
  );
};
