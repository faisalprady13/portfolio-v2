import type { MetadataRoute } from "next"

import { profile } from "@/lib/resume-data"

const siteUrl = `https://${profile.website}`

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
