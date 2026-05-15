"use client"

import { useState, useEffect } from "react"

export function ScrollIndicator() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > window.innerHeight * 0.6)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* ── Scroll-down arrow (hero bottom) ── */}
      <a
        href="#about"
        aria-label="Scroll down"
        style={{
          position: "absolute",
          bottom: "2.2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          textDecoration: "none",
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "9px",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "var(--ink-4)",
          }}
        >
          scroll
        </span>

        {/* outer ring */}
        <span
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            border: "1px solid var(--accent-line)",
            background: "rgba(255,255,255,0.02)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 14px var(--accent-soft)",
            animation: "scrollBounce 2s ease-in-out infinite",
          }}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            style={{ display: "block" }}
          >
            <path
              d="M6.5 2.5v8M3 7.5l3.5 3.5 3.5-3.5"
              stroke="var(--accent)"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        {/* pulsing dot beneath */}
        <span
          style={{
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            background: "var(--accent)",
            boxShadow: "0 0 6px var(--accent)",
            animation: "scrollBounce 2s ease-in-out infinite",
            animationDelay: "0.15s",
          }}
        />
      </a>

      {/* ── Back to top button (fixed, appears on scroll) ── */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          zIndex: 60,
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          border: "1px solid var(--accent-line)",
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(12px)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 18px var(--accent-soft), 0 4px 16px rgba(0,0,0,0.4)",
          transition: "opacity 300ms ease, transform 300ms ease, box-shadow 250ms ease",
          opacity: showTop ? 1 : 0,
          transform: showTop ? "translateY(0) scale(1)" : "translateY(12px) scale(0.85)",
          pointerEvents: showTop ? "auto" : "none",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget
          el.style.boxShadow = "0 0 28px var(--accent-glow), 0 4px 20px rgba(0,0,0,0.5)"
          el.style.transform = "translateY(-2px) scale(1.08)"
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget
          el.style.boxShadow = "0 0 18px var(--accent-soft), 0 4px 16px rgba(0,0,0,0.4)"
          el.style.transform = "translateY(0) scale(1)"
        }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M7 11.5v-9M3 6l4-4 4 4"
            stroke="var(--accent)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </>
  )
}
