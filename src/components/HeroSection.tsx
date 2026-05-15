import { ScrollIndicator } from "@/components/ScrollIndicator"

const TOKENS = [
  { t: "Competitive",     cls: "" },
  { t: "Programmer",      cls: "accent" },
  { br: true },
  { t: "&",               cls: "stroke" },
  { t: "Backend-focused", cls: "" },
  { br: true },
  { t: "Full-stack",      cls: "stroke" },
  { t: "Developer",       cls: "accent" },
]

const SOCIALS = [
  { l: "GitHub",     ic: "G",  h: "https://github.com/lucky17112000" },
  { l: "LinkedIn",   ic: "in", h: "https://www.linkedin.com/in/alamin-mustafa-rahim-433407271/" },
  { l: "Codeforces", ic: "⌬",  h: "https://codeforces.com/profile/AxonOops" },
  { l: "CodeChef",   ic: "★",  h: "https://www.codechef.com/users/lucky10000" },
  { l: "LeetCode",   ic: "▤",  h: "https://leetcode.com/" },
]

export function HeroSection() {
  return (
    <section id="hero" className="hero section-anchor">
      <div className="hero-meta">ALAMIN.M.RAHIM — PORTFOLIO/2025</div>

      <span className="eyebrow reveal in">
        <span className="dot" />
        Open to backend &amp; full-stack roles
      </span>

      <h1>
        {TOKENS.map((tok, i) =>
          "br" in tok ? (
            <br key={i} />
          ) : (
            <span
              key={i}
              className={"token " + (tok.cls || "")}
              style={{ animationDelay: `${120 + i * 110}ms` }}
            >
              {tok.t}{" "}
            </span>
          )
        )}
      </h1>

      <p className="lede reveal in" style={{ transitionDelay: "650ms" }}>
        Backend-focused full-stack engineer.{" "}
        <strong>Codeforces 1200+</strong> · <strong>1000+</strong> problems solved across all platforms
        (Codeforces, LeetCode &amp; CodeChef). Building production REST APIs with <em>Node.js</em>,{" "}
        <em>Express</em> and PostgreSQL.
      </p>

      <div className="cta-row reveal in" style={{ transitionDelay: "780ms" }}>
        <a href="#projects" className="btn btn-primary">
          View projects <span aria-hidden="true">→</span>
        </a>
        <a href="#skills" className="btn btn-ghost">Skill tree</a>
      </div>

      <div className="socials reveal in" style={{ transitionDelay: "880ms" }}>
        {SOCIALS.map((s) => (
          <a
            key={s.l}
            href={s.h}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.l}
            title={s.l}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 700 }}>
              {s.ic}
            </span>
          </a>
        ))}
      </div>

      <div className="available reveal in" style={{ transitionDelay: "980ms" }}>
        <span className="pulse-dot" />
        <span>Currently available — response within 24h</span>
        <kbd>↵</kbd>
      </div>

      <div className="code-line reveal in" style={{ transitionDelay: "1080ms" }}>
        <span className="prompt">~/portfolio $</span>
        <span>node ./api/server.js</span>
        <span className="blink" />
      </div>

      <ScrollIndicator />
    </section>
  )
}
