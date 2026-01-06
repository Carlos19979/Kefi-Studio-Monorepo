const ArtOfIllumination = () => {
    return (
        <section className="w-full bg-kefi-maroon-dark text-kefi-cream py-20 md:py-28 overflow-hidden">
            <div className="w-full max-w-[1600px] px-6 md:px-12 lg:px-24 mx-auto">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
                    {/* Text Content - Left Side */}
                    <div className="flex-1 flex flex-col items-start gap-8 w-full">
                        <div className="flex items-center gap-4">
                            <span className="h-px w-12 bg-white/30"></span>
                            <span className="text-white/60 font-medium tracking-[0.25em] uppercase text-xs">
                                Our Process
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal leading-tight text-white">
                            The Art of <br />
                            <span className="italic opacity-80 text-white">Illumination</span>
                        </h2>
                        <p className="text-kefi-border/70 text-base md:text-lg font-light leading-relaxed max-w-lg">
                            Our process is slow, intentional, and sustainable. We use only
                            100% natural soy wax and lead-free wicks, hand-poured in small
                            batches in our New York studio.
                        </p>

                        {/* Feature Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
                            <div className="flex flex-col gap-4 p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group bg-white/5">
                                <span className="material-symbols-outlined text-white/90 font-thin text-4xl group-hover:scale-110 transition-transform origin-left">
                                    eco
                                </span>
                                <div>
                                    <p className="font-serif text-xl text-white mb-2">
                                        Sustainability
                                    </p>
                                    <p className="text-sm text-white/60 font-light">
                                        Recyclable glass & plastic-free packaging.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group bg-white/5">
                                <span className="material-symbols-outlined text-white/90 font-thin text-4xl group-hover:scale-110 transition-transform origin-left">
                                    spa
                                </span>
                                <div>
                                    <p className="font-serif text-xl text-white mb-2">
                                        Clean Burning
                                    </p>
                                    <p className="text-sm text-white/60 font-light">
                                        No paraffins, phthalates, or synthetic dyes.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <a
                            className="mt-8 text-white border-b border-white/30 pb-1 hover:text-white/80 hover:border-white/80 transition-all font-medium text-xs tracking-[0.2em] uppercase inline-flex items-center gap-2 group"
                            href="/about"
                        >
                            Read Our Story
                            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                                arrow_forward
                            </span>
                        </a>
                    </div>

                    {/* Image - Right Side - Constrained Width */}
                    <div className="flex-1 w-full lg:max-w-xl xl:max-w-2xl self-center">
                        <div className="relative w-full aspect-square overflow-hidden shadow-2xl rounded-sm">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                                style={{
                                    backgroundImage: 'url("/images/art-of-illumination-v3.png")',
                                }}
                            >
                                <div className="absolute inset-0 bg-kefi-maroon/10 mix-blend-overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ArtOfIllumination
