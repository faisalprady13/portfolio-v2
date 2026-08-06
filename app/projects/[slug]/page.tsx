import { ArrowLeft, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { ProjectCard } from "@/components/project-card"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/projects-data"

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) return {}

  const image = project.cardImage ?? project.image

  return {
    title: project.title,
    description: project.summary,
    openGraph: image ? { images: [{ url: image }] } : undefined,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) notFound()

  const currentIndex = projects.indexOf(project)
  const otherProjects = Array.from(
    { length: 2 },
    (_, i) => projects[(currentIndex + i + 1) % projects.length]
  )

  return (
    <>
      <SiteHeader />
      <div className="mx-auto max-w-5xl px-6 py-24">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" />
          Back to projects
        </Link>

        <h1 className="mt-6 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">{project.context}</p>

        {project.demoUrl ? (
          <div className="mt-10">
            <p className="my-2 text-sm text-muted-foreground">
              {`${project.title} — interactive demo`}
            </p>
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-border bg-muted">
              <iframe
                src={project.demoUrl}
                title={`${project.title} — interactive demo`}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
                className="size-full"
              />
            </div>
          </div>
        ) : project.image ? (
          <div className="relative mt-10 aspect-4/3 w-full overflow-hidden rounded-2xl bg-muted">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="100vw"
              priority
              className="object-cover object-top"
            />
          </div>
        ) : null}

        <div className="mt-10 grid grid-cols-1 gap-8 border-t border-border pt-6 sm:grid-cols-3">
          <div>
            <h3 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Role
            </h3>
            <p className="mt-3 text-sm text-foreground/90">{project.role}</p>
          </div>

          <div>
            <h3 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Tech stack
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>

          {project.url ? (
            <div>
              <h3 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                Live site
              </h3>
              <div className="mt-3">
                <Button
                  size="sm"
                  nativeButton={false}
                  render={
                    <a href={project.url} target="_blank" rel="noreferrer" />
                  }
                >
                  Visit website
                  <ArrowUpRight />
                </Button>
              </div>
            </div>
          ) : null}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 text-sm leading-relaxed text-foreground/90">
          {project.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <h2 className="font-heading text-2xl font-semibold tracking-tight">
            More projects
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {otherProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  )
}
