"use client"

import { useState, useEffect } from "react"

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
        <a className="nav-cta" href="mailto:alaminmustafa17112000@gmail.com">Hire me</a>
      </nav>
    </header>
  )
}
