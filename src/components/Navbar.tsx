"use client"

import { useState, useEffect } from "react"

const openNexora = () => document.getElementById("nexora-fab")?.click()

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme]       = useState<"dark" | "light">("dark")

  useEffect(() => {
    const o = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", o, { passive: true })
    return () => window.removeEventListener("scroll", o)
  }, [])

  // load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null
    if (saved) apply(saved)
  }, [])

  const apply = (t: "dark" | "light") => {
    setTheme(t)
    document.documentElement.setAttribute("data-theme", t)
    localStorage.setItem("theme", t)
  }

  const toggle = () => apply(theme === "dark" ? "light" : "dark")

  return (
    <header className={"nav " + (scrolled ? "scrolled" : "")}>
      <a href="#hero" className="brand">
        <span className="logo">{"</>"}</span>
        ALAMIN.RAHIM
      </a>

      <nav className="nav-links">
        <a href="#about">about</a>
        <a href="#skills">skills</a>
        <a href="#projects">projects</a>
        <a href="#contact">contact</a>

        {/* Nexora button */}
        <button className="nav-nexora-av-btn" onClick={openNexora} aria-label="Chat with Nexora AI">
          <img src="/nexora.svg" alt="Nexora" />
          <span className="nav-nexora-dot" />
          <span className="nav-nexora-text">
            <span className="nav-nexora-name">Ask Nexora</span>
            <span className="nav-nexora-sub">AI Assistant</span>
          </span>
        </button>

        {/* Theme toggle */}
        <button className="theme-toggle" onClick={toggle} aria-label="Toggle light/dark mode">
          {theme === "dark" ? (
            /* Sun icon */
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            /* Moon icon */
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
            </svg>
          )}
        </button>

        {/* Hire me — no tooltip */}
        <a className="nav-cta" href="mailto:alaminmustafa17112000@gmail.com">Hire me</a>
      </nav>
    </header>
  )
}
