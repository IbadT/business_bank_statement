import { create } from "zustand";

interface SessionState {
  isAuthenticated: boolean;
  balance: number;
  signIn: () => void;
  signOut: () => void;
}

// TODO: заменить заглушку на реальную авторизацию, когда появится API
export const useSessionStore = create<SessionState>((set) => ({
  isAuthenticated: false,
  balance: 10100,
  signIn: () => set({ isAuthenticated: true }),
  signOut: () => set({ isAuthenticated: false }),
}));
