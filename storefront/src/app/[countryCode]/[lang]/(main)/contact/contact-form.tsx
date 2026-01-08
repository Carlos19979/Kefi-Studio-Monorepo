"use client"

import { useState } from "react"

interface ContactFormProps {
    dict: any
}

export default function ContactForm({ dict }: ContactFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
    const [errorMessage, setErrorMessage] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("loading")
        setErrorMessage("")

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || "Failed to send message")
            }

            setStatus("success")
            setFormData({ name: "", email: "", subject: "", message: "" })

            // Reset success message after 5 seconds
            setTimeout(() => setStatus("idle"), 5000)
        } catch (error) {
            setStatus("error")
            setErrorMessage(error instanceof Error ? error.message : "An error occurred")
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-sm shadow-xl p-8 md:p-12 space-y-6">
            {/* Success Message */}
            {status === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-sm mb-4">
                    <p className="text-sm">✓ Message sent successfully! We'll get back to you soon.</p>
                </div>
            )}

            {/* Error Message */}
            {status === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-sm mb-4">
                    <p className="text-sm">✗ {errorMessage}</p>
                </div>
            )}

            {/* Name */}
            <div>
                <label
                    htmlFor="name"
                    className="block text-sm font-bold tracking-[0.15em] uppercase text-kefi-brown mb-2"
                >
                    {dict.form.name}
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={dict.form.name_placeholder}
                    className="w-full px-4 py-3 border border-kefi-brown/20 rounded-sm focus:outline-none focus:border-kefi-maroon transition-colors text-kefi-brown"
                    required
                    disabled={status === "loading"}
                />
            </div>

            {/* Email */}
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-bold tracking-[0.15em] uppercase text-kefi-brown mb-2"
                >
                    {dict.form.email}
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={dict.form.email_placeholder}
                    className="w-full px-4 py-3 border border-kefi-brown/20 rounded-sm focus:outline-none focus:border-kefi-maroon transition-colors text-kefi-brown"
                    required
                    disabled={status === "loading"}
                />
            </div>

            {/* Subject */}
            <div>
                <label
                    htmlFor="subject"
                    className="block text-sm font-bold tracking-[0.15em] uppercase text-kefi-brown mb-2"
                >
                    {dict.form.subject}
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={dict.form.subject_placeholder}
                    className="w-full px-4 py-3 border border-kefi-brown/20 rounded-sm focus:outline-none focus:border-kefi-maroon transition-colors text-kefi-brown"
                    required
                    disabled={status === "loading"}
                />
            </div>

            {/* Message */}
            <div>
                <label
                    htmlFor="message"
                    className="block text-sm font-bold tracking-[0.15em] uppercase text-kefi-brown mb-2"
                >
                    {dict.form.message}
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={dict.form.message_placeholder}
                    className="w-full px-4 py-3 border border-kefi-brown/20 rounded-sm focus:outline-none focus:border-kefi-maroon transition-colors text-kefi-brown resize-none"
                    required
                    disabled={status === "loading"}
                ></textarea>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={status === "loading"}
                className="w-full h-14 bg-kefi-maroon text-white hover:bg-kefi-maroon-dark text-sm font-bold tracking-[0.15em] uppercase transition-all duration-300 shadow-lg hover:shadow-2xl group flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === "loading" ? (
                    <>
                        <span className="inline-block size-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Sending...</span>
                    </>
                ) : (
                    <>
                        <span>{dict.form.submit}</span>
                        <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                            send
                        </span>
                    </>
                )}
            </button>
        </form>
    )
}
