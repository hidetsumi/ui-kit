import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/toggle-button-theme";

export default function Home() {
  return (
    <div className="grid">
      <ModeToggle />
      <Button />
    </div>
  );
}
