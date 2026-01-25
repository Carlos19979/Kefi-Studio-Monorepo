import Image from "next/image"
import artImg from "../../../../../public/images/art-of-illumination-v6.jpg"

const ArtOfIllumination = ({ dict }: { dict: any }) => {
    return (
        <section className="w-full bg-kefi-maroon-dark text-kefi-cream py-12 sm:py-16 md:py-24 lg:py-28 overflow-hidden">
            <div className="w-full max-w-[1600px] px-6 md:px-12 lg:px-24 mx-auto">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
                    {/* Text Content - Left Side */}
                    <div className="flex-1 flex flex-col items-start justify-center gap-6 sm:gap-8 w-full">
                        <div className="flex flex-col gap-6 sm:gap-8 max-w-lg w-full">
                            <div className="flex items-center gap-4">
                                <span className="h-px w-12 bg-white/30"></span>
                                <span className="text-white/60 font-medium tracking-[0.25em] uppercase text-xs">
                                    {dict.label}
                                </span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal leading-tight text-white">
                                {dict.title.split(' ').slice(0, 2).join(' ')} <br />
                                <span className="italic opacity-80 text-white">{dict.title.split(' ').slice(2).join(' ')}</span>
                            </h2>
                            <p className="text-kefi-border/70 text-sm sm:text-base md:text-lg font-light leading-relaxed">
                                {dict.description}
                            </p>

                            {/* Feature Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
                                <div className="flex flex-col gap-4 p-4 sm:p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group bg-white/5">
                                    <span className="material-symbols-outlined text-white/90 font-thin text-4xl group-hover:scale-110 transition-transform origin-left">
                                        eco
                                    </span>
                                    <div>
                                        <p className="font-serif text-xl text-white mb-2">
                                            {dict.sustainability}
                                        </p>
                                        <p className="text-sm text-white/60 font-light">
                                            {dict.sustainability_desc}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group bg-white/5">
                                    <span className="material-symbols-outlined text-white/90 font-thin text-4xl group-hover:scale-110 transition-transform origin-left">
                                        spa
                                    </span>
                                    <div>
                                        <p className="font-serif text-xl text-white mb-2">
                                            {dict.clean_burning}
                                        </p>
                                        <p className="text-sm text-white/60 font-light">
                                            {dict.clean_burning_desc}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <a
                                className="mt-8 text-white border-b border-white/30 pb-1 hover:text-white/80 hover:border-white/80 transition-all font-medium text-xs tracking-[0.2em] uppercase inline-flex items-center gap-2 group"
                                href="/about"
                            >
                                {dict.cta}
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                                    arrow_forward
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Image - Right Side - Constrained Width */}
                    <div className="flex-1 w-full flex items-center justify-center p-6 md:p-8 lg:p-12 relative group">
                        {/* Decorative background element */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-kefi-cream/5 rounded-full blur-3xl group-hover:bg-kefi-cream/10 transition-all duration-700"></div>

                        <div className="relative w-full aspect-square md:aspect-[4/3] max-w-2xl overflow-hidden shadow-2xl rounded-sm">
                            <Image
                                src={artImg}
                                alt="Art of Illumination"
                                fill

                                className="object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-kefi-maroon/20 mix-blend-multiply opacity-30 z-[1]"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-kefi-maroon-dark/60 via-transparent to-transparent z-[2]"></div>

                            {/* Decorative Quote or Detail */}
                            <div className="absolute bottom-8 left-8 right-8 text-white/90 z-10">
                                <p className="font-serif italic text-lg md:text-xl leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-300">
                                    {dict.quote}
                                </p>
                            </div>

                            {/* Corner Ornament - Moved INSIDE the relative container for better alignment */}
                            <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-r border-b border-white/40 pointer-events-none z-20"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ArtOfIllumination
