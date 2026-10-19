import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Profile } from "./types";

interface ProfileStoreState {
  profiles: Profile[];
  saveProfile: (profile: Profile) => void;
  removeProfile: (id: string) => void;
}

export const useProfileStore = create<ProfileStoreState>()(
  persist(
    (set) => ({
      profiles: [],
      saveProfile: (profile) =>
        set((s) =>
          s.profiles.some((p) => p.id === profile.id)
            ? { profiles: s.profiles.map((p) => (p.id === profile.id ? profile : p)) }
            : { profiles: [...s.profiles, profile] },
        ),
      removeProfile: (id) => set((s) => ({ profiles: s.profiles.filter((p) => p.id !== id) })),
    }),
    { name: "saved-profiles" },
  ),
);
