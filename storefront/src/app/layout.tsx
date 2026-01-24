import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"
import { Toaster } from "@/components/ui/toaster"
import { Cormorant_Garamond, Montserrat, Playfair_Display } from "next/font/google"
import { cn } from "@lib/utils"

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
  // Variable font, so we can omit weights or include them if needed for specific subsetting.
  // Including common range to be safe.
})

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: {
    default: "Kefi Studio | Artisanal Candles",
    template: "%s | Kefi Studio",
  },
  description: "Hand-poured artisanal candles crafted for moments of tranquility. Sustainable soy wax and curated fragrances.",
  openGraph: {
    title: "Kefi Studio | Artisanal Candles",
    description: "Hand-poured artisanal candles crafted for moments of tranquility.",
    url: getBaseURL(),
    siteName: "Kefi Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kefi Studio | Artisanal Candles",
    description: "Hand-poured artisanal candles crafted for moments of tranquility.",
    creator: "@kefistudio", // Replace with actual handle if available
  },
  alternates: {
    canonical: "./",
  },
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-mode="light"
      suppressHydrationWarning
      className={cn(
        cormorantGaramond.variable,
        montserrat.variable,
        playfairDisplay.variable
      )}
    >
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body>
        <main className="relative">{props.children}</main>
        <Toaster />
      </body>
    </html>
  )
}
