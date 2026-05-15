import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide transition-all",
  {
    variants: {
      variant: {
        default:
          "border-[rgba(248,250,252,0.2)] bg-[rgba(248,250,252,0.07)] text-[#F8FAFC]",
        cyan:
          "border-[rgba(6,182,212,0.45)] bg-[rgba(6,182,212,0.12)] text-[#06B6D4] animate-glow-pulse",
        outline:
          "border-[rgba(248,250,252,0.25)] bg-transparent text-[#94A3B8]",
        solid:
          "border-[#06B6D4] bg-[#06B6D4] text-[#0F172A]",
      },
    },
    defaultVariants: { variant: "default" },
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
