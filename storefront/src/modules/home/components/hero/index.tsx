import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-4 md:py-6">
      <div
        className="relative w-full min-h-[70vh] rounded-sm overflow-hidden flex flex-col items-center justify-center text-center p-8 md:p-12 lg:p-16 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1602874801006-e04b8c0b29a8?q=80&w=2070")',
        }}
      >
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>
        <div className="relative z-10 max-w-4xl flex flex-col gap-8 animate-fade-in items-center">
          <span className="text-white/90 font-medium tracking-[0.3em] uppercase text-xs">
            The Art of Scent
          </span>
          <h1 className="text-white font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] tracking-tight">
            Ignite Your Senses
          </h1>
          <p className="text-white/80 font-light text-base md:text-lg leading-relaxed max-w-xl">
            Hand-poured artisanal candles crafted for moments of tranquility.{" "}
            <br className="hidden md:block" />
            Experience the warmth of sustainable soy wax and curated fragrances.
          </p>
          <div className="pt-6">
            <LocalizedClientLink href="/store">
              <button className="inline-flex items-center justify-center h-12 px-10 bg-white text-kefi-maroon hover:bg-kefi-maroon hover:text-white text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 border border-white">
                Discover Collection
              </button>
            </LocalizedClientLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
