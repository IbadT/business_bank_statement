import { useState } from "react";
import { InputField } from "../../shared/components/Input/Input"
import { ButtonPlus, QuestionHelpToggleWithText } from "../../shared/components";
import { useTranslation } from "react-i18next";


export interface ClientAndPaymentGateways {
    clients: string;
    paymentGateways: string;
}

export const ClientsAndPaymentGateways = () => {
    const { t } = useTranslation();
    const [clientAndPaymentGateways, setClientAndPaymentGateways] = useState<ClientAndPaymentGateways>({
        clients: "",
        paymentGateways: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setClientAndPaymentGateways((prev: ClientAndPaymentGateways) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="flex flex-col gap-6 max-w-2/3">
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="font-medium text-xl">{t('clients')}</div>
                        {/* <QuestionHelpToggle /> */}
                        <QuestionHelpToggleWithText text={"TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT"} />
                    </div>
                    <ButtonPlus />

                </div>
                <InputField
                    placeholder={t('clients')}
                    value={clientAndPaymentGateways.clients}
                    name="clients"
                    onChange={handleChange}
                    isGenerateButton={false}
                />
            </div>


            <div className="flex flex-col gap-3">

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="font-medium text-xl">{t('payment_gateways')}</div>
                        {/* <QuestionHelpToggle /> */}
                        <QuestionHelpToggleWithText text={"TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT"} />
                    </div>
                    <ButtonPlus />
                </div>
                <InputField
                    placeholder={t('payment_gateways')}
                    value={clientAndPaymentGateways.paymentGateways}
                    name="paymentGateways"
                    onChange={handleChange}
                    isGenerateButton={false}
                />
            </div>
        </div>
    )
}