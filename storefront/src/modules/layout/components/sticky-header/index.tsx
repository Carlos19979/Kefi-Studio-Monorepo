"use client"

import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import React, { useState } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const StickyHeader = ({ children }: { children: React.ReactNode }) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isHidden, setIsHidden] = useState(false)
    const pathname = usePathname()

    // Home is when we have /[countryCode]/[lang] and nothing more or just /
    const segments = pathname.split("/").filter(Boolean)
    const isHome = segments.length <= 2

    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0

        // Set scrolled state
        if (latest > 20) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }

        // Hide on scroll down, reveal on scroll up
        if (latest > previous && latest > 150) {
            setIsHidden(true)
        } else {
            setIsHidden(false)
        }
    })

    return (
        <motion.header
            className={cn(
                "fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300",
                {
                    "bg-kefi-cream/95 backdrop-blur-md border-kefi-border/50 py-3":
                        isScrolled || !isHome,
                    "bg-transparent border-transparent py-5": !isScrolled && isHome,
                }
            )}
            animate={{
                y: isHidden ? "-100%" : "0%",
            }}
            transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.header>
    )
}

export default StickyHeader
