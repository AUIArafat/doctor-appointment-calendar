import { Appointment } from "../types";

/* --- STATE --- */
export interface AppointmentState {
  appointments: Appointment[] | null;
  appointment: Appointment | null;
  year: number;
  month: number;
  loading: boolean;
  error: string | null;
}
