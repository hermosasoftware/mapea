import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

// Instalar class-variance-authority para mejor gestión de variantes
const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-mapea-olive text-white hover:opacity-90 focus-visible:ring-mapea-olive',
        destructive: 'bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500',
        outline: 'border-2 border-mapea-olive text-mapea-olive hover:bg-mapea-olive hover:text-mapea-black focus-visible:ring-mapea-olive',
        secondary: 'bg-mapea-dark-gray text-white hover:opacity-90 focus-visible:ring-mapea-dark-gray',
        ghost: 'text-mapea-dark-gray hover:bg-mapea-light-gray/20 focus-visible:ring-mapea-olive',
        link: 'text-mapea-olive underline-offset-4 hover:underline focus-visible:ring-mapea-olive',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-12 rounded-lg px-8',
        xl: 'h-14 rounded-lg px-12 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={clsx(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };


