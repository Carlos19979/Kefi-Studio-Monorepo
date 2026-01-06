import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  return (
    <div
      className="py-12 small:py-24 content-container"
      data-testid="category-container"
    >
      <div className="mb-12 flex flex-col gap-4 text-center items-center">
        <span className="text-kefi-maroon font-bold tracking-[0.2em] uppercase text-xs">
          Browse Collection
        </span>
        <h1
          data-testid="store-page-title"
          className="text-4xl md:text-5xl font-serif text-kefi-brown font-normal"
        >
          All Products
        </h1>
        <p className="text-kefi-taupe font-serif italic text-lg max-w-2xl">
          Explore our complete collection of hand-poured soy candles.
        </p>
      </div>

      <RefinementList sortBy={sort} />

      <div className="w-full">
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts
            sortBy={sort}
            page={pageNumber}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </div>
  )
}

export default StoreTemplate
