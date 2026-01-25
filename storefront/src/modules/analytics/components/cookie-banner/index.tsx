"use client"

import { useEffect, useState } from "react"
import { LocalizedClientLink } from "@modules/common/components/localized-client-link"
import { XMark } from "@medusajs/icons"

const CookieBanner = () => {
    const [showBanner, setShowBanner] = useState(false)

    useEffect(() => {
        // Check local storage to see if user has already made a choice
        const consent = localStorage.getItem("cookie_consent")
        if (consent === null) {
            // If no choice, show banner
            setShowBanner(true)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem("cookie_consent", "true")
        setShowBanner(false)
        // Reload page to activate analytics scripts that depend on this
        window.location.reload()
    }

    const handleDecline = () => {
        localStorage.setItem("cookie_consent", "false")
        setShowBanner(false)
    }

    if (!showBanner) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6 md:max-w-md md:left-6 md:bottom-6 md:right-auto animate-in slide-in-from-bottom-10 fade-in duration-500">
            <div className="bg-white border border-kefi-border shadow-2xl p-6 rounded-sm relative">
                <button
                    onClick={handleDecline}
                    className="absolute top-2 right-2 text-kefi-brown/50 hover:text-kefi-brown transition-colors"
                >
                    <XMark className="w-5 h-5" />
                </button>

                <h3 className="font-serif text-lg text-kefi-brown mb-2">Cookie Consent</h3>

                <p className="text-sm text-kefi-brown/70 font-light mb-4 leading-relaxed">
                    We use cookies to improve your experience and analyze site traffic.
                    By clicking "Accept", you agree to our use of cookies.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                    <button
                        onClick={handleAccept}
                        className="flex-1 bg-kefi-maroon text-white text-xs uppercase tracking-widest font-medium py-3 px-4 hover:bg-kefi-maroon-dark transition-colors text-center"
                    >
                        Accept
                    </button>

                    <button
                        onClick={handleDecline}
                        className="flex-1 border border-kefi-border text-kefi-brown text-xs uppercase tracking-widest font-medium py-3 px-4 hover:bg-neutral-50 transition-colors text-center"
                    >
                        Decline
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CookieBanner
