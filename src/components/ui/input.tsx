import * as React from "react";

import { cn } from "@/lib/utils";
import { Control, Controller } from "react-hook-form";

export interface InputProps extends React.ComponentProps<"input"> {
  formController?: Control;
  onClick?: () => void;
  name: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, formController, name, ...props }, ref) => {
    return (
      <Controller
        control={formController}
        name={name}
        render={({ field }) => (
          <input
            type={type}
            className={cn(
              "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              className,
            )}
            {...field}
            {...props}
          />
        )}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
