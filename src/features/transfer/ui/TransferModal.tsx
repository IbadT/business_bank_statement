import { useCallback, useRef, useState } from "react";
import { WalletCard } from "@/entities/wallet";
import { Button } from "@/shared/ui/button";
import { PageHeader } from "@/shared/ui/page-header";
import { FullscreenModal } from "@/shared/ui/fullscreen-modal";
import { useClickOutside } from "@/shared/lib/click-outside";

const wallets = [
  { id: "in-store", title: "In-store Balance (x2!)" },
  { id: "oracle", title: "Oracle Wallet (USDT)" },
] as const;

const cryptocurrencies = [
  {
    id: "bitcoin",
    label: "Bitcoin",
    address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
  },
  {
    id: "ethereum",
    label: "Ethereum",
    address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
  },
  {
    id: "usdt",
    label: "USDT",
    address: "TQn9Y2khEsLJW1ChVWFMSMeRDow5KcbLSE",
  },
  {
    id: "solana",
    label: "Solana",
    address: "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
  },
];

interface TransferModalProps {
  onClose: () => void;
}

export const TransferModal = ({ onClose }: TransferModalProps) => {
  const [activeWallet, setActiveWallet] = useState("in-store");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCrypto, setSelectedCrypto] = useState(cryptocurrencies[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeDropdown = useCallback(() => setShowDropdown(false), []);
  useClickOutside(dropdownRef, closeDropdown, showDropdown);

  return (
    <FullscreenModal onClose={onClose}>
      <div className="flex flex-col items-center gap-[38px] w-full max-w-[500px]">
        <PageHeader title="Transfer" onBack={onClose} />

        <div className="flex items-center gap-2.5 w-full">
          {wallets.map((w) => (
            <WalletCard
              key={w.id}
              title={w.title}
              active={activeWallet === w.id}
              onClick={() => setActiveWallet(w.id)}
            />
          ))}
        </div>

        <div className="flex flex-col gap-4 w-full bg-white rounded-2xl p-[14px] shadow-sm">
          <div className="flex items-center gap-2.5 pl-2">
            <span className="text-[#171717] text-base font-semibold">
              Transfer to...
            </span>
          </div>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-full flex items-center justify-between rounded-xl px-3 py-[10px] bg-white cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-full bg-[var(--primary-yellow-color)] flex items-center justify-center text-xs font-bold text-[#171717] shrink-0">
                  {selectedCrypto.label[0]}
                </div>
                <div className="flex flex-col items-start min-w-0">
                  <span className="text-[#181818] text-base font-medium">
                    {selectedCrypto.label}
                  </span>
                  <span className="text-[#A6A6A6] text-sm font-semibold truncate max-w-full">
                    {selectedCrypto.address}
                  </span>
                </div>
              </div>
              <svg
                className={`transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`}
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M3.5 5.25L7 8.75L10.5 5.25"
                  stroke="#a6a6a6"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {showDropdown && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-lg border border-[#e8e8e8] overflow-hidden z-10">
                {cryptocurrencies.map((c) => (
                  <button
                    type="button"
                    key={c.id}
                    onClick={() => {
                      setSelectedCrypto(c);
                      setShowDropdown(false);
                    }}
                    className="w-full flex items-center gap-3 px-3 py-[10px] hover:bg-[#f7f7f7] cursor-pointer transition-colors text-left"
                  >
                    <div className="w-8 h-8 rounded-full bg-[var(--primary-yellow-color)] flex items-center justify-center text-xs font-bold text-[#171717]">
                      {c.label[0]}
                    </div>
                    <span className="text-[#171717] text-base font-medium">
                      {c.label}
                    </span>
                    {selectedCrypto.id === c.id && (
                      <svg
                        className="ml-auto"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M13.5 4.5L6.5 11.5L3 8"
                          stroke="#171717"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 rounded-xl px-2 py-1">
              <div className="flex items-center gap-1 pl-2">
                <span className="text-[#000000] text-base font-semibold">
                  600
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#a6a6a6] text-sm font-semibold">
                  USD
                </span>
                <div className="flex items-center gap-1 px-2 py-1 rounded-lg">
                  <span className="text-[#000000] text-sm font-semibold">
                    ≈
                  </span>
                  <span className="text-[#000000] text-sm font-semibold whitespace-nowrap">
                    0.00000231 BTC
                  </span>
                </div>
              </div>
            </div>
            <span className="text-[#8f8f8f] text-sm font-semibold ml-1">
              Will be transferred: $1200 USD
            </span>
          </div>
        </div>

        <Button
          fullWidth
          color="primary"
          text="Transfer"
          className="py-[11px] font-semibold text-base"
        />
      </div>
    </FullscreenModal>
  );
};
