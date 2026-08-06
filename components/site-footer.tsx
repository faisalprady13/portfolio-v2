import Link from "next/link"

import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { profile } from "@/lib/resume-data"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 print:hidden">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <Link href="/privacy-policy" className="hover:text-foreground">
          Privacy Policy
        </Link>
        <div className="flex items-center gap-4">
          <a href={`mailto:${profile.email}`} className="hover:text-foreground">
            {profile.email}
          </a>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/faisalprady13"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-foreground"
            >
              <GithubIcon className="size-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/faisalprady/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-foreground"
            >
              <LinkedinIcon className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
