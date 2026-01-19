import { Metadata } from "next"
import { notFound } from "next/navigation"

import { ProductTemplate } from "@modules/products"
import { getRegion, listRegions } from "@lib/data/regions"
import { getProductByHandle, getProductsList } from "@lib/data/products"
import { i18n, type Locale } from "@lib/dictionaries/i18n-config"
import { getDictionary } from "@lib/dictionaries/get-dictionary"

type Props = {
  params: Promise<{ countryCode: string; handle: string; lang: string }>
}

export async function generateStaticParams() {
  const countryCodes = await listRegions().then(
    (regions) =>
      regions
        ?.map((r) => r.countries?.map((c) => c.iso_2))
        .flat()
        .filter(Boolean) as string[]
  )

  if (!countryCodes) {
    return null
  }

  const products = await Promise.all(
    countryCodes.map((countryCode) => {
      return getProductsList({ countryCode })
    })
  ).then((responses) =>
    responses.map(({ response }) => response.products).flat()
  )

  const staticParams = countryCodes
    ?.map((countryCode) =>
      i18n.locales.map((lang) =>
        products.map((product) => ({
          countryCode,
          lang,
          handle: product.handle,
        }))
      ).flat()
    )
    .flat()

  return staticParams
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const { handle, countryCode } = params
  const region = await getRegion(countryCode)

  if (!region) {
    notFound()
  }

  const product = await getProductByHandle(handle, region.id)

  if (!product) {
    notFound()
  }

  return {
    title: `${product.title} | Kefi Studio`,
    description: `${product.title}`,
    openGraph: {
      title: `${product.title} | Kefi Studio`,
      description: `${product.title}`,
      images: product.thumbnail ? [product.thumbnail] : [],
    },
  }
}

export default async function ProductPage(props: Props) {
  const params = await props.params
  const { handle, countryCode, lang } = params
  const region = await getRegion(countryCode)

  if (!region) {
    notFound()
  }

  const pricedProduct = await getProductByHandle(handle, region.id)
  if (!pricedProduct) {
    notFound()
  }

  const dict = await getDictionary(lang as Locale)

  return (
    <ProductTemplate
      product={pricedProduct}
      region={region}
      countryCode={countryCode}
      lang={lang as Locale}
      dict={dict}
    />
  )
}
