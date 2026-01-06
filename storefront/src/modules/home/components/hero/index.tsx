import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-4 md:py-6">
      <div
        className="relative w-full h-[85vh] rounded-none overflow-hidden flex flex-col items-center justify-center text-center p-8 md:p-16 lg:p-20 bg-cover bg-center fixed-bg"
        style={{
          backgroundImage: 'url("/images/homepage-hero.png")',
        }}
      >
        {/* Overlays for depth */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl flex flex-col gap-8 md:gap-10 items-center animate-fade-in duration-1000">
          <span className="text-white/80 font-light tracking-[0.4em] uppercase text-[10px] md:text-sm animate-fade-in-top opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            The Art of Scent
          </span>
          <h1 className="text-white font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1] tracking-tight drop-shadow-2xl animate-fade-in opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
            Ignite Your
            <br />
            <span className="italic font-normal text-kefi-cream/90">Senses</span>
          </h1>

          <div className="pt-12 md:pt-16 animate-fade-in opacity-0" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
            <LocalizedClientLink href="/store">
              <button className="group inline-flex items-center justify-center h-14 md:h-16 px-10 md:px-14 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-kefi-maroon text-xs md:text-sm font-bold tracking-[0.2em] uppercase transition-all duration-700 border border-white/30 hover:border-white">
                <span>Discover Collection</span>
              </button>
            </LocalizedClientLink>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-pulse opacity-50 hover:opacity-100 transition-opacity duration-300">
          <span className="text-white/40 text-[9px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
