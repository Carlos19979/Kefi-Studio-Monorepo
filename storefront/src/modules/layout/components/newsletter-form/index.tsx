"use client"

import React, { useState } from "react"
import { clx } from "@medusajs/ui"

const NewsletterForm = ({ dict }: { dict: any }) => {
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Simulate submission
        setStatus("success")
        setTimeout(() => {
            setEmail("")
            setStatus("idle")
        }, 3000)
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm mt-6">
            <div className="relative group">
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={dict.placeholder}
                    className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors tracking-wide text-sm"
                />
                <button
                    type="submit"
                    className="absolute right-0 bottom-3 text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors"
                >
                    {dict.button}
                </button>
            </div>
            {status === "success" && (
                <p className="text-xs text-white/80 animate-fade-in">
                    {dict.success}
                </p>
            )}
        </form>
    )
}

export default NewsletterForm
