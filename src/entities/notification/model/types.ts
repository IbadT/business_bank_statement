export interface NotificationCategory {
  id: string;
  label: string;
  rating: number;
  email: string;
  date: string;
}

export interface NotificationItemData {
  title: string;
  time: string;
  type: string;
}

export interface NotificationGroupData {
  date: string;
  items: NotificationItemData[];
}
