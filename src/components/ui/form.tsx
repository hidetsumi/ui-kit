"use client";

import {  ReactElement } from "react";
import {
  DefaultValues,
  FormProvider,
  useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type ValidSchema = z.ZodObject<{
  [K: string]: z.ZodTypeAny;
}>;

type InferredFormData<TSchema extends ValidSchema> = z.infer<TSchema>;

interface FormProps<TSchema extends ValidSchema> {
  children: ReactElement[] | ReactElement;
  onSubmit: (data: InferredFormData<TSchema>) => void;
  defaultValues: DefaultValues<InferredFormData<TSchema>>;
  schema: TSchema;
  className?: string
}

export const Form = <TSchema extends ValidSchema>({
  children,
  onSubmit,
  defaultValues,
  schema,
  className
}: FormProps<TSchema>) => {
  const methods = useForm<InferredFormData<TSchema>>({
    defaultValues,
    resolver: zodResolver(schema),
  });
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={className}>
      {children}
      </form>
    </FormProvider>
  );
};
