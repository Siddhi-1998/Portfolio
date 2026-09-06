
/* ─── NAV ─────────────────────────────────────────────────── */
import { useState, useEffect } from "react";
import C from "../assets/style";
export default function Nav({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "0 4rem",
      height: scrolled ? "60px" : "72px",
      background: scrolled ? "rgba(255,255,255,0.96)" : `linear-gradient(
      135deg, ${C.white} 0%, ${C.mustardBg} 60%,  ${C.mustardPale} 100%)`,
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? `1px solid ${C.border}` : "none",
      transition: "all 0.35s ease",
    }}>
      <a href="#hero" style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "1.6rem", fontWeight: 900,
        color: C.charcoal, textDecoration: "none",
        letterSpacing: "-0.02em",
      }}>
        S<span style={{ color: C.mustard }}>.</span>I
      </a>

      {/* Desktop links */}
      <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none" }}>
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} style={{
              textDecoration: "none",
              color: active === l.toLowerCase() ? C.mustard : C.midGray,
              fontSize: "0.82rem", fontWeight: 600,
              letterSpacing: "0.1em", textTransform: "uppercase",
              transition: "color 0.2s",
              borderBottom: active === l.toLowerCase() ? `2px solid ${C.mustard}` : "2px solid transparent",
              paddingBottom: "2px",
            }}
            onMouseEnter={e => e.target.style.color = C.mustard}
            onMouseLeave={e => e.target.style.color = active === l.toLowerCase() ? C.mustard : C.midGray}
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}