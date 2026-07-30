"use client"

import * as React from "react"
import { ArrowDown } from "lucide-react"
import {
  motion,
  MotionConfig,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion"
import Link from "next/link"

import { ThemeToggle } from "@/components/theme-toggle"
import { profile } from "@/lib/resume-data"

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

const lineReveal: Variants = {
  hidden: { y: "100%" },
  show: {
    y: "0%",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

function BerlinClock() {
  const [time, setTime] = React.useState<string | null>(null)

  React.useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Berlin",
        }).format(new Date())
      )

    update()
    const id = setInterval(update, 30_000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="flex items-center gap-2 font-mono text-xs tracking-wider text-muted-foreground uppercase">
      <motion.span
        aria-hidden
        className="size-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"
        animate={{ opacity: [1, 0.35, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      {time ? `Berlin — ${time}` : "Berlin"}
    </span>
  )
}

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion()

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20, mass: 0.5 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20, mass: 0.5 })
  const translateX = useTransform(springX, [-0.5, 0.5], [-10, 10])
  const translateY = useTransform(springY, [-0.5, 0.5], [-6, 6])

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    if (shouldReduceMotion) return
    const rect = event.currentTarget.getBoundingClientRect()
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="home"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="mx-auto flex min-h-[85svh] max-w-5xl flex-col px-6 py-10 sm:py-14"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-1 flex-col"
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-between gap-4"
          >
            <span className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
              Faisal Prady
            </span>
            <div className="flex items-center gap-3">
              <BerlinClock />
              <ThemeToggle />
            </div>
          </motion.div>

          <motion.div
            style={{ x: translateX, y: translateY }}
            className="flex flex-1 flex-col justify-center gap-6 py-12"
          >
            <h1 className="font-heading text-5xl leading-[1.05] font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl">
              <span className="block overflow-hidden">
                <motion.span variants={lineReveal} className="block">
                  Fullstack Engineer
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span variants={lineReveal} className="block">
                  who builds interfaces that feel{" "}
                  <span className="relative inline-block text-muted-foreground">
                    considered
                    <motion.span
                      aria-hidden
                      className="absolute inset-x-0 -bottom-1 h-[3px] origin-left rounded-full bg-foreground/25"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: 1.05,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    />
                  </span>
                  .
                </motion.span>
              </span>
            </h1>

            <motion.p
              variants={fadeUp}
              className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              I design and build full-stack web products end-to-end —
              turning complex requirements into interfaces that are fast,
              reliable, and genuinely pleasant to use.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground"
            >
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-foreground"
              >
                {profile.email}
              </a>
              <span aria-hidden>·</span>
              <span>{profile.location}</span>
              <span aria-hidden>·</span>
              <Link href="/resume" className="hover:text-foreground">
                Resume
              </Link>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Selected work
              <motion.span
                className="inline-flex"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="size-3.5" />
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </MotionConfig>
  )
}
