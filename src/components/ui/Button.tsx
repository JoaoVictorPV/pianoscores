import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-neon-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-950)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-neon-500)] text-black hover:bg-[var(--color-neon-400)]",
        secondary:
          "border border-[var(--color-border)] bg-[var(--color-panel-900)] text-[var(--color-foreground)] hover:bg-[color-mix(in_oklab,var(--color-panel-900),white_6%)]",
        segmented:
          "border border-[var(--color-border)] bg-[rgba(0,0,0,0.18)] text-[var(--color-foreground)] hover:bg-[rgba(0,0,0,0.28)]",
        ghost:
          "text-[var(--color-foreground)] hover:bg-[color-mix(in_oklab,var(--color-panel-900),white_6%)]",
      },
      size: {
        sm: "h-9 px-3",
        md: "h-11 px-4",
        lg: "h-12 px-5 text-base",
      },
    },
    defaultVariants: {
      variant: "secondary",
      size: "md",
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
