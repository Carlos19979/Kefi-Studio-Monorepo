import { getCategoriesList } from "@lib/data/categories"
import { getCollectionsList } from "@lib/data/collections"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import NewsletterForm from "@modules/layout/components/newsletter-form"

export default async function Footer({ dict }: { dict: any }) {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)
  const content = dict.footer

  return (
    <footer className="w-full bg-kefi-maroon text-kefi-cream pt-24 pb-12">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 border-b border-white/5 pb-16">
          {/* Brand & Newsletter - Left Side */}
          <div className="md:col-span-5 flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <h3 className="text-3xl md:text-4xl font-serif text-white leading-tight">
                {content.newsletter.title_main} <br />
                <span className="italic opacity-80">{content.newsletter.title_italic}</span>
              </h3>
              <p className="text-white/60 text-sm font-light leading-relaxed max-w-md">
                {content.newsletter.description}
              </p>
            </div>
            <NewsletterForm dict={content.newsletter} />
          </div>

          {/* Right Side: Navigation + Contact Info */}
          <div className="md:col-span-7 flex flex-col gap-12">
            {/* Navigation Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
              <div className="flex flex-col gap-6">
                <h4 className="text-white font-medium uppercase tracking-[0.2em] text-[10px] opacity-40">
                  {content.explore.title}
                </h4>
                <nav className="flex flex-col gap-4">
                  <LocalizedClientLink href="/store" className="text-white/80 text-sm hover:text-white transition-colors font-light tracking-wide">
                    {content.explore.all_products}
                  </LocalizedClientLink>
                  <LocalizedClientLink href="/collections/best-sellers" className="text-white/80 text-sm hover:text-white transition-colors font-light tracking-wide">
                    {content.explore.best_sellers}
                  </LocalizedClientLink>
                  <LocalizedClientLink href="/collections/new-arrivals" className="text-white/80 text-sm hover:text-white transition-colors font-light tracking-wide">
                    {content.explore.new_arrivals}
                  </LocalizedClientLink>
                </nav>
              </div>

              <div className="flex flex-col gap-6">
                <h4 className="text-white font-medium uppercase tracking-[0.2em] text-[10px] opacity-40">
                  {content.support.title}
                </h4>
                <nav className="flex flex-col gap-4">
                  <LocalizedClientLink href="/contact" className="text-white/80 text-sm hover:text-white transition-colors font-light tracking-wide">
                    {content.support.contact}
                  </LocalizedClientLink>
                  <LocalizedClientLink href="/faq" className="text-white/80 text-sm hover:text-white transition-colors font-light tracking-wide">
                    {content.support.faq}
                  </LocalizedClientLink>
                  <LocalizedClientLink href="/shipping-policy" className="text-white/80 text-sm hover:text-white transition-colors font-light tracking-wide">
                    {content.support.shipping}
                  </LocalizedClientLink>
                </nav>
              </div>

              <div className="flex flex-col gap-6">
                <h4 className="text-white font-medium uppercase tracking-[0.2em] text-[10px] opacity-40">
                  {content.company.title}
                </h4>
                <nav className="flex flex-col gap-4">
                  <LocalizedClientLink href="/about" className="text-white/80 text-sm hover:text-white transition-colors font-light tracking-wide">
                    {content.company.our_story}
                  </LocalizedClientLink>
                  <LocalizedClientLink href="/journal" className="text-white/80 text-sm hover:text-white transition-colors font-light tracking-wide">
                    {content.company.journal}
                  </LocalizedClientLink>
                  <LocalizedClientLink href="/account" className="text-white/80 text-sm hover:text-white transition-colors font-light tracking-wide">
                    {content.company.account}
                  </LocalizedClientLink>
                </nav>
              </div>
            </div>

            {/* Contact Info - Below Navigation */}
            <div className="flex flex-row justify-end gap-16">
              {/* Email */}
              <div className="flex flex-col items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-[20px]">
                    mail
                  </span>
                </div>
                <span className="text-white/40 text-[10px] uppercase tracking-[0.2em]">
                  {content.contact?.email?.label || 'Correo'}
                </span>
                <a
                  href="mailto:hello@kefistudio.com"
                  className="text-white/80 text-sm hover:text-white transition-colors"
                >
                  hello@kefistudio.com
                </a>
              </div>

              {/* Studio Location */}
              <div className="flex flex-col items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-[20px]">
                    location_on
                  </span>
                </div>
                <span className="text-white/40 text-[10px] uppercase tracking-[0.2em]">
                  {content.contact?.address?.label || 'Estudio'}
                </span>
                <span className="text-white/80 text-sm">
                  {content.contact?.address?.value || 'Valencia'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-serif text-white tracking-wide">Kefi Studio</span>
          </div>
          <p className="text-white/30 text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} Kefi. {content.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
