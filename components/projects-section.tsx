import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/projects-data"

export function ProjectsSection() {
  const [featured, ...rest] = projects
  const [stackedTop, stackedBottom, ...grid] = rest

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
        Projects
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-4 border-t border-border pt-8 sm:grid-cols-2">
        <ProjectCard project={featured} featured className="sm:row-span-2" />
        <div className="grid gap-4">
          <ProjectCard project={stackedTop} />
          <ProjectCard project={stackedBottom} />
        </div>

        {grid.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
