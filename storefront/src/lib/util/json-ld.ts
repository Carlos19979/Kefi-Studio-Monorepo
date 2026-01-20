import { HttpTypes } from "@medusajs/types"

export function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Kefi Studio",
        url: process.env.NEXT_PUBLIC_BASE_URL,
        logo: `${process.env.NEXT_PUBLIC_BASE_URL}/logo.png`, // Assuming logo exists, or use a placeholder
        sameAs: [
            "https://facebook.com/kefistudio",
            "https://instagram.com/kefistudio",
        ],
    }
}

export function generateProductSchema(product: HttpTypes.StoreProduct) {
    const currencyCode = product.variants?.[0]?.calculated_price?.currency_code?.toUpperCase() || "EUR"
    const price = product.variants?.[0]?.calculated_price?.calculated_amount

    return {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.title,
        description: product.description,
        image: product.thumbnail,
        sku: product.variants?.[0]?.sku,
        mpn: product.variants?.[0]?.barcode,
        brand: {
            "@type": "Brand",
            name: "Kefi Studio",
        },
        offers: {
            "@type": "Offer",
            priceCurrency: currencyCode,
            price: price,
            itemCondition: "https://schema.org/NewCondition",
            availability: product.variants?.[0]?.inventory_quantity && product.variants[0].inventory_quantity > 0
                ? "https://schema.org/InStock"
                : "https://schema.org/OutOfStock",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/products/${product.handle}`,
        },
    }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    }
}
