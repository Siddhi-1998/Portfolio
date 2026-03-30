import { useState, useEffect, useRef } from "react";
import Footer from "./pages/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import Nav from "./pages/navigation";
import Projects from "./pages/projects";
import C from "./assets/style";
import Reveal from "./pages/reveal";
import Experience from "./pages/experience";
import Education from "./pages/education";
import Contact from "./pages/contact";

/* ─── GLOBAL STYLES ───────────────────────────────────────── */
const globalStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Syne:wght@400;500;600;700&family=JetBrains+Mono:wght@300;400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { display: flow;font-family: 'Syne', sans-serif; background: ${C.white}; color: ${C.charcoal}; overflow-x: hidden; }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: ${C.white}; }
  ::-webkit-scrollbar-thumb { background: ${C.mustard}; border-radius: 3px; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideRight {
    from { opacity: 0; transform: translateX(-30px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50%       { transform: scale(1.05); }
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }
`;

/* ─── APP ─────────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <style>{globalStyle}</style>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
