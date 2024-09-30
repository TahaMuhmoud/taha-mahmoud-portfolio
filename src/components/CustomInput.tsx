import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
interface CustomInput {
  label: string;
  id: string;
  type: string;
  errorText?: string;
  register: UseFormRegisterReturn<string>;
  inputProps?: React.DetailedHTMLProps<
    React.InsHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}
const CustomInput = ({
  label,
  type,
  id,
  register,
  inputProps,
  errorText,
}: CustomInput) => {
  return (
    <div className="flex flex-col gap-2 font-txt">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        className="bg-secondary/20 p-3 outline-none"
        {...inputProps}
        {...register}
      />
      {errorText && <p className="text-red-600 text-xs">{errorText}</p>}
    </div>
  );
};

export default CustomInput;
