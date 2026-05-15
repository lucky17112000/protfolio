"use client"

import { useEffect, useRef } from "react"

export function MouseSpotlight() {
  const spotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = spotRef.current
    if (!el) return

    let cx = window.innerWidth / 2
    let cy = window.innerHeight / 2
    let tx = cx, ty = cy
    let raf: number

    const onMove = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
    }

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n

    const tick = () => {
      cx = lerp(cx, tx, 0.07)
      cy = lerp(cy, ty, 0.07)
      el.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={spotRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(91,168,255,0.055) 0%, rgba(91,168,255,0.02) 40%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0,
        willChange: "transform",
        mixBlendMode: "screen",
      }}
    />
  )
}
