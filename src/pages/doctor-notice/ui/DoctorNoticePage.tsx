import { DocumentPage } from "@/widgets/document-page";
import { DoctorNoticeForm } from "@/features/doctor-notice-form";

export const DoctorNoticePage = () => (
  <DocumentPage titleKey="doctor_notice">
    <DoctorNoticeForm />
  </DocumentPage>
);
