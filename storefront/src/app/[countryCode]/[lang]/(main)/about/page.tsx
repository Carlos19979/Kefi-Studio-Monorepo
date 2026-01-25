import { Metadata } from "next"
import Image from "next/image"
import { getDictionary } from "@lib/dictionaries/get-dictionary"
import { Locale } from "@lib/dictionaries/i18n-config"

import heroImg from "../../../../../../public/images/about-hero-v2.png"
import originImg from "../../../../../../public/images/origin_story_v3.png"
import artV4Img from "../../../../../../public/images/art-of-illumination-v4.png"
import sourcingImg from "../../../../../../public/images/sourcing-v1.png"
import pouringImg from "../../../../../../public/images/hand-pouring-v1.png"

export const metadata: Metadata = {
    title: "About Us | Kefi Studio",
    description:
        "Learn about our story, our artisan process, and our commitment to creating sustainable, hand-poured candles.",
}

export default async function AboutPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params
    const dict = await getDictionary(lang)
    const content = dict.about

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
                <Image
                    src={heroImg}
                    alt="Kefi Studio Story"
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
                </div>
            </section>

            {/* Origin Story */}
            <section className="w-full max-w-[1400px] px-6 md:px-12 lg:px-24 py-24 md:py-32 mx-auto overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    {/* Text Column */}
                    <div className="lg:col-span-5 flex flex-col gap-10">
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <span className="h-px w-12 bg-kefi-maroon/40"></span>
                                <span className="text-kefi-maroon font-medium tracking-[0.3em] uppercase text-[10px]">
                                    {content.origins.label}
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-kefi-brown leading-[1.1] font-normal">
                                {content.origins.title_main} <br />
                                <span className="italic opacity-80">{content.origins.title_italic}</span>
                            </h2>
                        </div>

                        <div className="flex flex-col gap-6 text-kefi-taupe text-base md:text-lg font-light leading-relaxed max-w-xl">
                            <p>
                                {content.origins.p1}
                            </p>
                            <p>
                                {content.origins.p2}
                            </p>
                            <p className="border-l border-kefi-maroon/20 pl-6 italic text-kefi-brown/70">
                                {content.origins.quote}
                            </p>
                        </div>
                    </div>

                    {/* Image Column: Asymmetrical Multi-image layout */}
                    <div className="lg:col-span-7 grid grid-cols-12 gap-8 relative">
                        {/* Primary Large Image */}
                        <div className="col-span-12 md:col-span-10 relative aspect-[4/5] overflow-hidden shadow-2xl rounded-sm group">
                            <Image
                                src={originImg}
                                alt="Kefi Studio Origin"
                                fill

                                className="object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                                sizes="(max-width: 1024px) 100vw, 60vw"
                            />
                            <div className="absolute inset-0 bg-kefi-brown/5 mix-blend-multiply z-[1]"></div>
                        </div>

                        {/* Secondary Floating Image */}
                        <div className="hidden md:block absolute -bottom-12 -right-12 md:w-1/2 aspect-square overflow-hidden shadow-2xl rounded-sm border-[12px] border-white group/sub z-10">
                            <Image
                                src={artV4Img}
                                alt="Art of Illumination"
                                fill

                                className="object-cover object-center transition-transform duration-1000 group-hover/sub:scale-110"
                                sizes="30vw"
                            />
                            <div className="absolute inset-0 bg-kefi-maroon/10 mix-blend-overlay z-[1]"></div>
                        </div>

                        {/* Decorative pattern behind images */}
                        <div className="absolute -top-12 -left-12 size-64 bg-kefi-cream/40 rounded-full blur-3xl -z-10 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* Artisan Process */}
            <section className="w-full bg-kefi-paper py-20 md:py-28">
                <div className="w-full max-w-[1400px] px-6 md:px-12 lg:px-24 mx-auto">
                    <div className="text-center mb-16 md:mb-20">
                        <span className="text-kefi-maroon font-medium tracking-[0.25em] uppercase text-xs mb-4 block">
                            {content.craft.label}
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-kefi-brown">
                            {content.craft.title}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center text-center gap-8 group">
                            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm shadow-lg mb-4">
                                <Image
                                    src={sourcingImg}
                                    alt={content.craft.step1.title}
                                    fill

                                    className="object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-kefi-maroon/10 mix-blend-overlay z-[1]"></div>
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <div className="size-16 rounded-full border border-kefi-maroon/30 flex items-center justify-center text-kefi-maroon font-serif text-xl group-hover:bg-kefi-maroon group-hover:text-white transition-all duration-500">
                                    01
                                </div>
                                <h3 className="text-xl md:text-2xl font-serif text-kefi-brown">
                                    {content.craft.step1.title}
                                </h3>
                                <p className="text-kefi-taupe font-light text-sm md:text-base leading-relaxed max-w-xs">
                                    {content.craft.step1.description}
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center text-center gap-8 group">
                            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm shadow-lg mb-4">
                                <Image
                                    src={pouringImg}
                                    alt={content.craft.step2.title}
                                    fill

                                    className="object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-kefi-maroon/10 mix-blend-overlay z-[1]"></div>
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <div className="size-16 rounded-full border border-kefi-maroon/30 flex items-center justify-center text-kefi-maroon font-serif text-xl group-hover:bg-kefi-maroon group-hover:text-white transition-all duration-500">
                                    02
                                </div>
                                <h3 className="text-xl md:text-2xl font-serif text-kefi-brown">
                                    {content.craft.step2.title}
                                </h3>
                                <p className="text-kefi-taupe font-light text-sm md:text-base leading-relaxed max-w-xs">
                                    {content.craft.step2.description}
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center text-center gap-8 group">
                            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm shadow-lg mb-4">
                                <Image
                                    src={heroImg}
                                    alt={content.craft.step3.title}
                                    fill

                                    className="object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-kefi-maroon/10 mix-blend-overlay z-[1]"></div>
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <div className="size-16 rounded-full border border-kefi-maroon/30 flex items-center justify-center text-kefi-maroon font-serif text-xl group-hover:bg-kefi-maroon group-hover:text-white transition-all duration-500">
                                    03
                                </div>
                                <h3 className="text-xl md:text-2xl font-serif text-kefi-brown">
                                    {content.craft.step3.title}
                                </h3>
                                <p className="text-kefi-taupe font-light text-sm md:text-base leading-relaxed max-w-xs">
                                    {content.craft.step3.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder Quote */}
            <section className="w-full bg-kefi-maroon text-white py-20 md:py-24">
                <div className="w-full max-w-3xl px-6 mx-auto text-center">
                    <div className="flex flex-col items-center">
                        <span className="material-symbols-outlined text-white/50 text-6xl mb-6">
                            format_quote
                        </span>

                        <blockquote className="text-center max-w-4xl mb-12">
                            <p className="font-serif italic text-3xl md:text-5xl lg:text-5xl leading-tight text-white/90">
                                &quot;{content.founder_quote}&quot;
                            </p>
                        </blockquote>

                        <div className="text-center">
                            <cite className="block font-serif text-xl md:text-2xl text-white not-italic mb-2">
                                {content.founder_name}
                            </cite>
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/60">
                                {content.founder_role}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="w-full max-w-[1400px] px-6 md:px-12 lg:px-24 py-20 md:py-28 mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-serif text-kefi-brown mb-6">
                    {content.contact.title}
                </h2>
                <p className="text-kefi-taupe text-base md:text-lg font-light mb-8 max-w-xl mx-auto">
                    {content.contact.description}
                </p>
                <a
                    href="mailto:hello@kefistudio.com"
                    className="inline-flex items-center justify-center h-12 md:h-14 px-8 md:px-12 bg-kefi-maroon text-white hover:bg-kefi-maroon-dark text-xs md:text-sm font-bold tracking-[0.15em] uppercase transition-all duration-300 shadow-lg hover:shadow-2xl group"
                >
                    <span>{content.contact.cta}</span>
                    <span className="material-symbols-outlined text-[18px] ml-2 transition-transform group-hover:translate-x-1">
                        arrow_forward
                    </span>
                </a>
            </section>
        </div>
    )
}
