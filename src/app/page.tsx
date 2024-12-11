'use client'

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ui/toggle-button-theme";
import { useState } from "react";

export default function Home() {
  const [ formState, setFormState] = useState({})
  const submit = () => {
  console.log('Hola :)')
  }

  return (

    
    <div className="grid">
      <ModeToggle />
      <Button />

      <Form onSubmit={submit}>
        <Input name='TestName' />

      </Form>
    </div>
  );
}
