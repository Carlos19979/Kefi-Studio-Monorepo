import { Metadata } from "next"
import Image from "next/image"
import Hero from "@modules/home/components/hero"
import SignatureScents from "@modules/home/components/signature-scents"
import ArtOfIllumination from "@modules/home/components/art-of-illumination"
import Philosophy from "@modules/home/components/philosophy"
import { getDictionary } from "@lib/dictionaries/get-dictionary"
import { Locale } from "@lib/dictionaries/i18n-config"

export const metadata: Metadata = {
  title: "Kefi Studio | Artisanal Candles",
  description:
    "Hand-poured artisanal candles crafted for moments of tranquility. Experience the warmth of sustainable soy wax and curated fragrances.",
}

export default async function Home({
  params,
}: {
  params: Promise<{ countryCode: string; lang: Locale }>
}) {
  const { countryCode, lang } = await params
  const dict = await getDictionary(lang)

  return (
    <>
      <Hero dict={dict.home.hero} />
      <Philosophy dict={dict.home.philosophy} />
      {/* Signature Scents - Kept as requested but can be refined later */}
      <SignatureScents dict={dict.home.signature} />

      <section className="w-full bg-kefi-cream overflow-hidden border-y border-kefi-brown/5">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
          {/* Image - Left Side - Refined with padding to match other sections */}
          <div className="flex items-center justify-center p-8 md:p-12 lg:p-16 bg-neutral-50/50">
            <div className="relative w-full aspect-square md:aspect-[4/3] max-w-xl shadow-2xl rounded-sm overflow-hidden group">
              <Image
                src="/images/curated-collections-v5.png"
                alt="Kefi Studio curated collections"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-kefi-brown/10 mix-blend-multiply"></div>
            </div>
          </div>

          {/* Text Content - Right Side */}
          <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 bg-kefi-cream/30">
            <div className="max-w-xl mx-auto md:mx-0 flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <span className="text-kefi-maroon font-bold uppercase tracking-[0.3em] text-[10px]">
                  {dict.home.curated.label}
                </span>
                <h2 className="text-kefi-brown font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
                  {dict.home.curated.title.split(' ')[0]} <br />
                  <span className="italic opacity-80 underline underline-offset-8 decoration-1 decoration-kefi-maroon/20">{dict.home.curated.title.split(' ')[1]}</span>
                </h2>
              </div>
              <div className="w-12 h-px bg-kefi-maroon/30"></div>
              <p className="text-kefi-brown/70 text-base md:text-lg font-light leading-relaxed">
                {dict.home.curated.description}
              </p>
              <div className="pt-4">
                <button className="underline decoration-1 underline-offset-8 text-kefi-maroon hover:text-kefi-brown transition-colors uppercase tracking-[0.15em] text-xs font-semibold">
                  {dict.home.curated.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ArtOfIllumination dict={dict.home.illumination} />
    </>
  )
}
