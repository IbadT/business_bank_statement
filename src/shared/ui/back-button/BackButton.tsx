import { IoChevronBack } from "react-icons/io5";

interface BackButtonProps {
  label: string;
  onClick: () => void;
}

export const BackButton = ({ label, onClick }: BackButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className="inline-flex items-center gap-1 self-start font-medium text-[#171717] cursor-pointer hover:opacity-70"
  >
    <IoChevronBack size={20} />
    {label}
  </button>
);
