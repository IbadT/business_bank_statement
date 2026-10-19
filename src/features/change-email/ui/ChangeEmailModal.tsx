import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";
import { useModalClose } from "@/shared/ui/modal";
import { InputField } from "@/shared/ui/input";

type EmailStep = "email" | "code" | "new-email" | "verify";

const ModalInput = (props: {
  placeholder: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div
    className="rounded-xl"
    style={{ boxShadow: "0px -1px 30px 0px rgba(198,198,198,0.25)" }}
  >
    <InputField {...props} />
  </div>
);

export const ChangeEmailModal = () => {
  const close = useModalClose();
  const [step, setStep] = useState<EmailStep>("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [verifyCode, setVerifyCode] = useState("");

  const maskEmail = (e: string) => {
    if (!e) return "";
    const [name, domain] = e.split("@");
    if (!domain) return e;
    const maskedName =
      name.length > 2 ? name.slice(0, 2) + "***" : name[0] + "***";
    return `${maskedName}@${domain}`;
  };

  const handleSend = () => {
    setStep("code");
  };

  const handleContinue = () => {
    if (step === "code") {
      setStep("new-email");
    } else if (step === "new-email") {
      setStep("verify");
    }
  };

  const handleChangeEmail = () => {
    close();
  };

  const handleBack = () => {
    if (step === "code") {
      setStep("email");
    } else if (step === "new-email") {
      setStep("code");
    } else if (step === "verify") {
      setStep("new-email");
    }
  };

  const showBack = step !== "email";

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCode(e.target.value);
  const handleNewEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewEmail(e.target.value);
  const handleVerifyCodeChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setVerifyCode(e.target.value);

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {showBack && (
            <button onClick={handleBack} className="cursor-pointer">
              <FaArrowLeft className="text-gray-600" />
            </button>
          )}
          <div className="font-medium text-2xl">Change Email</div>
        </div>
        <button
          onClick={close}
          className="w-[31.88px] h-[31.88px] bg-[#E8E8E8] rounded-full flex items-center justify-center cursor-pointer"
        >
          <IoClose size={16} />
        </button>
      </div>

      {step === "email" && (
        <ModalInput
          placeholder="Email"
          value={email}
          name="email"
          onChange={handleEmailChange}
        />
      )}

      {step === "code" && (
        <div className="flex flex-col gap-5">
          <div className="text-center text-[#A6A6A6] text-sm leading-relaxed">
            Please enter the verification code we sent
            <br />
            to your email{" "}
            <span className="text-[#736728]">{maskEmail(email)}</span>
          </div>
          <ModalInput
            placeholder="Code"
            value={code}
            name="code"
            onChange={handleCodeChange}
          />
        </div>
      )}

      {step === "new-email" && (
        <ModalInput
          placeholder="Enter new email"
          value={newEmail}
          name="newEmail"
          onChange={handleNewEmailChange}
        />
      )}

      {step === "verify" && (
        <div className="flex flex-col gap-5">
          <div className="text-center text-[#A6A6A6] text-sm leading-relaxed">
            Please enter the verification code we sent
            <br />
            to your email{" "}
            <span className="text-[#736728]">{maskEmail(email)}</span>
          </div>
          <ModalInput
            placeholder="Code"
            value={verifyCode}
            name="verifyCode"
            onChange={handleVerifyCodeChange}
          />
        </div>
      )}

      <div className="flex flex-col gap-3">
        {step === "email" && (
          <button
            onClick={handleSend}
            className="w-full py-3 rounded-xl bg-[var(--primary-yellow-color)] font-bold cursor-pointer text-sm hover:opacity-90 transition-opacity"
          >
            Send
          </button>
        )}
        {(step === "code" || step === "new-email") && (
          <button
            onClick={handleContinue}
            className="w-full py-3 rounded-xl bg-[var(--primary-yellow-color)] font-bold cursor-pointer text-sm hover:opacity-90 transition-opacity"
          >
            Continue
          </button>
        )}
        {step === "verify" && (
          <button
            onClick={handleChangeEmail}
            className="w-full py-3 rounded-xl bg-[var(--primary-yellow-color)] font-bold cursor-pointer text-sm hover:opacity-90 transition-opacity"
          >
            Change email
          </button>
        )}
      </div>
    </>
  );
};
