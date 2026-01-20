"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { addToCart } from "@lib/data/cart"

type QuickAddToCartProps = {
    productId: string
    variantId: string
    regionId: string
}

export default function QuickAddToCart({
    productId,
    variantId,
    regionId,
}: QuickAddToCartProps) {
    const [isLoading, setIsLoading] = useState(false)

    const handleAddToCart = async (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()

        setIsLoading(true)

        try {
            await addToCart({
                variantId,
                quantity: 1,
                countryCode: regionId,
            })

            toast.success("Added to cart", {
                description: "Product successfully added to your cart",
                duration: 3000,
            })
        } catch (error) {
            toast.error("Error", {
                description: "Failed to add product to cart",
                duration: 3000,
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)]"
        >
            <Button
                onClick={handleAddToCart}
                disabled={isLoading}
                className="w-full bg-kefi-maroon hover:bg-kefi-brown text-kefi-cream transition-colors"
            >
                {isLoading ? "Adding..." : "Quick Add to Cart"}
            </Button>
        </motion.div>
    )
}
