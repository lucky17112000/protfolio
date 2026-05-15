"use client"

import { useState, useEffect, useRef } from "react"

const TREE = {
  root: { label: "alamin.rahim", sub: "Backend-focused · Full-stack · CP" },
  branches: [
    {
      id: "cp", icon: "{ }", label: "Competitive Programming",
      sub: "1200+ CF rating · 1000+ total solved",
      leaves: ["C++", "DSA", "Codeforces · 1200+", "1000+ across all platforms", "Algo design"],
      hot: true,
    },
    {
      id: "be", icon: "⊡", label: "Backend Engineering",
      sub: "REST APIs · DB · containers",
      leaves: ["Node.js", "Express", "REST APIs", "PostgreSQL", "MongoDB", "Docker", ".NET / C#"],
      hot: true,
    },
    {
      id: "fs", icon: "</>", label: "Full-stack Web",
      sub: "Type-safe · deployable",
      leaves: ["TypeScript", "Next.js", "React", "Tailwind", "Git", "Vercel"],
      hot: false,
    },
  ],
}

type Pt = { x: number; y: number }
type PathEntry = { d: string; delay: number; hot: boolean }

function useInView(ref: React.RefObject<Element | null>, threshold = 0.18) {
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

function GraphTree() {
  const wrapRef    = useRef<HTMLDivElement>(null)
  const rootRef    = useRef<HTMLDivElement>(null)
  const branchRefs = useRef<(HTMLDivElement | null)[]>([])
  const leafRefs   = useRef<(HTMLSpanElement | null)[][]>([])

  const [paths, setPaths] = useState<{ primary: PathEntry[]; secondary: PathEntry[] }>({
    primary: [], secondary: [],
  })
  const [dims, setDims] = useState({ w: 800, h: 800 })
  const seen = useInView(wrapRef, 0.18)

  useEffect(() => {
    const calc = () => {
      const wrap = wrapRef.current
      const root = rootRef.current
      if (!wrap || !root) return
      const wr = wrap.getBoundingClientRect()
      setDims({ w: wr.width, h: wr.height })

      const anchor = (el: Element, side: "top" | "bottom" | "mid" = "bottom"): Pt => {
        const r = el.getBoundingClientRect()
        const x = r.left + r.width / 2 - wr.left
        const y =
          side === "top"    ? r.top    - wr.top :
          side === "bottom" ? r.bottom - wr.top :
                              r.top + r.height / 2 - wr.top
        return { x, y }
      }

      const rootAnchor = anchor(root, "bottom")
      const primary: PathEntry[]   = []
      const secondary: PathEntry[] = []

      TREE.branches.forEach((b, bi) => {
        const br = branchRefs.current[bi]
        if (!br) return
        const bTop = anchor(br, "top")
        const bBot = anchor(br, "bottom")
        const midY = (rootAnchor.y + bTop.y) / 2
        primary.push({
          d: `M ${rootAnchor.x} ${rootAnchor.y} C ${rootAnchor.x} ${midY}, ${bTop.x} ${midY}, ${bTop.x} ${bTop.y}`,
          delay: 220 + bi * 140,
          hot: !!b.hot,
        })
        const myLeaves = leafRefs.current[bi] || []
        myLeaves.forEach((lf, li) => {
          if (!lf) return
          const lTop = anchor(lf, "top")
          const midLY = (bBot.y + lTop.y) / 2
          secondary.push({
            d: `M ${bBot.x} ${bBot.y} C ${bBot.x} ${midLY + 6}, ${lTop.x} ${midLY - 4}, ${lTop.x} ${lTop.y}`,
            delay: 700 + bi * 140 + li * 60,
            hot: !!b.hot,
          })
        })
      })

      setPaths({ primary, secondary })
    }

    calc()
    if (!wrapRef.current) return
    const ro = new ResizeObserver(calc)
    ro.observe(wrapRef.current)
    window.addEventListener("resize", calc)
    return () => { ro.disconnect(); window.removeEventListener("resize", calc) }
  }, [])

  return (
    <div ref={wrapRef} className="graph-tree">
      <svg
        className="graph-svg"
        width={dims.w}
        height={dims.h}
        viewBox={`0 0 ${dims.w} ${dims.h}`}
      >
        {paths.secondary.map((p, i) => (
          <path
            key={"s" + i}
            d={p.d}
            className={"graph-line thin " + (p.hot ? "hot " : "") + (seen ? "in" : "")}
            style={{ transitionDelay: `${p.delay}ms` }}
          />
        ))}
        {paths.primary.map((p, i) => (
          <path
            key={"p" + i}
            d={p.d}
            className={"graph-line " + (p.hot ? "hot " : "") + (seen ? "in" : "")}
            style={{ transitionDelay: `${p.delay}ms` }}
          />
        ))}
      </svg>

      {/* Root */}
      <div ref={rootRef} className={"g-root " + (seen ? "in" : "")}>
        <div className="g-orb root-orb">
          <span className="orb-inner">{"</>"}</span>
        </div>
        <div className="g-label">{TREE.root.label}</div>
        <div className="g-sub">{TREE.root.sub}</div>
      </div>

      {/* Branches */}
      <div className="g-branches">
        {TREE.branches.map((b, bi) => (
          <div
            key={b.id}
            ref={(el) => { branchRefs.current[bi] = el }}
            className={"g-branch " + (b.hot ? "hot " : "") + (seen ? "in" : "")}
            style={{ transitionDelay: `${400 + bi * 120}ms` }}
          >
            <div className={"g-orb " + (b.hot ? "hot" : "")}>
              <span className="orb-inner">{b.icon}</span>
            </div>
            <div className="g-label">{b.label}</div>
            <div className="g-sub">{b.sub}</div>
          </div>
        ))}
      </div>

      {/* Leaves */}
      <div className="g-leafrow">
        {TREE.branches.map((b, bi) => (
          <div key={b.id} className="g-leafcluster">
            {b.leaves.map((label, li) => (
              <span
                key={label}
                ref={(el) => {
                  if (!leafRefs.current[bi]) leafRefs.current[bi] = []
                  leafRefs.current[bi][li] = el
                }}
                className={"g-leaf " + (b.hot ? "hot " : "") + (seen ? "in" : "")}
                style={{ transitionDelay: `${900 + bi * 120 + li * 60}ms` }}
              >
                {label}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export function SkillTree() {
  return (
    <section id="skills" className="section section-anchor">
      <div className="node-marker icon" style={{ top: "4rem" }}>{"</>"}</div>
      <div className="section-head">
        <div>
          <p className="section-eyebrow">02 — SKILL TREE</p>
          <h2 className="section-title">
            Branches of <span className="accent">expertise</span>
          </h2>
        </div>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            padding: "5px 12px",
            borderRadius: 999,
            border: "1px solid var(--accent-line)",
            background: "var(--accent-soft)",
            color: "var(--accent)",
            letterSpacing: "0.08em",
          }}
        >
          ● Always growing
        </span>
      </div>

      <GraphTree />

      <div className="tree-legend">
        <div className="item">
          <span
            className="swatch"
            style={{ background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }}
          />
          Core strength
        </div>
        <div className="item">
          <span className="swatch" style={{ background: "rgba(255,255,255,0.4)" }} />
          Proficient
        </div>
        <div className="item">
          <span className="swatch" style={{ background: "rgba(255,255,255,0.15)" }} />
          Familiar
        </div>
      </div>
    </section>
  )
}
