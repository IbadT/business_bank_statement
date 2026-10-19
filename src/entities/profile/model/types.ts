export type ProfileType = "personal" | "business";

export interface Profile {
  id: string;
  type: ProfileType;
  /** Заголовок карточки: "Name Surname" либо название компании */
  title: string;
  data: Record<string, string>;
}
