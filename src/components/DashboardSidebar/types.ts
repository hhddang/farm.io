export enum AnnouncementType {
  EVENT = "EVENT",
  FARM = "FARM",
  WARNING = "WARNING",
}

export interface IAnnouncement {
  type: AnnouncementType;
  message: string;
}

export type DailyReward = {
  name: string;
  imageUrl: string;
  date: string;
  isReceived: boolean;
};
