import { Appointment } from "../types";

/* --- STATE --- */
export interface AppointmentState {
  appointments: Appointment[] | null;
  year: number;
  month: number;
  loading: boolean;
}
