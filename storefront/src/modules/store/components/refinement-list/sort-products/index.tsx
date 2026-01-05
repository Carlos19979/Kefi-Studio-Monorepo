```typescript
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
    <ul className="flex flex-col gap-3 min-w-[150px]">
      <span className="text-kefi-maroon font-bold tracking-[0.2em] uppercase text-xs mb-2">
        Sort By
      </span>
      {sortOptions.map((option) => (
        <li key={option.value}>
          <button
            className={clx(
              "text-sm font-sans tracking-wide transition-colors duration-200 text-left hover:text-kefi-maroon w-full",
              {
                "text-kefi-brown font-semibold": option.value === sortBy,
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
  )
}

export default SortProducts
