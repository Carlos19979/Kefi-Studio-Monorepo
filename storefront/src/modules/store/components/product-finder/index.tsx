"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { useCallback, useState, transition, useTransition } from "react"

const ProductFinder = ({ lang, placeholder }: { lang: string, placeholder: string }) => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [isPending, startTransition] = useTransition()
    const [value, setValue] = useState(searchParams.get("q") || "")

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams)
            if (value) {
                params.set(name, value)
            } else {
                params.delete(name)
            }
            // Reset page when searching
            params.delete("page")
            return params.toString()
        },
        [searchParams]
    )

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        startTransition(() => {
            const query = createQueryString("q", value)
            router.push(`${pathname}?${query}`)
        })
    }

    return (
        <div className="w-full max-w-xl mx-auto mb-12">
            <form onSubmit={handleSearch} className="relative group">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={placeholder}
                    className="w-full bg-transparent border-b border-kefi-brown/20 py-3 px-4 pr-12 text-kefi-brown font-light focus:outline-none focus:border-kefi-maroon transition-colors duration-300 placeholder:text-kefi-taupe/50"
                />
                <button
                    type="submit"
                    disabled={isPending}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-kefi-brown/50 group-focus-within:text-kefi-maroon transition-colors"
                >
                    {isPending ? (
                        <div className="size-5 border-2 border-kefi-maroon border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                        <span className="material-symbols-outlined text-[24px]">search</span>
                    )}
                </button>
            </form>
            {searchParams.get("q") && (
                <button
                    onClick={() => {
                        setValue("")
                        const query = createQueryString("q", "")
                        router.push(`${pathname}?${query}`)
                    }}
                    className="mt-2 text-[10px] uppercase tracking-widest text-kefi-maroon font-bold flex items-center gap-1 hover:opacity-70 transition-opacity"
                >
                    <span className="material-symbols-outlined text-[14px]">close</span>
                    Clear Search
                </button>
            )}
        </div>
    )
}

export default ProductFinder
