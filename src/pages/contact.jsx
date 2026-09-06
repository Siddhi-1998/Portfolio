/* ─── CONTACT ─────────────────────────────────────────────── */
import C from "../assets/style";
import Reveal from "./reveal";
export default function Contact() {
  const contacts = [
    { icon: "✉", label: "Email", value: "ingavale.siddhi1998@gmail.com", href: "mailto:ingavale.siddhi1998@gmail.com" },
    { icon: "☏", label: "Phone", value: "+91 70283 24744", href: "tel:+917028324744" },
    { icon: "in", label: "LinkedIn", value: "linkedin.com/in/siddhi-ingavale", href: "https://linkedin.com/in/siddhi-ingavale" },
    { icon: "📍", label: "Location", value: "Pune, India", href: null },
  ];

  return (
    <section id="contact" style={{
      padding: "7rem 4rem",
      background: `linear-gradient(135deg, ${C.charcoal} 0%, #111 100%)`,
      color: C.white,
    }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <Reveal>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem,4vw,3.5rem)", fontWeight: 900, color: C.white, marginBottom: "1rem" }}>
            Let's <em style={{ color: C.mustard }}>Connect</em>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "3.5rem" }}>
            Open to new opportunities, collaborations, or just a good tech conversation.<br/>I'd love to hear from you.
          </p>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "1rem" }}>
          {contacts.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.1}>
              {c.href ? (
                <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" style={{
                  display: "flex", flexDirection: "column", alignItems: "center",
                  gap: "0.6rem", padding: "1.8rem 1rem",
                  background: "rgba(255,255,255,0.04)",
                  border: `1px solid rgba(255,255,255,0.1)`,
                  borderRadius: "6px",
                  textDecoration: "none",
                  transition: "all 0.25s",
                  color: C.white,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = `${C.mustard}22`;
                  e.currentTarget.style.borderColor = C.mustard;
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.transform = "";
                }}>
                  <div style={{ fontSize: "1.6rem" }}>{c.icon}</div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.1em", color: C.mustard, textTransform: "uppercase" }}>{c.label}</div>
                  <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.7)", textAlign: "center", wordBreak: "break-word" }}>{c.value}</div>
                </a>
              ) : (
                <div style={{
                  display: "flex", flexDirection: "column", alignItems: "center",
                  gap: "0.6rem", padding: "1.8rem 1rem",
                  background: "rgba(255,255,255,0.04)",
                  border: `1px solid rgba(255,255,255,0.1)`,
                  borderRadius: "6px",
                }}>
                  <div style={{ fontSize: "1.6rem" }}>{c.icon}</div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.1em", color: C.mustard, textTransform: "uppercase" }}>{c.label}</div>
                  <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.7)", textAlign: "center" }}>{c.value}</div>
                </div>
              )}
            </Reveal>
          ))}
        </div>

        {/* Big CTA */}
        <Reveal delay={0.4}>
          <div style={{ marginTop: "3.5rem", paddingTop: "3rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <a href="mailto:ingavale.siddhi1998@gmail.com" style={{
              display: "inline-flex", alignItems: "center", gap: "0.75rem",
              padding: "1.1rem 3rem",
              background: C.mustard, color: C.charcoal,
              borderRadius: "3px",
              fontSize: "1rem", fontWeight: 700,
              textDecoration: "none", letterSpacing: "0.05em",
              transition: "all 0.25s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = C.mustardDark; e.currentTarget.style.color = C.white; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = `0 12px 32px ${C.mustard}55`; }}
            onMouseLeave={e => { e.currentTarget.style.background = C.mustard; e.currentTarget.style.color = C.charcoal; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
            >
              Send Me a Message ✉
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}