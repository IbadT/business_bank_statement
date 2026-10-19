import { useState } from "react";
import { useNavigate } from "react-router";
import { IoChevronDown, IoWalletOutline } from "react-icons/io5";
import { ROUTES } from "@/shared/config";
import { cn } from "@/shared/lib/cn";
import { Button } from "@/shared/ui/button";
import { InputField } from "@/shared/ui/input";
import { PageHeader } from "@/shared/ui/page-header";
import { TopUpModal } from "@/features/top-up";

const BALANCE = 200;

const packageOptions = [
  { label: "Package x10", price: 50 },
  { label: "Package x10", price: 100 },
  { label: "Package x10", price: 200 },
  { label: "Package x10", price: 300 },
];

export const BuyPackagesPage = () => {
  const navigate = useNavigate();
  const [selectedPkg, setSelectedPkg] = useState(packageOptions[1]);
  const [promoCode, setPromoCode] = useState("");
  const [isTopUpOpen, setIsTopUpOpen] = useState(false);
  const isNotEnough = selectedPkg.price > BALANCE;

  return (
    <div className="min-h-full flex items-start justify-center px-4 py-8">
      <div className="flex flex-col items-center gap-8 w-full max-w-[500px]">
        <PageHeader
          title="Buy Bills packages"
          onBack={() => navigate(ROUTES.wallet)}
        />

        <div className="grid grid-cols-4 gap-2 w-full">
          {packageOptions.map((pkg) => (
            <button
              type="button"
              key={pkg.price}
              onClick={() => setSelectedPkg(pkg)}
              className={cn(
                "flex flex-col items-center gap-1 rounded-xl px-2 py-3 cursor-pointer transition-all text-[#171717]",
                selectedPkg.price === pkg.price
                  ? "bg-[var(--primary-yellow-color)]"
                  : "bg-white shadow-sm hover:shadow-md",
              )}
            >
              <span className="text-[10px] font-semibold text-center">
                {pkg.label}
              </span>
              <span className="text-xl font-bold">${pkg.price}</span>
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3 w-full bg-white rounded-2xl p-4 shadow-sm">
          {isNotEnough ? (
            <div className="flex flex-col gap-0.5">
              <span className="text-[#ff2d2d] text-sm font-semibold">
                Not enough
              </span>
              <span className="text-[#8f8f8f] text-xs">
                Top up your balance to purchase the selected package.
              </span>
              <span className="text-[#171717] text-xs font-semibold">
                Current balance: ${BALANCE} USD
              </span>
            </div>
          ) : (
            <span className="text-[#171717] text-sm font-semibold">
              Purchase
            </span>
          )}
          <button
            type="button"
            className="flex items-center gap-3 w-full text-left cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-[#1fd1b5] flex items-center justify-center text-[#171717] shrink-0">
              <IoWalletOutline size={16} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[#171717] text-sm font-medium">
                Total balance
              </div>
              <div className="text-[#8f8f8f] text-xs">${BALANCE} USD</div>
            </div>
            <IoChevronDown size={18} className="text-[#8f8f8f]" />
          </button>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <span className="text-[#8f8f8f] text-sm font-semibold px-2">
            Promo code
          </span>
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
            className="py-[11px] font-semibold text-base"
            onClick={() => setIsTopUpOpen(true)}
          />
        ) : (
          <Button
            fullWidth
            color="primary"
            text={`Buy for $${selectedPkg.price}`}
            className="py-[11px] font-semibold text-base"
          />
        )}
      </div>

      {isTopUpOpen && <TopUpModal onClose={() => setIsTopUpOpen(false)} />}
    </div>
  );
};
