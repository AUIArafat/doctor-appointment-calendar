import * as yup from "yup";

const shape = {
  name: yup.string().required(),
  age: yup.string().required(),
  date: yup.date().required(),
  time: yup.date().required(),
};
export const schema = yup.object(shape);
