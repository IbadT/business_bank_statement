import { FaPlus, FaUser } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router";
import { useSessionStore } from "@/entities/session";
import { LanguageSwitch } from "@/features/language-switch";
import { ROUTES } from "@/shared/config";
import { Button } from "@/shared/ui/button";

const NAV_ITEMS = [
  { key: "home", href: ROUTES.home },
  { key: "discussion", href: ROUTES.discussion },
  { key: "faq", href: ROUTES.faq },
] as const;

const AUTH_NAV_ITEMS = [{ key: "store", href: "#store" }] as const;

const NavLink = ({ href, label }: { href: string; label: string }) => {
  const className = "font-medium text-[var(--primary-black-text-color)] hover:opacity-70";
  return href.startsWith("/") ? (
    <Link to={href} className={className}>
      {label}
    </Link>
  ) : (
    <a href={href} className={className}>
      {label}
    </a>
  );
};

export const LandingHeader = () => {
  const { t } = useTranslation();
  const isAuthenticated = useSessionStore((state) => state.isAuthenticated);
  const balance = useSessionStore((state) => state.balance);
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white">
      <div className="flex-1 text-2xl font-extrabold">LOGO</div>

      <nav className="flex items-center gap-8">
        {(isAuthenticated ? [...NAV_ITEMS, ...AUTH_NAV_ITEMS] : NAV_ITEMS).map(({ key, href }) => (
          <NavLink key={key} href={href} label={t(`landing.nav.${key}`)} />
        ))}
      </nav>

      <div className="flex-1 flex items-center justify-end gap-4">
        <LanguageSwitch />
        {isAuthenticated ? (
          <>
            <button
              type="button"
              aria-label={t("landing.topUp")}
              className="flex items-center justify-center size-10 rounded-full bg-[var(--primary-yellow-color)] cursor-pointer hover:opacity-90"
            >
              <FaPlus />
            </button>
            <div className="flex items-center justify-center w-[74px] h-10 px-3.5 py-2.5 rounded-2xl border-[1.56px] border-[#8F8F8F] font-bold">
              ${balance.toLocaleString("en-US")}
            </div>
            <button
              type="button"
              aria-label={t("landing.profile")}
              className="flex items-center justify-center size-10 rounded-full bg-[var(--primary-yellow-color)] text-white cursor-pointer hover:opacity-90"
            >
              <FaUser />
            </button>
          </>
        ) : (
          <Button color="primary" text={t("landing.signIn")} onClick={() => navigate(ROUTES.signIn)} />
        )}
      </div>
    </header>
  );
};
