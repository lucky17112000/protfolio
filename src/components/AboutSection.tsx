import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="section section-anchor">
      <div className="node-marker icon" style={{ top: "4rem" }}>01</div>

      <div className="section-head">
        <div>
          <p className="section-eyebrow">01 — ABOUT</p>
          <h2 className="section-title">
            Engineer first, <span className="accent">competitor</span> always.
          </h2>
        </div>
      </div>

      <div className="about-grid">
        {/* Photo frame */}
        <div className="photo-frame reveal in">
          <span className="corner tl" />
          <span className="corner tr" />
          <span className="corner bl" />
          <span className="corner br" />
          <Image
            src="/profile.jpg"
            alt="Alamin Mustafa Rahim"
            fill
            className="photo-img"
            style={{ objectFit: "cover", objectPosition: "center 20%" }}
            sizes="(max-width: 880px) 100vw, 45vw"
          />
          <div className="chip">
            <span className="left">
              <span className="dot" />
              Alamin M. Rahim
            </span>
            <span className="right">CP · .NET · BE</span>
          </div>
        </div>

        {/* Copy */}
        <div className="about-copy reveal in" style={{ transitionDelay: "200ms" }}>
          <h3>
            Backend-focused{" "}
            <span className="accent">full-stack engineer</span> with a
            competitive-programming brain.
          </h3>
          <p>
            I&rsquo;ve spent the last few years grinding algorithms — 1000+ problems
            solved across Codeforces, LeetCode &amp; CodeChef — and building production Node.js / Express APIs on
            PostgreSQL. I focus on backend systems — clean data contracts, fast
            endpoints, sane error handling — and round it out with a typed Next.js
            frontend when a project needs it end-to-end.
          </p>
          <p>
            I ship small, iterate fast, write things down, and care about code the
            next engineer can read without me in the room.
          </p>

          <div className="about-meta">
            <div className="cell">
              <div className="lbl">Based in</div>
              <div className="val">Dhaka, Bangladesh</div>
            </div>
            <div className="cell">
              <div className="lbl">Status</div>
              <div className="val">
                <span className="accent">●</span> Open to roles
              </div>
            </div>
            <div className="cell">
              <div className="lbl">Focus</div>
              <div className="val">Backend · Full-stack web</div>
            </div>
            <div className="cell">
              <div className="lbl">Languages</div>
              <div className="val">C++ · TS · JS · C#</div>
            </div>
          </div>

          <div className="cta-row" style={{ marginTop: 8 }}>
            <a href="#projects" className="btn btn-primary">See work →</a>
            <a
              href="/resume.pdf"
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
