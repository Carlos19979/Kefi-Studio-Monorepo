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
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-kefi-brown/20 z-10"></div>
                    <Image
                        src="/images/hero-about.png"
                        alt="Kefi Studio Studio"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-20 text-center px-6">
                    <span className="text-white font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
                        {about.hero.label}
                    </span>
                    <h1 className="text-white font-serif text-5xl md:text-7xl font-normal">
                        {about.hero.title}
                    </h1>
                </div>
            </section>

            {/* Origins Section */}
            <section className="py-24 md:py-32 content-container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-6">
                            <span className="text-kefi-maroon font-bold uppercase tracking-[0.3em] text-[10px]">
                                {about.origins.label}
                            </span>
                            <h2 className="text-kefi-brown font-serif text-4xl md:text-5xl font-normal leading-tight">
                                {about.origins.title_main} <br />
                                <span className="italic opacity-80">{about.origins.title_italic}</span>
                            </h2>
                        </div>
                        <div className="w-12 h-px bg-kefi-maroon/30"></div>
                        <div className="flex flex-col gap-6 text-kefi-brown/70 text-lg font-light leading-relaxed">
                            <p>{about.origins.p1}</p>
                            <p>{about.origins.p2}</p>
                        </div>
                        <blockquote className="border-l-2 border-kefi-maroon/20 pl-8 py-2 italic text-kefi-brown/80 text-xl font-serif">
                            "{about.origins.quote}"
                        </blockquote>
                    </div>
                    <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-xl">
                        <Image
                            src="/images/about-origins.png"
                            alt="Our Origins"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Craft Section */}
            <section className="py-24 bg-kefi-paper border-y border-kefi-brown/5">
                <div className="content-container text-center">
                    <span className="text-kefi-maroon font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">
                        {about.craft.label}
                    </span>
                    <h2 className="text-kefi-brown font-serif text-4xl md:text-5xl font-normal mb-16">
                        {about.craft.title}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                        {[about.craft.step1, about.craft.step2, about.craft.step3].map((step, i) => (
                            <div key={i} className="flex flex-col gap-6">
                                <span className="text-kefi-maroon/40 font-serif text-4xl italic">0{i + 1}</span>
                                <h3 className="text-kefi-brown font-serif text-2xl">{step.title}</h3>
                                <p className="text-kefi-brown/60 font-light leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-32 content-container bg-kefi-cream">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-12">
                    <div className="relative size-32 rounded-full overflow-hidden border border-kefi-brown/10 mb-4">
                        <Image
                            src="/images/founder.png"
                            alt={about.founder_name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <p className="text-kefi-brown font-serif text-2xl md:text-3xl italic leading-relaxed">
                        "{about.founder_quote}"
                    </p>
                    <div className="flex flex-col gap-1">
                        <span className="text-kefi-brown font-serif text-xl">{about.founder_name}</span>
                        <span className="text-kefi-maroon font-bold uppercase tracking-[0.2em] text-[10px]">
                            {about.founder_role}
                        </span>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 border-t border-kefi-brown/5">
                <div className="content-container text-center max-w-2xl">
                    <h2 className="text-kefi-brown font-serif text-3xl md:text-4xl font-normal mb-6">
                        {about.contact.title}
                    </h2>
                    <p className="text-kefi-brown/60 font-light mb-10 leading-relaxed text-lg">
                        {about.contact.description}
                    </p>
                    <button className="bg-kefi-maroon text-white px-10 py-4 rounded-sm tracking-[0.2em] uppercase text-xs font-bold hover:bg-kefi-brown transition-colors duration-300">
                        {about.contact.cta}
                    </button>
                </div>
            </section>
        </div>
    )
}
