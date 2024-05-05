export enum Specie {
  RED = "red",
  LEMON = "lemon",
  ICEYE = "iceye",
}

export interface IPet {
  id: string;
  specie: Specie;
  isOwned: boolean;
}

export interface ICoordinate {
  x: number;
  y: number;
}

export interface IPetState {
  petsInStock: IPet[];
  petsInFarm: (IPet & ICoordinate)[];
}
