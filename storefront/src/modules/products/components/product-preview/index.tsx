import { getProductPrice } from "@lib/util/get-product-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import { getProductsById } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
  isPriority,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
  isPriority?: boolean
}) {
  const [pricedProduct] = await getProductsById({
    ids: [product.id!],
    regionId: region.id,
  })

  if (!pricedProduct) {
    return null
  }

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
  })

  return (
    <LocalizedClientLink
      href={`/products/${product.handle}`}
      className="group flex flex-col"
    >
      <div
        data-testid="product-wrapper"
        className="flex flex-col gap-4 h-full"
      >
        <div className="relative overflow-hidden aspect-[4/5]">
          <Thumbnail
            thumbnail={product.thumbnail}
            images={product.images}
            size="full"
            isFeatured={isFeatured}
            isPriority={isPriority}
          />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <h3
            className="text-kefi-brown font-serif text-lg md:text-xl font-normal group-hover:text-kefi-maroon transition-colors"
            data-testid="product-title"
          >
            {product.title}
          </h3>
          {product.description && (
            <p className="text-kefi-taupe text-xs md:text-sm font-light line-clamp-2">
              {product.description}
            </p>
          )}
          <div className="flex items-center gap-x-2 mt-auto pt-2">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
