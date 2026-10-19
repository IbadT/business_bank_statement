import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { FaBitcoin, FaEthereum, FaLitecoinSign } from "react-icons/fa6";
import { SiTether } from "react-icons/si";
import { LuCopy } from "react-icons/lu";
import { Button } from "@/shared/ui/button";
import { OptionDropdown } from "@/shared/ui/option-dropdown";
import { PageHeader } from "@/shared/ui/page-header";
import { FullscreenModal } from "@/shared/ui/fullscreen-modal";

const CURRENT_BALANCE = 300;
const PAYMENT_ADDRESS = "1Pn85Vjc2zN3rfvDYXmZUsfT1p9j4";

const wallets = [
  {
    id: "btc",
    title: "Bitcoin",
    subtitle: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
    ticker: "BTC",
    rate: 50000,
    icon: <FaBitcoin size={20} />,
    iconClassName: "bg-[var(--primary-yellow-color)]",
  },
  {
    id: "usdt",
    title: "USDT",
    subtitle: "TQn9Y2khDGZfxbvMCqnyQjH2tZk8o1Xp4r",
    ticker: "USDT",
    rate: 1,
    icon: <SiTether size={18} />,
    iconClassName: "bg-[#26a17b] !text-white",
  },
  {
    id: "eth",
    title: "Etherium",
    subtitle: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    ticker: "ETH",
    rate: 3000,
    icon: <FaEthereum size={20} />,
    iconClassName: "bg-[#f0f0f0]",
  },
  {
    id: "ltc",
    title: "Litecoin",
    subtitle: "ltc1qg9stkxrszkdqsuj92lm4c7akvk36zvhqw7p6ez",
    ticker: "LTC",
    rate: 100,
    icon: <FaLitecoinSign size={18} />,
    iconClassName: "bg-[#345d9d] !text-white",
  },
];

interface TopUpModalProps {
  onClose: () => void;
}

export const TopUpModal = ({ onClose }: TopUpModalProps) => {
  const [step, setStep] = useState<"amount" | "payment">("amount");
  const [walletId, setWalletId] = useState(wallets[0].id);
  const wallet = wallets.find((w) => w.id === walletId) ?? wallets[0];
  const [amount, setAmount] = useState("");
  const normalizedAmount = amount.replace(",", ".").trim();
  const numericAmount = Number(normalizedAmount);
  const isAmountValid = numericAmount > 0;
  const usdValue = isAmountValid ? Math.round(numericAmount * wallet.rate) : 0;

  const copyAddress = () => {
    void navigator.clipboard?.writeText(PAYMENT_ADDRESS);
  };

  return (
    <FullscreenModal onClose={onClose}>
      {step === "amount" ? (
        <div className="flex flex-col items-center gap-6 w-full max-w-[500px]">
          <PageHeader title="Top up" onBack={onClose} />

          <span className="text-[#171717] text-sm font-semibold text-center">
            $5 USD = 1 BARCODE
          </span>

          <div className="flex flex-col gap-3 w-full bg-white rounded-2xl p-3 shadow-sm">
            <OptionDropdown
              className="px-3 py-2"
              options={wallets}
              value={walletId}
              onChange={setWalletId}
            />

            <div className="flex items-center gap-2 bg-[#f7f7f7] rounded-xl px-4 py-2.5">
              <input
                inputMode="decimal"
                placeholder="0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="flex-1 min-w-0 bg-transparent outline-none text-[#171717] text-base font-medium placeholder:text-[#171717]"
              />
              <span className="text-[#9A9A99] text-xs font-semibold">{wallet.ticker}</span>
              <span className="text-[#171717] text-xs font-semibold whitespace-nowrap">
                ≈ {usdValue} USD
              </span>
            </div>

            <span className="text-[#8f8f8f] text-xs font-medium px-2 pb-1">
              Current balance: ${CURRENT_BALANCE} USD
            </span>
          </div>

          <Button
            fullWidth
            color="primary"
            text="Top up"
            className="py-[11px] font-semibold text-sm"
            disabled={!isAmountValid}
            onClick={() => setStep("payment")}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-6 w-full max-w-[500px]">
          <QRCodeSVG value={PAYMENT_ADDRESS} size={234} level="M" />

          <h1 className="text-[#171717] text-[28px] leading-tight tracking-[0.84px]">
            Payment
          </h1>

          <div className="flex flex-col gap-4 w-full text-[#171717] text-base">
            <div className="flex items-center justify-between gap-3">
              <span>Transfer</span>
              <span>{wallet.title} Wallet</span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className="shrink-0">{wallet.ticker} address:</span>
              <span className="flex items-center gap-2 min-w-0">
                <span className="truncate">{PAYMENT_ADDRESS}</span>
                <button
                  type="button"
                  aria-label="Copy address"
                  onClick={copyAddress}
                  className="cursor-pointer shrink-0"
                >
                  <LuCopy size={16} />
                </button>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <Button
              fullWidth
              color="primary"
              text="TopUp with OraclePay to get 20% bonus"
              className="py-[11px] font-semibold text-sm"
            />
            <div className="grid grid-cols-2 gap-2">
              <Button
                fullWidth
                color="white"
                text="Share Code"
                className="py-[11px] font-semibold text-sm"
              />
              <Button
                fullWidth
                color="white"
                text="Share Addy"
                className="py-[11px] font-semibold text-sm"
              />
            </div>
            <Button
              fullWidth
              color="none"
              text="Cancel"
              className="py-2 font-semibold text-sm"
              onClick={onClose}
            />
          </div>
        </div>
      )}
    </FullscreenModal>
  );
};
