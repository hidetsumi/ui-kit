"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
} from "react";
import { DefaultValues, FieldValues, useForm } from "react-hook-form";
import { InputProps } from "./input";

interface FormProps<T extends FieldValues> {
  children: ReactElement;
  onSubmit: (data: T) => void;
  defaultValues: DefaultValues<T>
}

export const Form = <T extends FieldValues>({ children, onSubmit, defaultValues }: FormProps<T>) => {
  const { control, handleSubmit } = useForm<T>({
    defaultValues
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Children.map(children, (child) => {
        if (isValidElement<InputProps<T>>(child)) {
          return cloneElement(child, { control });
        }

        return child;
      })}
    </form>

  );
};
