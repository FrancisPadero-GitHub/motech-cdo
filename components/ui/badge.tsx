import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-sm border px-2.5 py-1 text-[11px] font-mono font-medium tracking-wide uppercase transition-colors focus:outline-none focus:ring-1 focus:ring-ring select-none",
  {
    variants: {
      variant: {
        default:
          "border-primary/50 bg-primary/20 text-red-200 shadow-sm",
        secondary:
          "border-border/80 bg-neutral-900/90 text-neutral-300",
        destructive:
          "border-destructive/50 bg-destructive/20 text-red-300",
        outline:
          "border-border/70 bg-transparent text-neutral-300",
        success:
          "border-emerald-500/40 bg-emerald-950/40 text-emerald-400",
        accent:
          "border-primary/50 bg-neutral-900/90 text-neutral-200 border-l-2 border-l-primary",
        hud:
          "border-white/15 bg-neutral-950/80 text-neutral-200 backdrop-blur-md",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
