export interface PetState {
  petsInStock: Pet[];
  petsInFarm: (Pet & Coordinate)[];
}

export type Pet = {
  id: string;
};

export type Coordinate = {
  x: number;
  y: number;
};
