import { Controller } from "react-hook-form";
import { Radio, RadioGroupProps } from "antd";

interface Props extends RadioGroupProps {
  control: any;
  inputName: string;
  placeholder?: string;
  error?: any;
  options: { value: string; label: string }[];
}

export default function RadioButton({
  control,
  inputName,
  defaultValue,
  error,
  options,
  ...props
}: Props) {
  return (
    <Controller
      control={control}
      name={inputName}
      defaultValue={defaultValue}
      render={({ field: { onChange, value, name } }) => (
        <Radio.Group
          defaultValue={defaultValue}
          onChange={(v) => onChange(v.target.value)}
          value={value}
          name={name}
          {...props}
        >
          {options.map((button, index) => (
            <Radio.Button
              value={button.value}
              className="button-radio button-radio-default"
              key={index}
            >
              {button.label}
            </Radio.Button>
          ))}
        </Radio.Group>
      )}
    />
  );
}
