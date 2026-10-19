import { useTranslation } from "react-i18next";
import { Select } from "@/shared/ui/select";
import { useProfileStore } from "../model/store";

interface ProfileSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProfileSelect = ({ value, onChange }: ProfileSelectProps) => {
  const { t } = useTranslation();
  const profiles = useProfileStore((s) => s.profiles);
  const options = profiles.map((p) => ({ id: p.id, label: p.title }));
  return <Select placeholder={t("profile")} value={value} name="profile" options={options} onChange={onChange} />;
};
