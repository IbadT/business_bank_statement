type HeaderButtonsColor = "primary" | "secondary" | "none";

interface HeaderButtonsProps {
  text: string | React.ReactNode;
  color: HeaderButtonsColor;
  setActiveStep?: (prevStep: (prev: number) => number) => void;
}

export const HeaderButtons = ({ text, color, setActiveStep }: HeaderButtonsProps) => {
    const handleClick = () => {
        setActiveStep?.(prev => prev === 6 ? 6 : prev + 1)
        console.log("")
    };

  return (
    <button
      className={`
            font-bold
            px-4 py-2 rounded-xl 
            ${
              color === "primary"
                ? "bg-[var(--primary-yellow-color)]"
                : color === "secondary"
                ? "bg-[var(--primary-background-menu-color)]"
                : "bg-transparent"
            } cursor-pointer`
        }
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
