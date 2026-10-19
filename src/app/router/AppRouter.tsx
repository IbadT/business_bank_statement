import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import { ROUTES } from "@/shared/config";
import { PageTransition } from "@/shared/ui/page-transition";
import { AppLayout } from "@/widgets/app-layout";

const lazyPage = <K extends string>(loader: () => Promise<Record<K, React.ComponentType>>, name: K) =>
  lazy(async () => ({ default: (await loader())[name] }));

const HomePage = lazyPage(() => import("@/pages/home"), "HomePage");
const DiscussionPage = lazyPage(() => import("@/pages/discussion"), "DiscussionPage");
const FaqPage = lazyPage(() => import("@/pages/faq"), "FaqPage");
const SignInPage = lazyPage(() => import("@/pages/sign-in"), "SignInPage");
const SignUpPage = lazyPage(() => import("@/pages/sign-up"), "SignUpPage");
const NewsArticlePage = lazyPage(() => import("@/pages/news-article"), "NewsArticlePage");
const BusinessBankStatementPage = lazyPage(() => import("@/pages/business-bank-statement"), "BusinessBankStatementPage");
const PersonalBankStatementPage = lazyPage(() => import("@/pages/personal-bank-statement"), "PersonalBankStatementPage");
const DamageReportPage = lazyPage(() => import("@/pages/damage-report"), "DamageReportPage");
const DoctorNoticePage = lazyPage(() => import("@/pages/doctor-notice"), "DoctorNoticePage");
const EinNoticePage = lazyPage(() => import("@/pages/ein-notice"), "EinNoticePage");
const InvoicesPage = lazyPage(() => import("@/pages/invoices"), "InvoicesPage");
const SpectrumPage = lazyPage(() => import("@/pages/spectrum"), "SpectrumPage");
const HippoHomeInsurancePage = lazyPage(() => import("@/pages/hippo-home-insurance"), "HippoHomeInsurancePage");
const EmploymentLetterPage = lazyPage(() => import("@/pages/employment-letter"), "EmploymentLetterPage");
const GeicoVehicleInsurancePage = lazyPage(() => import("@/pages/geico-vehicle-insurance"), "GeicoVehicleInsurancePage");
const ArticlesOfIncorporationPage = lazyPage(() => import("@/pages/articles-of-incorporation"), "ArticlesOfIncorporationPage");
const UniversityDiplomaPage = lazyPage(() => import("@/pages/university-diploma"), "UniversityDiplomaPage");
const DeathCertificatePage = lazyPage(() => import("@/pages/death-certificate"), "DeathCertificatePage");
const HelpPage = lazyPage(() => import("@/pages/help"), "HelpPage");
const HelpTopicPage = lazyPage(() => import("@/pages/help-topic"), "HelpTopicPage");
const PDFsPage = lazyPage(() => import("@/pages/pdfs"), "PDFsPage");
const ReferralProgramPage = lazyPage(() => import("@/pages/referral-program"), "ReferralProgramPage");
const SettingsPage = lazyPage(() => import("@/pages/settings"), "SettingsPage");
const InformationPage = lazyPage(() => import("@/pages/information"), "InformationPage");
const InformationProfilePage = lazyPage(() => import("@/pages/information"), "InformationProfilePage");
const NotificationsPage = lazyPage(() => import("@/pages/notifications"), "NotificationsPage");
const WalletAndSubscriptionPage = lazyPage(() => import("@/pages/wallet-and-subscription"), "WalletAndSubscriptionPage");
const BuyPackagesPage = lazyPage(() => import("@/pages/buy-packages"), "BuyPackagesPage");
const ResidentialLeaseAgreementPage = lazyPage(
  () => import("@/pages/residential-lease-agreement"),
  "ResidentialLeaseAgreementPage",
);

export const AppRouter = () => (
  <Suspense fallback={null}>
    <Routes>
      <Route path={ROUTES.home} element={<HomePage />} />
      <Route path={ROUTES.newsArticle} element={<NewsArticlePage />} />
      <Route path={ROUTES.discussion} element={<DiscussionPage />} />
      <Route path={ROUTES.faq} element={<FaqPage />} />
      <Route path={ROUTES.signIn} element={<SignInPage />} />
      <Route path={ROUTES.signUp} element={<SignUpPage />} />
      <Route element={<AppLayout />}>
        <Route path={ROUTES.businessBankStatement} element={<BusinessBankStatementPage />} />
        <Route path={ROUTES.personalBankStatement} element={<PersonalBankStatementPage />} />
        <Route path={ROUTES.damageReport} element={<DamageReportPage />} />
        <Route path={ROUTES.doctorNotice} element={<DoctorNoticePage />} />
        <Route path={ROUTES.einNotice} element={<EinNoticePage />} />
        <Route path={ROUTES.invoices} element={<InvoicesPage />} />
        <Route path={ROUTES.spectrum} element={<SpectrumPage />} />
        <Route path={ROUTES.hippoHomeInsurance} element={<HippoHomeInsurancePage />} />
        <Route path={ROUTES.employmentLetter} element={<EmploymentLetterPage />} />
        <Route path={ROUTES.geicoVehicleInsurance} element={<GeicoVehicleInsurancePage />} />
        <Route path={ROUTES.articlesOfIncorporation} element={<ArticlesOfIncorporationPage />} />
        <Route path={ROUTES.universityDiploma} element={<UniversityDiplomaPage />} />
        <Route path={ROUTES.deathCertificate} element={<DeathCertificatePage />} />
        <Route path={ROUTES.help} element={<HelpPage />} />
        <Route path={ROUTES.helpTicket} element={<HelpTopicPage />} />
        <Route path={ROUTES.pdfs} element={<PDFsPage />} />
        <Route path={ROUTES.referralProgram} element={<ReferralProgramPage />} />
        <Route path={ROUTES.settings} element={<SettingsPage />} />
        <Route path={ROUTES.information} element={<InformationPage />} />
        <Route path={ROUTES.informationProfile} element={<InformationProfilePage />} />
        <Route path={ROUTES.notifications} element={<NotificationsPage />} />
        <Route path={ROUTES.wallet} element={<WalletAndSubscriptionPage />} />
        <Route path={ROUTES.walletBuy} element={<BuyPackagesPage />} />
      </Route>
      <Route
        path={ROUTES.residentialLeaseAgreement}
        element={<PageTransition><ResidentialLeaseAgreementPage /></PageTransition>}
      />
    </Routes>
  </Suspense>
);
