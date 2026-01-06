"use client"

import { ChangeEvent } from "react"
import { clx } from "@medusajs/ui"
import FilterRadioGroup from "@modules/common/components/filter-radio-group"

export type SortOptions = "price_asc" | "price_desc" | "created_at"

type SortProductsProps = {
  sortBy: SortOptions
  setQueryParams: (name: string, value: SortOptions) => void
  "data-testid"?: string
}

const sortOptions: {
  value: SortOptions
  label: string
}[] = [
    {
      value: "created_at",
      label: "Newest Arrivals",
    },
    {
      value: "price_asc",
      label: "Price: Low -> High",
    },
    {
      value: "price_desc",
      label: "Price: High -> Low",
    },
  ]

const SortProducts = ({
  sortBy,
  setQueryParams,
  "data-testid": dataTestId,
}: SortProductsProps) => {
  const handleChange = (e: React.MouseEvent<HTMLButtonElement>, value: SortOptions) => {
    setQueryParams("sortBy", value)
  }

  return (
    <div className="flex items-center gap-4">
      <span className="text-kefi-maroon font-bold tracking-[0.2em] uppercase text-xs">
        Sort By:
      </span>
      <ul className="flex items-center gap-6">
        {sortOptions.map((option) => (
          <li key={option.value}>
            <button
              className={clx(
                "text-sm font-sans tracking-wide transition-colors duration-200 hover:text-kefi-maroon",
                {
                  "text-kefi-brown font-semibold underline decoration-1 underline-offset-4": option.value === sortBy,
                  "text-kefi-taupe": option.value !== sortBy,
                }
              )}
              onClick={(e) => handleChange(e, option.value)}
              data-testid={dataTestId}
            >
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SortProducts
