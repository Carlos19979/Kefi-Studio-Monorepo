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
      <body>
        <main className="relative">{props.children}</main>
        <Toaster />
      </body>
    </html>
  )
}
