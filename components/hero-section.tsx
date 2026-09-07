"use client"

import * as React from "react"
import { ArrowDown } from "lucide-react"
import {
  motion,
  MotionConfig,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import { profile } from "@/lib/resume-data"
import { scrollToHash } from "@/lib/scroll-to-hash"
import { TypewriterText } from "@/components/typewriter-text"
import { HoverSplitText } from "@/components/hover-split-text"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion()

  const sectionRef = React.useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

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
        ref={sectionRef}
        id="home"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="mx-auto flex min-h-[85svh] max-w-5xl flex-col px-6 py-10 sm:py-14"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-1 flex-col"
        >
          <motion.div
            style={{ x: translateX, y: translateY }}
            className="grid flex-1 items-center gap-12 py-12 md:gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(16rem,0.7fr)]"
          >
            <div className="flex flex-col justify-center gap-6">
              <h1 className="font-heading text-5xl leading-[1.17] font-semibold tracking-tight text-foreground sm:text-6xl md:text-5xl lg:text-6xl">
                <TypewriterText
                  text={`Software Engineer. Product Builder.`}
                  start={isInView}
                  highlight="Engineer."
                />
              </h1>

              <motion.p
                variants={fadeUp}
                className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                <HoverSplitText>
                  Fullstack Product Engineer crafting software from idea to
                  production — from frontend experiences and backend systems to
                  architecture, deployment, and everything in between.
                </HoverSplitText>
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground"
              >
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-foreground"
                >
                  <HoverSplitText>{profile.email}</HoverSplitText>
                </a>
                <span aria-hidden>·</span>
                <span>
                  <HoverSplitText>{profile.location}</HoverSplitText>
                </span>
                <span aria-hidden>·</span>
                <a
                  href="https://github.com/faisalprady13"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground"
                >
                  <HoverSplitText>GitHub</HoverSplitText>
                </a>
                <span aria-hidden>·</span>
                <a
                  href="https://www.linkedin.com/in/faisalprady/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground"
                >
                  <HoverSplitText>LinkedIn</HoverSplitText>
                </a>
                <span aria-hidden>·</span>
                <Link href="/resume" className="hover:text-foreground">
                  <HoverSplitText className="text-emerald-500 dark:text-emerald-400">
                    Resume
                  </HoverSplitText>
                </Link>
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              className="relative mx-auto hidden w-full max-w-sm overflow-hidden rounded-[2rem] border border-border/70 bg-muted/40 p-2 shadow-2xl shadow-foreground/5 lg:block"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/faisal_photo.webp"
                  alt="Portrait of Faisal Prady"
                  fill
                  priority
                  sizes="(min-width: 768px) 28rem, 90vw"
                  className="object-cover object-center"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Link
              href="#projects"
              onClick={(event) => {
                event.preventDefault()
                scrollToHash("projects")
              }}
              className="group inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <HoverSplitText>Selected work</HoverSplitText>
              <motion.span
                className="inline-flex"
                animate={{ y: [0, 4, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
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
