import Reveal from "./reveal";
import C from "../assets/style";
import { useRef } from "react";
/* ─── ABOUT ───────────────────────────────────────────────── */
export default function About() {
  return (
    <section id="about" style={{ padding: "7rem 4rem", background: C.white }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "5rem", alignItems: "center" }}>
        <Reveal direction="right">
          <div style={{ position: "relative" }}>
            <div style={{
              width: "100%", aspectRatio: "1",
              background: `linear-gradient(135deg, ${C.mustard}, ${C.mustardDark})`,
              borderRadius: "8px",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "7rem",
            }}>
              👩‍💻
            </div>
            <div style={{
              position: "absolute", bottom: "-20px", right: "-20px",
              background: C.charcoal, color: C.white,
              padding: "1rem 1.5rem", borderRadius: "4px",
              fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem",
              lineHeight: 1.6,
            }}>
              <span style={{ color: C.mustard }}>const</span> siddhi = {"{"}<br/>
              &nbsp;&nbsp;role: <span style={{ color: C.mustardPale }}>"Senior Dev"</span>,<br/>
              &nbsp;&nbsp;years: <span style={{ color: C.mustardPale }}>5</span>,<br/>
              &nbsp;&nbsp;domain: <span style={{ color: C.mustardPale }}>"FinTech"</span><br/>
              {"}"}
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal delay={0.1}>
           
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "1.5rem" }}>
              Building Robust Systems<br/>
              <em style={{ color: C.mustard }}>That Handle Real Money</em>
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: C.midGray, marginBottom: "1.2rem" }}>
              I'm a Full Stack .NET Developer with 5+ years in the FinTech space, building systems where correctness
              isn't optional — from KYC onboarding flows and AML sanctions checks to reward engines processing
              real transactions at scale.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: C.midGray }}>
              My work spans backend API design, frontend integration with ReactJS, SQL optimization,
              and compliance-driven development. I've mentored junior developers, led code reviews,
              and owned end-to-end feature delivery across Agile teams.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
