const ArtOfIllumination = () => {
    return (
        <section className="w-full bg-kefi-maroon-dark text-kefi-cream py-20 md:py-28">
            <div className="w-full max-w-[1600px] px-6 md:px-12 lg:px-24 mx-auto">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 xl:gap-28">
                    {/* Text Content */}
                    <div className="flex-1 flex flex-col items-start gap-6 md:gap-8">
                        <div className="flex items-center gap-4">
                            <span className="h-px w-12 bg-white/30"></span>
                            <span className="text-white/60 font-medium tracking-[0.25em] uppercase text-xs">
                                Our Process
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-normal leading-tight">
                            The Art of <br />
                            Illumination
                        </h2>
                        <p className="text-kefi-border/70 text-base md:text-lg font-light leading-relaxed max-w-md">
                            Our process is slow, intentional, and sustainable. We use only
                            100% natural soy wax and lead-free wicks, hand-poured in small
                            batches in our New York studio.
                        </p>

                        {/* Feature Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-4 w-full">
                            <div className="flex flex-col gap-3 p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group">
                                <span className="material-symbols-outlined text-white font-thin text-3xl group-hover:scale-110 transition-transform">
                                    eco
                                </span>
                                <div>
                                    <p className="font-serif text-xl text-white mb-1">
                                        Sustainability
                                    </p>
                                    <p className="text-sm text-white/60 font-light">
                                        Recyclable glass & plastic-free.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group">
                                <span className="material-symbols-outlined text-white font-thin text-3xl group-hover:scale-110 transition-transform">
                                    spa
                                </span>
                                <div>
                                    <p className="font-serif text-xl text-white mb-1">
                                        Clean Burning
                                    </p>
                                    <p className="text-sm text-white/60 font-light">
                                        No paraffins or phthalates.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <a
                            className="mt-4 md:mt-8 text-white border-b border-white pb-1 hover:text-white/80 hover:border-white/80 transition-all font-medium text-xs tracking-[0.2em] uppercase inline-flex items-center gap-2 group"
                            href="/about"
                        >
                            Read Our Story
                            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                                arrow_forward
                            </span>
                        </a>
                    </div>

                    {/* Image */}
                    <div className="flex-1 w-full lg:h-auto self-stretch flex items-center">
                        <div className="relative w-full aspect-square lg:aspect-[4/5] overflow-hidden shadow-2xl">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage:
                                        'url("https://images.unsplash.com/photo-1602874801006-e04b8c0b29a8?q=80&w=2070")',
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
