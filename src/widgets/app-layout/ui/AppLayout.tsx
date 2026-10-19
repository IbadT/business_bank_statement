import { Outlet, Link, useLocation } from "react-router";
import { CiSettings } from "react-icons/ci";
import { TbHelpHexagon } from "react-icons/tb";
import { IoWalletOutline } from "react-icons/io5";
import { PiFilePdf } from "react-icons/pi";
import { PiShareNetwork } from "react-icons/pi";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { AppLayoutHeader } from "./AppLayoutHeader";
import { AppLayoutBalance } from "./AppLayoutBalance";
import { useTranslation } from "react-i18next";
import { cn } from "@/shared/lib/cn";
import { ROUTES } from "@/shared/config";
import { PageTransition } from "@/shared/ui/page-transition";

export const AppLayout = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const navigation = [
    { path: ROUTES.pdfs, label: t("pdf"), icon: <PiFilePdf size={18} /> },
    {
      path: ROUTES.wallet,
      label: t("wallet"),
      icon: <IoWalletOutline size={18} />,
    },
    {
      path: ROUTES.referralProgram,
      label: t("referral"),
      icon: <PiShareNetwork size={18} />,
    },
    { path: ROUTES.help, label: t("help"), icon: <TbHelpHexagon size={18} /> },
    {
      path: ROUTES.notifications,
      label: t("notifications"),
      icon: <IoNotificationsOutline size={18} />,
    },
    { path: ROUTES.settings, label: t("settings"), icon: <CiSettings size={20} /> },
  ];

  return (
    <div className="flex h-screen text-(--primary-black-text-color) font-medium text-sm">
      <aside
        className="bg-[#F8F8F8] flex flex-col justify-between gap-6 shrink-0 overflow-y-auto"
        style={{
          width: 280,
          padding: "24px 16px 24px 24px",
        }}
      >
        <div className="flex flex-col gap-3">
          <AppLayoutHeader />
          <AppLayoutBalance />
          <nav className="flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "p-3 rounded-xl text-[#171717] no-underline transition-all duration-200 flex items-center gap-3 hover:bg-[#e9ecef]",
                  (location.pathname === item.path ||
                    location.pathname.startsWith(item.path + "/")) &&
                    "bg-[var(--primary-yellow-color)] hover:bg-[var(--primary-yellow-color)]",
                )}
              >
                {item.icon} {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-5">
          <div
            className="bg-[var(--primary-yellow-color)] p-4 flex flex-col gap-2.5"
            style={{ borderRadius: "12px 16px" }}
          >
            {/* <div className="flex flex-col items-center gap-1">
              <PiShareNetwork size={20} className="text-[#000000]" />
            </div> */}
            <div className="text-base font-semibold text-[#000000] max-w-[90%] leading-[130%]">
              {t("needToGenerateBarcodes")}
            </div>
            <button
              type="button"
              className="h-8 w-fit px-2.5 rounded-xl bg-white flex items-center justify-center whitespace-nowrap cursor-pointer hover:opacity-90 transition-opacity"
            >
              Yes, I do
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <button className="flex items-center justify-center gap-2 rounded-xl px-4 py-[11px] bg-white font-bold text-sm cursor-pointer hover:opacity-90 transition-opacity w-full shadow-sm text-center">
              {/* <IoPaperPlaneOutline size={18} className="text-[#1be7be]" /> */}
              {t("editPdfFile")}
            </button>

            <Link
              to={ROUTES.businessBankStatement}
              className="flex items-center justify-center gap-2 rounded-xl px-4 py-[11px] bg-[var(--primary-yellow-color)] font-bold text-sm cursor-pointer hover:opacity-90 transition-opacity w-full"
            >
              <IoPaperPlaneOutline size={18} className="text-white" />
              {t("generatePdf")}
            </Link>
          </div>
        </div>
      </aside>
      <main
        className="flex-1 min-w-0 h-screen p-5 overflow-y-auto"
        style={{ backgroundColor: "rgba(248, 248, 248, 1)" }}
      >
        <PageTransition key={location.pathname}>
          <Outlet />
        </PageTransition>
      </main>
    </div>
  );
};

