import * as React from "react";

import { cn } from "@/lib/cn";

export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-neon-500),transparent_94%)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-foreground)]",
        className,
      )}
      {...props}
    />
  );
}
