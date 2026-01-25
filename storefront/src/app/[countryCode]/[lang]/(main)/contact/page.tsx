import { Metadata } from "next"
import Image from "next/image"
import { getDictionary } from "@lib/dictionaries/get-dictionary"
import { Locale } from "@lib/dictionaries/i18n-config"
import FAQItem from "./faq-item"
import ContactForm from "./contact-form"

import contactHero from "../../../../../../public/images/about-hero-v2.png"

export const metadata: Metadata = {
    title: "Contact Us | Kefi Studio",
    description:
        "Get in touch with Kefi Studio. We're here to answer your questions about our artisanal candles.",
}

export default async function ContactPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params
    const dict = await getDictionary(lang)
    const content = dict.contact

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
                <Image
                    src={contactHero}
                    alt="Contact Kefi Studio"
                    fill
                    priority

                    className="object-cover object-center"
                    sizes="100vw"
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-kefi-brown/60 via-kefi-brown/40 to-kefi-brown/70 z-[1]"></div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                    <span className="text-white/80 text-xs tracking-[0.3em] uppercase mb-4">
                        {content.hero.label}
                    </span>
                    <h1 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl font-light">
                        {content.hero.title}
                    </h1>
                    <p className="text-white/90 text-base md:text-lg mt-4 max-w-2xl font-light">
                        {content.hero.description}
                    </p>
                </div>
            </section>


            {/* Contact Form */}
            <section className="w-full max-w-[1400px] px-6 md:px-12 lg:px-24 py-20 md:py-28 mx-auto">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-kefi-brown mb-4">
                            {content.form.title}
                        </h2>
                    </div>

                    <ContactForm dict={content} />
                </div>
            </section>

            {/* FAQ Section */}
            <section className="w-full bg-kefi-paper py-20 md:py-28">
                <div className="w-full max-w-[1400px] px-6 md:px-12 lg:px-24 mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-kefi-maroon font-medium tracking-[0.25em] uppercase text-xs mb-4 block">
                            {content.faq.label}
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-kefi-brown">
                            {content.faq.title}
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto bg-white rounded-sm shadow-xl p-8 md:p-12">
                        {content.faq.questions.map((faq: { question: string; answer: string }, index: number) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
