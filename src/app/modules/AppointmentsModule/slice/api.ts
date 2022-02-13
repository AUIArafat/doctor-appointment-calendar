import { v4 as uuidv4 } from "uuid";
import { storageData } from "../../../../../src/utils/storageData";
import { Appointment } from "../types";
let appointments = [
  {
    id: uuidv4(),
    name: "Md Arafatul Islam",
    gender: "Male",
    age: "27",
    date: "23/12/2021",
    time: "13:00",
  },
  {
    id: uuidv4(),
    name: "Mark",
    gender: "Male",
    age: "28",
    date: "23/12/2021",
    time: "14:00",
  },
  {
    id: uuidv4(),
    name: "Bob",
    gender: "Female",
    age: "30",
    date: "23/12/2021",
    time: "15:00",
  },
  {
    id: uuidv4(),
    name: "Henry",
    gender: "Female",
    age: "35",
    date: "23/12/2021",
    time: "16:00",
  },
  {
    id: uuidv4(),
    name: "Md Arafatul Islam",
    gender: "Male",
    age: "27",
    date: "25/12/2021",
    time: "13:00",
  },
  {
    id: uuidv4(),
    name: "Mark",
    gender: "Male",
    age: "28",
    date: "25/12/2021",
    time: "14:00",
  },
  {
    id: uuidv4(),
    name: "Bob",
    gender: "Female",
    age: "30",
    date: "24/12/2021",
    time: "15:00",
  },
  {
    id: uuidv4(),
    name: "Henry",
    gender: "Female",
    age: "35",
    date: "23/12/2021",
    time: "12:00",
  },
];

export const createAppointment = (data: Appointment) => {
  return new Promise((resolve, reject) => {
    let isExist = null;
    let allAppointments = storageData.getValue("appointments");
    isExist = allAppointments.find(
      (item: Appointment) => item.time === data.time
    );
    if (isExist)
      setTimeout(() => reject(new Error("This slot is already booked")), 500);
    const id = uuidv4();
    const newAppointment: Appointment = {
      id: id,
      age: data.age,
      date: data.date,
      gender: data.gender,
      name: data.name,
      time: data.time,
    };

    allAppointments = [...allAppointments, newAppointment];
    allAppointments.sort((a: Appointment, b: Appointment) =>
      a.time > b.time ? 1 : -1
    );
    setTimeout(() => resolve(allAppointments), 500);
    setTimeout(() => reject(new Error("Something went wrong!!!")), 500);
  });
};

export const getAllAppointments = () => {
  return new Promise((resolve, reject) => {
    if (
      !storageData.getValue("appointments") ||
      storageData.getValue("appointments") === undefined
    ) {
      storageData.setValue("appointments", appointments);
      setTimeout(() => resolve(appointments), 500);
    } else {
      const appointments = storageData
        .getValue("appointments")
        .sort((a: Appointment, b: Appointment) => (a.time > b.time ? 1 : -1));
      setTimeout(() => resolve(appointments), 500);
    }
    setTimeout(() => reject(new Error("Something went wrong!!!")), 500);
  });
};

export const getAppointmentById = (id: string) => {
  return new Promise((resolve, reject) => {
    let appointment: any;
    if (storageData.getValue("appointments")) {
      appointments = storageData.getValue("appointments");
      appointment = appointments.find((item) => item.id === id);
    }
    setTimeout(() => resolve(appointment), 500);
    setTimeout(() => reject(new Error("Something went wrong!!!")), 500);
  });
};
