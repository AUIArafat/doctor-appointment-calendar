import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../../../app/store";
import { initialState } from "./index";

const selectSlice = (state: RootState) => state?.appointment || initialState;

export const selectAppointment = createSelector(
  [selectSlice],
  (state) => state
);
