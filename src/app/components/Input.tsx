import { Input as AntInput, Tooltip } from "antd";
import { Controller } from "react-hook-form";
import { InputProps } from "antd/es/input";
import * as S from "./styles";

interface Props extends InputProps {
  control: any;
  inputName: string;
  placeholder?: string;
  error?: any;
}

export default function Input({
  control,
  inputName,
  placeholder = "",
  defaultValue = "",
  error,
  ...props
}: Props) {
  return (
    <>
      <Controller
        control={control}
        name={inputName}
        // rules={rules}
        defaultValue={defaultValue}
        render={({ field: { onChange, value, name } }) => (
          <AntInput
            value={value}
            onChange={(v) => {
              onChange(v);
            }}
            placeholder={placeholder}
            name={name}
            autoComplete={"new-password"}
            {...props}
          />
        )}
      />
      <S.ErrorMessage>{error && error.message}</S.ErrorMessage>
    </>
  );
}
