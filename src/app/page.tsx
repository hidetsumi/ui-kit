"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ui/toggle-button-theme";
import { z } from "zod";

const signupSchema = z
  .object({
    nombre: z.string().max(15),
    apellido: z.string().max(15),
  })
  .required();

export default function Home() {
  const submit = () => {
    console.log("Hola :)");
  };

  return (
    <div className="grid">
      <ModeToggle />
      <Button />

      <Form
        onSubmit={submit}
        schema={signupSchema}
        defaultValues={{ nombre: "test", apellido: "testApellido" }}
      >
        <Input name="nombre" label="Username"/>
        <Input name='apellido' />
        <Button ></Button>
      </Form>


    </div>
  );
}
