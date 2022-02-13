import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { Appointment } from "../types";
import { AppointmentState } from "./types";

const currentYear = dayjs().year();
const currentMonth = dayjs().month();
export const initialState: AppointmentState = {
  appointments: null,
  appointment: null,
  year: currentYear,
  month: currentMonth,
  loading: false,
  error: null,
};

export const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setYear: (state, action: PayloadAction<number>) => {
      state.year = action.payload;
    },
    setMonth: (state, action: PayloadAction<number>) => {
      state.month = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setAppointments: (state, action: PayloadAction<Appointment[]>) => {
      state.appointments = action.payload;
    },
    setAppointment: (state, action: PayloadAction<Appointment | null>) => {
      state.appointment = action.payload;
    },
  },
});

export const {
  setYear,
  setMonth,
  setLoading,
  setAppointments,
  setAppointment,
  setError,
} = appointmentSlice.actions;

export default appointmentSlice.reducer;
