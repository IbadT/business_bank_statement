import { i18n } from "@/shared/config";
import { openModal } from "@/shared/ui/modal";
import { ConfirmModal } from "./ConfirmModal";

export const openSaveDraftModal = (onConfirm?: () => void) =>
  openModal({
    children: (
      <ConfirmModal
        title={i18n.t("save_draft")}
        description={i18n.t("save_draft_description")}
        cancelLabel={i18n.t("cancel")}
        confirmLabel={i18n.t("save")}
        onConfirm={onConfirm}
      />
    ),
  });

export const openPayAndGenerateModal = (onConfirm?: () => void) =>
  openModal({
    children: (
      <ConfirmModal
        title={i18n.t("pay_and_generate")}
        description={i18n.t("pay_and_generate_description")}
        cancelLabel={i18n.t("cancel")}
        confirmLabel={i18n.t("pay_and_generate")}
        onConfirm={onConfirm}
      />
    ),
  });
