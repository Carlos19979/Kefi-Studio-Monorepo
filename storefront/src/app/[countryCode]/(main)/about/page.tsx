import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Us | Kefi Studio",
    description:
        "Learn about our story, our artisan process, and our commitment to creating sustainable, hand-poured candles.",
}

export default function AboutPage() {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            'url("https://images.unsplash.com/photo-1602874801006-e04b8c0b29a8?q=80&w=2070")',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-kefi-brown/60 via-kefi-brown/40 to-kefi-brown/70"></div>
                </div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                    <span className="text-white/80 text-xs tracking-[0.3em] uppercase mb-4">
                        Our Story
                    </span>
                    <h1 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl font-light">
                        About Kefi Studio
                    </h1>
                </div>
            </section>

            {/* Origin Story */}
            <section className="w-full max-w-[1400px] px-6 md:px-12 lg:px-24 py-20 md:py-28 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <span className="h-px w-12 bg-kefi-maroon"></span>
                            <span className="text-kefi-maroon font-medium tracking-[0.25em] uppercase text-xs">
                                Our Origins
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-kefi-brown leading-tight">
                            Born from a Love of Light
                        </h2>
                        <div className="flex flex-col gap-4 text-kefi-taupe text-base md:text-lg font-light leading-relaxed">
                            <p>
                                Kefi Studio was founded in 2023 in the heart of New York City,
                                born from a simple belief: that the right scent can transform a
                                space and elevate everyday moments into something extraordinary.
                            </p>
                            <p>
                                What started as a passion project in a small Brooklyn apartment
                                has grown into a curated collection of artisanal candles, each
                                one hand-poured with intention and care.
                            </p>
                            <p>
                                We believe in the power of slow living, of taking time to
                                appreciate the small rituals that bring us joy. Every candle we
                                create is an invitation to pause, breathe, and reconnect with
                                the present moment.
                            </p>
                        </div>
                    </div>
                    <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage:
                                    'url("https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=2070")',
                            }}
                        ></div>
                    </div>
                </div>
            </section>

            {/* Artisan Process */}
            <section className="w-full bg-kefi-paper py-20 md:py-28">
                <div className="w-full max-w-[1400px] px-6 md:px-12 lg:px-24 mx-auto">
                    <div className="text-center mb-16 md:mb-20">
                        <span className="text-kefi-maroon font-medium tracking-[0.25em] uppercase text-xs mb-4 block">
                            Our Craft
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-kefi-brown">
                            The Artisan Process
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center text-center gap-6 group">
                            <div className="size-20 rounded-full border-2 border-kefi-maroon flex items-center justify-center text-kefi-maroon font-serif text-2xl group-hover:bg-kefi-maroon group-hover:text-white transition-all duration-300">
                                01
                            </div>
                            <h3 className="text-xl md:text-2xl font-serif text-kefi-brown">
                                Sourcing
                            </h3>
                            <p className="text-kefi-taupe font-light text-sm md:text-base leading-relaxed">
                                We carefully select premium soy wax and phthalate-free fragrance
                                oils from sustainable suppliers.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center text-center gap-6 group">
                            <div className="size-20 rounded-full border-2 border-kefi-maroon flex items-center justify-center text-kefi-maroon font-serif text-2xl group-hover:bg-kefi-maroon group-hover:text-white transition-all duration-300">
                                02
                            </div>
                            <h3 className="text-xl md:text-2xl font-serif text-kefi-brown">
                                Hand-Pouring
                            </h3>
                            <p className="text-kefi-taupe font-light text-sm md:text-base leading-relaxed">
                                Each candle is poured by hand in small batches, ensuring
                                quality and attention to detail.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center text-center gap-6 group">
                            <div className="size-20 rounded-full border-2 border-kefi-maroon flex items-center justify-center text-kefi-maroon font-serif text-2xl group-hover:bg-kefi-maroon group-hover:text-white transition-all duration-300">
                                03
                            </div>
                            <h3 className="text-xl md:text-2xl font-serif text-kefi-brown">
                                Curing
                            </h3>
                            <p className="text-kefi-taupe font-light text-sm md:text-base leading-relaxed">
                                We allow our candles to cure for two weeks, ensuring optimal
                                scent throw and burn quality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder Quote */}
            <section className="w-full bg-kefi-maroon text-white py-20 md:py-24">
                <div className="w-full max-w-3xl px-6 mx-auto text-center">
                    <div className="flex flex-col gap-8 items-center">
                        <span className="material-symbols-outlined text-5xl md:text-6xl text-white/40">
                            format_quote
                        </span>
                        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif font-light italic leading-relaxed">
                            "Every candle we create is a small act of care—for you, for your
                            space, and for the planet."
                        </blockquote>
                        <div className="flex flex-col gap-1 mt-4">
                            <p className="text-white font-medium tracking-wide">
                                Elena Rodriguez
                            </p>
                            <p className="text-white/60 text-sm tracking-widest uppercase">
                                Founder & Artisan
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="w-full max-w-[1400px] px-6 md:px-12 lg:px-24 py-20 md:py-28 mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-serif text-kefi-brown mb-6">
                    Get in Touch
                </h2>
                <p className="text-kefi-taupe text-base md:text-lg font-light mb-8 max-w-xl mx-auto">
                    Have questions or want to learn more about our process? We'd love to
                    hear from you.
                </p>
                <a
                    href="mailto:hello@kefistudio.com"
                    className="inline-flex items-center justify-center h-12 md:h-14 px-8 md:px-12 bg-kefi-maroon text-white hover:bg-kefi-maroon-dark text-xs md:text-sm font-bold tracking-[0.15em] uppercase transition-all duration-300 shadow-lg hover:shadow-2xl group"
                >
                    <span>Contact Us</span>
                    <span className="material-symbols-outlined text-[18px] ml-2 transition-transform group-hover:translate-x-1">
                        arrow_forward
                    </span>
                </a>
            </section>
        </div>
    )
}
