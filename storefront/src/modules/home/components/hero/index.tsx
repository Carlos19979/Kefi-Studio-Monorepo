import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-4 md:py-6">
      <div
        className="relative w-full min-h-[75vh] md:min-h-[80vh] rounded-sm overflow-hidden flex flex-col items-center justify-center text-center p-8 md:p-16 lg:p-20 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/homepage-hero.png")',
        }}
      >
        {/* Overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-kefi-brown/40 via-kefi-brown/20 to-kefi-brown/60"></div>
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl flex flex-col gap-6 md:gap-8 animate-fade-in items-center">
          <span className="text-white/90 font-light tracking-[0.3em] uppercase text-[10px] md:text-xs">
            The Art of Scent
          </span>
          <h1 className="text-white font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.1] tracking-tight">
            Ignite Your
            <br />
            <span className="italic font-normal">Senses</span>
          </h1>
          <p className="text-white/85 font-light text-sm md:text-base lg:text-lg leading-relaxed max-w-xl px-4">
            Hand-poured artisanal candles crafted for moments of tranquility.
            <br className="hidden md:block" />
            Experience the warmth of sustainable soy wax and curated fragrances.
          </p>
          <div className="pt-4 md:pt-6">
            <LocalizedClientLink href="/store">
              <button className="group inline-flex items-center justify-center h-12 md:h-14 px-8 md:px-12 bg-white/95 backdrop-blur-sm text-kefi-maroon hover:bg-kefi-maroon hover:text-white text-xs md:text-sm font-bold tracking-[0.15em] uppercase transition-all duration-500 border border-white/50 hover:border-kefi-maroon shadow-lg hover:shadow-2xl">
                <span>Discover Collection</span>
                <span className="material-symbols-outlined text-[18px] ml-2 transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </button>
            </LocalizedClientLink>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/60 text-[10px] uppercase tracking-widest">Scroll</span>
          <span className="material-symbols-outlined text-white/60 text-xl">
            keyboard_arrow_down
          </span>
        </div>
      </div>
    </section>
  )
}

export default Hero
