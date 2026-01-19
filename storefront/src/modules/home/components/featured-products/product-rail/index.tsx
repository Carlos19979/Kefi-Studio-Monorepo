import { HttpTypes } from "@medusajs/types"

import { ProductPreview } from "@modules/products"

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
    <>
      {products &&
        products.slice(0, 3).map((product, index) => (
          <div key={product.id}>
            {/* @ts-ignore */}
            <ProductPreview product={product} region={region} isFeatured isPriority={true} />
          </div>
        ))}
    </>
  )
}
