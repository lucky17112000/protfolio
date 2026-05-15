"use client"

import { useEffect } from "react"
import Lenis from "lenis"

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    let raf: number
    const tick = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    // make anchor links work with lenis
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a[href^='#']") as HTMLAnchorElement | null
      if (!anchor) return
      e.preventDefault()
      const id = anchor.getAttribute("href")!.slice(1)
      const el = document.getElementById(id)
      if (el) lenis.scrollTo(el, { offset: -64, duration: 1.4 })
    }
    document.addEventListener("click", handleClick)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      document.removeEventListener("click", handleClick)
    }
  }, [])

  return null
}
