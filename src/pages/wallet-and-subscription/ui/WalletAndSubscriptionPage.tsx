import { useState } from "react";
import type { ReactNode } from "react";
import {
  FaBitcoin,
  FaEthereum,
  FaLitecoinSign,
  FaDollarSign,
  FaRegStar,
  FaRegFilePdf,
  FaBuildingColumns,
  FaPiggyBank,
} from "react-icons/fa6";
import { SiTether } from "react-icons/si";
import { LuLayers, LuReceipt, LuFileText, LuScrollText } from "react-icons/lu";
import { FilterTab } from "@/shared/ui/filter-tab";
import { CheckIcon } from "@/shared/ui/check-icon";
import { Select } from "@/shared/ui/select";
import { Button } from "@/shared/ui/button";
import { TopUpModal } from "@/features/top-up";
import { BuyPackageModal } from "@/features/buy-package";

const cryptoWallets = [
  {
    name: "Bitcoin",
    balance: "0.000003 BTC",
    usd: "≈ $150",
    icon: <FaBitcoin size={20} />,
    bg: "bg-[#f7931a]",
  },
  {
    name: "USDT",
    balance: "200 USDT",
    usd: "≈ $200",
    icon: <SiTether size={18} />,
    bg: "bg-[#26a17b]",
  },
  {
    name: "Etherium",
    balance: "0.0003 ETH",
    usd: "≈ $50",
    icon: <FaEthereum size={20} />,
    bg: "bg-[#ffffff] !text-[#171717] border border-[#e8e8e8]",
  },
  {
    name: "Litecoin",
    balance: "0.00",
    usd: "≈ $0",
    icon: <FaLitecoinSign size={18} />,
    bg: "bg-[#345d9d]",
  },
];

const packages = [
  {
    label: "Bank Statements",
    icon: <FaBuildingColumns size={16} />,
    bg: "bg-[#22e022]",
  },
  { label: "Bills", icon: <FaDollarSign size={16} />, bg: "bg-[#1fb5b5]" },
  { label: "Paystubs", icon: <LuFileText size={16} />, bg: "bg-[#2f6fe4]" },
  { label: "1040 (TAX)", icon: <FaPiggyBank size={16} />, bg: "bg-[#d61fc4]" },
  { label: "Transcript", icon: <LuScrollText size={16} />, bg: "bg-[#22e022]" },
];

const historyIcons: Record<string, { icon: ReactNode; bg: string }> = {
  "PDF - Tax Return": {
    icon: <FaRegFilePdf size={20} />,
    bg: "bg-[var(--primary-yellow-color)]",
  },
  "Balance Top Up": { icon: <FaDollarSign size={20} />, bg: "bg-[#22ff00]" },
  "30 PDF package": { icon: <LuLayers size={20} />, bg: "bg-[#00e5ff]" },
  "Unlimited for 128 hours": {
    icon: <FaRegStar size={20} />,
    bg: "bg-[var(--primary-yellow-color)]",
  },
};
const defaultHistoryIcon = {
  icon: <LuReceipt size={20} />,
  bg: "bg-[#e8e8e8]",
};

const historyTabs = ["All", "Top-ups", "Store", "Purchases"];

const historyData = [
  {
    date: "10 February, 2025",
    items: [
      {
        type: "Purchase",
        title: "PDF - Tax Return",
        category: "Purchases",
        meta: "x12",
        time: "12:03",
        status: "Success",
      },
      {
        type: "Top Up",
        title: "Balance Top Up",
        category: "Top-ups",
        meta: "600 USD",
        time: "12:03",
        status: "Success",
      },
      {
        type: "Purchase",
        title: "30 PDF package",
        category: "Store",
        meta: "x1",
        time: "12:03",
        status: "Success",
      },
    ],
  },
  {
    date: "9 February, 2025",
    items: [
      {
        type: "Purchase",
        title: "Unlimited for 128 hours",
        category: "Store",
        meta: "x1, $400 USD",
        time: "12:03",
        status: "Success",
      },
    ],
  },
];

type TabType = (typeof historyTabs)[number];

const sortOptions = ["Newest First", "Oldest First"].map((label) => ({
  id: label,
  label,
}));

