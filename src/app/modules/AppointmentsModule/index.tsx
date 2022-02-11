import { Layout } from "antd";
import SubHeader from "./components/SubHeader";
import WeekDays from "./components/WeekDays";
import * as S from "./style/styles";

const { Header, Content } = Layout;

export default function AppointmentsModule() {
  return (
    <S.Container>
      <Header>
        <S.Header>Doctor's Appointment Calendar</S.Header>
      </Header>
      <Content>
        <SubHeader />
        <WeekDays />
      </Content>
    </S.Container>
  );
}
