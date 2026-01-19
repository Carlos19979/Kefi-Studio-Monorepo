"use client"

import { Button } from "@modules/common"
import React from "react"
import { useFormStatus } from "react-dom"

export function SubmitButton({
  children,
  variant = "primary",
  className,
  "data-testid": dataTestId,
}: {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline" | "danger" | "transparent" | null
  className?: string
  "data-testid"?: string
}) {
  const { pending } = useFormStatus()

  return (
    <Button
      className={className}
      variant={variant === "transparent" ? "outline" : (variant || "primary")}
      isLoading={pending}
      type="submit"
      data-testid={dataTestId}
    >
      {children}
    </Button>
  )
}
