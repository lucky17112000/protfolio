import { ScrollIndicator } from "@/components/ScrollIndicator"
import { IconGithub, IconLinkedin, IconCodeforces, IconLeetCode, IconCodeChef } from "@/components/icons"

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
  { l: "GitHub",     tip: "See my open-source work",  Icon: IconGithub,     h: "https://github.com/lucky17112000" },
  { l: "LinkedIn",   tip: "Connect professionally",   Icon: IconLinkedin,   h: "https://www.linkedin.com/in/alamin-mustafa-rahim-433407271/" },
  { l: "Codeforces", tip: "1200+ CF rating",           Icon: IconCodeforces, h: "https://codeforces.com/profile/AxonOops" },
  { l: "LeetCode",   tip: "800+ problems solved",      Icon: IconLeetCode,   h: "https://leetcode.com/u/lucky17112000/" },
  { l: "CodeChef",   tip: "Competitive programming",   Icon: IconCodeChef,   h: "https://www.codechef.com/users/lucky10000" },
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
        Backend-focused full-stack engineer. Building production REST APIs with{" "}
        <em>Node.js</em>, <em>Express</em> and <em>PostgreSQL</em>.{" "}
        Passionate about clean architecture, type-safe code, and <strong>shipping things that work</strong>.
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
          >
            <s.Icon width={16} height={16} />
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
