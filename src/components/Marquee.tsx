interface MarqueeBandProps {
  items: string[]
  reverse?: boolean
  accentIndex: number
}

export function MarqueeBand({ items, reverse, accentIndex }: MarqueeBandProps) {
  const doubled = [...items, ...items]
  return (
    <div className={"marquee " + (reverse ? "reverse" : "")} aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((it, i) => (
          <span
            key={i}
            className={
              "marquee-item " +
              (i % accentIndex === 0
                ? "accent"
                : i % 2
                ? "outline"
                : "")
            }
          >
            {it}
            <span className="marquee-sep" />
          </span>
        ))}
      </div>
    </div>
  )
}
