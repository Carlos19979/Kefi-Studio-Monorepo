"use client"

import { HttpTypes } from "@medusajs/types"
import { motion } from "framer-motion"

import { ProductPreview } from "@modules/products"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 20,
    },
  },
}

export default function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  const { products } = collection

  if (!products) {
    return null
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {products &&
        products.slice(0, 3).map((product, index) => (
          <motion.div key={product.id} variants={itemVariants}>
            {/* @ts-ignore */}
            <ProductPreview product={product} region={region} isFeatured isPriority={true} />
          </motion.div>
        ))}
    </motion.div>
  )
}
