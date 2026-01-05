import { getCategoriesList } from "@lib/data/categories"
import { getCollectionsList } from "@lib/data/collections"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="w-full bg-kefi-maroon text-kefi-cream pt-20 pb-10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 border-b border-white/10 pb-16">
          {/* Brand Section */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-white">
              <div className="size-6">
                <svg
                  className="w-full h-full text-white"
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
              <span className="text-xl font-serif font-medium tracking-wide">
                Kefi Studio
              </span>
            </div>
            <p className="text-white/60 text-sm font-light leading-relaxed max-w-xs">
              Luxury artisanal candles made with care and intention.
              Illuminating homes with sophisticated fragrances since 2023.
            </p>
          </div>

          <div className="hidden md:block md:col-span-2"></div>

          {/* Navigation Sections */}
          <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Shop/Categories */}
            {product_categories && product_categories?.length > 0 && (
              <div className="flex flex-col gap-6">
                <h4 className="text-white font-medium uppercase tracking-[0.2em] text-[10px]">
                  Shop
                </h4>
                <div className="flex flex-col gap-3">
                  {product_categories?.slice(0, 4).map((c) => {
                    if (c.parent_category) {
                      return null
                    }
                    return (
                      <LocalizedClientLink
                        key={c.id}
                        className="text-white/60 text-sm hover:text-white transition-colors"
                        href={`/categories/${c.handle}`}
                        data-testid="category-link"
                      >
                        {c.name}
                      </LocalizedClientLink>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Collections */}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-6">
                <h4 className="text-white font-medium uppercase tracking-[0.2em] text-[10px]">
                  Collections
                </h4>
                <div className="flex flex-col gap-3">
                  {collections?.slice(0, 4).map((c) => (
                    <LocalizedClientLink
                      key={c.id}
                      className="text-white/60 text-sm hover:text-white transition-colors"
                      href={`/collections/${c.handle}`}
                    >
                      {c.title}
                    </LocalizedClientLink>
                  ))}
                </div>
              </div>
            )}

            {/* Company */}
            <div className="flex flex-col gap-6">
              <h4 className="text-white font-medium uppercase tracking-[0.2em] text-[10px]">
                Company
              </h4>
              <div className="flex flex-col gap-3">
                <LocalizedClientLink
                  className="text-white/60 text-sm hover:text-white transition-colors"
                  href="/about"
                >
                  Our Story
                </LocalizedClientLink>
                <LocalizedClientLink
                  className="text-white/60 text-sm hover:text-white transition-colors"
                  href="/account"
                >
                  Account
                </LocalizedClientLink>
                <LocalizedClientLink
                  className="text-white/60 text-sm hover:text-white transition-colors"
                  href="/contact"
                >
                  Contact Us
                </LocalizedClientLink>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs tracking-wide">
            © {new Date().getFullYear()} Kefi Studio. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              className="text-white/40 text-xs hover:text-white transition-colors uppercase tracking-wider"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-white/40 text-xs hover:text-white transition-colors uppercase tracking-wider"
              href="#"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
