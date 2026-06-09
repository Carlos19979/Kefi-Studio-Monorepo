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
    <div className="h-16">
      <StickyHeader>
        <nav className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto w-full text-kefi-brown">
          {/* Left Navigation - Desktop */}
          <div className="hidden md:block flex-1">
            <DesktopNavigation dict={dict} />
          </div>

          {/* Center Logo */}
          <LocalizedClientLink
            href="/"
            className="flex items-center gap-3 group flex-shrink-0"
            data-testid="nav-home-link"
          >
            <Image
              src="/logo-mark.png"
              alt=""
              width={44}
              height={138}
              priority
              className="h-8 sm:h-9 w-auto transition-transform group-hover:rotate-12 duration-500 ease-out"
            />
            <h2 className="text-kefi-maroon font-serif text-xl sm:text-2xl font-bold tracking-wider uppercase">
              Kefi Studio
            </h2>
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
