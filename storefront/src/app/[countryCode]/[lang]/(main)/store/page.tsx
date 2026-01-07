import { Metadata } from "next"

import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import StoreTemplate from "@modules/store/templates"
import { Locale } from "@lib/dictionaries/i18n-config"

type Params = {
  searchParams: {
    sortBy?: SortOptions
    page?: string
  }
  params: Promise<{
    countryCode: string
    lang: string
  }>
}

export const metadata: Metadata = {
  title: "Store",
  description: "Explore all of our products.",
}

export default async function StorePage({ searchParams, params }: Params) {
  const { sortBy, page } = searchParams
  const { countryCode, lang } = await params

  return (
    <StoreTemplate
      sortBy={sortBy}
      page={page}
      countryCode={countryCode}
      lang={lang as Locale}
    />
  )
}
