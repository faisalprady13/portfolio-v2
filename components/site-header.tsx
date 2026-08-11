"use client"

import * as React from "react"
import { Menu } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { BerlinClock } from "@/components/berlin-clock"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { scrollToHash } from "@/lib/scroll-to-hash"

const links = [
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/resume", label: "Resume" },
]

const sectionIds = ["projects", "experience"]

export function SiteHeader() {
  const pathname = usePathname()
  const shouldReduceMotion = useReducedMotion()
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState<string | null>(null)

  React.useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null)
      setScrolled(window.scrollY > 8)
      return
    }

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const onScroll = () => {
      setScrolled(window.scrollY > 8)

      const markerY = window.innerHeight * 0.475
      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect()
        return rect.top <= markerY && rect.bottom >= markerY
      })
      setActiveSection(current?.id ?? null)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [pathname])

  function isLinkActive(href: string) {
    if (href === "/resume") return pathname === "/resume"
    return pathname === "/" && activeSection === href.slice(2)
  }

  function handleNavClick(
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    if (pathname === "/" && href.startsWith("/#")) {
      event.preventDefault()
      scrollToHash(href.slice(2))
    }
  }

  const layoutTransition = {
    duration: shouldReduceMotion ? 0 : 0.35,
    ease: [0.65, 0, 0.35, 1] as const,
  }

  return (
    <header className="sticky top-0 z-40 print:hidden">
      <div className="flex justify-center px-6 py-4">
        <motion.div
          layout
          transition={layoutTransition}
          className={cn(
            "flex items-center gap-4 rounded-full border border-transparent transition-colors duration-300",
            scrolled
              ? "w-fit justify-center gap-6 border-border/60 bg-background/70 px-4 py-2 shadow-lg shadow-black/5 backdrop-blur-xl dark:shadow-black/20"
              : "w-full max-w-5xl justify-between px-2 py-2"
          )}
        >
          <motion.div layout transition={layoutTransition}>
            <Link
              href="/"
              className="font-mono text-xs tracking-wider text-muted-foreground uppercase hover:text-foreground"
            >
              Faisal Prady
            </Link>
          </motion.div>

          <motion.div
            layout
            transition={layoutTransition}
            className="hidden sm:flex"
          >
            <nav className="relative flex items-center gap-1 px-1.5 py-1">
              {links.map((link) => {
                const active = isLinkActive(link.href)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link.href)}
                    className={cn(
                      "relative rounded-full px-3 py-1.5 font-mono text-xs tracking-wider uppercase transition-colors",
                      active
                        ? "text-background"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-full bg-foreground"
                        transition={
                          shouldReduceMotion
                            ? { duration: 0 }
                            : { type: "spring", stiffness: 380, damping: 32 }
                        }
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                )
              })}
            </nav>
          </motion.div>

          <motion.div
            layout
            transition={layoutTransition}
            className="flex items-center gap-3"
          >
            <div className="hidden sm:flex">
              <BerlinClock />
            </div>
            <ThemeToggle />

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                render={
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    aria-label="Open menu"
                    className="sm:hidden"
                  />
                }
              >
                <Menu className="size-4" />
              </SheetTrigger>
              <SheetContent side="right" className="gap-0">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <nav className="flex flex-col gap-1 p-6">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={(event) => {
                        handleNavClick(event, link.href)
                        setOpen(false)
                      }}
                      className="rounded-md px-3 py-2.5 font-mono text-sm tracking-wide text-muted-foreground uppercase transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </motion.div>
        </motion.div>
      </div>
    </header>
  )
}
