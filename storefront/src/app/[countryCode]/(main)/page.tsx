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

      <section className="w-full bg-white py-24 lg:py-32">
        <div className="max-w-[1600px] px-6 md:px-12 lg:px-24 mx-auto grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-16 lg:gap-24">
          {/* Left Side: Editorial Content */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <span className="text-kefi-maroon font-medium uppercase tracking-[0.3em] text-xs">
                Selected For You
              </span>
              <h2 className="text-kefi-brown font-serif text-5xl md:text-6xl font-normal leading-tight">
                Curated <br />
                <span className="italic opacity-80">Collections</span>
              </h2>
            </div>
            <div className="w-12 h-px bg-kefi-maroon/30"></div>
            <p className="text-kefi-taupe text-base md:text-lg font-light leading-relaxed">
              Discover our most loved fragrances, thoughtfully grouped to help you find the perfect scent for every room and mood. From the calming notes of our Signature line to the bold aromas of our seasonal releases.
            </p>

            {/* Added a subtle decorative image/element to ground the text side */}
            <div className="hidden lg:block relative aspect-[3/4] w-full max-w-[300px] overflow-hidden rounded-sm group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: 'url("/images/curated-collections-v1.png")' }}
              ></div>
              <div className="absolute inset-0 bg-kefi-brown/20 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-40"></div>
            </div>
          </div>

          {/* Right Side: Product Grid */}
          <div className="flex flex-col gap-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8 lg:gap-x-12">
              <FeaturedProducts collections={collections} region={region} />
            </div>
          </div>
        </div>
      </section>

      <ArtOfIllumination />
    </>
  )
}
