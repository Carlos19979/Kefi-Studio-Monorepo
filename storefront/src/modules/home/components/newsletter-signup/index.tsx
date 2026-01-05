"use client"

import { useState } from "react"

const NewsletterSignup = () => {
    const [email, setEmail] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle newsletter signup
        console.log("Newsletter signup:", email)
        setEmail("")
    }

    return (
        <section className="w-full py-20 md:py-24 px-6 bg-kefi-paper relative overflow-hidden">
            <div className="relative z-10 max-w-xl mx-auto text-center flex flex-col items-center gap-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-kefi-brown">
                    Join the Inner Circle
                </h2>
                <p className="text-kefi-taupe font-light text-sm md:text-base">
                    Subscribe to receive updates, access to exclusive deals, and more.
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="flex w-full flex-col sm:flex-row gap-0 border-b border-kefi-brown/20 pb-2 mt-6 md:mt-8 focus-within:border-kefi-maroon transition-colors"
                >
                    <input
                        className="flex-1 h-12 bg-transparent border-none px-0 text-kefi-brown placeholder-kefi-taupe/50 focus:ring-0 text-center sm:text-left text-sm md:text-base"
                        placeholder="Enter your email address"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button
                        className="h-12 px-6 md:px-8 text-kefi-maroon font-bold uppercase tracking-widest text-xs hover:text-kefi-brown transition-colors"
                        type="submit"
                    >
                        Subscribe
                    </button>
                </form>
                <p className="text-[10px] text-kefi-taupe uppercase tracking-wider mt-2">
                    No spam, just love.
                </p>
            </div>
        </section>
    )
}

export default NewsletterSignup
