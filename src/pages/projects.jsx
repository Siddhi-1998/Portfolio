import { useState } from "react";
import C from "../assets/style";
import Reveal from "./reveal";


export default function Projects() {
  const projects = [
  {
    name: "Travel Planner AI Agent",
    icon: "✈️",
    desc: "Standalone AI agent that generates personalised travel itineraries from user inputs, with Gemini-powered agent workflows and prompt handling.",
    tools: ["Python", "Google ADK", "Gemini"],
    color: "#1A5C5C",
  },
  {
    name: "Smart Data Validator",
    icon: "✅",
    desc: "Automated validation for large Excel files — generates detailed error reports and enables secure, clean data import into MySQL, slashing manual effort.",
    tools: ["Python", "MySQL"],
    color: "#7B3F00",
  },
  {
    name: "Music Player App",
    icon: "🎵",
    desc: "Responsive full-stack music player with search, play/pause, and navigation built with a modern React frontend backed by Node.js.",
    tools: ["ReactJS", "NodeJS"],
    color: "#4A1A6B",
  },
  {
    name: "To-Do Task App",
    icon: "☑️",
    desc: "Clean task manager with create, delete, and completion tracking built on reusable React components, demonstrating state management best practices.",
    tools: ["ReactJS"],
    color: "#1A3A5C",
  },
];
  const [hovered, setHovered] = useState(null);
  return (
    <section id="projects" style={{ padding: "7rem 4rem", background: C.mustardBg }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <Reveal>
          
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 900, marginBottom: "3.5rem" }}>
            Personal <em style={{ color: C.mustard }}>Projects</em>
          </h2>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.5rem" }}>
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: C.white,
                  border: `1px solid ${hovered === i ? C.mustard : C.border}`,
                  borderRadius: "8px", padding: "2rem",
                  transition: "all 0.3s",
                  transform: hovered === i ? "translateY(-8px)" : "none",
                  boxShadow: hovered === i ? `0 16px 48px ${C.mustard}33` : `0 2px 8px rgba(0,0,0,0.04)`,
                  position: "relative", overflow: "hidden",
                  cursor: "default",
                }}
              >
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                  background: `linear-gradient(90deg, ${C.mustard}, ${C.mustardDark})`,
                  transform: hovered === i ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left", transition: "transform 0.35s",
                }} />
                <div style={{
                  width: 52, height: 52, borderRadius: "10px",
                  background: C.mustardBg,
                  border: `2px solid ${C.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.6rem", marginBottom: "1.2rem",
                }}>{p.icon}</div>
                <div style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.6rem" }}>{p.name}</div>
                <p style={{ fontSize: "0.88rem", color: C.midGray, lineHeight: 1.65, marginBottom: "1.2rem" }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {p.tools.map(t => (
                    <span key={t} style={{
                      background: `${C.mustard}18`,
                      color: C.mustardDark,
                      border: `1px solid ${C.mustard}44`,
                      padding: "0.25rem 0.7rem", borderRadius: "2px",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.7rem", letterSpacing: "0.04em",
                    }}>{t}</span>
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