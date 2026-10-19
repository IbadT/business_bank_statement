import type { NotificationCategory, NotificationGroupData } from "./types";

export const notificationCategories: NotificationCategory[] = [
  { id: "seller", label: "Contact seller", rating: 5, email: "user123@gmail.com", date: "03/22" },
  { id: "pdf", label: "PDF's", rating: 4, email: "user124@gmail.com", date: "03/22" },
  { id: "support", label: "Support", rating: 5, email: "user125@gmail.com", date: "03/22" },
  { id: "referral", label: "Referral program", rating: 4, email: "user126@gmail.com", date: "03/22" },
];

export const notificationGenerationTypes = [
  "Universal",
  "Bank Statement",
  "Tax Return",
  "Pay Stub",
  "Insurance",
  "Bill",
  "Other",
];

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

export const UNIVERSAL_TYPE = notificationGenerationTypes[0];

const dayItems = [
  { title: "Oracle Security Update: New Features Added", time: "12:03", type: "Bank Statement" },
  { title: "Special Promo: Complete Verification for Bonus", time: "12:03", type: "Tax Return" },
  { title: lorem, time: "12:03", type: "Pay Stub" },
  { title: "Oracle Security Update: New Features Added", time: "12:03", type: "Insurance" },
];

export const notificationGroups: NotificationGroupData[] = [
  { date: "March 20, 2025", items: dayItems },
  { date: "March 20, 2025", items: dayItems },
];

export const filterNotificationGroups = (
  groups: NotificationGroupData[],
  type: string,
): NotificationGroupData[] =>
  type === UNIVERSAL_TYPE
    ? groups
    : groups
        .map((group) => ({ ...group, items: group.items.filter((item) => item.type === type) }))
        .filter((group) => group.items.length > 0);
