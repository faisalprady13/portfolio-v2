"use client"

import * as React from "react"
import { DownloadIcon } from "lucide-react"
import { motion, MotionConfig, type Variants } from "framer-motion"
import Link from "next/link"

import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  education,
  experience,
  languageSkills,
  profile,
  technicalSkillCategories,
} from "@/lib/resume-data"

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

const row: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
}

export function ExperienceSection() {
  const allValues = experience.map((_, index) => index)
  const [openItems, setOpenItems] = React.useState<number[]>([0, 1, 2])

  const allExpanded = openItems.length === experience.length

  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
          Experience
        </h2>
        <Button
          size="sm"
          nativeButton={false}
          render={<Link href="/resume" />}
          className="cursor-pointer bg-emerald-500 text-white hover:bg-emerald-600"
        >
          <DownloadIcon />
          Save PDF
        </Button>
      </div>

      <div className="mt-10 border-t border-border pt-6">
        <h3 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Summary
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground/90">
          {profile.summary}
        </p>
      </div>

      <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
        <h3 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Resume
        </h3>
        <button
          type="button"
          onClick={() => setOpenItems(allExpanded ? [] : allValues)}
          className="text-xs font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          {allExpanded ? "Collapse all" : "Expand all"}
        </button>
      </div>

      <Accordion
        multiple
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

      <div className="mt-14 grid grid-cols-1 gap-8 border-t border-border pt-6 sm:grid-cols-2">
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

      <div className="mt-14 border-t border-border pt-6">
        <h3 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Capabilities
        </h3>
        <MotionConfig reducedMotion="user">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-4"
          >
            {technicalSkillCategories.map((group) => (
              <motion.div
                key={group.category}
                variants={row}
                className="group grid grid-cols-1 gap-1.5 border-b border-border py-5 sm:grid-cols-[200px_1fr] sm:gap-6"
              >
                <h4 className="relative pl-4 font-heading text-base font-medium tracking-tight sm:text-lg">
                  <span className="absolute top-0.5 left-0 h-[calc(100%-0.25rem)] w-px origin-top scale-y-0 bg-foreground transition-transform duration-300 ease-out group-hover:scale-y-100" />
                  {group.category}
                </h4>
                <p className="text-sm leading-relaxed text-foreground/80">
                  {group.skills.map((skill, index) => (
                    <span key={skill.name}>
                      <span
                        className={
                          skill.featured ? "font-medium text-foreground" : ""
                        }
                      >
                        {skill.name}
                      </span>
                      {index < group.skills.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </MotionConfig>
      </div>
    </section>
  )
}
