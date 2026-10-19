import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router";
import { useSessionStore } from "@/entities/session";
import { ROUTES } from "@/shared/config";
import { Button } from "@/shared/ui/button";

const MAIN_SECTIONS = ["home", "pdfs", "faq", "discussion", "eecp"] as const;
const RESOURCES = ["help", "privacy", "terms"] as const;

const SOCIALS = [
  { key: "facebook", icon: FaFacebookF, href: "#" },
  { key: "instagram", icon: FaInstagram, href: "#" },
  { key: "x", icon: FaXTwitter, href: "#" },
] as const;

const LinkColumn = ({ title, items, prefix }: { title: string; items: readonly string[]; prefix: string }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-sm text-[var(--primary-gray-text-color)]">{title}</h4>
      <ul className="flex flex-col gap-2">
        {items.map((key) => (
          <li key={key}>
            {key === "home" || key === "discussion" || key === "faq" ? (
              <Link to={ROUTES[key]} className="font-medium text-[var(--primary-black-text-color)] hover:opacity-70">
                {t(`${prefix}.${key}`)}
              </Link>
            ) : (
              <a href={`#${key}`} className="font-medium text-[var(--primary-black-text-color)] hover:opacity-70">
                {t(`${prefix}.${key}`)}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const LandingFooter = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isAuthenticated = useSessionStore((state) => state.isAuthenticated);

  return (
    <footer className="grid gap-10 px-6 py-10 bg-white md:grid-cols-[1fr_auto_1fr]">
      <div className="flex flex-col justify-between gap-6">
        <div className="text-2xl font-extrabold">LOGO</div>
        <div className="flex items-center gap-3">
          {SOCIALS.map(({ key, icon: Icon, href }) => (
            <a
              key={key}
              href={href}
              aria-label={t(`landing.footer.socials.${key}`)}
              className="flex items-center justify-center size-10 rounded-full border border-black hover:bg-gray-100"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex gap-16">
          <LinkColumn title={t("landing.footer.mainSections")} items={MAIN_SECTIONS} prefix="landing.footer.main" />
          <LinkColumn title={t("landing.footer.resources")} items={RESOURCES} prefix="landing.footer.resourceLinks" />
        </div>
        <div className="flex flex-col gap-1 pt-6 border-t border-gray-200">
          <a href="tel:+74113905111" className="font-medium">+7 (411) 390-51-11</a>
          <a href="mailto:support@barcodeai.com" className="text-[var(--primary-gray-text-color)]">support@barcodeai.com</a>
        </div>
      </div>

      <div className="flex flex-col items-start justify-between gap-6 md:items-end">
        {isAuthenticated ? (
          <div />
        ) : (
          <Button color="primary" text={t("landing.signIn")} onClick={() => navigate(ROUTES.signIn)} />
        )}
        <div className="text-sm text-[var(--primary-gray-text-color)] md:text-right">
          <p>© 2025 Barcode AI</p>
          <p>{t("landing.footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};
