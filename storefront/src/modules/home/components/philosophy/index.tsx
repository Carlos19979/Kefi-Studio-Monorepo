import { LocalizedClientLink } from "@modules/common"
import Image from "next/image"
import philosophyImg from "../../../../../public/images/philosophy-v4.jpg"
import RevealOnScroll from "@/components/reveal-on-scroll"

const Philosophy = ({ dict }: { dict: any }) => {
    return (
        <section className="w-full bg-kefi-cream overflow-hidden py-12 sm:py-16 md:py-24 lg:py-28">
            <div className="w-full max-w-[1600px] px-6 md:px-12 lg:px-24 mx-auto">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
                    {/* Text Content - Left Side (Desktop), Bottom (Mobile) */}
                    <div className="flex-1 flex flex-col justify-center w-full">
                        <div className="flex flex-col gap-6 sm:gap-8 max-w-lg">
                            <RevealOnScroll delay={0}>
                                <div className="flex items-center gap-4">
                                    {/* Added decorative line to match other sections if desired, or keep simple */}
                                    <span className="text-kefi-maroon font-medium uppercase tracking-[0.2em] text-xs">
                                        {dict.title}
                                    </span>
                                </div>
                            </RevealOnScroll>

                            <RevealOnScroll delay={0.1}>
                                <h2 className="text-kefi-brown font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-normal">
                                    {dict.subtitle.split(' ').slice(0, 3).join(' ')}
                                    <br />
                                    <span className="italic opacity-80 underline underline-offset-8 decoration-1 decoration-kefi-maroon/20">{dict.subtitle.split(' ').slice(3).join(' ')}</span>
                                </h2>
                            </RevealOnScroll>

                            <RevealOnScroll delay={0.2}>
                                <div className="w-16 h-[1px] bg-kefi-maroon/20"></div>
                            </RevealOnScroll>

                            <RevealOnScroll delay={0.3}>
                                <p className="text-kefi-taupe text-sm sm:text-base md:text-lg font-light leading-relaxed">
                                    {dict.p1}
                                </p>
                            </RevealOnScroll>

                            <RevealOnScroll delay={0.4}>
                                <p className="text-kefi-taupe text-sm sm:text-base md:text-lg font-light leading-relaxed">
                                    {dict.p2}
                                </p>
                            </RevealOnScroll>

                            <RevealOnScroll delay={0.5}>
                                <div className="pt-8">
                                    <LocalizedClientLink href="/about">
                                        <button className="underline decoration-1 underline-offset-8 text-kefi-maroon hover:text-kefi-brown transition-colors uppercase tracking-[0.15em] text-xs font-semibold">
                                            {dict.cta}
                                        </button>
                                    </LocalizedClientLink>
                                </div>
                            </RevealOnScroll>
                        </div>
                    </div>

                    {/* Image - Right Side (Desktop), Top (Mobile) */}
                    <div className="flex-1 w-full flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-12 relative group bg-neutral-50/50 rounded-sm">
                        <div className="relative w-full aspect-square md:aspect-[4/3] max-w-2xl shadow-2xl rounded-sm overflow-hidden">
                            <Image
                                src={philosophyImg}
                                alt="Kefi Studio candle artisan working"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Subtle overlay */}
                            <div className="absolute inset-0 bg-kefi-brown/5 mix-blend-multiply"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Philosophy
