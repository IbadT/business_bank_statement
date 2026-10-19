import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { Button } from "@/shared/ui/button";
import { Select } from "@/shared/ui/select";

const CATEGORIES = [{ id: "bank", label: "Bank Statements" }];
const STATEMENT_TYPES = [
  { id: "personal", label: "Personal Bank Statements" },
  { id: "business", label: "Business Bank Statements" },
];
const BANKS = [
  { id: "boa", label: "Bank Of America" },
  { id: "chase", label: "Chase" },
  { id: "wells", label: "Wells Fargo" },
];

interface GenerateDocumentModalProps {
  onClose: () => void;
  onContinue?: (data: {
    category: string;
    statementType: string;
    bank: string;
  }) => void;
}

export const GenerateDocumentModal = ({
  onClose,
  onContinue,
}: GenerateDocumentModalProps) => {
  const [category, setCategory] = useState("");
  const [statementType, setStatementType] = useState("");
  const [bank, setBank] = useState("");

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#F8F8F8CC]"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-[24px] p-6 w-full max-w-[550px] min-h-[174px] flex flex-col gap-12 max-h-[90vh]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-[20px] font-semibold text-[#171717]">
              Document type
            </h2>
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#ececec] flex items-center justify-center cursor-pointer hover:bg-[#e0e0e0] transition-colors"
            >
              <IoClose size={18} className="text-[#8f8f8f]" />
            </button>
          </div>

          <Select
            name="category"
            placeholder="Select document category..."
            value={category}
            options={CATEGORIES}
            onChange={(e) => {
              setCategory(e.target.value);
              setStatementType("");
              setBank("");
            }}
            readOnly
          />
          {category && (
            <Select
              name="statementType"
              placeholder="Select statement type..."
              value={statementType}
              options={STATEMENT_TYPES}
              onChange={(e) => {
                setStatementType(e.target.value);
                setBank("");
              }}
              readOnly
            />
          )}
          {statementType && (
            <Select
              name="bank"
              placeholder="Select your bank..."
              value={bank}
              options={BANKS}
              onChange={(e) => setBank(e.target.value)}
              readOnly
            />
          )}
        </div>

        {bank && (
          <Button
            color="primary"
            text="Continue"
            fullWidth
            onClick={() => onContinue?.({ category, statementType, bank })}
          />
        )}
      </div>
    </div>,
    document.body,
  );
};
