import { Metadata } from "next"
import { getDictionary } from "@lib/dictionaries/get-dictionary"
import { Locale } from "@lib/dictionaries/i18n-config"

export const metadata: Metadata = {
    title: "Shipping & Returns Policy | Kefi Studio",
    description:
        "Learn about our shipping and returns policy. Handmade candles shipped from Barcelona, Spain.",
}

export default async function ShippingPolicyPage({
    params,
}: {
    params: Promise<{ countryCode: string; lang: Locale }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang)
    const policy = dict.shipping_policy

    return (
        <div className="w-full bg-white">
            {/* Hero Section */}
            <section className="w-full bg-kefi-cream py-16 sm:py-20 md:py-24 border-b border-kefi-brown/5">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12 text-center">
                    <span className="text-kefi-maroon font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
                        {policy.subtitle}
                    </span>
                    <h1 className="text-kefi-brown font-serif text-4xl sm:text-5xl md:text-6xl font-normal">
                        {policy.title}
                    </h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="w-full py-16 sm:py-20 md:py-24">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12">
                    <div className="flex flex-col gap-12 sm:gap-16">

                        {/* Shipping */}
                        <div className="flex flex-col gap-6">
                            <h2 className="text-kefi-brown font-serif text-2xl sm:text-3xl md:text-4xl font-normal">
                                {policy.shipping.title}
                            </h2>
                            <ul className="flex flex-col gap-4">
                                {policy.shipping.items.map((item: string, index: number) => (
                                    <li key={index} className="flex gap-3">
                                        <span className="text-kefi-maroon mt-1.5">•</span>
                                        <span className="text-kefi-brown/80 text-base md:text-lg font-light leading-relaxed">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Returns */}
                        <div className="flex flex-col gap-6">
                            <h2 className="text-kefi-brown font-serif text-2xl sm:text-3xl md:text-4xl font-normal">
                                {policy.returns.title}
                            </h2>
                            <p className="text-kefi-brown/80 text-base md:text-lg font-light leading-relaxed">
                                {policy.returns.intro}
                            </p>
                            <ul className="flex flex-col gap-4">
                                {policy.returns.items.map((item: string, index: number) => (
                                    <li key={index} className="flex gap-3">
                                        <span className="text-kefi-maroon mt-1.5">•</span>
                                        <span className="text-kefi-brown/80 text-base md:text-lg font-light leading-relaxed">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Return Conditions */}
                        <div className="flex flex-col gap-6">
                            <h2 className="text-kefi-brown font-serif text-2xl sm:text-3xl md:text-4xl font-normal">
                                {policy.conditions.title}
                            </h2>
                            <ul className="flex flex-col gap-4">
                                {policy.conditions.items.map((item: string, index: number) => (
                                    <li key={index} className="flex gap-3">
                                        <span className="text-kefi-maroon mt-1.5">•</span>
                                        <span className="text-kefi-brown/80 text-base md:text-lg font-light leading-relaxed">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Return Shipping */}
                        <div className="flex flex-col gap-6">
                            <h2 className="text-kefi-brown font-serif text-2xl sm:text-3xl md:text-4xl font-normal">
                                {policy.return_shipping.title}
                            </h2>
                            <ul className="flex flex-col gap-4">
                                {policy.return_shipping.items.map((item: string, index: number) => (
                                    <li key={index} className="flex gap-3">
                                        <span className="text-kefi-maroon mt-1.5">•</span>
                                        <span className="text-kefi-brown/80 text-base md:text-lg font-light leading-relaxed">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Cancellations */}
                        <div className="flex flex-col gap-6">
                            <h2 className="text-kefi-brown font-serif text-2xl sm:text-3xl md:text-4xl font-normal">
                                {policy.cancellations.title}
                            </h2>
                            <ul className="flex flex-col gap-4">
                                {policy.cancellations.items.map((item: string, index: number) => (
                                    <li key={index} className="flex gap-3">
                                        <span className="text-kefi-maroon mt-1.5">•</span>
                                        <span className="text-kefi-brown/80 text-base md:text-lg font-light leading-relaxed">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Section */}
                        <div className="mt-8 p-8 bg-kefi-cream rounded-sm border border-kefi-brown/10">
                            <p className="text-kefi-brown/80 text-base md:text-lg font-light leading-relaxed text-center">
                                {lang === 'es'
                                    ? '¿Tienes preguntas? Contáctanos en '
                                    : 'Have questions? Contact us at '}
                                <a
                                    href="mailto:hello@kefistudio.com"
                                    className="text-kefi-maroon hover:underline font-medium"
                                >
                                    hello@kefistudio.com
                                </a>
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
