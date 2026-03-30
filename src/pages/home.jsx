import { useState, useEffect } from "react";
import C from "../assets/style";
export default function Hero() {

  const [typed, setTyped] = useState("");
  const roles = ["Full Stack .NET Developer", "FinTech Engineer", "API Architect", "React Developer"];
  const [rIdx, setRIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const cur = roles[rIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIdx < cur.length) { setTyped(cur.slice(0, charIdx + 1)); setCharIdx(c => c + 1); }
        else { setTimeout(() => setDeleting(true), 1800); }
      } else {
        if (charIdx > 0) { setTyped(cur.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }
        else { setDeleting(false); setRIdx(r => (r + 1) % roles.length); }
      }
    }, deleting ? 45 : 90);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, rIdx]);

  return (
    <section id="hero" style={{
      minHeight: "100vh",
      background: `linear-gradient(135deg, ${C.white} 0%, ${C.mustardBg} 60%, ${C.mustardPale} 100%)`,
      display: "flow", alignItems: "center",
      padding: "8rem 4rem 4rem",
      position: "relative", overflow: "hidden",
    }}>
      {/* Decorative circles */}
      {[
        { w: 500, h: 500, top: "-100px", right: "-100px", opacity: 0.15 },
        { w: 300, h: 300, top: "60px",  right: "60px",   opacity: 0.1  },
        { w: 200, h: 200, bottom: "80px", left: "5%",    opacity: 0.08 },
      ].map((c, i) => (
        <div key={i} style={{
          position: "absolute", width: c.w, height: c.h,
          top: c.top, right: c.right, bottom: c.bottom, left: c.left,
          border: `2px solid ${C.mustard}`, borderRadius: "50%",
          opacity: c.opacity,
          animation: `spin ${20 + i * 8}s linear infinite ${i % 2 ? "reverse" : ""}`,
        }} />
      ))}

      {/* Big decorative letter */}
      <div style={{
        position: "absolute", right: "3rem", top: "50%",
        transform: "translateY(-50%)",
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(200px, 22vw, 340px)",
        fontWeight: 900, color: C.mustard,
        opacity: 0.06, userSelect: "none", lineHeight: 1,
        pointerEvents: "none",
      }}>S</div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: "750px" }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.6rem",
          background: C.mustard, color: C.white,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.72rem", letterSpacing: "0.12em",
          padding: "0.45rem 1.1rem", borderRadius: "2px",
          marginBottom: "1.8rem",
          animation: "fadeUp 0.6s 0.1s ease both",
        }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: C.white, animation: "pulse 2s infinite" }} />
          5+ Years · FinTech · Full Stack
        </div>

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(3.2rem, 6vw, 5.5rem)",
          fontWeight: 900, lineHeight: 1.0,
          color: C.charcoal,
          animation: "fadeUp 0.7s 0.25s ease both",
          marginBottom: "0.5rem",
        }}>
          Siddhi
        </h1>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(3.2rem, 6vw, 5.5rem)",
          fontWeight: 900, lineHeight: 1.0,
          color: C.mustard, fontStyle: "italic",
          animation: "fadeUp 0.7s 0.4s ease both",
          marginBottom: "1.5rem",
        }}>
          Ingavale
        </h1>

        {/* Typewriter */}
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "1.15rem", color: C.midGray,
          marginBottom: "1.8rem",
          animation: "fadeUp 0.7s 0.55s ease both",
          minHeight: "1.8rem",
        }}>
          {typed}
          <span style={{ animation: "blink 1s infinite", color: C.mustard, fontWeight: 700 }}>|</span>
        </div>

        <p style={{
          fontSize: "1.05rem", lineHeight: 1.75,
          color: C.midGray, maxWidth: "560px",
          marginBottom: "2.5rem",
          animation: "fadeUp 0.7s 0.7s ease both",
        }}>
          FinTech specialist with <strong style={{ color: C.charcoal }}>50+ production APIs</strong> delivered,
          cutting response times by <strong style={{ color: C.charcoal }}>40–50%</strong>.
          Specialized in compliance systems, reward engines, and scalable full-stack architecture.
        </p>

        <div style={{
          display: "flex", gap: "1rem", flexWrap: "wrap",
          animation: "fadeUp 0.7s 0.85s ease both",
        }}>
          {[
            { label: "View My Work", href: "#experience", primary: true },
            { label: "Get in Touch", href: "#contact", primary: false },
          ].map(b => (
            <a key={b.label} href={b.href} style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "0.9rem 2.2rem", borderRadius: "3px",
              fontSize: "0.9rem", fontWeight: 700,
              textDecoration: "none", letterSpacing: "0.05em",
              transition: "all 0.25s",
              background: b.primary ? C.mustard : "transparent",
              color: b.primary ? C.white : C.charcoal,
              border: b.primary ? `2px solid ${C.mustard}` : `2px solid ${C.charcoal}`,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = b.primary
                ? `0 8px 24px ${C.mustard}55`
                : `0 8px 24px rgba(0,0,0,0.12)`;
              if (!b.primary) { e.currentTarget.style.background = C.charcoal; e.currentTarget.style.color = C.white; }
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "";
              if (!b.primary) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.charcoal; }
            }}
            >
              {b.label} {b.primary ? "↓" : "→"}
            </a>
          ))}
        </div>

        {/* Stats row */}
        <div style={{
          display: "flex", gap: "3rem", marginTop: "4rem",
          paddingTop: "2rem", borderTop: `1px solid ${C.border}`,
          animation: "fadeUp 0.7s 1s ease both",
        }}>
          {[["50+", "Production APIs"], ["40%", "Faster Response"], ["5+", "Years Experience"]].map(([n, l]) => (
            <div key={n}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "2.4rem", fontWeight: 900, color: C.mustard, lineHeight: 1,
              }}>{n}</div>
              <div style={{ fontSize: "0.8rem", color: C.midGray, marginTop: "0.3rem", letterSpacing: "0.05em" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}