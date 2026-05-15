"use client"

import { useState, useEffect, useRef } from "react"

export function AutoScroll() {
  const [active, setActive] = useState(false)
  const rafRef = useRef<number>(0)

  const stop = () => {
    setActive(false)
    cancelAnimationFrame(rafRef.current)
  }

  const start = () => setActive(true)

  // scroll loop
  useEffect(() => {
    if (!active) return
    const speed = 0.7
    const tick = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      if (scrollTop + clientHeight >= scrollHeight - 2) { stop(); return }
      window.scrollBy(0, speed)
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [active])

  // click anywhere stops it
  useEffect(() => {
    if (!active) return
    const onPageClick = (e: MouseEvent) => {
      const btn = document.getElementById("autoscroll-btn")
      if (btn && btn.contains(e.target as Node)) return
      stop()
    }
    window.addEventListener("click", onPageClick)
    return () => window.removeEventListener("click", onPageClick)
  }, [active])

  return (
    <button
      id="autoscroll-btn"
      onClick={() => (active ? stop() : start())}
      aria-label={active ? "Stop auto-scroll" : "Auto-scroll page"}
      title={active ? "Click anywhere to stop" : "Auto-scroll"}
      style={{
        position: "fixed",
        top: "1.1rem",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 60,
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "0 14px 0 10px",
        height: "38px",
        borderRadius: "999px",
        border: active
          ? "1px solid var(--accent)"
          : "1px solid var(--accent-line)",
        background: active
          ? "linear-gradient(135deg, var(--accent-bright), var(--accent))"
          : "rgba(0,0,0,0.75)",
        backdropFilter: "blur(14px)",
        cursor: "pointer",
        boxShadow: active
          ? "0 0 22px var(--accent-glow), 0 4px 16px rgba(0,0,0,0.5)"
          : "0 0 12px var(--accent-soft), 0 2px 12px rgba(0,0,0,0.5)",
        transition: "background 280ms ease, box-shadow 280ms ease, border-color 280ms ease",
        overflow: "hidden",
      }}
    >
      {/* icon */}
      <span
        style={{
          width: "22px",
          height: "22px",
          borderRadius: "50%",
          background: active ? "rgba(0,0,0,0.2)" : "var(--accent-soft)",
          border: "1px solid var(--accent-line)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {active ? (
          /* pause bars */
          <svg width="9" height="10" viewBox="0 0 9 10" fill="none">
            <rect x="0.5" y="0.5" width="2.5" height="9" rx="0.8"
              fill={active ? "#000" : "var(--accent)"} />
            <rect x="6" y="0.5" width="2.5" height="9" rx="0.8"
              fill={active ? "#000" : "var(--accent)"} />
          </svg>
        ) : (
          /* double-chevron down */
          <svg width="10" height="11" viewBox="0 0 10 11" fill="none">
            <path d="M2 1.5l3 3 3-3" stroke="var(--accent)"
              strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 5.5l3 3 3-3" stroke="var(--accent)"
              strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>

      {/* label */}
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10.5px",
          fontWeight: 600,
          letterSpacing: "0.06em",
          color: active ? "#000" : "var(--accent)",
          whiteSpace: "nowrap",
        }}
      >
        {active ? "STOP" : "AUTO SCROLL"}
      </span>

      {/* ripple when active */}
      {active && (
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "999px",
            border: "1.5px solid rgba(255,255,255,0.35)",
            animation: "autoScrollRing 1.8s ease-out infinite",
            pointerEvents: "none",
          }}
        />
      )}
    </button>
  )
}
