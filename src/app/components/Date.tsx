import { DatePicker } from "antd";
import { Controller } from "react-hook-form";
import * as S from "./styles";

interface Props {
  control: any;
  inputName: string;
  defaultValue?: any;
  error?: any;
}

export default function Date({
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
          <DatePicker
            onChange={(v) => {
              onChange(v);
            }}
            value={value}
            format={"DD/MM/YYYY"}
            inputReadOnly={true}
            defaultValue={defaultValue}
          />
        )}
      />
      <S.ErrorMessage>{error && error.message}</S.ErrorMessage>
    </>
  );
}
