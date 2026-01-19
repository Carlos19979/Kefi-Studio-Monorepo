"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { useCallback, useState, useTransition } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X, Loader2 } from "lucide-react"

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
                <Input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={placeholder}
                    className="w-full bg-transparent border-b border-input py-3 px-4 pr-12 text-foreground font-light focus-visible:outline-none focus-visible:border-primary transition-colors duration-300 placeholder:text-muted-foreground/50 rounded-none border-t-0 border-x-0 focus-visible:ring-0"
                />
                <Button
                    type="submit"
                    variant="ghost"
                    size="icon"
                    disabled={isPending}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors hover:bg-transparent"
                >
                    {isPending ? (
                        <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                        <Search className="h-5 w-5" />
                    )}
                </Button>
            </form>
            {searchParams.get("q") && (
                <Button
                    variant="ghost"
                    onClick={() => {
                        setValue("")
                        const query = createQueryString("q", "")
                        router.push(`${pathname}?${query}`)
                    }}
                    className="mt-2 text-[10px] uppercase tracking-widest text-primary font-bold flex items-center gap-1 hover:opacity-70 transition-opacity hover:bg-transparent h-auto p-0"
                >
                    <X className="h-3 w-3" />
                    Clear Search
                </Button>
            )}
        </div>
    )
}

export default ProductFinder
