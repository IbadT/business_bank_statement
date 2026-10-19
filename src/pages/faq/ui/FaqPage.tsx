import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LandingFooter } from "@/widgets/landing-footer";
import { LandingHeader } from "@/widgets/landing-header";
import { FAQ_ITEMS } from "../model/content";
import { FaqItem } from "./FaqItem";

export const FaqPage = () => {
  const { t } = useTranslation();
  const [openKey, setOpenKey] = useState<string | null>(FAQ_ITEMS[0]);

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F8F8]">
      <LandingHeader />

      <main className="flex flex-col items-center flex-1 gap-10 px-6 py-16 mx-auto w-full max-w-[860px]">
        <h1 className="text-4xl font-extrabold text-center">{t("faq.title")}</h1>
        <div className="flex flex-col w-full gap-4">
          {FAQ_ITEMS.map((key) => (
            <FaqItem
              key={key}
              question={t(`faq.items.${key}.question`)}
              answer={t(`faq.items.${key}.answer`)}
              isOpen={openKey === key}
              onToggle={() => setOpenKey(openKey === key ? null : key)}
            />
          ))}
        </div>
      </main>

      <LandingFooter />
    </div>
  );
};
