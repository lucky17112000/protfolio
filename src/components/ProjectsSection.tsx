"use client"

import Image from "next/image"
import { useState, useEffect, useRef, useMemo } from "react"

const PROJECTS = [
  {
    slug: "event-management", name: "Event Management Platform", idx: "01",
    role: "Full-stack", year: "2025",
    desc: "Full-featured event management platform with an integrated AI chatbot, robust API rate limiting, and infinite-scroll event feeds — built for scale and smooth user experience.",
    bullets: [
      "AI chatbot for instant event discovery and attendee Q&A",
      "Rate limiting protects the API under high-traffic scenarios",
      "Infinite scroll with optimistic UI keeps the feed snappy",
    ],
    stack: ["Next.js", "TypeScript", "AI", "PostgreSQL"],
    img: "/event.jpg",
    github: "https://github.com/lucky17112000/event-managment-frontend",
    live: "https://event-managment-frontend-kappa.vercel.app/",
    tag: "Full-stack",
    upcoming: false,
  },
  {
    slug: "tutor", name: "Tutor Tracker Dashboard", idx: "02",
    role: "Full-stack", year: "2025",
    desc: "Connects students with the right tutors through smart search, real-time communication and a fully typed Next.js frontend on top of REST APIs.",
    bullets: [
      "Normalised heterogenous data from multiple sources",
      "Responsive dashboard with no measurable performance regression",
      "Graceful handling of sparse or private profile data",
    ],
    stack: ["Next.js", "TypeScript", "REST", "PostgreSQL"],
    img: "/tutor.jpg",
    github: "https://github.com/lucky17112000/assingment-4",
    live: "https://assingment-4-frontend-9afin4lod-tempreal17112000-6320s-projects.vercel.app/",
    tag: "Full-stack",
    upcoming: false,
  },
  {
    slug: "ecospark", name: "Ecospark", idx: "03",
    role: "Backend lead", year: "2025",
    desc: "Sustainability platform with a backend-first architecture. Designed fast REST APIs, normalized data models, and a reliable deploy pipeline so the frontend team could iterate without backend churn.",
    bullets: [
      "Scalable route design, lightweight responses, type-safe contracts",
      "PostgreSQL schema kept stable across frontend iterations",
      "Production-ready validation, error handling and observability",
    ],
    stack: ["Node.js", "Express", "TypeScript", "PostgreSQL"],
    img: "/ecospark.jpg",
    github: "https://github.com/lucky17112000/ecospark-backend",
    live: "https://ecospark-frontend-ruddy.vercel.app/",
    tag: "Backend",
    upcoming: false,
  },
]

