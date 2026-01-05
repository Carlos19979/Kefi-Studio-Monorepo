import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import SignatureScents from "@modules/home/components/signature-scents"
import ArtOfIllumination from "@modules/home/components/art-of-illumination"
import NewsletterSignup from "@modules/home/components/newsletter-signup"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Kefi Studio | Artisanal Candles",
  description:
    "Hand-poured artisanal candles crafted for moments of tranquility. Experience the warmth of sustainable soy wax and curated fragrances.",
}

export default async function Home({
  params,
}: {
  params: Promise<{ countryCode: string }>
}) {
  const { countryCode } = await params
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <SignatureScents />
      <section className="w-full max-w-[1600px] px-6 md:px-12 lg:px-24 pb-20 md:pb-24 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 md:gap-y-16 gap-x-6 md:gap-x-8">
          <FeaturedProducts collections={collections} region={region} />
        </div>
      </section>
      <ArtOfIllumination />
      <NewsletterSignup />
    </>
  )
}
