"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
} from "react";
import { useForm } from "react-hook-form";
import { InputProps } from "./input";

interface FormProps {
  children: ReactElement;
}

export const Form = ({ children }: FormProps) => {
  const { control } = useForm({});
  return (
    <form>
      {Children.map(children, (child) => {
        if (isValidElement<InputProps>(child)) {
          return cloneElement(child, { formController: control });
        }

        return child;
      })}
    </form>

  );
};
