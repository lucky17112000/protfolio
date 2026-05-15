"use client"

import { useState, useEffect, useRef } from "react"

export function AutoScroll() {
  const [active, setActive] = useState(false)
  const rafRef = useRef<number>(0)

  const stop = () => {
    setActive(false)
    cancelAnimationFrame(rafRef.current)
  }

  const toggle = () => (active ? stop() : setActive(true))

  // scroll loop — stops automatically at footer
  useEffect(() => {
    if (!active) return
    const tick = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      if (scrollTop + clientHeight >= scrollHeight - 4) { stop(); return }
      window.scrollBy(0, 0.8)
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [active])

  // any manual scroll/click stops it
  useEffect(() => {
    if (!active) return
    const onWheel   = () => stop()
    const onTouch   = () => stop()
    const onClick   = (e: MouseEvent) => {
      const btn = document.getElementById("as-btn")
      if (btn?.contains(e.target as Node)) return
      stop()
    }
    window.addEventListener("wheel",      onWheel,  { passive: true })
    window.addEventListener("touchstart", onTouch,  { passive: true })
    window.addEventListener("click",      onClick)
    return () => {
      window.removeEventListener("wheel",      onWheel)
      window.removeEventListener("touchstart", onTouch)
      window.removeEventListener("click",      onClick)
    }
  }, [active])

  return (
    <button
      id="as-btn"
      onClick={toggle}
      aria-label={active ? "Stop auto-scroll" : "Auto-scroll"}
      style={{
        position:      "fixed",
        top:           "1.1rem",
        left:          "50%",
        transform:     "translateX(-50%)",
        zIndex:        60,
        display:       "flex",
        alignItems:    "center",
        gap:           "7px",
        padding:       "0 14px 0 10px",
        height:        "36px",
        borderRadius:  "999px",
        border:        `1px solid ${active ? "var(--accent)" : "var(--rule-2)"}`,
        background:    active
          ? "linear-gradient(135deg, var(--accent-bright), var(--accent))"
          : "rgba(6,8,15,0.85)",
        backdropFilter:"blur(14px)",
        cursor:        "pointer",
        boxShadow:     active
          ? "0 0 18px var(--accent-glow), 0 3px 14px rgba(0,0,0,0.5)"
          : "0 2px 12px rgba(0,0,0,0.4)",
        transition:    "background 250ms ease, border-color 250ms ease, box-shadow 250ms ease",
      }}
    >
      {/* icon */}
      <span style={{
        width: "20px", height: "20px", borderRadius: "50%",
        background: active ? "rgba(0,0,0,0.18)" : "var(--accent-soft)",
        border: "1px solid var(--accent-line)",
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}>
        {active
          ? <svg width="8" height="9" viewBox="0 0 8 9" fill="none">
              <rect x="0" y="0" width="2.5" height="9" rx="0.7" fill="#000"/>
              <rect x="5.5" y="0" width="2.5" height="9" rx="0.7" fill="#000"/>
            </svg>
          : <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 1.5l3 2.5 3-2.5" stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 5l3 2.5 3-2.5"   stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        }
      </span>

      {/* label */}
      <span style={{
        fontFamily:    "var(--font-mono)",
        fontSize:      "10px",
        fontWeight:    600,
        letterSpacing: "0.07em",
        color:         active ? "#020810" : "var(--accent)",
        whiteSpace:    "nowrap",
      }}>
        {active ? "STOP" : "AUTO SCROLL"}
      </span>
    </button>
  )
}
