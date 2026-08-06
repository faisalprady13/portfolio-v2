import { ExperienceSection } from "@/components/experience-section"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <SiteFooter />
    </>
  )
}
