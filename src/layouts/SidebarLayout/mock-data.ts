import { IPet } from "../../types";
import { Specie } from "../../types/pet";

export const PETS_IN_STOCK: IPet[] = [
  {
    id: "1",
    specie: Specie.RED,
    isOwned: true,
  },
  {
    id: "2",
    specie: Specie.LEMON,
    isOwned: true,
  },
  {
    id: "3",
    specie: Specie.ICEYE,
    isOwned: true,
  },
  {
    id: "4",
    specie: Specie.RED,
    isOwned: true,
  },
  {
    id: "5",
    specie: Specie.LEMON,
    isOwned: true,
  },
  {
    id: "6",
    specie: Specie.ICEYE,
    isOwned: false,
  },
  {
    id: "7",
    specie: Specie.RED,
    isOwned: false,
  },
  {
    id: "8",
    specie: Specie.LEMON,
    isOwned: false,
  },
  {
    id: "9",
    specie: Specie.ICEYE,
    isOwned: false,
  },
];

export const PETS_IN_FARM: IPet[] = [
  {
    id: "10",
    specie: Specie.RED,
    isOwned: true,
  },
  {
    id: "11",
    specie: Specie.LEMON,
    isOwned: true,
  },
  {
    id: "12",
    specie: Specie.ICEYE,
    isOwned: true,
  },
];
