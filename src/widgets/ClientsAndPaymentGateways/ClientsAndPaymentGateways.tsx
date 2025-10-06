import { useState } from "react";
import { InputField } from "../../shared/components/Input/Input"
import { ButtonPlus, QuestionHelpToggle } from "../../shared/components";


export interface ClientAndPaymentGateways {
    clients: string;
    paymentGateways: string;
}

export const ClientsAndPaymentGateways = () => {

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
                        <div className="font-medium text-xl">Clients</div>
                        <QuestionHelpToggle />
                    </div>
                    <ButtonPlus />

                </div>
                <InputField
                    placeholder="Clients"
                    value={clientAndPaymentGateways.clients}
                    name="clients"
                    onChange={handleChange}
                    isGenerateButton={false}
                />
            </div>


            <div className="flex flex-col gap-3">

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="font-medium text-xl">Payment Gateways</div>
                        <QuestionHelpToggle />
                    </div>
                    <ButtonPlus />
                </div>
                <InputField
                    placeholder="Payment Gateways"
                    value={clientAndPaymentGateways.paymentGateways}
                    name="paymentGateways"
                    onChange={handleChange}
                    isGenerateButton={false}
                />
            </div>
        </div>
    )
}