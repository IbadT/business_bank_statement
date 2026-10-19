import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";
import { useModalClose } from "@/shared/ui/modal";
import { InputField } from "@/shared/ui/input";

type PasswordStep = "change" | "forgot" | "code";

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

export const ChangePasswordModal = () => {
  const close = useModalClose();
  const [step, setStep] = useState<PasswordStep>("change");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const handleSend = () => {
    setStep("code");
  };

  const maskEmail = (e: string) => {
    if (!e) return "";
    const [name, domain] = e.split("@");
    if (!domain) return e;
    const maskedName =
      name.length > 2 ? name.slice(0, 2) + "***" : name[0] + "***";
    return `${maskedName}@${domain}`;
  };

  const handleCurrentPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCurrentPassword(e.target.value);
  const handleNewPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewPassword(e.target.value);
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handleCode = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCode(e.target.value);

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {step !== "change" && (
            <button
              onClick={() => setStep(step === "code" ? "forgot" : "change")}
              className="cursor-pointer"
            >
              <FaArrowLeft className="text-gray-600" />
            </button>
          )}
          <div className="font-medium text-2xl">
            {step === "change" ? "Change Password" : "Forgot password"}
          </div>
        </div>
        <button
          onClick={close}
          className="w-[31.88px] h-[31.88px] bg-[#E8E8E8] rounded-full flex items-center justify-center cursor-pointer"
        >
          <IoClose size={16} />
        </button>
      </div>

      {step === "change" && (
        <div className="flex flex-col gap-5">
          <ModalInput
            placeholder="Current Password"
            value={currentPassword}
            name="currentPassword"
            onChange={handleCurrentPassword}
          />
          <ModalInput
            placeholder="New Password"
            value={newPassword}
            name="newPassword"
            onChange={handleNewPassword}
          />
        </div>
      )}

      {step === "forgot" && (
        <div className="flex flex-col gap-5">
          <div className="text-center text-[#A6A6A6] text-sm leading-relaxed">
            Enter your email, and we'll send a password reset code
          </div>
          <ModalInput
            placeholder="Email"
            value={email}
            name="email"
            onChange={handleEmail}
          />
        </div>
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
            onChange={handleCode}
          />
        </div>
      )}

      <div className="flex flex-col gap-3">
        {step === "change" && (
          <>
            <button className="w-full py-3 rounded-xl bg-[var(--primary-yellow-color)] font-semibold cursor-pointer text-base hover:opacity-90 transition-opacity">
              Change
            </button>
            <button
              onClick={() => setStep("forgot")}
              className="w-full py-3 rounded-xl bg-white cursor-pointer text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Forgot password?
            </button>
          </>
        )}
        {step === "forgot" && (
          <button
            onClick={handleSend}
            className="w-full py-3 rounded-xl bg-[var(--primary-yellow-color)] font-bold cursor-pointer text-sm hover:opacity-90 transition-opacity"
          >
            Send
          </button>
        )}
        {step === "code" && (
          <button
            onClick={close}
            className="w-full py-3 rounded-xl bg-[var(--primary-yellow-color)] font-bold cursor-pointer text-sm hover:opacity-90 transition-opacity"
          >
            Reset
          </button>
        )}
      </div>
    </>
  );
};
