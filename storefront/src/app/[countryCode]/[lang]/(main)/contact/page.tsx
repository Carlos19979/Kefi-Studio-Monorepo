import { Metadata } from "next"
import Image from "next/image"
import { getDictionary } from "@lib/dictionaries/get-dictionary"
import { Locale } from "@lib/dictionaries/i18n-config"
import FAQItem from "./faq-item"

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
                    placeholder="blur"
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

            {/* Contact Information */}
            <section className="w-full bg-kefi-paper py-16 md:py-20">
                <div className="w-full max-w-[1400px] px-6 md:px-12 lg:px-24 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                        {/* Email */}
                        <div className="flex flex-col items-center text-center gap-4 group">
                            <div className="size-16 rounded-full bg-kefi-maroon/10 flex items-center justify-center text-kefi-maroon group-hover:bg-kefi-maroon group-hover:text-white transition-all duration-500">
                                <span className="material-symbols-outlined text-3xl">
                                    mail
                                </span>
                            </div>
                            <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-kefi-maroon">
                                {content.info.email.label}
                            </h3>
                            <a
                                href={`mailto:${content.info.email.value}`}
                                className="text-kefi-brown hover:text-kefi-maroon transition-colors text-lg"
                            >
                                {content.info.email.value}
                            </a>
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col items-center text-center gap-4 group">
                            <div className="size-16 rounded-full bg-kefi-maroon/10 flex items-center justify-center text-kefi-maroon group-hover:bg-kefi-maroon group-hover:text-white transition-all duration-500">
                                <span className="material-symbols-outlined text-3xl">
                                    call
                                </span>
                            </div>
                            <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-kefi-maroon">
                                {content.info.phone.label}
                            </h3>
                            <a
                                href={`tel:${content.info.phone.value.replace(/\s/g, '')}`}
                                className="text-kefi-brown hover:text-kefi-maroon transition-colors text-lg"
                            >
                                {content.info.phone.value}
                            </a>
                        </div>

                        {/* Address */}
                        <div className="flex flex-col items-center text-center gap-4 group">
                            <div className="size-16 rounded-full bg-kefi-maroon/10 flex items-center justify-center text-kefi-maroon group-hover:bg-kefi-maroon group-hover:text-white transition-all duration-500">
                                <span className="material-symbols-outlined text-3xl">
                                    location_on
                                </span>
                            </div>
                            <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-kefi-maroon">
                                {content.info.address.label}
                            </h3>
                            <p className="text-kefi-brown text-lg">
                                {content.info.address.value}
                            </p>
                        </div>
                    </div>
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

                    <form className="bg-white rounded-sm shadow-xl p-8 md:p-12 space-y-6">
                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-bold tracking-[0.15em] uppercase text-kefi-brown mb-2"
                            >
                                {content.form.name}
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder={content.form.name_placeholder}
                                className="w-full px-4 py-3 border border-kefi-brown/20 rounded-sm focus:outline-none focus:border-kefi-maroon transition-colors text-kefi-brown"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-bold tracking-[0.15em] uppercase text-kefi-brown mb-2"
                            >
                                {content.form.email}
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder={content.form.email_placeholder}
                                className="w-full px-4 py-3 border border-kefi-brown/20 rounded-sm focus:outline-none focus:border-kefi-maroon transition-colors text-kefi-brown"
                                required
                            />
                        </div>

                        {/* Subject */}
                        <div>
                            <label
                                htmlFor="subject"
                                className="block text-sm font-bold tracking-[0.15em] uppercase text-kefi-brown mb-2"
                            >
                                {content.form.subject}
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder={content.form.subject_placeholder}
                                className="w-full px-4 py-3 border border-kefi-brown/20 rounded-sm focus:outline-none focus:border-kefi-maroon transition-colors text-kefi-brown"
                                required
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-bold tracking-[0.15em] uppercase text-kefi-brown mb-2"
                            >
                                {content.form.message}
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                placeholder={content.form.message_placeholder}
                                className="w-full px-4 py-3 border border-kefi-brown/20 rounded-sm focus:outline-none focus:border-kefi-maroon transition-colors text-kefi-brown resize-none"
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full h-14 bg-kefi-maroon text-white hover:bg-kefi-maroon-dark text-sm font-bold tracking-[0.15em] uppercase transition-all duration-300 shadow-lg hover:shadow-2xl group flex items-center justify-center gap-2"
                        >
                            <span>{content.form.submit}</span>
                            <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                                send
                            </span>
                        </button>
                    </form>
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
