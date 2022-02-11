import { Button, Col, Row, Select } from "antd";
import * as S from "../style/styles";
export default function SubHeader() {
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
          defaultValue="2022"
        />
        <Select
          options={[
            { value: 2019, label: 2019 },
            { value: 2020, label: 2020 },
            { value: 2021, label: 2021 },
            { value: 2022, label: 2022 },
          ]}
          defaultValue="2022"
        />
      </Col>
      <Col>
        <Button>Create</Button>
      </Col>
    </S.SubHeader>
  );
}
