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
                        backgroundImage: 'url("/images/about-hero-v2.png")',
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
            <section className="w-full max-w-[1400px] px-6 md:px-12 lg:px-24 py-24 md:py-32 mx-auto overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    {/* Text Column */}
                    <div className="lg:col-span-5 flex flex-col gap-10">
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <span className="h-px w-12 bg-kefi-maroon/40"></span>
                                <span className="text-kefi-maroon font-medium tracking-[0.3em] uppercase text-[10px]">
                                    Our Origins
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-kefi-brown leading-[1.1] font-normal">
                                Born from a <br />
                                <span className="italic opacity-80">Love of Light</span>
                            </h2>
                        </div>

                        <div className="flex flex-col gap-6 text-kefi-taupe text-base md:text-lg font-light leading-relaxed max-w-xl">
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
                            <p className="border-l border-kefi-maroon/20 pl-6 italic text-kefi-brown/70">
                                We believe in the power of slow living, of taking time to
                                appreciate the small rituals that bring us joy.
                            </p>
                        </div>
                    </div>

                    {/* Image Column: Asymmetrical Multi-image layout */}
                    <div className="lg:col-span-7 grid grid-cols-12 gap-8 relative">
                        {/* Primary Large Image */}
                        <div className="col-span-12 md:col-span-10 relative aspect-[4/5] overflow-hidden shadow-2xl rounded-sm group">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                style={{
                                    backgroundImage: 'url("/images/origin_story_v3.png")',
                                }}
                            ></div>
                            <div className="absolute inset-0 bg-kefi-brown/5 mix-blend-multiply"></div>
                        </div>

                        {/* Secondary Floating Image */}
                        <div className="hidden md:block absolute -bottom-12 -right-12 md:w-1/2 aspect-square overflow-hidden shadow-2xl rounded-sm border-[12px] border-white group/sub">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover/sub:scale-110"
                                style={{
                                    backgroundImage: 'url("/images/art-of-illumination-v4.png")',
                                }}
                            ></div>
                            <div className="absolute inset-0 bg-kefi-maroon/10 mix-blend-overlay"></div>
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
                            Our Craft
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-kefi-brown">
                            The Artisan Process
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center text-center gap-8 group">
                            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm shadow-lg mb-4">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                    style={{ backgroundImage: 'url("/images/sourcing-v1.png")' }}
                                ></div>
                                <div className="absolute inset-0 bg-kefi-maroon/10 mix-blend-overlay"></div>
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <div className="size-16 rounded-full border border-kefi-maroon/30 flex items-center justify-center text-kefi-maroon font-serif text-xl group-hover:bg-kefi-maroon group-hover:text-white transition-all duration-500">
                                    01
                                </div>
                                <h3 className="text-xl md:text-2xl font-serif text-kefi-brown">
                                    Sourcing
                                </h3>
                                <p className="text-kefi-taupe font-light text-sm md:text-base leading-relaxed max-w-xs">
                                    We carefully select premium soy wax and phthalate-free fragrance
                                    oils from sustainable suppliers.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center text-center gap-8 group">
                            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm shadow-lg mb-4">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                    style={{ backgroundImage: 'url("/images/art-of-illumination-v5.png")' }}
                                ></div>
                                <div className="absolute inset-0 bg-kefi-maroon/10 mix-blend-overlay"></div>
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <div className="size-16 rounded-full border border-kefi-maroon/30 flex items-center justify-center text-kefi-maroon font-serif text-xl group-hover:bg-kefi-maroon group-hover:text-white transition-all duration-500">
                                    02
                                </div>
                                <h3 className="text-xl md:text-2xl font-serif text-kefi-brown">
                                    Hand-Pouring
                                </h3>
                                <p className="text-kefi-taupe font-light text-sm md:text-base leading-relaxed max-w-xs">
                                    Each candle is poured by hand in small batches, ensuring
                                    quality and attention to detail.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center text-center gap-8 group">
                            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm shadow-lg mb-4">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                    style={{ backgroundImage: 'url("/images/curing-v1.png")' }}
                                ></div>
                                <div className="absolute inset-0 bg-kefi-maroon/10 mix-blend-overlay"></div>
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <div className="size-16 rounded-full border border-kefi-maroon/30 flex items-center justify-center text-kefi-maroon font-serif text-xl group-hover:bg-kefi-maroon group-hover:text-white transition-all duration-500">
                                    03
                                </div>
                                <h3 className="text-xl md:text-2xl font-serif text-kefi-brown">
                                    Curing
                                </h3>
                                <p className="text-kefi-taupe font-light text-sm md:text-base leading-relaxed max-w-xs">
                                    We allow our candles to cure for two weeks, ensuring optimal
                                    scent throw and burn quality.
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
                        {/* Quote Icon */}
                        <span className="material-symbols-outlined text-white/50 text-6xl mb-6">
                            format_quote
                        </span>

                        <blockquote className="text-center max-w-4xl mb-12">
                            <p className="font-serif italic text-3xl md:text-5xl lg:text-5xl leading-tight text-white/90">
                                "We believe that a candle is more than just wax and wick—it's an invitation to pause, breathe, and reconnect with the present moment."
                            </p>
                        </blockquote>

                        <div className="text-center">
                            <cite className="block font-serif text-xl md:text-2xl text-white not-italic mb-2">
                                Aitana Benlloch
                            </cite>
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/60">
                                Founder & Artisan
                            </span>
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
