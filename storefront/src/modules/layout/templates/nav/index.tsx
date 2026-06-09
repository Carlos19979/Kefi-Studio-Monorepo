import { Suspense } from "react"
import Image from "next/image"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import { LocalizedClientLink } from "@modules/common"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import LanguageSwitcher from "@modules/layout/components/language-switcher"
import StickyHeader from "@modules/layout/components/sticky-header"
import DesktopNavigation from "./desktop-navigation"

export default async function Nav({ lang, dict }: { lang: string; dict: any }) {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="h-20">
      <StickyHeader>
        <nav className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto w-full text-kefi-brown">
          {/* Left Navigation - Desktop */}
          <div className="hidden md:block flex-1">
            <DesktopNavigation dict={dict} />
          </div>

          {/* Center Logo */}
          <LocalizedClientLink
            href="/"
            className="flex items-center group flex-shrink-0"
            data-testid="nav-home-link"
          >
            <Image
              src="/logo-horizontal.png"
              alt="Kefi Studio"
              width={853}
              height={373}
              priority
              className="h-12 sm:h-14 w-auto transition-opacity group-hover:opacity-80"
            />
          </LocalizedClientLink>

          {/* Right Utilities */}
          <div className="flex items-center justify-end gap-4 flex-1">
            {/* Language Switcher - Desktop */}
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>

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
                  className="flex items-center justify-center size-11 rounded-full hover:bg-kefi-paper text-kefi-brown transition-colors relative"
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
              <SideMenu regions={regions} dict={dict} />
            </div>
          </div>
        </nav>
      </StickyHeader>
    </div>
  )
}
