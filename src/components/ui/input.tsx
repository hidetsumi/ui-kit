"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { 
  useFormContext, 
  Controller,
  Path,
  FieldValues 
} from "react-hook-form";

// We create a comprehensive props interface that works with any form type
interface InputProps<T extends FieldValues> extends Omit<React.ComponentProps<"input">, "name" | "value" | "defaultValue"> {
  // Path<T> ensures that name must be a valid path in our form data structure
  name: Path<T>;
  // Optional label for accessibility
  label?: string;
  // Optional help text or description
  description?: string;
  // We can add other common form field props
  containerClassName?: string;
}

function Input<T extends FieldValues>({ 
  name,
  label,
  description,
  containerClassName,
  className,
  type = "text",
  ...props 
}: InputProps<T>) {
  // Get form context with proper typing
  const {
    formState: { errors },
    control
  } = useFormContext<T>();

  // Type-safe way to access nested errors
  const error = errors[name]?.message as string | undefined;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        // Container div for the entire input group
        <div className={cn("space-y-2", containerClassName)}>
          {/* Label group */}
          {(label || description) && (
            <div className="space-y-1">
              {label && (
                <label 
                  htmlFor={name}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {label}
                </label>
              )}
              {description && (
                <p className="text-[0.8rem] text-muted-foreground">
                  {description}
                </p>
              )}
            </div>
          )}
          
          {/* Input element */}
          <input
            {...field}
            {...props}
            type={type}
            id={name}
            value={field.value ?? ''} // Handle undefined values gracefully
            className={cn(
              // Base styles
              "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1",
              "text-sm shadow-sm transition-colors",
              // Focus styles
              "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
              // Placeholder styles
              "placeholder:text-muted-foreground",
              // Disabled styles
              "disabled:cursor-not-allowed disabled:opacity-50",
              // Error styles
              error && "border-destructive focus-visible:ring-destructive",
              className
            )}
            aria-describedby={
              description ? `${name}-description` : undefined
            }
            aria-invalid={!!error}
          />

          {/* Error message */}
          {error && (
            <p className="text-sm font-medium text-destructive">
              {error}
            </p>
          )}
        </div>
      )}
    />
  );
}

// This helps with debugging and developer tools
Input.displayName = "Input";

// Export with proper type inference
export { Input };
