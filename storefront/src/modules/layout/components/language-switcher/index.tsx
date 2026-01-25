"use client"

import { usePathname, useRouter } from "next/navigation"
import { i18n } from "@lib/dictionaries/i18n-config"
import ReactCountryFlag from "react-country-flag"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const languageMap = {
    en: { countryCode: "GB", label: "English" },
    es: { countryCode: "ES", label: "Español" },
}

export default function LanguageSwitcher() {
    const pathname = usePathname()
    const router = useRouter()

    const segments = pathname.split("/")
    const currentLang = segments[2] as keyof typeof languageMap || "en"

    const handleLanguageChange = (newLang: string) => {
        segments[2] = newLang
        const newPathname = segments.join("/")

        // Set cookie for middleware
        document.cookie = `NEXT_LOCALE=${newLang};path=/;max-age=31536000`

        router.push(newPathname)
    }

    return (
        <Select value={currentLang} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-[60px] border-none bg-transparent shadow-none text-xs font-bold uppercase tracking-widest text-kefi-brown hover:text-kefi-maroon transition-colors focus:ring-0 px-0 justify-center">
                <div className="flex items-center justify-center">
                    <ReactCountryFlag
                        countryCode={languageMap[currentLang]?.countryCode}
                        svg
                        style={{ width: '1.5em', height: '1.5em' }}
                    />
                </div>
            </SelectTrigger>
            <SelectContent className="min-w-[60px] w-[60px]">
                {i18n.locales.map((locale) => {
                    const lang = locale as keyof typeof languageMap
                    return (
                        <SelectItem key={locale} value={locale} className="justify-center px-0 text-center">
                            <div className="flex items-center justify-center w-full">
                                <ReactCountryFlag
                                    countryCode={languageMap[lang]?.countryCode}
                                    svg
                                    style={{ width: '1.5em', height: '1.5em' }}
                                />
                            </div>
                        </SelectItem>
                    )
                })}
            </SelectContent>
        </Select>
    )
}
