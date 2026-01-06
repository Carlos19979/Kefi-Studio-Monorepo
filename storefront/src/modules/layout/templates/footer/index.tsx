import { getCategoriesList } from "@lib/data/categories"
import { getCollectionsList } from "@lib/data/collections"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import NewsletterForm from "@modules/layout/components/newsletter-form"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="w-full bg-kefi-maroon text-kefi-cream pt-24 pb-12">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24 border-b border-white/5 pb-20">
          {/* Brand & Newsletter */}
          <div className="md:col-span-5 flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <h3 className="text-3xl md:text-4xl font-serif text-white leading-tight">
                Join our <br />
                <span className="italic opacity-80">Inner Circle</span>
              </h3>
              <p className="text-white/60 text-sm font-light leading-relaxed max-w-md">
                Subscribe to receive updates, access to exclusive deals, and more.
              </p>
            </div>
            <NewsletterForm />
          </div>

          <div className="hidden md:block md:col-span-1"></div>

          {/* Navigation Links - Simplified */}
          <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div className="flex flex-col gap-6">
              <h4 className="text-white font-medium uppercase tracking-[0.2em] text-[10px] opacity-40">
                Explore
              </h4>
              <nav className="flex flex-col gap-4">
                <LocalizedClientLink href="/store" className="text-white/80 text-sm hover:text-white transition-colors font-light tracking-wide">
                  All Products
                </LocalizedClientLink>
                <LocalizedClientLink href="/collections/best-sellers" className="text-white/80 text-sm hover:text-white transition-colors font-light tracking-wide">
                  Best Sellers
                </LocalizedClientLink>
                <LocalizedClientLink href="/collections/new-arrivals" className="text-white/80 text-sm hover:text-white transition-colors font-light tracking-wide">
                  New Arrivals
                </LocalizedClientLink>
              </nav>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="text-white font-medium uppercase tracking-[0.2em] text-[10px] opacity-40">
                Support
              </h4>
              <nav className="flex flex-col gap-4">
                <LocalizedClientLink href="/contact" className="text-white/80 text-sm hover:text-white transition-colors font-light tracking-wide">
                  Contact Us
                </LocalizedClientLink>
                <LocalizedClientLink href="/faq" className="text-white/80 text-sm hover:text-white transition-colors font-light tracking-wide">
                  FAQ
                </LocalizedClientLink>
                <LocalizedClientLink href="/shipping" className="text-white/80 text-sm hover:text-white transition-colors font-light tracking-wide">
                  Shipping & Returns
                </LocalizedClientLink>
              </nav>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="text-white font-medium uppercase tracking-[0.2em] text-[10px] opacity-40">
                Company
              </h4>
              <nav className="flex flex-col gap-4">
                <LocalizedClientLink href="/about" className="text-white/80 text-sm hover:text-white transition-colors font-light tracking-wide">
                  Our Story
                </LocalizedClientLink>
                <LocalizedClientLink href="/journal" className="text-white/80 text-sm hover:text-white transition-colors font-light tracking-wide">
                  Journal
                </LocalizedClientLink>
                <LocalizedClientLink href="/account" className="text-white/80 text-sm hover:text-white transition-colors font-light tracking-wide">
                  Account
                </LocalizedClientLink>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-serif text-white tracking-wide">Kefi Studio</span>
          </div>
          <p className="text-white/30 text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} Kefi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
