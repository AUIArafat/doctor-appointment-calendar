import { configureStore } from "@reduxjs/toolkit";
import appointmentReducer from "./modules/AppointmentsModule/slice";

export const store = configureStore({
  reducer: {
    appointment: appointmentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
