"use client"

import { useState, useEffect, useRef } from "react"

const STATS = [
  { end: 1200, suffix: "+", label: "Codeforces",       sub: "Pupil rank" },
  { end: 1000, suffix: "+", label: "Problems solved",  sub: "All platforms combined" },
  { end: 3,    suffix: "",  label: "Projects shipped", sub: "Production" },
  { end: 3,    suffix: "",  label: "Platforms",        sub: "CF · LC · CodeChef" },
]

function useInView(ref: React.RefObject<Element | null>, threshold = 0.25) {
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const o = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSeen(true); o.disconnect() } },
      { threshold }
    )
    o.observe(ref.current)
    return () => o.disconnect()
  }, [])
  return seen
}

function useCount(end: number, started: boolean, dur = 1600) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!started) { setN(0); return }
    const begin = performance.now()
    let raf: number
    const tick = (t: number) => {
      const e = Math.min(1, (t - begin) / dur)
      const eased = 1 - Math.pow(1 - e, 3)
      setN(Math.round(end * eased))
      if (e < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [end, started])
  return n
}

function StatCell({ stat, started }: { stat: typeof STATS[0]; started: boolean }) {
  const n = useCount(stat.end, started, 1600)
  return (
    <div className="stat-cell">
      <div className="stat-num">{n.toLocaleString()}{stat.suffix}</div>
      <div className="stat-label">{stat.label}</div>
      <div className="stat-sub">{stat.sub}</div>
    </div>
  )
}

export function StatsBanner() {
  const ref = useRef<HTMLDivElement>(null)
  const started = useInView(ref, 0.4)
  return (
    <section className="section-anchor" style={{ paddingTop: "3rem", paddingBottom: "4rem" }}>
      <div className="node-marker" style={{ top: "30px" }} />
      <div className="stats" ref={ref}>
        <div className="scanline" />
        <div className="stat-grid">
          {STATS.map((s) => (
            <StatCell key={s.label} stat={s} started={started} />
          ))}
        </div>
      </div>
    </section>
  )
}
