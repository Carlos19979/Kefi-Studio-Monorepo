import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative mx-auto bg-kefi-cream/95 backdrop-blur-sm border-b border-kefi-border transition-all duration-300">
        <nav className="flex items-center justify-between px-6 py-5 md:px-12 lg:px-24 max-w-[1600px] mx-auto w-full">
          {/* Left Navigation - Desktop */}
          <div className="hidden md:flex items-center gap-10 flex-1">
            <LocalizedClientLink
              href="/store"
              className="text-xs font-medium tracking-[0.15em] uppercase hover:text-kefi-maroon transition-colors duration-300"
              data-testid="nav-store-link"
            >
              Shop
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/collections"
              className="text-xs font-medium tracking-[0.15em] uppercase hover:text-kefi-maroon transition-colors duration-300"
            >
              Collections
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/about"
              className="text-xs font-medium tracking-[0.15em] uppercase hover:text-kefi-maroon transition-colors duration-300"
            >
              About
            </LocalizedClientLink>
          </div>

          {/* Center Logo */}
          <LocalizedClientLink
            href="/"
            className="flex items-center gap-3 group flex-shrink-0"
            data-testid="nav-home-link"
          >
            <div className="size-7 text-kefi-maroon">
              <svg
                className="w-full h-full transition-transform group-hover:rotate-12 duration-500 ease-out"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-kefi-maroon font-serif text-2xl font-bold tracking-wider uppercase">
              Kefi Studio
            </h2>
          </LocalizedClientLink>

          {/* Right Utilities */}
          <div className="flex items-center justify-end gap-2 flex-1">
            {/* Search - Desktop */}
            {process.env.NEXT_PUBLIC_FEATURE_SEARCH_ENABLED && (
              <LocalizedClientLink
                href="/search"
                className="hidden md:flex items-center justify-center size-10 rounded-full hover:bg-kefi-paper text-kefi-brown transition-colors"
                scroll={false}
                data-testid="nav-search-link"
              >
                <span className="material-symbols-outlined text-[20px] font-light">
                  search
                </span>
              </LocalizedClientLink>
            )}

            {/* Account - Desktop */}
            <LocalizedClientLink
              href="/account"
              className="hidden md:flex items-center justify-center size-10 rounded-full hover:bg-kefi-paper text-kefi-brown transition-colors"
              data-testid="nav-account-link"
            >
              <span className="material-symbols-outlined text-[20px] font-light">
                account_circle
              </span>
            </LocalizedClientLink>

            {/* Cart */}
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="flex items-center justify-center size-10 rounded-full hover:bg-kefi-paper text-kefi-brown transition-colors relative"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  <span className="material-symbols-outlined text-[20px] font-light">
                    shopping_bag
                  </span>
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>

            {/* Mobile Menu */}
            <div className="flex md:hidden">
              <SideMenu regions={regions} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
