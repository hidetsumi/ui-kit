import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ui/toggle-button-theme";

export default function Home() {
  return (
    <div className="grid">
      <ModeToggle />
      <Button />

      <Form>
        <Input name='TestName' />

      </Form>
    </div>
  );
}
