import Image from "next/image"
import curatedImg from "../../../../../public/images/curated-collections-v5.png"
import { LocalizedClientLink } from "@modules/common"

const CuratedCollections = ({ dict }: { dict: any }) => {
    return (
        <section className="w-full bg-kefi-cream border-y border-kefi-brown/5 overflow-hidden py-12 sm:py-16 md:py-24 lg:py-28">
            <div className="w-full max-w-[1600px] px-6 md:px-12 lg:px-24 mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                    {/* Image - Left Side */}
                    <div className="flex-1 w-full flex items-center justify-center p-6 md:p-8 lg:p-12 relative group bg-neutral-50/50 rounded-sm">
                        <div className="relative w-full aspect-square md:aspect-[4/3] max-w-2xl shadow-2xl rounded-sm overflow-hidden group">
                            <Image
                                src={curatedImg}
                                alt="Kefi Studio curated collections"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-kefi-brown/10 mix-blend-multiply z-[1]"></div>
                        </div>
                    </div>

                    {/* Text Content - Right Side */}
                    <div className="flex-1 flex flex-col items-end justify-center gap-6 sm:gap-8 w-full">
                        <div className="flex flex-col gap-6 sm:gap-8 max-w-lg w-full">
                            <div className="flex items-center gap-4">
                                <span className="text-kefi-maroon font-bold uppercase tracking-[0.3em] text-[10px]">
                                    {dict.label}
                                </span>
                            </div>

                            <h2 className="text-kefi-brown font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
                                {dict.title.split(' ')[0]} <br />
                                <span className="italic opacity-80 underline underline-offset-8 decoration-1 decoration-kefi-maroon/20">{dict.title.split(' ')[1]}</span>
                            </h2>

                            <div className="w-12 h-px bg-kefi-maroon/30"></div>

                            <p className="text-kefi-brown/70 text-sm sm:text-base md:text-lg font-light leading-relaxed">
                                {dict.description}
                            </p>

                            <div className="pt-4">
                                <LocalizedClientLink
                                    href="/store"
                                    className="underline decoration-1 underline-offset-8 text-kefi-maroon hover:text-kefi-brown transition-colors uppercase tracking-[0.15em] text-xs font-semibold"
                                >
                                    {dict.cta}
                                </LocalizedClientLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CuratedCollections
