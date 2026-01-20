"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const NewsletterForm = ({ dict }: { dict: any }) => {
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
    const [shouldShake, setShouldShake] = useState(false)

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateEmail(email)) {
            setStatus("error")
            setShouldShake(true)
            setTimeout(() => setShouldShake(false), 500)
            return
        }

        // Simulate submission
        setStatus("success")
        setTimeout(() => {
            setEmail("")
            setStatus("idle")
        }, 3000)
    }

    const shakeAnimation = {
        x: shouldShake ? [0, -10, 10, -10, 10, 0] : 0,
    }

    return (
        <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 max-w-sm mt-6"
            animate={shakeAnimation}
            transition={{ duration: 0.4 }}
        >
            <div className="relative group">
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                        if (status === "error") setStatus("idle")
                    }}
                    placeholder={dict.placeholder}
                    className={`w-full bg-transparent border-b py-3 text-white placeholder-white/40 focus:outline-none transition-colors tracking-wide text-sm ${status === "error"
                            ? "border-red-400 text-red-400"
                            : "border-white/30 focus:border-white"
                        }`}
                />
                <Button
                    type="submit"
                    variant="ghost"
                    className="absolute right-0 bottom-3 text-xs uppercase tracking-widest text-white/60 hover:text-white hover:bg-transparent transition-colors p-0 h-auto"
                >
                    {dict.button}
                </Button>
            </div>
            {status === "error" && (
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-red-400"
                >
                    Please enter a valid email address
                </motion.p>
            )}
            {status === "success" && (
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-white/80"
                >
                    {dict.success}
                </motion.p>
            )}
        </motion.form>
    )
}

export default NewsletterForm
