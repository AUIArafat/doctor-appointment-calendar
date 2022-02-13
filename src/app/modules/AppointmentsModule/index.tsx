import { Layout, Modal, notification, Spin } from "antd";
import SubHeader from "./components/SubHeader";
import * as S from "./style/styles";
import Calendar from "./components/Calendar";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Form from "./components/Form";
import { useDispatch, useSelector } from "react-redux";
import { selectAppointment } from "./slice/selectors";
import {
  setAppointment,
  setAppointments,
  setError,
  setLoading,
  setMonth,
  setYear,
} from "./slice";
import {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
} from "./slice/api";
import { storageData } from "../../../utils/storageData";
import { Appointment } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useForm } from "react-hook-form";

const { Header, Content } = Layout;

export default function AppointmentsModule() {
  const { year, month, loading, appointments, appointment, error } =
    useSelector(selectAppointment);
  const dispatch = useDispatch();
  const params = useParams<{ year?: string; month?: string }>();
  const history = useHistory();
  const { handleSubmit, control, formState, reset } = useForm<Appointment>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (params?.year) {
      dispatch(setYear(Number(params.year)));
    }
    if (params?.month) {
      dispatch(setMonth(Number(params.month) - 1));
    }
    async function fetchAllAppointments() {
      dispatch(setLoading(true));
      await getAllAppointments()
        .then((res: any) => {
          storageData.setValue("appointments", res);
          dispatch(setAppointments(res));
          dispatch(setLoading(false));
        })
        .catch((error) => {
          dispatch(setLoading(false));
          dispatch(setError(error.toString()));
        });
    }
    fetchAllAppointments();
  }, []);

  useEffect(() => {
    if (error) {
      notification.error({
        message: error,
      });
      dispatch(setError(null));
    }
  }, [error]);

  useEffect(() => {
    if (appointment) setVisible(true);
  }, [appointment]);
  const handleMonth = (month: number) => {
    dispatch(setMonth(month));
    history.push(`/year/${year}/month/${month + 1}`);
  };
  const handleYear = (year: number) => {
    dispatch(setYear(year));
    history.push(`/year/${year}/month/${month + 1}`);
  };
  const handleCreateAppointment = () => {
    setVisible(true);
  };

  const handleOk = () => {
    console.log("Ok");
  };

  const handleCancel = () => {
    setVisible(false);
    reset();
    dispatch(setAppointment(null));
  };
  const submitForm = (data: Appointment) => {
    data.date = dayjs(data.date).format("DD/MM/YYYY");
    data.time = dayjs(data.time).format("HH:mm");
    setVisible(false);
    async function submitAppointments() {
      dispatch(setLoading(true));
      await createAppointment(data)
        .then((res: any) => {
          storageData.setValue("appointments", res);
          dispatch(setAppointments(res));
          dispatch(setLoading(false));
        })
        .catch((error) => {
          dispatch(setLoading(false));
          dispatch(setError(error.toString()));
        });
    }
    submitAppointments();
    reset();
  };
  const handleSelectedAppointment = (id: string) => {
    async function fetchAppointmentsById() {
      dispatch(setLoading(true));
      await getAppointmentById(id)
        .then((res: any) => {
          dispatch(setAppointment(res));
          dispatch(setLoading(false));
        })
        .catch((error) => {
          dispatch(setLoading(false));
          dispatch(setError(error.toString()));
        });
    }
    fetchAppointmentsById();
  };
  return (
    <Spin spinning={loading}>
      <S.Container>
        <Header>
          <S.Header>Doctor's Appointment Calendar</S.Header>
        </Header>
        <Content>
          <SubHeader
            month={month}
            year={year}
            handleMonth={handleMonth}
            handleYear={handleYear}
            handleCreateAppointment={handleCreateAppointment}
          />
          <Calendar
            month={month}
            year={year}
            appointments={appointments}
            handleSelectedAppointment={handleSelectedAppointment}
          />
        </Content>
        <Modal
          visible={visible}
          title={appointment ? "Appointment Details" : "Create New Appointment"}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          {appointment ? (
            <>
              <p>Name: {appointment.name}</p>
              <p>Age: {appointment.age}</p>
              <p>Gender: {appointment.gender}</p>
              <p>Date: {appointment.date}</p>
              <p>Time: {appointment.time}</p>
            </>
          ) : (
            <Form
              submitForm={submitForm}
              handleCancel={handleCancel}
              handleSubmit={handleSubmit}
              control={control}
              formState={formState}
            />
          )}
        </Modal>
      </S.Container>
    </Spin>
  );
}