export const WalletAndSubscriptionPage = () => {
  const [selectedTabs, setSelectedTabs] = useState<Set<TabType>>(
    new Set(["All"]),
  );
  const [sortBy, setSortBy] = useState("Newest First");
  const [isTopUpOpen, setIsTopUpOpen] = useState(false);
  const [buyPackage, setBuyPackage] = useState<string | null>(null);

  const handleTabClick = (tab: TabType) => {
    setSelectedTabs((prev) => {
      const next = new Set(prev);
      if (tab === "All") {
        return new Set(["All"]);
      }
      next.delete("All");
      if (next.has(tab)) {
        next.delete(tab);
      } else {
        next.add(tab);
      }
      if (next.size === 0) {
        return new Set(["All"]);
      }
      return next;
    });
  };

  const sortedHistory = historyData
    .map((group) => ({
      ...group,
      items: group.items
        .filter(
          (item) => selectedTabs.has("All") || selectedTabs.has(item.category),
        )
        .sort((a, b) => b.time.localeCompare(a.time)),
    }))
    .filter((group) => group.items.length > 0)
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  if (sortBy !== "Newest First") {
    sortedHistory.reverse();
    sortedHistory.forEach((g) => g.items.reverse());
  }

  return (
    <div className="flex flex-col gap-[30px] px-[10px] pt-6 pb-6 max-w-[1100px]">
      <h1 className="text-[28px] leading-tight tracking-[0.84px] font-semibold text-[#171717]">
        Wallet and Subscription
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
        <div className="bg-white rounded-2xl p-5 shadow-sm flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-[#8f8f8f] text-sm">Total balance</span>
              <span className="text-[#171717] text-xl font-semibold">
                $400 USD
              </span>
            </div>
            <Button
              color="primary"
              text="Top up"
              className="px-5 py-2 font-semibold text-sm"
              onClick={() => setIsTopUpOpen(true)}
            />
          </div>
          <div className="h-px bg-[#e8e8e8]" />
          <div className="flex flex-col gap-4">
            {cryptoWallets.map((w) => (
              <div key={w.name} className="flex items-center gap-3 min-w-0">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0 ${w.bg}`}
                >
                  {w.icon}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[#171717] text-sm font-medium truncate">
                    {w.name}
                  </span>
                  <span className="text-[#8f8f8f] text-xs">
                    {w.balance} {w.usd}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm flex flex-col gap-4">
          <span className="text-[18px] font-semibold text-[#171717]">
            Packages
          </span>
          {packages.map((pkg) => (
            <div key={pkg.label} className="flex items-center gap-3 min-w-0">
              <div
                className={`w-6 h-6 rounded-md flex items-center justify-center text-white shrink-0 ${pkg.bg}`}
              >
                {pkg.icon}
              </div>
              <span className="text-[#171717] text-sm font-medium flex-1 min-w-0 truncate">
                {pkg.label}
              </span>
              <Button
                color="secondary"
                text="Buy"
                className="rounded-[10px] px-5 py-1.5 font-medium text-sm shrink-0"
                onClick={() => setBuyPackage(pkg.label)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-[28px] leading-tight tracking-[0.84px] text-[#000000]">
            History
          </span>
          <Select
            placeholder="Sort by"
            value={sortBy}
            name="sortBy"
            options={sortOptions}
            onChange={(e) => setSortBy(e.target.value)}
            readOnly
            className="min-w-[180px]"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {historyTabs.map((tab) => {
            const isSelected = selectedTabs.has(tab);
            return (
              <FilterTab
                key={tab}
                label={tab}
                isSelected={isSelected}
                onClick={() => handleTabClick(tab)}
                icon={isSelected ? <CheckIcon /> : undefined}
              />
            );
          })}
        </div>

        {sortedHistory.length === 0 && (
          <div className="flex items-center justify-center min-h-123.5 rounded-2xl border border-[#8f8f8f]/60 bg-[#f8f8f8]">
            <span className="text-[#a3a3a3] text-2xl">No history</span>
          </div>
        )}

        {sortedHistory.map((group) => (
          <div key={group.date} className="flex flex-col gap-2">
            <span className="text-[#8f8f8f] text-sm font-semibold">
              {group.date}
            </span>
            {group.items.map((item, idx) => {
              const { icon, bg } =
                historyIcons[item.title] ?? defaultHistoryIcon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-sm"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-[#171717] shrink-0 ${bg}`}
                  >
                    {icon}
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="text-[#171717] text-sm font-semibold truncate">
                      {item.title}
                    </span>
                    <span className="text-[#8f8f8f] text-xs">{item.type}</span>
                    <span className="text-[#8f8f8f] text-xs">{item.meta}</span>
                  </div>
                  <div className="flex flex-col items-end gap-2 self-stretch justify-between">
                    <span className="text-[#8f8f8f] text-xs">{item.time}</span>
                    <span className="bg-[var(--primary-yellow-color)] text-[#171717] text-xs font-semibold rounded-md px-2.5 py-1">
                      {item.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {buyPackage && (
        <BuyPackageModal
          packageName={buyPackage}
          onClose={() => setBuyPackage(null)}
        />
      )}
      {isTopUpOpen && <TopUpModal onClose={() => setIsTopUpOpen(false)} />}
    </div>
  );
};
