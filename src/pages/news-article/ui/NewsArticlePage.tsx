import { FaImage } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { ROUTES } from "@/shared/config";
import { BackButton } from "@/shared/ui/back-button";
import { LandingFooter } from "@/widgets/landing-footer";
import { LandingHeader } from "@/widgets/landing-header";

const PARAGRAPHS_COUNT = 4;

export const NewsArticlePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <LandingHeader />

      <main className="flex flex-col gap-8 px-6 py-10 mx-auto max-w-[1000px]">
        <BackButton label={t("landing.article.back")} onClick={() => navigate(ROUTES.home)} />

        <div
          className="flex items-center justify-center w-full max-w-[1000px] aspect-[1000/573] rounded-3xl bg-gray-200 text-gray-400 text-6xl"
        >
          <FaImage />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-extrabold">{t("landing.news.cardTitle")}</h1>
          <p className="text-[var(--primary-gray-text-color)]">{t("landing.article.date")}</p>
        </div>

        <article className="flex flex-col gap-6">
          {Array.from({ length: PARAGRAPHS_COUNT }, (_, i) => (
            <section key={i} className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold whitespace-pre-line">{t("landing.article.heading")}</h2>
              <p className="leading-relaxed">{t("landing.article.paragraph")}</p>
            </section>
          ))}
        </article>
      </main>

      <LandingFooter />
    </div>
  );
};
