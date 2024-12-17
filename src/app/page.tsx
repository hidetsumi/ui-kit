"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ui/toggle-button-theme";
import { z } from "zod";

const signupSchema = z
  .object({
    nombre: z.string().max(15, {message: "Tiene que tener maximo 15 caracteres"}),
    apellido: z.string().max(15),
  })
  .required();

export default function Home() {
  const submit = (data: z.infer<typeof signupSchema>) => {
    console.log(data.apellido, data.nombre);
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
        <Button type="submit"> Crear cuenta</Button>
      </Form>


    </div>
  );
}
