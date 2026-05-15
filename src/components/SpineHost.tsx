"use client"

import { useState, useEffect } from "react"

function useScrollProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const h = document.documentElement
        const total = h.scrollHeight - h.clientHeight
        setP(total > 0 ? h.scrollTop / total : 0)
      })
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])
  return p
}

function Spine({ progress }: { progress: number }) {
  const pct = Math.max(0, Math.min(1, progress))
  return (
    <div className="spine" aria-hidden="true">
      <div className="ticks" />
      <div className="twin left" />
      <div className="twin right" />
      <div className="rail" />
      <div className="fill" style={{ height: `${pct * 100}%` }} />
      <div className="orb-ring r2" style={{ top: `${pct * 100}%` }} />
      <div className="orb-ring"    style={{ top: `${pct * 100}%` }} />
      <div className="orb"         style={{ top: `${pct * 100}%` }} />
      <div className="pulse" />
      <div className="pulse p2" />
      <div className="pulse p3" />
    </div>
  )
}

export function SpineHost({ children }: { children: React.ReactNode }) {
  const progress = useScrollProgress()

  useEffect(() => {
    const setVar = () => {
      const c = document.querySelector(".container")
      if (!c) return
      const r = c.getBoundingClientRect()
      document.documentElement.style.setProperty("--container-left", `${r.left}px`)
    }
    setVar()
    window.addEventListener("resize", setVar)
    return () => window.removeEventListener("resize", setVar)
  }, [])

  return (
    <div className="spine-host">
      <Spine progress={progress} />
      {children}
    </div>
  )
}
