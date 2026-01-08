const SignatureScents = ({ dict }: { dict: any }) => {
    return (
        <section className="w-full relative px-6 py-12 sm:py-16 md:py-24 lg:py-32 text-center mx-auto bg-kefi-cream">
            {/* Background decorative pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23591C1C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
                <span className="text-kefi-maroon text-xs font-bold tracking-[0.25em] uppercase mb-6 block">
                    {dict.label}
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-kefi-brown tracking-normal mb-6 sm:mb-8 leading-tight">
                    {dict.title}
                </h2>
                <p className="text-kefi-taupe font-serif italic text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed">
                    {dict.quote}
                </p>
                <div className="w-px h-16 md:h-24 bg-gradient-to-b from-kefi-maroon/0 via-kefi-maroon/20 to-kefi-maroon/0 mx-auto mt-12"></div>
            </div>
        </section>
    )
}

export default SignatureScents
