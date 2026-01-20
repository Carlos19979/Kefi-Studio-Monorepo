import { getBaseURL } from "@lib/util/env"
import { MetadataRoute } from "next"
import { getCollectionsList } from "@lib/data/collections"
import { getProductsList } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = getBaseURL()

    const { response } = await getProductsList({
        countryCode: "us",
        queryParams: { limit: 1000 },
    }).catch(() => ({ response: { products: [] as HttpTypes.StoreProduct[] } }))

    const { collections } = await getCollectionsList(0, 100).catch(() => ({
        collections: [] as HttpTypes.StoreCollection[],
    }))

    const products =
        response.products?.map((product: HttpTypes.StoreProduct) => ({
            url: `${baseUrl}/products/${product.handle}`,
            lastModified: product.updated_at,
            changeFrequency: "daily" as const,
            priority: 0.8,
        })) || []

    const collectionUrls =
        collections?.map((collection: HttpTypes.StoreCollection) => ({
            url: `${baseUrl}/collections/${collection.handle}`,
            lastModified: collection.updated_at,
            changeFrequency: "weekly" as const,
            priority: 0.7,
        })) || []

    const staticRoutes = [
        "",
        "/store",
        "/about",
        "/account",
        "/cart",
        "/contact",
        "/search",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.5,
    }))

    return [...staticRoutes, ...products, ...collectionUrls]
}
