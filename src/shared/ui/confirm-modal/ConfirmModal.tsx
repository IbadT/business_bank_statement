import { IoClose } from "react-icons/io5";
import { useModalClose } from "@/shared/ui/modal";
import { Button } from "@/shared/ui/button";

interface ConfirmModalProps {
  title: string;
  description: string;
  cancelLabel: string;
  confirmLabel: string;
  onConfirm?: () => void;
}

export const ConfirmModal = ({ title, description, cancelLabel, confirmLabel, onConfirm }: ConfirmModalProps) => {
  const close = useModalClose();

  const handleConfirm = () => {
    onConfirm?.();
    close();
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl text-[#171717] break-words min-w-0">{title}</h2>
        <button
          type="button"
          aria-label={cancelLabel}
          className="w-9 h-9 shrink-0 rounded-full bg-[#E8E8E8] flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity"
          onClick={close}
        >
          <IoClose size={20} className="text-[#6B6B6B]" />
        </button>
      </div>
      <p className="text-sm text-[#171717]">{description}</p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <Button text={cancelLabel} color="white" fullWidth className="py-3" onClick={close} />
        <Button text={confirmLabel} color="primary" fullWidth className="py-3" onClick={handleConfirm} />
      </div>
    </div>
  );
};
