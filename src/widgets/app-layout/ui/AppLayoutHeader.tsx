import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { ROUTES } from "@/shared/config";
import { LanguageSwitch } from "@/features/language-switch";

export const AppLayoutHeader = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="flex justify-between items-center py-3 gap-2 relative overflow-visible">
      <div className="flex items-center justify-between gap-2 w-full">
        {/* <img src="/bank_logo.webp" alt="logo" className="h-8 w-auto" /> */}
        <div className="font-extrabold text-2xl shrink-0">LOGO</div>
        <div
          style={{ color: "var(--primary-yellow-text-color-yellow)" }}
          className="cursor-pointer relative whitespace-nowrap text-sm after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[var(--primary-yellow-text-color-yellow)] after:transition-all after:duration-300 after:w-0 hover:after:w-full"
          onClick={() => navigate(ROUTES.home)}
        >
          {t("toHome")}
        </div>
      </div>

      <LanguageSwitch />
    </div>
  );
};
