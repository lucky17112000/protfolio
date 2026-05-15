"use client"

import { ChevronDown } from "lucide-react"

export function ScrollArrow({ targetId }: { targetId: string }) {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to next section"
      className="animate-bounce-arrow flex flex-col items-center gap-1.5 text-[#94A3B8] hover:text-[#06B6D4] transition-colors duration-300 group cursor-pointer"
    >
      <span className="text-xs tracking-[0.2em] uppercase font-medium opacity-60 group-hover:opacity-100 transition-opacity">
        Scroll
      </span>
      <span className="flex items-center justify-center w-9 h-9 rounded-full border border-[rgba(248,250,252,0.15)] group-hover:border-[rgba(6,182,212,0.5)] group-hover:shadow-[0_0_16px_rgba(6,182,212,0.25)] transition-all duration-300">
        <ChevronDown size={18} />
      </span>
    </button>
  )
}
