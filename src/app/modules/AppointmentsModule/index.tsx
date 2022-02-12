import { Layout } from "antd";
import SubHeader from "./components/SubHeader";
import * as S from "./style/styles";
import Calendar from "./components/Calendar";
import { useParams } from "react-router-dom";

const { Header, Content } = Layout;

export default function AppointmentsModule() {
  const params = useParams<{ year?: string; month?: string }>();
  console.log(params);

  return (
    <S.Container>
      <Header>
        <S.Header>Doctor's Appointment Calendar</S.Header>
      </Header>
      <Content>
        <SubHeader />
        <Calendar />
      </Content>
    </S.Container>
  );
}
