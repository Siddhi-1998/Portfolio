import C from "../assets/style";
import Reveal from "./reveal";
/* ─── EDUCATION ───────────────────────────────────────────── */
export default function Education() {
  return (
    <section id="education" style={{ padding: "7rem 4rem", background: C.white }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <Reveal>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 900, marginBottom: "3.5rem" }}>
            Education & <em style={{ color: C.mustard }}>Certifications</em>
          </h2>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
          <Reveal delay={0.1}>
            <div style={{
              background: C.mustardBg,
              border: `1px solid ${C.border}`,
              borderRadius: "8px", padding: "2.5rem",
              borderLeft: `5px solid ${C.mustard}`,
            }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🎓</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: C.mustardDark, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
                Degree
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.6rem" }}>
                Bachelor of Engineering
              </h3>
              <p style={{ color: C.midGray, fontSize: "0.95rem", lineHeight: 1.6 }}>
                Computer Science & Engineering<br/>
                <strong style={{ color: C.charcoal }}>Bharti Vidyapeeth's College of Engineering</strong><br/>
                Kolhapur · Graduated 2019
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div style={{
              background: C.charcoal,
              border: `1px solid ${C.mustard}44`,
              borderRadius: "8px", padding: "2.5rem",
              borderLeft: `5px solid ${C.mustard}`,
            }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🏅</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: C.mustard, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
                Certification
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 700, color: C.white, marginBottom: "0.6rem" }}>
                Generative AI
              </h3>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                Certified in foundational concepts of Generative AI, Large Language Models, and practical AI applications.
              </p>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                marginTop: "1.2rem",
                background: C.mustard, color: C.white,
                padding: "0.4rem 1rem", borderRadius: "2px",
                fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.05em",
              }}>
                ✦ Issued by Google
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}