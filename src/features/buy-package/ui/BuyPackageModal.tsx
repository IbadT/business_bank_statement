import { useState } from "react";
import { IoWalletOutline } from "react-icons/io5";
import { FaBitcoin, FaEthereum, FaLitecoinSign } from "react-icons/fa6";
import { SiTether } from "react-icons/si";
import { cn } from "@/shared/lib/cn";
import { Button } from "@/shared/ui/button";
import { InputField } from "@/shared/ui/input";
import { OptionDropdown } from "@/shared/ui/option-dropdown";
import { PageHeader } from "@/shared/ui/page-header";
import { FullscreenModal } from "@/shared/ui/fullscreen-modal";
import { TopUpModal } from "@/features/top-up";

const TOTAL_BALANCE = 400;

const sources = [
  {
    id: "total",
    balance: TOTAL_BALANCE,
    title: "Total balance",
    subtitle: `$${TOTAL_BALANCE} USD`,
    icon: <IoWalletOutline size={16} />,
    iconClassName: "bg-[#1fe0b5] w-8 h-8",
  },
  {
    id: "btc",
    balance: 150,
    title: "Bitcoin",
    subtitle: "0.000003 BTC ≈ $150",
    icon: <FaBitcoin size={18} />,
    iconClassName: "bg-[#f7931a] !text-white w-8 h-8",
  },
  {
    id: "usdt",
    balance: 200,
    title: "USDT",
    subtitle: "200 USDT ≈ $200",
    icon: <SiTether size={16} />,
    iconClassName: "bg-[#26a17b] !text-white w-8 h-8",
  },
  {
    id: "eth",
    balance: 50,
    title: "Etherium",
    subtitle: "0.0003 ETH ≈ $50",
    icon: <FaEthereum size={18} />,
    iconClassName: "bg-[#f0f0f0] w-8 h-8",
  },
  {
    id: "ltc",
    balance: 0,
    title: "Litecoin",
    subtitle: "0.00 ≈ $0",
    icon: <FaLitecoinSign size={16} />,
    iconClassName: "bg-[#345d9d] !text-white w-8 h-8",
  },
];

const packageOptions = [
  { label: "Package x10", price: 50 },
  { label: "Package x10", price: 100 },
  { label: "Package x10", price: 200 },
  { label: "Package x10", price: 300 },
];

interface BuyPackageModalProps {
  packageName: string;
  onClose: () => void;
}

export const BuyPackageModal = ({ packageName, onClose }: BuyPackageModalProps) => {
  const [step, setStep] = useState<"select" | "notEnough">("select");
  const [selectedPkg, setSelectedPkg] = useState(packageOptions[1]);
  const [sourceId, setSourceId] = useState(sources[0].id);
  const [promoCode, setPromoCode] = useState("");
  const [isTopUpOpen, setIsTopUpOpen] = useState(false);
  const selectedSource = sources.find((source) => source.id === sourceId) ?? sources[0];
  const isNotEnough = step === "notEnough" && selectedSource.balance < selectedPkg.price;

  const handleBuy = () => {
    if (selectedSource.balance < selectedPkg.price) {
      setStep("notEnough");
      return;
    }
    onClose();
  };

  return (
    <FullscreenModal onClose={onClose}>
      <div className="flex flex-col items-center gap-8 w-full max-w-[500px]">
        <PageHeader
          title={isNotEnough ? "Buy packages" : `Buy ${packageName} packages`}
          onBack={isNotEnough ? () => setStep("select") : onClose}
        />

        <div className="grid grid-cols-4 gap-2 w-full">
          {packageOptions.map((pkg) => (
            <button
              type="button"
              key={pkg.price}
              onClick={() => setSelectedPkg(pkg)}
              className={cn(
                "flex flex-col items-center gap-3 rounded-xl px-2 py-3 cursor-pointer transition-all text-[#171717]",
                selectedPkg.price === pkg.price
                  ? "bg-[var(--primary-yellow-color)]"
                  : "bg-white hover:shadow-md",
              )}
            >
              <span className="text-[10px] font-semibold text-center">{pkg.label}</span>
              <span className="text-xl font-bold">${pkg.price}</span>
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3 w-full bg-white rounded-2xl p-4">
          {isNotEnough ? (
            <div className="flex flex-col gap-0.5">
              <span className="text-[#ff2d2d] text-sm font-medium">Not enough</span>
              <span className="text-[#8f8f8f] text-xs">
                Top up your balance to purchase the selected package.
              </span>
              <span className="text-[#171717] text-xs font-semibold">
                Current balance: ${selectedSource.balance} USD
              </span>
            </div>
          ) : (
            <span className="text-[#171717] text-sm font-semibold">Purchase</span>
          )}
          <OptionDropdown options={sources} value={sourceId} onChange={setSourceId} />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <span className="text-[#171717] text-sm font-semibold px-2">Promo code</span>
          <InputField
            placeholder="Enter"
            name="promoCode"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            rightButton={{ text: "Apply", onClick: () => undefined }}
          />
        </div>

        {isNotEnough ? (
          <Button
            fullWidth
            color="primary"
            text="Top up and activate"
            className="py-[11px] font-semibold text-sm"
            onClick={() => setIsTopUpOpen(true)}
          />
        ) : (
          <Button
            fullWidth
            color="primary"
            text={`Buy for $${selectedPkg.price}`}
            className="py-[11px] font-semibold text-sm"
            onClick={handleBuy}
          />
        )}
      </div>

      {isTopUpOpen && <TopUpModal onClose={() => setIsTopUpOpen(false)} />}
    </FullscreenModal>
  );
};
