"use client"

import posthog from "posthog-js"
import { PostHogProvider as PHProvider } from "posthog-js/react"
import { useEffect, ReactNode } from "react"

export function PostHogProvider({ children }: { children: ReactNode }) {
    useEffect(() => {
        // Only initialize if consent is given
        const consent = localStorage.getItem("cookie_consent")

        const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY

        // Check if API key exists and consent is given
        if (consent === "true" && apiKey) {
            posthog.init(apiKey, {
                api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.posthog.com',
                person_profiles: 'identified_only',
                persistence: 'localStorage', // We can use storage since consent is given
            })
        }
    }, [])

    return <PHProvider client={posthog}>{children}</PHProvider>
}
