"use client"

import { clx } from "@medusajs/ui"
import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const StickyHeader = ({ children }: { children: React.ReactNode }) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()
    // Home is when we have /[countryCode]/[lang] and nothing more or just /
    const segments = pathname.split("/").filter(Boolean)
    const isHome = segments.length <= 2

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={clx(
                "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out border-b",
                {
                    "bg-kefi-cream/95 backdrop-blur-md border-kefi-border/50 py-3":
                        isScrolled || !isHome,
                    "bg-transparent border-transparent py-5": !isScrolled && isHome,
                }
            )}
        >
            {children}
        </header>
    )
}

export default StickyHeader
