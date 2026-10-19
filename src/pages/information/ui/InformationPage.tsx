import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { useLocation, useNavigate } from "react-router";
import { Button } from "@/shared/ui/button";
import { BackButton } from "@/shared/ui/back-button";
import { FilterTab } from "@/shared/ui/filter-tab";
import { ROUTES, informationProfilePath } from "@/shared/config";
import { useProfileStore, type ProfileType } from "@/entities/profile";

const TABS: { type: ProfileType; label: string }[] = [
  { type: "personal", label: "Personal informations" },
  { type: "business", label: "Business informations" },
];

export const InformationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeType, setActiveType] = useState<ProfileType>(
    (location.state as { type?: ProfileType } | null)?.type ?? "personal",
  );
  const profiles = useProfileStore((s) => s.profiles).filter((p) => p.type === activeType);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between gap-3">
        <div className="font-bold text-3xl">
          <BackButton label="Saved Informations" onClick={() => navigate(ROUTES.settings)} />
        </div>
        <Button
          color="primary"
          text="Add Profile"
          icon={<FaPlus size={14} />}
          onClick={() => navigate(`${informationProfilePath("new")}?type=${activeType}`)}
        />
      </div>

      <div className="flex gap-8 items-start">
        <div className="flex flex-col gap-2 w-[240px] shrink-0 pr-4 border-r border-[#8f8f8f]/60 min-h-[300px]">
          {TABS.map((tab) => (
            <FilterTab
              key={tab.type}
              label={tab.label}
              isSelected={activeType === tab.type}
              onClick={() => setActiveType(tab.type)}
            />
          ))}
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {profiles.length === 0 && <div className="text-[#8f8f8f] text-sm">No saved profiles yet.</div>}
          {profiles.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => navigate(informationProfilePath(p.id))}
              className="flex items-center gap-4 bg-white rounded-2xl px-5 py-6 shadow-sm cursor-pointer text-left hover:shadow-md transition-shadow"
            >
              <MdVerified size={36} className="text-[var(--primary-yellow-color)] shrink-0" />
              <span className="font-medium text-lg truncate">{p.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
