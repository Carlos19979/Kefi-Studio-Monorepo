import { Metadata } from "next"

import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import { getBaseURL } from "@lib/util/env"
import { getDictionary } from "@lib/dictionaries/get-dictionary"
import { Locale } from "@lib/dictionaries/i18n-config"
import PageTransition from "@/components/page-transition"
import { getCategoriesList } from "@lib/data/categories"
import { getCollectionsList } from "@lib/data/collections"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export const dynamic = "force-dynamic"


export default async function PageLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <>
      <Nav lang={lang} dict={dict} />
      <PageTransition>{children}</PageTransition>
      <Footer dict={dict} collections={collections} product_categories={product_categories} />
    </>
  )
}
