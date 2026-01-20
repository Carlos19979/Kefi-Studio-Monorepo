import { MetadataRoute } from "next"
import { getBaseURL } from "@lib/util/env"

export default function robots(): MetadataRoute.Robots {
    const baseUrl = getBaseURL()

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/account", "/checkout", "/cart", "/order/confirmed"],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
