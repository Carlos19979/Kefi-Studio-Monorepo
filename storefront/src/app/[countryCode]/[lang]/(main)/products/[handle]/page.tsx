import { Metadata } from "next"
import { notFound } from "next/navigation"

import { ProductTemplate } from "@modules/products"
import { getRegion, listRegions } from "@lib/data/regions"
import { getProductByHandle, getProductsList } from "@lib/data/products"
import { i18n, type Locale } from "@lib/dictionaries/i18n-config"
import { getDictionary } from "@lib/dictionaries/get-dictionary"
import { HttpTypes } from "@medusajs/types"

type Props = {
  params: Promise<{ countryCode: string; handle: string; lang: string }>
}

export async function generateStaticParams() {
  const countryCodes = await listRegions().then(
    (regions: HttpTypes.StoreRegion[] | null) =>
      regions
        ?.map((r) => r.countries?.map((c) => c.iso_2))
        .flat()
        .filter(Boolean) as string[]
  )

  if (!countryCodes) {
    return null
  }

  const products = await Promise.all(
    countryCodes.map((countryCode: string) => {
      return getProductsList({ countryCode })
    })
  ).then((responses) =>
    responses.map(({ response }: { response: { products: HttpTypes.StoreProduct[] } }) => response.products).flat()
  )

  const staticParams = countryCodes
    ?.map((countryCode: string) =>
      i18n.locales.map((lang) =>
        products.map((product: HttpTypes.StoreProduct) => ({
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

import { generateBreadcrumbSchema, generateProductSchema } from "@lib/util/json-ld"

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

  const productJsonLd = generateProductSchema(pricedProduct)
  const breadcrumbJsonLd = generateBreadcrumbSchema([
    { name: "Home", url: `${process.env.NEXT_PUBLIC_BASE_URL}` },
    { name: "Store", url: `${process.env.NEXT_PUBLIC_BASE_URL}/store` },
    { name: pricedProduct.title, url: `${process.env.NEXT_PUBLIC_BASE_URL}/products/${handle}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ProductTemplate
        product={pricedProduct}
        region={region}
        countryCode={countryCode}
        lang={lang as Locale}
        dict={dict}
      />
    </>
  )
}
