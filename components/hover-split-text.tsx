"use client"

import * as React from "react"
import { motion, useReducedMotion, type Variants } from "framer-motion"

const STAGGER_S = 0.03
const DURATION_S = 0.45
const EASE = [0.16, 1, 0.3, 1] as const

export const HIGHLIGHT_CLASS = "text-emerald-500 dark:text-emerald-400"

interface HoverSplitTextProps {
  children: string
  className?: string
  highlight?: string
}

export function HoverSplitText({
  children,
  className,
  highlight,
}: HoverSplitTextProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return (
      <span className={className}>
        {children.split(/(\s+)/).map((token, i) =>
          token === highlight ? (
            <span key={i} className={HIGHLIGHT_CLASS}>
              {token}
            </span>
          ) : (
            <React.Fragment key={i}>{token}</React.Fragment>
          )
        )}
      </span>
    )
  }

  let wordIndex = 0

  return (
    <motion.span initial="rest" whileHover="hover" className={className}>
      {children.split(/(\s+)/).map((token, i) => {
        if (token === "" || /^\s+$/.test(token)) {
          return <React.Fragment key={i}>{token}</React.Fragment>
        }

        const delay = wordIndex * STAGGER_S
        wordIndex += 1
        const isHighlighted = token === highlight

        const top: Variants = {
          rest: { y: "0%" },
          hover: { y: "-100%", transition: { duration: DURATION_S, ease: EASE, delay } },
        }
        const bottom: Variants = {
          rest: { y: "100%" },
          hover: { y: "0%", transition: { duration: DURATION_S, ease: EASE, delay } },
        }

        return (
          <span
            key={i}
            className={`relative inline-block overflow-hidden align-top ${
              isHighlighted ? HIGHLIGHT_CLASS : ""
            }`}
          >
            <motion.span variants={top} className="block">
              {token}
            </motion.span>
            <motion.span
              aria-hidden
              variants={bottom}
              className="absolute inset-0 block"
            >
              {token}
            </motion.span>
          </span>
        )
      })}
    </motion.span>
  )
}
