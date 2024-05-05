import { AnnouncementType, DailyReward, IAnnouncement } from "./types";

export const DAILY_REWARDS: DailyReward[] = [
  {
    name: "Grape",
    imageUrl: "assets/icons/grape.svg",
    date: "Sunday",
    isReceived: false,
  },
  {
    name: "Clover",
    imageUrl: "assets/icons/clover.svg",
    date: "Monday",
    isReceived: false,
  },
  {
    name: "Cheese",
    imageUrl: "assets/icons/cheese.svg",
    date: "Tuesday",
    isReceived: false,
  },
  {
    name: "Milk",
    imageUrl: "assets/icons/cannedTuna.svg",
    date: "Wednesday",
    isReceived: false,
  },
  {
    name: "Book",
    imageUrl: "assets/icons/book.svg",
    date: "Thursday",
    isReceived: false,
  },
  {
    name: "Potion",
    imageUrl: "assets/icons/potion.svg",
    date: "Friday",
    isReceived: false,
  },
  {
    name: "Diamond",
    imageUrl: "assets/icons/diamond.svg",
    date: "Saturday",
    isReceived: false,
  },
];

export const ANNOUNCEMENTS: IAnnouncement[] = [
  {
    type: AnnouncementType.EVENT,
    message:
      "A new pet Lemon was just released. Visit the Wheel of Fortune to have a look.",
  },
  {
    type: AnnouncementType.FARM,
    message: "Your pet ‘Icie’ has grown to level 12.",
  },
  {
    type: AnnouncementType.WARNING,
    message:
      "Our system received there are many users lost their accounts due to using unknown code sent by hackers. Please be careful!",
  },
  {
    type: AnnouncementType.EVENT,
    message:
      "A new pet Lemon was just released. Visit the Wheel of Fortune to have a look.",
  },
  {
    type: AnnouncementType.FARM,
    message: "Your pet ‘Icie’ has grown to level 12.",
  },
  {
    type: AnnouncementType.WARNING,
    message:
      "Our system received there are many users lost their accounts due to using unknown code sent by hackers. Please be careful!",
  },
  {
    type: AnnouncementType.EVENT,
    message:
      "A new pet Lemon was just released. Visit the Wheel of Fortune to have a look.",
  },
  {
    type: AnnouncementType.FARM,
    message: "Your pet ‘Icie’ has grown to level 12.",
  },
  {
    type: AnnouncementType.WARNING,
    message:
      "Our system received there are many users lost their accounts due to using unknown code sent by hackers. Please be careful!",
  },
  {
    type: AnnouncementType.EVENT,
    message:
      "A new pet Lemon was just released. Visit the Wheel of Fortune to have a look.",
  },
  {
    type: AnnouncementType.FARM,
    message: "Your pet ‘Icie’ has grown to level 12.",
  },
  {
    type: AnnouncementType.WARNING,
    message:
      "Our system received there are many users lost their accounts due to using unknown code sent by hackers. Please be careful!",
  },
];
