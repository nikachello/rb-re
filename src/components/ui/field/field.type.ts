import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface IFieldProps {
  placeholder: string;
  error?: FieldError;
}

export type TypeInputProps = InputHTMLAttributes<HTMLInputElement> &
  IFieldProps;
