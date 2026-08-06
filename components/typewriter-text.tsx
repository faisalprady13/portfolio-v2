"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"

import { HIGHLIGHT_CLASS, HoverSplitText } from "@/components/hover-split-text"

const CHAR_INTERVAL_MS = 28

interface TypewriterTextProps {
  text: string
  start: boolean
  className?: string
  highlight?: string
  onDone?: () => void
}

export function TypewriterText({
  text,
  start,
  className,
  highlight,
  onDone,
}: TypewriterTextProps) {
  const shouldReduceMotion = useReducedMotion()
  const [count, setCount] = React.useState(0)
  const doneRef = React.useRef(false)

  React.useEffect(() => {
    if (!start) return

    if (shouldReduceMotion || count >= text.length) {
      if (!doneRef.current) {
        doneRef.current = true
        onDone?.()
      }
      return
    }

    const timeout = setTimeout(() => setCount((c) => c + 1), CHAR_INTERVAL_MS)
    return () => clearTimeout(timeout)
  }, [start, count, text, shouldReduceMotion, onDone])

  const revealCount = shouldReduceMotion ? text.length : count
  const finished = revealCount >= text.length

  if (finished) {
    return (
      <HoverSplitText className={className} highlight={highlight}>
        {text}
      </HoverSplitText>
    )
  }

  const revealed = text.slice(0, revealCount)
  let revealedNode: React.ReactNode = revealed

  const highlightStart = highlight ? text.indexOf(highlight) : -1
  if (highlightStart >= 0) {
    const highlightEnd = highlightStart + highlight!.length
    const before = revealed.slice(0, highlightStart)
    const mid = revealed.slice(highlightStart, highlightEnd)
    const after = revealed.slice(highlightEnd)
    revealedNode = (
      <>
        {before}
        <span className={HIGHLIGHT_CLASS}>{mid}</span>
        {after}
      </>
    )
  }

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden>{revealedNode}</span>
      {start && (
        <motion.span
          aria-hidden
          className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.1em] bg-current align-middle"
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.5, 0.5, 1],
          }}
        />
      )}
      <span aria-hidden className="opacity-0">
        {text.slice(revealCount)}
      </span>
    </span>
  )
}
