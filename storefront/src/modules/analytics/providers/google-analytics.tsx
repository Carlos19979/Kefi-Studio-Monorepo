"use client"

import { GoogleAnalytics as GA } from "@next/third-parties/google"
import { useEffect, useState } from "react"

export default function GoogleAnalytics() {
    const [consent, setConsent] = useState(false)

    useEffect(() => {
        const storedConsent = localStorage.getItem("cookie_consent")
        if (storedConsent === "true") {
            setConsent(true)
        }
    }, [])

    if (!consent || !process.env.NEXT_PUBLIC_GA_ID) return null

    return <GA gaId={process.env.NEXT_PUBLIC_GA_ID} />
}
