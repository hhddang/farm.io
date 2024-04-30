import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Coordinate, Pet, PetState } from "../../types";
import { randomizeCoordinate } from "../../utilities/helpers";

const initialState: PetState = {
  petsInStock: [],
  petsInFarm: [],
};

export const petSlice = createSlice({
  name: "pet",
  initialState,
  reducers: {
    setPetsInStock: (state, action: PayloadAction<Pet[]>) => {
      state.petsInStock = action.payload;
    },
    setPetsInFarm: (state, action: PayloadAction<Pet[]>) => {
      const pets = action.payload;
      const petsWithCoordinates: (Pet & Coordinate)[] = pets.map((pet) => {
        const { x, y } = randomizeCoordinate();
        return { ...pet, x, y };
      });
      state.petsInFarm = petsWithCoordinates;
    },
    moveToFarm: (state, action: PayloadAction<Pet>) => {
      const pet = action.payload;
      const { x, y } = randomizeCoordinate();
      state.petsInStock = state.petsInStock.filter(
        (petInStock) => petInStock.id !== pet.id
      );
      state.petsInFarm = [...state.petsInFarm, { ...pet, x, y }];
    },
    moveToStock: (state, action: PayloadAction<Pet>) => {
      const pet = action.payload;
      state.petsInFarm = state.petsInFarm.filter(
        (petInFarm) => petInFarm.id !== pet.id
      );
      state.petsInStock = [...state.petsInStock, { ...pet }];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPetsInStock, setPetsInFarm, moveToFarm, moveToStock } =
  petSlice.actions;

export default petSlice.reducer;
