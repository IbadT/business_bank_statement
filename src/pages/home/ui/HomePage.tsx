import { FaGavel, FaHeart, FaPlay } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui/button";
import { LandingFooter } from "@/widgets/landing-footer";
import { LandingHeader } from "@/widgets/landing-header";
import { COMPLIANCE_ITEMS, TEMPLATE_CATEGORIES } from "../model/content";
import { FeatureCard } from "./FeatureCard";
import { WhatsNew } from "./WhatsNew";

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div id="home" className="min-h-screen bg-[#F8F8F8]">
      <LandingHeader />

      <main className="flex flex-col items-center gap-16 px-6 py-16 mx-auto max-w-[1368px]">
        <section className="flex flex-col items-center gap-6 text-center">
          <h1 className="max-w-3xl text-5xl font-extrabold">{t("landing.hero.title")}</h1>
          <p className="max-w-2xl text-lg text-[var(--primary-gray-text-color)]">{t("landing.hero.description")}</p>
          <div className="flex items-center gap-4">
            <Button color="primary" text={t("landing.hero.getStarted")} className="px-6 py-3" />
            <Button color="white" text={t("landing.hero.seeTemplates")} className="px-6 py-3" />
          </div>
        </section>

        <div className="flex items-center justify-center w-full max-w-[1368px] aspect-[1368/679] rounded-3xl bg-white">
          <button
            type="button"
            aria-label={t("landing.video.play")}
            className="flex items-center justify-center size-20 rounded-full bg-[var(--primary-yellow-color)] text-2xl cursor-pointer hover:opacity-90"
          >
            <FaPlay className="ml-1" />
          </button>
        </div>

        <section className="flex flex-col items-center gap-10 w-full">
          <h2 className="text-3xl font-extrabold text-center">{t("landing.compliance.title")}</h2>
          <div className="grid w-full gap-8 md:grid-cols-3">
            {COMPLIANCE_ITEMS.map((key) => (
              <FeatureCard
                key={key}
                icon={<FaGavel />}
                title={t(`landing.compliance.items.${key}.title`)}
                description={t(`landing.compliance.items.${key}.description`)}
              />
            ))}
          </div>
        </section>

        <section className="flex flex-col items-center gap-10 w-full">
          <h2 className="text-3xl font-extrabold text-center">{t("landing.categories.title")}</h2>
          <div className="grid w-full gap-6 md:grid-cols-3">
            {TEMPLATE_CATEGORIES.map((key) => (
              <FeatureCard
                key={key}
                bordered
                icon={<FaHeart />}
                title={t(`landing.categories.items.${key}.title`)}
                description={t(`landing.categories.items.${key}.description`)}
              />
            ))}
          </div>
        </section>

        <WhatsNew />
      </main>

      <LandingFooter />
    </div>
  );
};
