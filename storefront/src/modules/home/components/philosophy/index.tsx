import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

const Philosophy = () => {
    return (
        <section className="w-full bg-kefi-cream overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
                {/* Text Content */}
                <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 order-2 md:order-1">
                    <div className="max-w-xl mx-auto md:mx-0 flex flex-col gap-8">
                        <span className="text-kefi-maroon font-medium uppercase tracking-[0.2em] text-xs">
                            Our Philosophy
                        </span>
                        <h2 className="text-kefi-brown font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-normal">
                            Crafted for the
                            <br />
                            <span className="italic opacity-80">Modern Sanctuary</span>
                        </h2>
                        <div className="w-16 h-[1px] bg-kefi-maroon/20"></div>
                        <p className="text-kefi-taupe text-base md:text-lg font-light leading-relaxed">
                            We believe that scent is more than a fragrance—it is an atmosphere, a memory, a feeling.
                            Each Kefi creation is meticulously hand-poured using sustainable soy wax and
                            premium phthalate-free oils, designed to elevate your space with intention and grace.
                        </p>
                        <p className="text-kefi-taupe text-base md:text-lg font-light leading-relaxed">
                            From the flicker of the wick to the lingering aroma, we invite you to pause,
                            breathe, and find beauty in the stillness.
                        </p>

                        <div className="pt-8">
                            <LocalizedClientLink href="/about">
                                <button className="underline decoration-1 underline-offset-8 text-kefi-maroon hover:text-kefi-brown transition-colors uppercase tracking-[0.15em] text-xs font-semibold">
                                    Read Our Story
                                </button>
                            </LocalizedClientLink>
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div className="flex items-center justify-center p-8 md:p-12 lg:p-16 order-1 md:order-2 bg-neutral-50/50">
                    <div className="relative w-full aspect-square md:aspect-[4/3] max-w-xl shadow-2xl rounded-sm overflow-hidden">
                        <Image
                            src="/images/philosophy-v3.png"
                            alt="Kefi Studio candle artisan working"
                            fill
                            className="object-cover transition-transform duration-1000 hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Subtle overlay */}
                        <div className="absolute inset-0 bg-kefi-brown/5 mix-blend-multiply"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Philosophy
