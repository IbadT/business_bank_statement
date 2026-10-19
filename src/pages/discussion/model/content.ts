export const COUNTRIES = ["USA", "Canada", "United Kingdom"];

export const STATES = ["California", "New York", "Texas"];

export const REVISION_DATES = ["03-321-3213", "04-112-5678", "05-208-9012"];

export interface ChatMessageItem {
  id: number;
  text: string;
  isOwn: boolean;
  author: string;
  time: string;
}

export const USER_NAME = "Name and surname";

export const createInitialMessages = (country: string, state: string, revisionDate: string): ChatMessageItem[] => [
  { id: 1, text: `Welcome to the ${country} / ${state} discussion (revision ${revisionDate}).`, isOwn: false, author: "Admin", time: "11:36" },
  { id: 2, text: `Hi! I have a question about ${state}.`, isOwn: true, author: USER_NAME, time: "11:38" },
];
