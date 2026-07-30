export function scrollToHash(hash: string) {
  const el = document.getElementById(hash)
  if (!el) return

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches

  el.scrollIntoView({
    behavior: reduceMotion ? "instant" : "smooth",
    block: "start",
  })
  window.history.replaceState(null, "", `/#${hash}`)
}
