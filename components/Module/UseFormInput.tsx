import React from "react";

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

export default React.memo(UseFormInput);
