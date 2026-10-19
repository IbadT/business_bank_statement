import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ReferralLink } from "@/features/copy-referral-link";
import { TransferModal } from "@/features/transfer";
import { Button } from "@/shared/ui/button";
import { Stat } from "@/shared/ui/stat";

const referralLevels = [
  { label: "Level 1 referrals", count: "100" },
  { label: "Level 2 referrals", count: "100" },
  { label: "Level 3 referrals", count: "121" },
];

export const ReferralProgramPage = () => {
  const [isTransferOpen, setIsTransferOpen] = useState(false);
  const { t } = useTranslation();

  const referralLink = "https://www.Linkhere2909302";

  return (
    <div className="flex flex-col gap-[38px] px-[10px] py-[24px]">
      <h1 className="text-[#171717] text-xl font-semibold">{t("referral")}</h1>

      <div className="flex flex-col lg:flex-row gap-3 lg:gap-16">
        <div className="flex-1 min-w-0 flex flex-col gap-4">
          <Stat label="Totally Earned" value="$1 000 USD" />
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            <Stat
              label="Unclaimed referral balance"
              value="$600 USD"
              valueClassName="text-lg"
            />
            <Button
              text="Transfer"
              color="primary"
              className="px-[14px] py-3 text-sm"
              onClick={() => setIsTransferOpen(true)}
            />
          </div>
        </div>

        <div className="flex-1 min-w-0 flex flex-col justify-between gap-4">
          <Stat label="Totally Invited" value="321" />
          <div className="flex flex-wrap gap-y-3">
            {referralLevels.map((level) => (
              <div
                key={level.label}
                className="flex flex-col gap-1 flex-1 min-w-[110px] pr-4 pl-4 first:pl-0"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#8f8f8f] text-xs">{level.label}</span>
                  <div className="w-5 h-5 rounded-xl bg-[var(--primary-yellow-color)] flex items-center justify-center text-[10px] font-bold text-[#171717] shrink-0">
                    ?
                  </div>
                </div>
                <span className="text-[#171717] text-sm font-semibold">
                  {level.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[38px]">
        <div className="flex flex-col items-start gap-2.5">
          <div className="text-[#171717] text-lg font-semibold text-left">
            Earn Up to 30% Commission with BarcodeGPT.ai!
          </div>
          <div className="text-[#8f8f8f] text-sm text-left max-w-[600px]">
            <ul className="list-disc pl-5">
              <li>Earn 20% from all spending by your direct referrals.</li>
              <li>
                Get 5% from the spending of referrals brought in by your
                referrals.
              </li>
              <li>
                Receive an additional 5% from the spending of the third level of
                referrals.
              </li>
            </ul>
            {/* Earn 20% from all spending by your direct referrals. Get 5% from the
            spending of referrals brought in by your referrals. Receive an
            additional 5% from the spending of the third level of referrals. */}
          </div>
        </div>
        <ReferralLink link={referralLink} />
      </div>

      {isTransferOpen && (
        <TransferModal onClose={() => setIsTransferOpen(false)} />
      )}
    </div>
  );
};
