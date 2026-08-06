import type { MetadataRoute } from "next"

import { projects } from "@/lib/projects-data"
import { profile } from "@/lib/resume-data"

const siteUrl = `https://${profile.website}`

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/resume", "/privacy-policy"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }))

  const projectRoutes = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
  }))

  return [...staticRoutes, ...projectRoutes]
}
