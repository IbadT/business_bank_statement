import { useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { useNavigate, useParams, useSearchParams } from "react-router";
import { Button } from "@/shared/ui/button";
import { BackButton } from "@/shared/ui/back-button";
import { ROUTES } from "@/shared/config";
import { useProfileStore, type Profile, type ProfileType } from "@/entities/profile";
import { PersonalProfileForm } from "./PersonalProfileForm";
import { BusinessProfileForm } from "./BusinessProfileForm";
import { defaultPersonalData, defaultBusinessData, type PersonalFormData, type BusinessFormData } from "../model/defaults";

const NEW_ID = "new";

const buildTitle = (type: ProfileType, data: Record<string, string>) =>
  type === "personal"
    ? [data.name, data.surname].filter(Boolean).join(" ")
    : data.companyName ?? "";

export const InformationProfilePage = () => {
  const navigate = useNavigate();
  const { id = NEW_ID } = useParams();
  const [searchParams] = useSearchParams();
  const profiles = useProfileStore((s) => s.profiles);
  const saveProfile = useProfileStore((s) => s.saveProfile);
  const removeProfile = useProfileStore((s) => s.removeProfile);

  const existing = profiles.find((p) => p.id === id);
  const type: ProfileType = existing?.type ?? (searchParams.get("type") === "business" ? "business" : "personal");
  const defaults: Record<string, string> = type === "personal" ? { ...defaultPersonalData } : { ...defaultBusinessData };

  const [data, setData] = useState<Record<string, string>>({ ...defaults, ...existing?.data });

  const title = buildTitle(type, data);

  const handleSave = () => {
    const profile: Profile = {
      id: existing?.id ?? crypto.randomUUID(),
      type,
      title: title || (type === "personal" ? "Name Surname" : "Company"),
      data,
    };
    saveProfile(profile);
    navigate(ROUTES.information, { state: { type } });
  };

  const handleDelete = () => {
    if (existing) removeProfile(existing.id);
    navigate(ROUTES.information, { state: { type } });
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <BackButton label={existing ? existing.title : "New profile"} onClick={() => navigate(ROUTES.information, { state: { type } })} />
        <div className="flex items-center gap-3">
          {existing && (
            <button
              type="button"
              aria-label="Delete"
              onClick={handleDelete}
              className="cursor-pointer"
              style={{ color: "#FF191D" }}
            >
              <FaTrash size={14} />
            </button>
          )}
          <Button color="primary" onClick={handleSave} className="px-5 py-2 text-sm" text="Save" />
        </div>
      </div>

      {type === "personal" ? (
        <PersonalProfileForm data={data as unknown as PersonalFormData} onChange={(d) => setData({ ...d })} />
      ) : (
        <BusinessProfileForm data={data as unknown as BusinessFormData} onChange={(d) => setData({ ...d })} />
      )}
    </div>
  );
};
