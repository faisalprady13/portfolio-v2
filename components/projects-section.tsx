"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"

import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { projects, type Project } from "@/lib/projects-data"

const INITIAL_COUNT = 3

function chunk<T>(items: T[], size: number): T[][] {
  const chunks: T[][] = []
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size))
  }
  return chunks
}

function ProjectCluster({
  projects: clusterProjects,
  reversed = false,
}: {
  projects: Project[]
  reversed?: boolean
}) {
  const [featured, stackedTop, stackedBottom] = clusterProjects

  const featuredCard = (
    <ProjectCard project={featured} featured className="sm:row-span-2" />
  )
  const stackedCards = (
    <div className="grid gap-4">
      <ProjectCard project={stackedTop} />
      <ProjectCard project={stackedBottom} />
    </div>
  )

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {reversed ? (
        <>
          {stackedCards}
          {featuredCard}
        </>
      ) : (
        <>
          {featuredCard}
          {stackedCards}
        </>
      )}
    </div>
  )
}

export function ProjectsSection() {
  const [expanded, setExpanded] = React.useState(false)

  const initial = projects.slice(0, INITIAL_COUNT)
  const remaining = projects.slice(INITIAL_COUNT)
  const remainingClusters = chunk(remaining, INITIAL_COUNT)

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
        Projects
      </h2>

      <div className="mt-10 flex flex-col gap-4 border-t border-border pt-8">
        <ProjectCluster projects={initial} />

        {expanded &&
          remainingClusters.map((cluster, index) =>
            cluster.length === INITIAL_COUNT ? (
              <ProjectCluster
                key={cluster[0].slug}
                projects={cluster}
                reversed={index % 2 === 0}
              />
            ) : (
              <div
                key={cluster[0].slug}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              >
                {cluster.map((project) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    className={cn(cluster.length === 1 && "sm:col-span-2")}
                  />
                ))}
              </div>
            )
          )}
      </div>

      {remaining.length > 0 ? (
        <div className="mt-8 flex justify-center">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setExpanded((value) => !value)}
          >
            {expanded ? "Show less" : "Show more"}
            <ChevronDown
              className={cn("transition-transform", expanded && "rotate-180")}
            />
          </Button>
        </div>
      ) : null}
    </section>
  )
}
