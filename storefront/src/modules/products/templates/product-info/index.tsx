import { HttpTypes } from "@medusajs/types"
import { Heading, Text } from "@medusajs/ui"
import { LocalizedClientLink } from "@modules/common"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div id="product-info">
      <div className="flex flex-col gap-y-6 lg:max-w-[500px] mx-auto">
        {product.collection && (
          <LocalizedClientLink
            href={`/collections/${product.collection.handle}`}
            className="text-xs font-bold tracking-[0.25em] uppercase text-kefi-maroon hover:text-kefi-maroon-dark transition-colors"
          >
            {product.collection.title}
          </LocalizedClientLink>
        )}
        <Heading
          level="h2"
          className="text-4xl md:text-5xl font-serif text-kefi-brown font-normal leading-tight"
          data-testid="product-title"
        >
          {product.title}
        </Heading>

        <Text
          className="text-sm md:text-base font-light text-kefi-taupe whitespace-pre-line leading-relaxed"
          data-testid="product-description"
        >
          {product.description}
        </Text>
      </div>
    </div>
  )
}

export default ProductInfo
