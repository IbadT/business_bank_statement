import { useEffect } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";

interface FullscreenModalProps {
  children: ReactNode;
  onClose: () => void;
}

export const FullscreenModal = ({ children, onClose }: FullscreenModalProps) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-[100] overflow-y-auto bg-[#f8f8f8]">
      <div className="min-h-full flex items-start justify-center px-4 py-8">{children}</div>
    </div>,
    document.body,
  );
};
