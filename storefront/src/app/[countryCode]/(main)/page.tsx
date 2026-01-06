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

import Philosophy from "@modules/home/components/philosophy"

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
      <Philosophy />
      {/* Signature Scents - Kept as requested but can be refined later */}
      <SignatureScents />

      <section className="w-full bg-white py-24">
        <div className="max-w-[1600px] px-6 md:px-12 lg:px-24 mx-auto flex flex-col gap-16">
          <div className="flex flex-col items-center text-center gap-4">
            <span className="text-kefi-maroon font-medium uppercase tracking-[0.2em] text-xs">
              Selected For You
            </span>
            <h2 className="text-kefi-brown font-serif text-4xl md:text-5xl font-normal">
              Curated Collections
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
            <FeaturedProducts collections={collections} region={region} />
          </div>
        </div>
      </section>

      <ArtOfIllumination />
    </>
  )
}
