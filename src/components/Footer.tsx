"use client"

function LiveTime() {
  const now = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Dhaka",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })
  return <>{now}+06</>
}

export function BigFooter() {
  const year = new Date().getFullYear()

  return (
    <section className="section-anchor" style={{ paddingTop: "1rem", paddingBottom: "0" }}>
      {/* Big CTA */}
      <div className="big-cta">
        <p className="eyebrow-cta">05 — LET&rsquo;S BUILD</p>
        <h2>
          Have an API to ship?<br />
          <span className="accent">Let&rsquo;s talk.</span>
        </h2>
        <p className="sub">
          I&rsquo;m available for backend engineering roles, full-stack contract work and
          open-source collaborations — particularly Node.js, Express and PostgreSQL stacks.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="mailto:alaminmustafa17112000@gmail.com">
            Email me <span>→</span>
          </a>
          <a
            className="btn btn-ghost"
            href="https://wa.me/8801797160713"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="big-foot">
        <p className="bf-signature">
          ALAMIN.<span style={{ color: "var(--accent)" }}>R</span>
        </p>

        <div className="bf-cols">
          <div className="bf-col">
            <h4>Colophon</h4>
            <p className="bf-blurb">
              Backend engineer &amp; competitive programmer based in Dhaka.
              Built with <span className="accent">Next.js</span> + Tailwind, deployed on Vercel.
              Type-set in Space Grotesk, Inter and JetBrains Mono.
            </p>
            <p className="bf-blurb" style={{ marginTop: 8, color: "var(--ink-4)" }}>
              v2.0 — black-spine release · {year}
            </p>
          </div>

          <div className="bf-col">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#hero">Top</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skill tree</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="bf-col">
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="mailto:alaminmustafa17112000@gmail.com">
                  Email <span className="ext">↗</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/lucky17112000" target="_blank" rel="noopener noreferrer">
                  GitHub <span className="ext">↗</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/alamin-mustafa-rahim-433407271/" target="_blank" rel="noopener noreferrer">
                  LinkedIn <span className="ext">↗</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/8801797160713" target="_blank" rel="noopener noreferrer">
                  WhatsApp <span className="ext">↗</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="bf-col">
            <h4>CP profiles</h4>
            <ul>
              <li>
                <a href="https://codeforces.com/profile/AxonOops" target="_blank" rel="noopener noreferrer">
                  Codeforces · 1200+
                </a>
              </li>
              <li>
                <a href="https://www.codechef.com/users/lucky10000" target="_blank" rel="noopener noreferrer">
                  CodeChef
                </a>
              </li>
              <li>
                <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">
                  LeetCode
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bf-bottom">
          <span className="live">
            <span className="dot" />
            Live · Dhaka, BD · <LiveTime />
          </span>
          <span>© {year} Alamin Mustafa Rahim. All systems nominal.</span>
          <a href="#hero">back to top ↑</a>
        </div>
      </footer>
    </section>
  )
}
