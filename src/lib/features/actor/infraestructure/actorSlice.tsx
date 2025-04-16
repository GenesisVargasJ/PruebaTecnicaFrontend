'use client';
import Actor from "@/lib/features/actor/domain/Actor";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: Actor[] = [];

export const ActorsSlice = createSlice({
  name: "actors",
  initialState,
  reducers: {
    setActors: (state, action: PayloadAction<Actor[]>) => {
      return action.payload;
    },
  },
});

export const { setActors } = ActorsSlice.actions;

export default ActorsSlice.reducer;