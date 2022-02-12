import { Layout, Modal, Spin } from "antd";
import SubHeader from "./components/SubHeader";
import * as S from "./style/styles";
import Calendar from "./components/Calendar";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Form from "./components/Form";
import { useDispatch, useSelector } from "react-redux";
import { selectAppointment } from "./slice/selectors";
import { setAppointments, setLoading, setMonth, setYear } from "./slice";
import { getAllAppointments } from "./slice/api";
import { storageData } from "../../../utils/storageData";
import { Appointment } from "./types";

const { Header, Content } = Layout;

export default function AppointmentsModule() {
  const { year, month, loading, appointments } = useSelector(selectAppointment);
  const dispatch = useDispatch();
  const params = useParams<{ year?: string; month?: string }>();
  const history = useHistory();
  const [visible, setVisible] = useState(false);

  console.log("app : ", appointments);

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
        });
    }
    fetchAllAppointments();
  }, []);

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
          <Calendar month={month} year={year} appointments={appointments} />
        </Content>
        <Modal
          visible={visible}
          title="Title"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <Form />
        </Modal>
      </S.Container>
    </Spin>
  );
}
