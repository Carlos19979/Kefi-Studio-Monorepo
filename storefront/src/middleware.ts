import { HttpTypes } from "@medusajs/types"
import { notFound } from "next/navigation"
import { NextRequest, NextResponse } from "next/server"

const BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL
const PUBLISHABLE_API_KEY = process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY
const DEFAULT_REGION = process.env.NEXT_PUBLIC_DEFAULT_REGION || "us"

const regionMapCache = {
  regionMap: new Map<string, HttpTypes.StoreRegion>(),
  regionMapUpdated: Date.now(),
}

async function getRegionMap() {
  const { regionMap, regionMapUpdated } = regionMapCache

  if (
    !regionMap.keys().next().value ||
    regionMapUpdated < Date.now() - 3600 * 1000
  ) {
    // Fetch regions from Medusa. We can't use the JS client here because middleware is running on Edge and the client needs a Node environment.
    const { regions } = await fetch(`${BACKEND_URL}/store/regions`, {
      headers: {
        "x-publishable-api-key": PUBLISHABLE_API_KEY!,
      },
      next: {
        revalidate: 3600,
        tags: ["regions"],
      },
    }).then((res) => res.json())

    if (!regions?.length) {
      notFound()
    }

    // Create a map of country codes to regions.
    regions.forEach((region: HttpTypes.StoreRegion) => {
      region.countries?.forEach((c) => {
        regionMapCache.regionMap.set(c.iso_2 ?? "", region)
      })
    })

    regionMapCache.regionMapUpdated = Date.now()
  }

  return regionMapCache.regionMap
}

/**
 * Fetches regions from Medusa and sets the region cookie.
 * @param request
 * @param regionMap
 */
async function getCountryCode(
  request: NextRequest,
  regionMap: Map<string, HttpTypes.StoreRegion | number>
) {
  try {
    let countryCode

    const vercelCountryCode = request.headers
      .get("x-vercel-ip-country")
      ?.toLowerCase()

    const urlCountryCode = request.nextUrl.pathname.split("/")[1]?.toLowerCase()

    if (urlCountryCode && regionMap.has(urlCountryCode)) {
      countryCode = urlCountryCode
    } else if (vercelCountryCode && regionMap.has(vercelCountryCode)) {
      countryCode = vercelCountryCode
    } else if (regionMap.has(DEFAULT_REGION)) {
      countryCode = DEFAULT_REGION
    } else if (regionMap.keys().next().value) {
      countryCode = regionMap.keys().next().value
    }

    return countryCode
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error(
        "Middleware.ts: Error getting the country code. Did you set up regions in your Medusa Admin and define a NEXT_PUBLIC_MEDUSA_BACKEND_URL environment variable?"
      )
    }
  }
}

const locales = ["en", "es"]
const defaultLocale = "en"

function getLocale(request: NextRequest) {
  // Check if lang is in cookie
  const langCookie = request.cookies.get("NEXT_LOCALE")?.value
  if (langCookie && locales.includes(langCookie)) {
    return langCookie
  }

  // Check Accept-Language header
  const acceptLanguage = request.headers.get("accept-language")
  if (acceptLanguage) {
    if (acceptLanguage.includes("es")) return "es"
    if (acceptLanguage.includes("en")) return "en"
  }

  return defaultLocale
}

/**
 * Middleware to handle region selection, onboarding status and language selection.
 */
export async function middleware(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const isOnboarding = searchParams.get("onboarding") === "true"
  const cartId = searchParams.get("cart_id")
  const checkoutStep = searchParams.get("step")
  const onboardingCookie = request.cookies.get("_medusa_onboarding")
  const cartIdCookie = request.cookies.get("_medusa_cart_id")

  const regionMap = await getRegionMap()
  const countryCode = regionMap && (await getCountryCode(request, regionMap))

  const pathname = request.nextUrl.pathname
  const segments = pathname.split("/")

  // URL format: /[countryCode]/[lang]/...
  const urlCountryCode = segments[1]?.toLowerCase()
  const urlLang = segments[2]?.toLowerCase()

  const countryCodeExists = urlCountryCode && regionMap?.has(urlCountryCode)
  const langExists = urlLang && locales.includes(urlLang)

  // 1. If URL has both correct countryCode and lang, proceed
  if (countryCodeExists && langExists) {
    return NextResponse.next()
  }

  // 2. Determine correct countryCode and lang
  const finalCountryCode = countryCode || DEFAULT_REGION
  const finalLang = getLocale(request)

  // 3. Construct redirect URL
  let redirectPath = pathname
  if (countryCodeExists) {
    // If countryCode exists but lang doesn't, remove countryCode to start clean
    redirectPath = "/" + segments.slice(2).join("/")
  }
  // Ensure we don't end up with redundant slashes
  redirectPath = redirectPath === "/" ? "" : redirectPath

  const queryString = request.nextUrl.search || ""
  const redirectUrl = new URL(
    `/${finalCountryCode}/${finalLang}${redirectPath}${queryString}`,
    request.nextUrl.origin
  )

  const response = NextResponse.redirect(redirectUrl, 307)

  // If a cart_id is in the params, we set it as a cookie
  if (cartId && !checkoutStep) {
    response.cookies.set("_medusa_cart_id", cartId, { maxAge: 60 * 60 * 24 })
  }

  // Set onboarding cookie if needed
  if (isOnboarding) {
    response.cookies.set("_medusa_onboarding", "true", { maxAge: 60 * 60 * 24 })
  }

  return response
}

export const config = {
  matcher: ["/((?!api|_next/static|favicon.ico|.*\\.png|.*\\.jpg|.*\\.gif|.*\\.svg).*)"], // prevents redirecting on static files
}
