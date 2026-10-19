import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui/button";
import { Select } from "@/shared/ui/select";
import { COUNTRIES, REVISION_DATES, STATES } from "../model/content";

export interface DiscussionFilters {
  country: string;
  state: string;
  revisionDate: string;
}

const toOptions = (items: string[]) => items.map((label) => ({ id: label, label }));

export const DiscussionModal = ({ onContinue }: { onContinue: (filters: DiscussionFilters) => void }) => {
  const { t } = useTranslation();
  const [filters, setFilters] = useState<DiscussionFilters>({ country: "", state: "", revisionDate: "" });

  const set = (e: React.ChangeEvent<HTMLInputElement>) => setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <div className="flex items-center justify-center flex-1 p-4">
      <div className="bg-[#F8F8F8] p-6 w-full max-w-[550px] flex flex-col gap-8">
        <h2 className="text-[20px] font-semibold text-center text-[#171717]">{t("discussion.title")}</h2>
        <div className="flex flex-col gap-4">
          <Select name="country" placeholder={t("discussion.country")} value={filters.country} options={toOptions(COUNTRIES)} onChange={set} readOnly />
          <Select name="state" placeholder={t("discussion.state")} value={filters.state} options={toOptions(STATES)} onChange={set} readOnly />
          <Select name="revisionDate" placeholder={t("discussion.revisionDate")} value={filters.revisionDate} options={toOptions(REVISION_DATES)} onChange={set} readOnly />
        </div>
        <Button
          color="primary"
          text={t("discussion.continue")}
          fullWidth
          disabled={!filters.country || !filters.state || !filters.revisionDate}
          onClick={() => onContinue(filters)}
        />
      </div>
    </div>
  );
};
