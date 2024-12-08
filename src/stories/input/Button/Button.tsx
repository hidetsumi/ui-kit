import { Button, ButtonProps } from '@/components/ui/button';
import React from 'react';


// export interface ButtonProps {
//   /** Is this the principal call to action on the page? */
//   primary?: boolean;
//   /** What background color to use */
//   backgroundColor?: string;
//   /** How large should the button be? */
//   // size?: 'small' | 'medium' | 'large';
//   /** Button contents */
//   label: string;
//   /** Optional click handler */
//   onClick?: () => void;
// }

/** Primary UI component for user interaction */
export const ButtonStorybook = ({
  children,
  ...props
}: ButtonProps) => {
  return (
    <Button
      type="button"
      className="flex"
      {...props}
    >
      {children}
    </Button>
  );
};
