import { Metadata } from "next"
import StoreTemplate from "@modules/store/templates"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import { Locale } from "@lib/dictionaries/i18n-config"

export const metadata: Metadata = {
    title: "Store",
    description: "Browse all of our products.",
}

type Props = {
    params: Promise<{ countryCode: string; lang: Locale }>
    searchParams: Promise<{ sortBy?: SortOptions; page?: string }>
}

export default async function StorePage({ params, searchParams }: Props) {
    const { countryCode, lang } = await params
    const { sortBy, page } = await searchParams

    return (
        <StoreTemplate
            sortBy={sortBy}
            page={page}
            countryCode={countryCode}
            lang={lang}
        />
    )
}
