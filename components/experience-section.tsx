"use client"

import * as React from "react"
import { DownloadIcon } from "lucide-react"

import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  education,
  experience,
  languageSkills,
  profile,
  technicalSkills,
} from "@/lib/resume-data"

export function ExperienceSection() {
  const allValues = experience.map((_, index) => index)
  const [openItems, setOpenItems] = React.useState<number[]>([0])

  const allExpanded = openItems.length === experience.length

  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
        Experience
      </h2>

      <div className="mt-10 border-t border-border pt-6">
        <h3 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Summary
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground/90">
          {profile.summary}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 border-t border-border pt-6 sm:grid-cols-3">
        <div>
          <h3 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Education
          </h3>
          <dl className="mt-3 flex flex-col gap-3 text-sm">
            {education.map((item) => (
              <div key={item.degree}>
                <dt className="font-medium">{item.period}</dt>
                <dd className="text-foreground/90">
                  {item.degree}
                  <br />
                  <span className="text-muted-foreground">{item.school}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h3 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Technical skills
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {technicalSkills.map((skill) => (
              <Badge
                key={skill.name}
                variant={skill.featured ? "featured" : "outline"}
              >
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Language skills
          </h3>
          <dl className="mt-3 flex flex-col gap-3 text-sm">
            {languageSkills.map((lang) => (
              <div key={lang.name}>
                <dt className="font-medium">{lang.name}</dt>
                <dd className="text-muted-foreground">{lang.level}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
        <h3 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Resume
        </h3>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setOpenItems(allExpanded ? [] : allValues)}
            className="text-xs font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            {allExpanded ? "Collapse all" : "Expand all"}
          </button>
          <Button
            size="sm"
            nativeButton={false}
            render={<a href="/faisal-prady-resume.pdf" download />}
          >
            Download
            <DownloadIcon />
          </Button>
        </div>
      </div>

      <Accordion
        value={openItems}
        onValueChange={(value) => setOpenItems(value as number[])}
        className="border-t border-border"
      >
        {experience.map((job, index) => (
          <AccordionItem key={job.company + job.range} value={index}>
            <AccordionTrigger>
              <span className="w-24 shrink-0 text-muted-foreground">
                {job.period}
              </span>
              <span className="flex-1">
                {job.title}
                <span className="block text-muted-foreground sm:hidden">
                  {job.company}
                </span>
              </span>
              <span className="hidden flex-1 text-muted-foreground sm:block">
                {job.company}
              </span>
            </AccordionTrigger>
            <AccordionPanel>
              <div className="pl-24">
                <p className="text-xs text-muted-foreground">
                  {job.range} · {job.location}
                </p>
                <ul className="mt-3 flex flex-col gap-2 text-sm text-foreground/90">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="text-muted-foreground">–</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                {"impact" in job && job.impact ? (
                  <p className="mt-3 text-sm text-foreground/90">
                    <span className="font-medium">Impact: </span>
                    {job.impact}
                  </p>
                ) : null}
              </div>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
