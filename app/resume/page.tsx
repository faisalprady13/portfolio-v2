import {
  education,
  experience,
  languageSkills,
  profile,
  technicalSkillCategories,
} from "@/lib/resume-data"

export const metadata = {
  title: `${profile.name} — Resume`,
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="border-b border-neutral-200 pb-1.5 text-[10px] font-medium tracking-wider text-neutral-500 uppercase">
      {children}
    </h2>
  )
}

function SkillLine({
  skills,
}: {
  skills: readonly { name: string; featured?: boolean }[]
}) {
  return (
    <p className="mt-1.5 text-[11px] leading-snug text-neutral-700">
      {skills.map((skill, index) => (
        <span key={skill.name}>
          <span
            className={skill.featured ? "font-semibold text-neutral-900" : ""}
          >
            {skill.name}
          </span>
          {index < skills.length - 1 ? ", " : ""}
        </span>
      ))}
    </p>
  )
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        html, body { background: #fff !important; color-scheme: light !important; }
        @page { size: A4; margin: 0; }
      `}</style>
      <div className="mx-auto max-w-[210mm] px-12 py-14 text-neutral-900 print:px-10 print:py-10">
        <header className="flex items-end justify-between gap-6 border-b border-neutral-200 pb-5">
          <div>
            <h1 className="font-heading text-4xl font-semibold tracking-tight">
              {profile.name}
            </h1>
            <p className="mt-1 text-sm text-neutral-600">{profile.title}</p>
          </div>
          <div className="shrink-0 text-right text-xs leading-relaxed text-neutral-500">
            <p>{profile.email}</p>
            <p>{profile.website}</p>
            <p>{profile.location}</p>
          </div>
        </header>

        <section className="mt-8">
          <p className="text-sm leading-relaxed text-neutral-800">
            {profile.summary}
          </p>
        </section>

        <section className="mt-8">
          <SectionLabel>Experience</SectionLabel>
          <div className="mt-4 flex flex-col gap-6">
            {experience.map((job) => (
              <div
                key={job.company + job.range}
                className="break-inside-avoid"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-sm text-neutral-900">
                    <span className="font-semibold">{job.title}</span>
                    {" — "}
                    {job.company}
                  </h3>
                  <span className="shrink-0 text-xs text-neutral-500">
                    {job.range}
                  </span>
                </div>
                <p className="text-xs text-neutral-500">{job.location}</p>
                <ul className="mt-2 flex flex-col gap-1.5">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2 text-sm leading-snug text-neutral-800"
                    >
                      <span className="text-neutral-400">–</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                {"impact" in job && job.impact ? (
                  <p className="mt-2 text-sm leading-snug text-neutral-800">
                    <span className="font-medium">Impact: </span>
                    {job.impact}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <SectionLabel>Technical Skills</SectionLabel>
          <div className="mt-4 grid grid-cols-3 gap-x-8 gap-y-5">
            {technicalSkillCategories.map((group) => (
              <div key={group.category} className="break-inside-avoid">
                <h3 className="text-[10px] font-semibold tracking-wide text-neutral-500 uppercase">
                  {group.category}
                </h3>
                <SkillLine skills={group.skills} />
              </div>
            ))}
          </div>
        </section>

        <div className="mt-8 grid grid-cols-2 gap-10">
          <div>
            <SectionLabel>Education</SectionLabel>
            <dl className="mt-3 flex flex-col gap-2.5 text-xs">
              {education.map((item) => (
                <div key={item.degree}>
                  <dt className="font-medium text-neutral-900">
                    {item.period}
                  </dt>
                  <dd className="text-neutral-500">
                    {item.degree}
                    <br />
                    {item.school}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <SectionLabel>Languages</SectionLabel>
            <dl className="mt-3 flex flex-col gap-2.5 text-xs">
              {languageSkills.map((lang) => (
                <div key={lang.name}>
                  <dt className="font-medium text-neutral-900">
                    {lang.name}
                  </dt>
                  <dd className="text-neutral-500">{lang.level}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
