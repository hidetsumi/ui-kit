import * as React from "react";

import { cn } from "@/lib/utils";
import { Control, Controller, FieldValues } from "react-hook-form";

export interface InputProps<T extends Record<string, any>> extends React.ComponentProps<"input"> {
  control?: Control<T>;
  onClick?: () => void;
  name: Extract<keyof T, string>;
}

const Input = React.forwardRef<HTMLInputElement, InputProps<FieldValues>>(
  ({ className, type, control, name, ...props }, ref) => {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field: {name, onBlur, value, onChange} }) => (
          <input
            ref={ref}
            type={type}
            className={cn(
              "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              className,
            )}
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            name={name}
            {...props}
          />
        )}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
