import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold text-sm tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A] disabled:pointer-events-none disabled:opacity-50 btn-hover",
  {
    variants: {
      variant: {
        default:
          "bg-[#F8FAFC] text-[#0F172A] border border-[#F8FAFC] hover:bg-transparent hover:text-[#F8FAFC] hover:shadow-[0_0_24px_rgba(248,250,252,0.2)]",
        cyan:
          "bg-[#06B6D4] text-[#0F172A] border border-[#06B6D4] hover:bg-transparent hover:text-[#06B6D4] hover:shadow-[0_0_24px_rgba(6,182,212,0.45)]",
        outline:
          "bg-transparent text-[#F8FAFC] border border-[rgba(248,250,252,0.3)] hover:border-[#06B6D4] hover:text-[#06B6D4] hover:shadow-[0_0_18px_rgba(6,182,212,0.2)]",
        ghost:
          "bg-transparent text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[rgba(248,250,252,0.06)]",
        link:
          "bg-transparent text-[#06B6D4] underline-offset-4 hover:underline p-0 rounded-none",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm:      "h-9  px-4 py-2 text-xs",
        lg:      "h-13 px-8 py-3 text-base",
        icon:    "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
