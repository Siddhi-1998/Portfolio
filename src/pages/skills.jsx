import { useState } from "react";
import C from "../assets/style";
import Reveal from "../pages/reveal";


export default function Skills() {
  const [hovered, setHovered] = useState(null);
/* ─── SKILLS ──────────────────────────────────────────────── */
const skillGroups = [
  { title: "Backend", icon: "⚙️", skills: ["ASP.NET Core", "ASP.NET Web API", "C#", ".NET Core", "RESTful APIs", "N-Tier Architecture"] },
  { title: "Frontend", icon: "🖥️", skills: ["ReactJS", "JavaScript", "jQuery", "HTML5", "CSS3"] },
  { title: "Database", icon: "🗄️", skills: ["MySQL", "SQL Server", "Query Optimization", "Stored Procedures", "Indexing", "Audit Logs"] },
  { title: "Security & Compliance", icon: "🔒", skills: ["JWT Authentication", "KYC", "AML", "Sanctions Validation", "OWASP Guidelines"] },
  { title: "Tools & Practices", icon: "🛠️", skills: ["Postman", "GitHub", "Code Reviews", "Root-Cause Analysis", "Agile / Scrum"] },
  { title: "AI & Emerging Tech", icon: "🤖", skills: ["Python", "Generative AI", "Google ADK", "Gemini Model", "LLMs"] },
];
  return (
    <section id="skills" style={{ padding: "7rem 4rem", background: C.charcoal }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <Reveal>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.15em", color: C.mustard, textTransform: "uppercase", marginBottom: "0.75rem" }}>
            // technical_skills
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 900, color: C.white, marginBottom: "3.5rem" }}>
            My Tech <em style={{ color: C.mustard }}>Arsenal</em>
          </h2>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <div
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: hovered === i ? `rgba(212,160,23,0.12)` : "rgba(255,255,255,0.04)",
                  border: `1px solid ${hovered === i ? C.mustard : "rgba(255,255,255,0.08)"}`,
                  borderRadius: "6px", padding: "2rem",
                  transition: "all 0.3s",
                  transform: hovered === i ? "translateY(-4px)" : "none",
                  boxShadow: hovered === i ? `0 12px 40px ${C.mustard}22` : "none",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.8rem" }}>{g.icon}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: C.mustard, marginBottom: "1rem" }}>
                  {g.title}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {g.skills.map(s => (
                    <span key={s} style={{
                      background: "rgba(255,255,255,0.06)",
                      color: "rgba(255,255,255,0.8)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      padding: "0.3rem 0.8rem", borderRadius: "2px",
                      fontSize: "0.82rem", transition: "all 0.2s",
                    }}
                    onMouseEnter={e => { e.target.style.background = `${C.mustard}33`; e.target.style.borderColor = C.mustard; e.target.style.color = C.mustardPale; }}
                    onMouseLeave={e => { e.target.style.background = "rgba(255,255,255,0.06)"; e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.color = "rgba(255,255,255,0.8)"; }}
                    >{s}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}