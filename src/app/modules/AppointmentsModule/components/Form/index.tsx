import { Row, Col, Button } from "antd";
import _ from "lodash";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../../../components/Input";
import { schema } from "../../schema";
import { Appointment } from "../../types";
import RadioButton from "../../../../components/RadioButton";
import * as S from "../../style/styles";
import Date from "../../../../components/Date";
import Time from "../../../../components/Time";

export default function Form() {
  const { handleSubmit, control, formState } = useForm<Appointment>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  const { errors } = formState;
  const submitForm = (data: Appointment) => {
    console.log("da : ", data);
  };
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <S.FormItem>
        <Col span={24}>
          <Input
            control={control}
            inputName="name"
            placeholder={"Enter your name"}
            error={_.get(errors, "name")}
          />
        </Col>
        <Col span={24}>
          <RadioButton
            control={control}
            inputName="gender"
            defaultValue={"Male"}
            error={_.get(errors, "gender")}
            options={[
              { value: "Male", label: "Male" },
              { value: "Female", label: "Female" },
            ]}
          />
        </Col>
        <Col span={24}>
          <Input
            control={control}
            inputName="age"
            error={_.get(errors, "age")}
            type="number"
            placeholder="Enter your age"
          />
        </Col>
        <Col span={24}>
          <Date
            control={control}
            inputName="date"
            error={_.get(errors, "date")}
          />
        </Col>
        <Col span={24}>
          <Time
            control={control}
            inputName="time"
            error={_.get(errors, "time")}
          />
        </Col>
        <Col span={24}>
          <Button type="default" htmlType="button">
            Cancel
          </Button>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Col>
      </S.FormItem>
    </form>
  );
}
