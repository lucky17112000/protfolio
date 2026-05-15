"use client"

import { useState, useEffect } from "react"

const openNexora = () => document.getElementById("nexora-fab")?.click()

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const o = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", o, { passive: true })
    return () => window.removeEventListener("scroll", o)
  }, [])

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
        <button
          className="nav-nexora-av-btn"
          onClick={openNexora}
          aria-label="Chat with Nexora AI"
        >
          <img src="/nexora.svg" alt="Nexora" />
          <span className="nav-nexora-dot" />
          <span className="nav-nexora-text">
            <span className="nav-nexora-name">Ask Nexora</span>
            <span className="nav-nexora-sub">AI Assistant</span>
          </span>
        </button>

        <span data-tip="Open to work — let's talk!" data-tip-pos="right" style={{ position: "relative", display: "inline-block" }}>
          <a className="nav-cta" href="mailto:alaminmustafa17112000@gmail.com">Hire me</a>
        </span>
      </nav>
    </header>
  )
}
