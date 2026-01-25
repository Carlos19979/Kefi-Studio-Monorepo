import { Metadata } from "next"
import Image from "next/image"
import Hero from "@modules/home/components/hero"
import SignatureScents from "@modules/home/components/signature-scents"
import ArtOfIllumination from "@modules/home/components/art-of-illumination"
import Philosophy from "@modules/home/components/philosophy"
import CuratedCollections from "@modules/home/components/curated-collections"
import { LocalizedClientLink } from "@modules/common"
import { getDictionary } from "@lib/dictionaries/get-dictionary"
import { Locale } from "@lib/dictionaries/i18n-config"

export const metadata: Metadata = {
  title: "Kefi Studio | Artisanal Candles",
  description:
    "Hand-poured artisanal candles crafted for moments of tranquility. Experience the warmth of sustainable soy wax and curated fragrances.",
}

import { generateOrganizationSchema } from "@lib/util/json-ld"

export default async function Home({
  params,
}: {
  params: Promise<{ countryCode: string; lang: Locale }>
}) {
  const { countryCode, lang } = await params
  const dict = await getDictionary(lang)
  const jsonLd = generateOrganizationSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero dict={dict.home.hero} />
      <Philosophy dict={dict.home.philosophy} />
      {/* Signature Scents - Kept as requested but can be refined later */}
      <SignatureScents dict={dict.home.signature} />

      <CuratedCollections dict={dict.home.curated} />

      <ArtOfIllumination dict={dict.home.illumination} />
    </>
  )
}
