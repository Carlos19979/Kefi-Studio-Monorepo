"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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
      label: "Price: Low → High",
    },
    {
      value: "price_desc",
      label: "Price: High → Low",
    },
  ]

const SortProducts = ({
  sortBy,
  setQueryParams,
  "data-testid": dataTestId,
}: SortProductsProps) => {
  const handleChange = (value: SortOptions) => {
    setQueryParams("sortBy", value)
  }

  return (
    <div className="flex items-center gap-4">
      <span className="text-kefi-maroon font-bold tracking-[0.2em] uppercase text-xs">
        Sort By:
      </span>
      <Select value={sortBy} onValueChange={handleChange}>
        <SelectTrigger
          className="w-[200px] border-kefi-border bg-transparent text-kefi-brown hover:bg-kefi-paper transition-colors"
          data-testid={dataTestId}
        >
          <SelectValue placeholder="Select sorting" />
        </SelectTrigger>
        <SelectContent className="bg-kefi-cream border-kefi-border">
          {sortOptions.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="text-kefi-brown hover:bg-kefi-paper hover:text-kefi-maroon cursor-pointer"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default SortProducts
