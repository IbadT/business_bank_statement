import { useRef } from "react";
import { LuDownload } from "react-icons/lu";

interface FileUploadProps {
  label: string;
  hint?: string;
  fileName?: string;
  accept?: string;
  onChange: (file: File | null) => void;
}

export const FileUpload = ({ label, hint, fileName, accept = "image/png", onChange }: FileUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <button
      type="button"
      className="w-full bg-white rounded-xl flex flex-col items-start gap-2 px-5 py-4 text-left cursor-pointer hover:shadow-sm transition-shadow"
      onClick={() => inputRef.current?.click()}
    >
      <span className="flex items-center gap-3 font-bold text-sm text-[#171717]">
        <LuDownload size={22} />
        {label}
      </span>
      {(fileName || hint) && <span className="text-sm text-[#9A9A99] break-all">{fileName || hint}</span>}
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        hidden
        onChange={(e) => onChange(e.target.files?.[0] ?? null)}
      />
    </button>
  );
};
