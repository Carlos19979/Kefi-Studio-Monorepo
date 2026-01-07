"use client"

import { usePathname, useRouter } from "next/navigation"
import { i18n } from "@lib/dictionaries/i18n-config"

export default function LanguageSwitcher() {
    const pathname = usePathname()
    const router = useRouter()

    const segments = pathname.split("/")
    const currentLang = segments[2]

    const handleLanguageChange = (newLang: string) => {
        segments[2] = newLang
        const newPathname = segments.join("/")

        // Set cookie for middleware
        document.cookie = `NEXT_LOCALE=${newLang};path=/;max-age=31536000`

        router.push(newPathname)
    }

    return (
        <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold">
            {i18n.locales.map((locale) => (
                <button
                    key={locale}
                    onClick={() => handleLanguageChange(locale)}
                    className={`${currentLang === locale
                            ? "text-kefi-maroon"
                            : "text-kefi-brown/40 hover:text-kefi-brown"
                        } transition-colors duration-300`}
                >
                    {locale}
                </button>
            ))}
        </div>
    )
}
