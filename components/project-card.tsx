import {
  ChefHat,
  Frame,
  LayoutTemplate,
  Leaf,
  Ruler,
  TrainFront,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { Project } from "@/lib/projects-data"

const icons: Record<Project["icon"], LucideIcon> = {
  Leaf,
  TrendingUp,
  LayoutTemplate,
  TrainFront,
  Users,
  Frame,
  Ruler,
  ChefHat,
}

// Deterministic per-project "randomness" — same project always gets the same
// spotlight position, but which one varies across the grid.
function hashString(value: string) {
  let hash = 0
  for (let index = 0; index < value.length; index++) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0
  }
  return hash
}

const SPOTLIGHT_POSITIONS = [
  "bg-[radial-gradient(circle_at_20%_25%,color-mix(in_oklch,var(--color-muted),var(--color-foreground)_28%)_0%,transparent_70%)]",
  "bg-[radial-gradient(circle_at_80%_20%,color-mix(in_oklch,var(--color-muted),var(--color-foreground)_28%)_0%,transparent_70%)]",
  "bg-[radial-gradient(circle_at_25%_80%,color-mix(in_oklch,var(--color-muted),var(--color-foreground)_28%)_0%,transparent_70%)]",
  "bg-[radial-gradient(circle_at_75%_75%,color-mix(in_oklch,var(--color-muted),var(--color-foreground)_28%)_0%,transparent_70%)]",
  "bg-[radial-gradient(circle_at_50%_15%,color-mix(in_oklch,var(--color-muted),var(--color-foreground)_28%)_0%,transparent_70%)]",
  "bg-[radial-gradient(circle_at_15%_55%,color-mix(in_oklch,var(--color-muted),var(--color-foreground)_28%)_0%,transparent_70%)]",
]

export function ProjectCard({
  project,
  featured = false,
  className,
}: {
  project: Project
  featured?: boolean
  className?: string
}) {
  const Icon = icons[project.icon]
  const image = project.cardImage ?? project.image
  const spotlight =
    SPOTLIGHT_POSITIONS[hashString(project.slug) % SPOTLIGHT_POSITIONS.length]

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn("group block h-full", className)}
    >
      <Card className="h-full gap-0 p-0 transition-colors group-hover:ring-foreground/25">
        <div
          className={cn(
            "relative flex items-center justify-center overflow-hidden bg-muted",
            featured ? "min-h-40 flex-1" : "h-40"
          )}
        >
          {image ? (
            <Image
              src={image}
              alt={project.title}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover object-left-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <>
              <div
                aria-hidden="true"
                className={cn(
                  "absolute inset-0 scale-100 transition-transform duration-300 group-hover:scale-110",
                  spotlight
                )}
              />
              <div className="relative flex size-16 items-center justify-center rounded-full bg-foreground transition-transform duration-300 group-hover:scale-105">
                <Icon className="size-7 text-background" strokeWidth={1.5} />
              </div>
            </>
          )}
        </div>
        <CardContent className="flex flex-col gap-1.5 px-5 py-4">
          <h3 className="font-heading text-base font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {project.summary}
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}
