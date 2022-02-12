import { TimePicker } from "antd";
import { Controller } from "react-hook-form";
import * as S from "./styles";

interface Props {
  control: any;
  inputName: string;
  defaultValue?: any;
  error?: any;
}

export default function Time({
  control,
  inputName,
  defaultValue,
  error,
}: Props) {
  return (
    <>
      <Controller
        control={control}
        name={inputName}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <TimePicker
            onChange={(v) => {
              onChange(v);
            }}
            value={value}
            inputReadOnly={true}
            defaultValue={defaultValue}
            format={"HH:mm"}
          />
        )}
      />
      <S.ErrorMessage>{error && error.message}</S.ErrorMessage>
    </>
  );
}
