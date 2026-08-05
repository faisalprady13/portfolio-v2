import {
  Frame,
  LayoutTemplate,
  Leaf,
  Ruler,
  TrainFront,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react"
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
}

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

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn("group block h-full", className)}
    >
      <Card className="h-full gap-0 p-0 transition-colors group-hover:ring-foreground/25">
        <div
          className={cn(
            "flex items-center justify-center bg-muted",
            featured ? "min-h-40 flex-1" : "h-40"
          )}
        >
          <Icon
            className="size-8 text-muted-foreground/70 transition-colors group-hover:text-foreground"
            strokeWidth={1.25}
          />
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
