"use client"

import { useState } from "react"
import { motion } from "framer-motion"

type ProductCardWrapperProps = {
    children: React.ReactNode
}

export default function ProductCardWrapper({ children }: ProductCardWrapperProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {children}
        </motion.div>
    )
}
