import React from "react"
import Spinner from "@modules/common/icons/spinner"
import { clx } from "@medusajs/ui"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading?: boolean
    variant?: "primary" | "secondary" | "outline" | "danger"
    className?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            className,
            isLoading = false,
            variant = "primary",
            disabled,
            ...props
        },
        ref
    ) => {
        const variantClasses = {
            primary:
                "bg-kefi-maroon text-kefi-cream border border-kefi-maroon hover:bg-kefi-maroon-dark hover:border-kefi-maroon-dark",
            secondary:
                "bg-kefi-cream text-kefi-maroon border border-kefi-maroon hover:bg-kefi-paper",
            outline:
                "bg-transparent text-kefi-maroon border border-kefi-border hover:border-kefi-maroon",
            danger:
                "bg-red-500 text-white border border-red-500 hover:bg-red-600",
        }

        return (
            <button
                {...props}
                className={clx(
                    "inline-flex items-center justify-center px-6 py-3 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
                    variantClasses[variant],
                    className
                )}
                disabled={disabled || isLoading}
                ref={ref}
            >
                {isLoading ? <Spinner /> : children}
            </button>
        )
    }
)

Button.displayName = "Button"

export default Button