function useInView(ref: React.RefObject<Element | null>, threshold = 0.15) {
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

function RocketSvg() {
  return (
    <svg viewBox="0 0 40 52" width="40" height="52" style={{ display: "block", overflow: "visible" }}>
      <defs>
        <linearGradient id="rkBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#FFFFFF" />
          <stop offset="55%"  stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="var(--accent-bright)" />
        </linearGradient>
        <linearGradient id="rkFlame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="var(--accent-bright)" />
          <stop offset="60%"  stopColor="var(--accent)" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g className="flame">
        <path d="M 14 38 Q 20 56 26 38 Q 22 44 20 44 Q 18 44 14 38 Z" fill="url(#rkFlame)" />
        <path d="M 16 38 Q 20 50 24 38 Q 22 42 20 42 Q 18 42 16 38 Z" fill="#FFFFFF" opacity="0.85" />
      </g>
      <path d="M 10 30 L 3 39 L 10 39 Z"  fill="var(--accent)" stroke="var(--accent-bright)" strokeWidth="0.6" />
      <path d="M 30 30 L 37 39 L 30 39 Z" fill="var(--accent)" stroke="var(--accent-bright)" strokeWidth="0.6" />
      <path d="M 20 2 Q 30 14 30 30 L 30 39 L 10 39 L 10 30 Q 10 14 20 2 Z"
        fill="url(#rkBody)" stroke="var(--accent)" strokeWidth="0.8" />
      <path d="M 13 25 L 27 25" stroke="var(--accent)" strokeWidth="0.8" opacity="0.5" />
      <circle cx="20" cy="18" r="3.6" fill="#000" />
      <circle cx="20" cy="18" r="3.6" fill="none" stroke="var(--accent)" strokeWidth="1" />
      <circle cx="18.5" cy="16.5" r="1.2" fill="#FFFFFF" opacity="0.9" />
      <circle cx="20" cy="2.5" r="1.2" fill="#FFFFFF" />
    </svg>
  )
}

function ProjectsRocket({ count }: { count: number }) {
  const wrapRef   = useRef<HTMLDivElement>(null)
  const pathRef   = useRef<SVGPathElement>(null)
  const brightRef = useRef<SVGPathElement>(null)
  const rocketRef = useRef<HTMLDivElement>(null)
  const [dims, setDims] = useState({ w: 800, h: 1600 })

  useEffect(() => {
    if (!wrapRef.current) return
    const measure = () => {
      const r = wrapRef.current!.getBoundingClientRect()
      setDims({ w: Math.round(r.width), h: Math.round(r.height) })
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(wrapRef.current)
    return () => ro.disconnect()
  }, [])

  const sides = useMemo(
    () => Array.from({ length: count }, (_, i) => (i % 2 === 0 ? -1 : 1)),
    [count]
  )

  const { d, waypoints } = useMemo(() => {
    const W = dims.w, H = dims.h
    const PAD = Math.min(60, W * 0.08)
    const pts: { x: number; y: number }[] = [{ x: W / 2, y: 20 }]
    sides.forEach((s, i) => {
      const sectionH = H / sides.length
      const cy = i * sectionH + sectionH / 2
      pts.push({ x: s > 0 ? W - PAD : PAD, y: cy })
    })
    pts.push({ x: W / 2, y: H - 20 })

    let path = `M ${pts[0].x} ${pts[0].y}`
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1], b = pts[i]
      const dy = b.y - a.y
      path += ` C ${a.x} ${a.y + dy * 0.55}, ${b.x} ${a.y + dy * 0.45}, ${b.x} ${b.y}`
    }
    return { d: path, waypoints: pts }
  }, [dims, sides])

  useEffect(() => {
    let raf = 0
    const tick = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const wrap   = wrapRef.current
        const rocket = rocketRef.current
        const path   = pathRef.current
        const bright = brightRef.current
        if (!wrap || !rocket || !path) return
        const r  = wrap.getBoundingClientRect()
        const vh = window.innerHeight
        const start = vh * 0.75
        const end   = -r.height + vh * 0.30
        const range = start - end
        if (range <= 0) return
        const raw = (start - r.top) / range
        const p = Math.max(0, Math.min(1, raw))
        const len = path.getTotalLength()
        if (!len) return
        const at  = len * p
        const pt  = path.getPointAtLength(at)
        const pt2 = path.getPointAtLength(Math.min(len, at + 1))
        const ang = Math.atan2(pt2.y - pt.y, pt2.x - pt.x) * 180 / Math.PI
        rocket.style.left      = pt.x + "px"
        rocket.style.top       = pt.y + "px"
        rocket.style.transform = `translate(-50%, -50%) rotate(${ang + 90}deg)`
        if (bright) bright.style.strokeDasharray = `${at} ${len}`
      })
    }
    tick()
    window.addEventListener("scroll", tick, { passive: true })
    window.addEventListener("resize", tick)
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", tick); window.removeEventListener("resize", tick) }
  }, [d])

  const W = dims.w, H = dims.h
  return (
    <div ref={wrapRef} className="projects-rocket-track" aria-hidden="true">
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
        <path ref={pathRef} d={d} className="trail" />
        <path ref={brightRef} d={d} className="trail bright" strokeDasharray="0" />
        <circle cx={waypoints[0].x} cy={waypoints[0].y} r="5" fill="var(--accent)" className="target" />
        <circle cx={waypoints[0].x} cy={waypoints[0].y} r="9" fill="none" stroke="var(--accent)" strokeOpacity="0.5" />
        <circle cx={waypoints[waypoints.length - 1].x} cy={waypoints[waypoints.length - 1].y} r="14" fill="none" stroke="var(--accent)" strokeOpacity="0.5" strokeDasharray="3 4" />
        <circle cx={waypoints[waypoints.length - 1].x} cy={waypoints[waypoints.length - 1].y} r="6" fill="var(--accent)" opacity="0.4" />
        <circle cx={waypoints[waypoints.length - 1].x} cy={waypoints[waypoints.length - 1].y} r="2.5" fill="var(--accent)" />
      </svg>
      <div ref={rocketRef} className="rocket-icon">
        <RocketSvg />
      </div>
    </div>
  )
}

function FeatureProject({ p, i }: { p: typeof PROJECTS[0]; i: number }) {
  const ref  = useRef<HTMLElement>(null)
  const seen = useInView(ref, 0.15)
  return (
    <article
      ref={ref}
      className={"project-feature " + (i % 2 ? "flip " : "") + "reveal " + (seen ? "in" : "")}
      style={{ transitionDelay: `${i * 60}ms` }}
    >
      <div className="pf-media">
        <span className="pf-tag">{p.tag}</span>
        <span className="pf-num">{p.idx}</span>
        <Image
          src={p.img}
          alt={p.name}
          fill
          className="pf-img"
          style={{ objectFit: "cover" }}
          sizes="(max-width: 880px) 100vw, 55vw"
          loading="lazy"
        />
      </div>
      <div className="pf-body">
        <div className="pf-meta">
          <span>{p.role}</span>
          <span className="pipe">/</span>
          <span>{p.year}</span>
          <span className="pipe">/</span>
          <span>{p.stack[0]}</span>
        </div>
        <h3 className="pf-name">
          {p.name}
          <span className="arrow">↗</span>
        </h3>
        <p className="pf-desc">{p.desc}</p>
        <ul className="pf-list">
          {p.bullets.map((b) => <li key={b}>{b}</li>)}
        </ul>
        <div className="pf-stack">
          {p.stack.map((t) => <span key={t} className="tech">{t}</span>)}
        </div>
        <div className="pf-actions">
          {!p.upcoming && (
            <a className="btn btn-primary" href={p.live} target="_blank" rel="noopener noreferrer">
              Live ↗
            </a>
          )}
          <a className="btn btn-ghost" href={p.github} target="_blank" rel="noopener noreferrer">
            View code
          </a>
          {p.upcoming && (
            <span className="btn btn-ghost" style={{ cursor: "default", opacity: 0.7 }}>
              Coming soon
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="section section-anchor">
      <div className="node-marker icon" style={{ top: "4rem" }}>★</div>
      <div className="section-head">
        <div>
          <p className="section-eyebrow">03 — SELECTED WORK</p>
          <h2 className="section-title">
            Things I&rsquo;ve <span className="accent">shipped</span>
          </h2>
        </div>
        <a
          className="btn btn-ghost"
          href="https://github.com/lucky17112000?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          All repos →
        </a>
      </div>
      <div style={{ position: "relative" }}>
        <ProjectsRocket count={PROJECTS.length} />
        <div className="project-list">
          {PROJECTS.map((p, i) => (
            <FeatureProject key={p.slug} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
