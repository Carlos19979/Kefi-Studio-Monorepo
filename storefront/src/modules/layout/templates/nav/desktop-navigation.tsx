"use client"

import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { LocalizedClientLink } from "@modules/common"
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu"

export default function DesktopNavigation({ dict }: { dict: any }) {
    const pathname = usePathname()

    const navItems = [
        { href: "/store", label: dict.nav.shop, testId: "nav-store-link" },
        { href: "/about", label: dict.nav.about, testId: "nav-about-link" },
        { href: "/contact", label: dict.nav.contact, testId: "nav-contact-link" },
    ]

    const isActive = (href: string) => {
        // Remove country code and language from pathname for comparison
        const pathSegments = pathname.split("/").filter(Boolean)
        const cleanPath = pathSegments.length > 2 ? `/${pathSegments.slice(2).join("/")}` : "/"
        return cleanPath === href || cleanPath.startsWith(`${href}/`)
    }

    return (
        <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-10">
                {navItems.map((item) => {
                    const active = isActive(item.href)
                    return (
                        <NavigationMenuItem key={item.href} className="relative">
                            <NavigationMenuLink asChild>
                                <LocalizedClientLink
                                    href={item.href}
                                    className="text-xs font-medium tracking-[0.15em] uppercase hover:text-kefi-maroon transition-colors duration-300 py-2 relative"
                                    data-testid={item.testId}
                                >
                                    {item.label}
                                    {active && (
                                        <motion.div
                                            layoutId="activeIndicator"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-kefi-maroon"
                                            transition={{
                                                type: "spring" as const,
                                                stiffness: 380,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                </LocalizedClientLink>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    )
                })}
            </NavigationMenuList>
        </NavigationMenu>
    )
}
