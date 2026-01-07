import { Metadata } from "next"
import Image from "next/image"
import Hero from "@modules/home/components/hero"
import SignatureScents from "@modules/home/components/signature-scents"
import ArtOfIllumination from "@modules/home/components/art-of-illumination"
import Philosophy from "@modules/home/components/philosophy"

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
  await params // Ensure params is awaited if needed

  return (
    <>
      <Hero />
      <Philosophy />
      {/* Signature Scents - Kept as requested but can be refined later */}
      <SignatureScents />

      <section className="w-full bg-[#FCFBF9] overflow-hidden border-y border-kefi-brown/5">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">
          {/* Image - Left Side */}
          <div className="relative w-full aspect-square md:aspect-auto overflow-hidden group">
            <Image
              src="/images/curated-collections-v1.png"
              alt="Kefi Studio curated collections"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-kefi-brown/10 mix-blend-multiply"></div>
          </div>

          {/* Text Content - Right Side */}
          <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 bg-kefi-cream/30">
            <div className="max-w-xl mx-auto md:mx-0 flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <span className="text-kefi-maroon font-bold uppercase tracking-[0.3em] text-[10px]">
                  Selected For You
                </span>
                <h2 className="text-kefi-brown font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
                  Curated <br />
                  <span className="italic opacity-80 underline underline-offset-8 decoration-1 decoration-kefi-maroon/20">Collections</span>
                </h2>
              </div>
              <div className="w-12 h-px bg-kefi-maroon/30"></div>
              <p className="text-kefi-brown/70 text-base md:text-lg font-light leading-relaxed">
                Discover our most loved fragrances, thoughtfully grouped to help you find the perfect scent for every room and mood. From the calming notes of our Signature line to the bold aromas of our seasonal releases.
              </p>
              <div className="pt-4">
                <button className="underline decoration-1 underline-offset-8 text-kefi-maroon hover:text-kefi-brown transition-colors uppercase tracking-[0.15em] text-xs font-semibold">
                  Explore Collections
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ArtOfIllumination />
    </>
  )
}
