import React from "react";
import { useForm } from "react-hook-form";

interface Props {
  name: string;
  type: string;
  placeholder: string;
  register: any;
  errors: any;
  message: string;
  defaultValue?: string;
}
const UseFormInput = ({
  name,
  type,
  placeholder,
  register,
  errors,
  message,
  defaultValue,
}: Props) => {
  return (
    <div className="ufi-wrapper">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        ref={register({ required: message })}
        defaultValue={defaultValue}
      />
      <p className="ufi-error">{errors[name]?.message}</p>
    </div>
  );
};

export default UseFormInput;
