import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoPaperPlane } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { openModal } from "@/shared/ui/modal";
import { InputField } from "@/shared/ui/input";
import { ChangePasswordModal } from "@/features/change-password";
import { ChangeEmailModal } from "@/features/change-email";
import { ROUTES } from "@/shared/config";

export const SettingsPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    telegram: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const openPasswordModal = () => {
    openModal({ children: <ChangePasswordModal /> });
  };

  const openEmailModal = () => {
    openModal({ children: <ChangeEmailModal /> });
  };

  return (
    <div className="min-h-[calc(100vh-40px)] flex flex-col gap-6">
      <h1 className="font-bold text-3xl">{t("settings")}</h1>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-[524px] flex flex-col px-4 gap-12">
          <div className="flex flex-col gap-6">
            <div
              className="py-4 flex items-center justify-between cursor-pointer group"
              onClick={() => navigate(ROUTES.information)}
            >
              <div className="flex flex-col gap-1">
                <div className="font-medium text-base">
                  Saved Informations (Profiles)
                </div>
                <div className="text-[#8F8F8F] font-semibold text-sm">
                  You can save data for each profile and then auto-fill the
                  required information.
                </div>
              </div>
              <FaArrowRight className="text-black shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
            </div>

            <div className="flex flex-col gap-5">
              <InputField
                className="bg-[#F8F8F8]"
                placeholder="Placeholder"
                value={formData.fullName}
                name="fullName"
                onChange={handleChange}
                rightLabel="Full Name"
              />

              <InputField
                className="bg-[#F8F8F8]"
                placeholder="youremail@gmail.com"
                value={formData.email}
                name="email"
                onChange={handleChange}
                rightButton={{ text: "Change", onClick: openEmailModal }}
              />

              <InputField
                className="bg-[#F8F8F8]"
                placeholder="********"
                value={"*".repeat(formData.password.length)}
                name="password"
                onChange={handleChange}
                rightButton={{ text: "Change", onClick: openPasswordModal }}
              />

              <InputField
                className="bg-[#F8F8F8]"
                placeholder="Telegram link"
                value={formData.telegram}
                name="telegram"
                onChange={handleChange}
                leftIcon={
                  <IoPaperPlane className="text-[var(--primary-black-text-color)] text-sm" />
                }
              />
            </div>
          </div>

          <button
            type="button"
            className="w-full py-3 rounded-xl bg-[var(--primary-yellow-color)] font-semibold cursor-pointer text-base hover:opacity-90 transition-opacity"
            style={{ color: "#736728" }}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};
