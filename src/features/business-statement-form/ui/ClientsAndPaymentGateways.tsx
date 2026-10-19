import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/shared/ui/section-header";
import { HELP_TEXT_PLACEHOLDER } from "@/shared/config";
import { InputField } from "@/shared/ui/input";
import { ButtonPlus } from "@/shared/ui/button";
import type { ClientAndPaymentGateways } from "../model/types";
import { useBusinessStatementStep } from "../model/store";

const initialData: ClientAndPaymentGateways = { clients: "", paymentGateways: "" };

export const ClientsAndPaymentGateways = () => {
  const { t } = useTranslation();
  const [data, setData] = useBusinessStatementStep("clientsAndGateways", initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="form-container">
      <div className="form-section">
        <SectionHeader title={t("clients")} helpText={HELP_TEXT_PLACEHOLDER} action={<ButtonPlus />} />
        <InputField placeholder={t("clients")} value={data.clients} name="clients" onChange={handleChange} />
      </div>

      <div className="form-section">
        <SectionHeader title={t("payment_gateways")} helpText={HELP_TEXT_PLACEHOLDER} action={<ButtonPlus />} />
        <InputField
          placeholder={t("payment_gateways")}
          value={data.paymentGateways}
          name="paymentGateways"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
