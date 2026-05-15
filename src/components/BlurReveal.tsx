"use client"

import { useEffect } from "react"

export function BlurReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(
      ".section-head, .about-grid, .stats, .graph-tree, .project-feature, .contact-grid, .big-cta, .bf-cols"
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.transition =
              "opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1), filter 0.75s cubic-bezier(0.22,1,0.36,1)"
            el.style.opacity = "1"
            el.style.transform = "translateY(0)"
            el.style.filter = "blur(0px)"
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    )

    els.forEach((el) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(28px)"
      el.style.filter = "blur(8px)"
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return null
}
