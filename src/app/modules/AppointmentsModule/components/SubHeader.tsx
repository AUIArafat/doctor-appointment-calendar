import { Button, Col, Row, Select } from "antd";
import * as S from "../style/styles";
interface Props {
  month: number;
  year: number;
  handleMonth: (month: number) => void;
  handleYear: (year: number) => void;
  handleCreateAppointment: () => void;
}
export default function SubHeader(props: Props) {
  const { month, year, handleMonth, handleYear, handleCreateAppointment } =
    props;
  return (
    <S.SubHeader>
      <Col>
        <Select
          options={[
            { value: 2019, label: 2019 },
            { value: 2020, label: 2020 },
            { value: 2021, label: 2021 },
            { value: 2022, label: 2022 },
          ]}
          value={year}
          onChange={(val) => handleYear(val)}
        />
        <Select
          options={[
            { value: 0, label: "Jan" },
            { value: 1, label: "Feb" },
            { value: 2, label: "Mar" },
            { value: 3, label: "Apr" },
            { value: 4, label: "May" },
            { value: 5, label: "Jun" },
            { value: 6, label: "Jul" },
            { value: 7, label: "Aug" },
            { value: 8, label: "Sep" },
            { value: 9, label: "Oct" },
            { value: 10, label: "Nov" },
            { value: 11, label: "Dec" },
          ]}
          value={month}
          onChange={(val) => handleMonth(val)}
        />
      </Col>
      <Col>
        <Button onClick={handleCreateAppointment}>Create</Button>
      </Col>
    </S.SubHeader>
  );
}
