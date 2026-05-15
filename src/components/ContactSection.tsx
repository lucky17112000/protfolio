const CONTACTS = [
  { l: "Email",      tip: "Send me an email — I reply within 24h",  v: "alaminmustafa17112000@gmail.com", ic: "✉",  h: "mailto:alaminmustafa17112000@gmail.com" },
  { l: "Phone",      tip: "Give me a call",                          v: "+880 1797 160 713",               ic: "☏",  h: "tel:+8801797160713" },
  { l: "WhatsApp",   tip: "Chat on WhatsApp",                        v: "Chat on WhatsApp",                ic: "◎",  h: "https://wa.me/8801797160713" },
  { l: "GitHub",     tip: "See my open-source projects",             v: "github.com/lucky17112000",        ic: "G",  h: "https://github.com/lucky17112000" },
  { l: "LinkedIn",   tip: "Connect with me professionally",          v: "linkedin.com/in/alamin",          ic: "in", h: "https://www.linkedin.com/in/alamin-mustafa-rahim-433407271/" },
  { l: "Codeforces", tip: "View my CF profile · 1200+ rating",       v: "codeforces.com/AxonOops",         ic: "⌬",  h: "https://codeforces.com/profile/AxonOops" },
]

export function ContactSection() {
  return (
    <section id="contact" className="section section-anchor">
      <div className="node-marker icon" style={{ top: "4rem" }}>@</div>
      <div className="section-head">
        <div>
          <p className="section-eyebrow">04 — CONTACT</p>
          <h2 className="section-title">
            Let&rsquo;s <span className="accent">connect</span>
          </h2>
        </div>
      </div>

      <div className="contact-grid">
        <div className="contact-hero">
          <div className="status">
            <span
              style={{
                width: 8, height: 8, borderRadius: "50%",
                background: "var(--accent)",
                boxShadow: "0 0 10px var(--accent)",
                display: "inline-block",
              }}
            />
            Open to opportunities
          </div>
          <h3>Available for backend &amp; full-stack projects</h3>
          <p>
            Looking for backend engineering and full-stack roles — especially{" "}
            <span style={{ color: "var(--accent)" }}>Node.js, Express and PostgreSQL</span>.
            Open-source and contract work welcome. Response within 24 hours.
          </p>
          <div className="tags">
            <span>Full-time</span>
            <span>Contract</span>
            <span>Freelance</span>
            <span>Open source</span>
          </div>
        </div>

        <div className="contact-list">
          {CONTACTS.map((c) => (
            <a
              key={c.l}
              href={c.h}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-row"
            >
              <span className="ic">{c.ic}</span>
              <div className="meta">
                <div className="lbl">{c.l}</div>
                <div className="val">{c.v}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
