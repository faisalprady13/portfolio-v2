"use client"

import * as React from "react"
import { motion } from "framer-motion"

export function BerlinClock() {
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
