import { Metadata } from "next"
import Image from "next/image"
import { getDictionary } from "@lib/dictionaries/get-dictionary"
import { Locale } from "@lib/dictionaries/i18n-config"

export const metadata: Metadata = {
    title: "About Us | Kefi Studio",
    description: "Learn more about our story, our craft, and our mission at Kefi Studio.",
}

export default async function AboutPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params
    const dict = await getDictionary(lang)
    const { about } = dict

    return (
        <div className="bg-kefi-cream min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-kefi-brown/20 z-10"></div>
                    <Image
                        src="/images/about-hero.png"
                        alt="Kefi Studio Studio"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-20 text-center px-6 max-w-4xl">
                    <span className="text-white font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">
                        {about.hero.label}
                    </span>
                    <h1 className="text-white font-serif text-5xl md:text-8xl font-normal leading-tight">
                        {about.hero.title}
                    </h1>
                </div>
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                    <span className="material-symbols-outlined text-white font-extralight text-3xl">
                        expand_more
                    </span>
                </div>
            </section>

            {/* Origins Section */}
            <section className="py-24 md:py-32 lg:py-40 content-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-6">
                            <span className="text-kefi-maroon font-bold uppercase tracking-[0.3em] text-[10px]">
                                {about.origins.label}
                            </span>
                            <h2 className="text-kefi-brown font-serif text-4xl md:text-6xl font-normal leading-tight">
                                {about.origins.title_main} <br />
                                <span className="italic opacity-80 underline underline-offset-8 decoration-1 decoration-kefi-maroon/20">{about.origins.title_italic}</span>
                            </h2>
                        </div>
                        <div className="w-16 h-px bg-kefi-maroon/30"></div>
                        <div className="flex flex-col gap-8 text-kefi-brown/70 text-lg font-light leading-relaxed max-w-xl">
                            <p>{about.origins.p1}</p>
                            <p>{about.origins.p2}</p>
                        </div>
                        <blockquote className="border-l-2 border-kefi-maroon/30 pl-10 py-4 italic text-kefi-brown/80 text-xl md:text-2xl font-serif leading-relaxed">
                            "{about.origins.quote}"
                        </blockquote>
                    </div>
                    <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl group">
                        <Image
                            src="/images/origin_story_v3.png"
                            alt="Our Origins"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-kefi-brown/5 mix-blend-multiply"></div>
                    </div>
                </div>
            </section>

            {/* Craft Section */}
            <section className="py-24 md:py-32 bg-kefi-paper border-y border-kefi-brown/5">
                <div className="content-container">
                    <div className="text-center mb-24">
                        <span className="text-kefi-maroon font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">
                            {about.craft.label}
                        </span>
                        <h2 className="text-kefi-brown font-serif text-4xl md:text-6xl font-normal">
                            {about.craft.title}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
                        {[
                            { step: about.craft.step1, img: "/images/sourcing-v1.png" },
                            { step: about.craft.step2, img: "/images/hand-pouring-v1.png" },
                            { step: about.craft.step3, img: "/images/curing-v1.png" }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col gap-8 group">
                                <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-lg mb-4">
                                    <Image
                                        src={item.img}
                                        alt={item.step.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-6 left-6 size-10 bg-kefi-maroon text-white rounded-full flex items-center justify-center font-serif italic text-lg shadow-xl">
                                        {i + 1}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-kefi-brown font-serif text-2xl lg:text-3xl">{item.step.title}</h3>
                                    <p className="text-kefi-brown/60 font-light leading-relaxed text-base">
                                        {item.step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-32 md:py-48 content-container bg-kefi-cream overflow-hidden">
                <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-16 relative">
                    {/* Decorative element */}
                    <div className="absolute -top-24 -left-24 text-[20rem] font-serif italic text-kefi-maroon/5 select-none pointer-events-none">
                        "
                    </div>

                    <div className="relative size-40 md:size-48 rounded-full overflow-hidden border-2 border-kefi-maroon/10 p-2 shadow-2xl">
                        <div className="relative w-full h-full rounded-full overflow-hidden">
                            <Image
                                src="/images/origin-story.png"
                                alt={about.founder_name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <p className="text-kefi-brown font-serif text-3xl md:text-4xl lg:text-5xl italic leading-tight max-w-4xl relative z-10">
                        "{about.founder_quote}"
                    </p>

                    <div className="flex flex-col gap-3">
                        <div className="w-12 h-px bg-kefi-maroon/30 mx-auto mb-2"></div>
                        <span className="text-kefi-brown font-serif text-2xl md:text-3xl">{about.founder_name}</span>
                        <span className="text-kefi-maroon font-bold uppercase tracking-[0.25em] text-[10px]">
                            {about.founder_role}
                        </span>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-32 bg-kefi-maroon text-kefi-cream text-center">
                <div className="content-container max-w-3xl">
                    <h2 className="text-kefi-cream font-serif text-4xl md:text-6xl font-normal mb-8 leading-tight">
                        {about.contact.title}
                    </h2>
                    <p className="text-white/70 font-light mb-14 leading-relaxed text-lg md:text-xl">
                        {about.contact.description}
                    </p>
                    <button className="bg-white text-kefi-maroon px-12 py-5 rounded-sm tracking-[0.25em] uppercase text-xs font-bold hover:bg-kefi-cream transition-all duration-500 shadow-xl hover:shadow-2xl translate-y-0 hover:-translate-y-1">
                        {about.contact.cta}
                    </button>
                </div>
            </section>
        </div>
    )
}
