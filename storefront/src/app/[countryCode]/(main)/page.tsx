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
          <div className="relative w-full flex flex-col lg:flex-row items-end justify-between gap-12 border-b border-kefi-maroon/5 pb-16">
            <div className="flex flex-col gap-8 max-w-xl">
              <div className="flex items-center gap-4">
                <span className="text-kefi-maroon font-semibold uppercase tracking-[0.3em] text-[10px]">
                  Selective Range
                </span>
                <div className="w-12 h-px bg-kefi-maroon/20"></div>
              </div>
              <h2 className="text-kefi-brown font-serif text-5xl md:text-6xl lg:text-7xl font-normal leading-none tracking-tight">
                Curated <br />
                <span className="italic text-kefi-maroon/80">Collections</span>
              </h2>
            </div>

            <div className="max-w-md flex flex-col gap-8">
              <p className="text-kefi-taupe text-base md:text-lg font-light leading-relaxed">
                We believe that every candle tells a story. Our curated collections are thoughtfully assembled to help you build an atmosphere that resonates with your personal narrative.
              </p>
              <div className="grid grid-cols-2 gap-8 border-l border-kefi-maroon/10 pl-8">
                <div className="flex flex-col gap-1">
                  <span className="text-kefi-brown font-serif italic text-2xl">01</span>
                  <span className="text-[10px] uppercase tracking-widest text-kefi-maroon/60 font-bold">Home Signature</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-kefi-brown font-serif italic text-2xl">02</span>
                  <span className="text-[10px] uppercase tracking-widest text-kefi-maroon/60 font-bold">Seasonal Release</span>
                </div>
              </div>
            </div>
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
