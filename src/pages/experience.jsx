/* ─── EXPERIENCE ──────────────────────────────────────────── */

import { useState } from "react";
import C from "../assets/style";
import Reveal from "./reveal";                                                                                                                               

export default function Experience() {
  const [open, setOpen] = useState(0);
  const experiences = [
  {
    company: "Calyx Solutions UK Ltd.",
    role: "Senior Software Developer",
    system: "Money Transfer System (MTS)",
    period: "Jun 2021 – Dec 2025",
    bullets: [
      "Designed, developed, and maintained 50+ RESTful APIs using ASP.NET Core covering customer onboarding, beneficiary management, transactions, KYC, promotions, and reporting.",
      "Owned end-to-end implementation of reward features (Spin the Wheel, Referral, Cashback) tightly integrated with transaction and payment workflows, driving higher customer engagement.",
      "Implemented Sanctions and Blacklist (Negative List) compliance integrating AML validations into onboarding, beneficiary creation, and transaction processing flows.",
      "Implemented JWT-based authentication across financial, promotional, and administrative modules in line with OWASP guidelines.",
      "Optimized 50+ SQL queries and stored procedures, improving API response times by 30–40% and reducing server load.",
      "Refactored legacy .NET Framework applications using N-Tier architecture, reducing code duplication and enabling modular feature delivery.",
      "Developed and integrated ReactJS frontend components with backend APIs for seamless full-stack functionality.",
      "Mentored 3–4 junior developers, conducted code reviews, and led task planning within Agile team structure.",
    ],
  },
  {
    company: "Calyx Solutions UK Ltd.",
    role: "Junior Developer",
    system: "Currency Exchange Bureau System (CEBS)",
    period: "Aug 2020 – Jun 2021",
    bullets: [
      "Developed backend APIs using ASP.NET Web API for managing currency stock, rates, customer records, and transactions.",
      "Built responsive frontend pages using HTML, CSS, JavaScript, and jQuery, improving usability for bureau operators.",
      "Optimized SQL queries and improved database performance, reducing page load times for high-volume data operations.",
      "Assisted in debugging, testing, and documentation; gained foundational experience in N-Tier architecture and FinTech workflows.",
    ],
  },
];
  return (
    <section id="experience" style={{ padding: "7rem 4rem", background: C.offWhite }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <Reveal>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 900, marginBottom: "3.5rem" }}>
            Work <em style={{ color: C.mustard }}>Experience</em>
          </h2>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {experiences.map((exp, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div style={{
                background: C.white,
                border: `1px solid ${open === i ? C.mustard : C.lightGray}`,
                borderLeft: `4px solid ${open === i ? C.mustard : "transparent"}`,
                borderRadius: "6px", overflow: "hidden",
                transition: "border-color 0.3s",
                boxShadow: open === i ? `0 4px 24px ${C.mustard}22` : "none",
              }}>
                {/* Header */}
                <div
                  onClick={() => setOpen(open === i ? -1 : i)}
                  style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "1.75rem 2rem", cursor: "pointer",
                    background: open === i ? `${C.mustard}08` : "transparent",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "1.2rem", fontWeight: 700, color: C.charcoal }}>{exp.role}</div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", color: C.mustard, marginTop: "0.3rem" }}>
                      {exp.company} · {exp.system}
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem",
                      color: C.midGray, whiteSpace: "nowrap",
                    }}>{exp.period}</span>
                    <div style={{
                      width: 28, height: 28,
                      border: `2px solid ${open === i ? C.mustard : C.lightGray}`,
                      borderRadius: "50%",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: open === i ? C.mustard : C.midGray,
                      fontSize: "1rem", transition: "all 0.3s",
                      transform: open === i ? "rotate(45deg)" : "none",
                    }}>+</div>
                  </div>
                </div>

                {/* Body */}
                {open === i && (
                  <div style={{ padding: "0 2rem 2rem" }}>
                    <ul style={{ listStyle: "none" }}>
                      {exp.bullets.map((b, j) => (
                        <li key={j} style={{
                          display: "flex", gap: "0.75rem",
                          padding: "0.65rem 0",
                          borderBottom: j < exp.bullets.length - 1 ? `1px dashed ${C.lightGray}` : "none",
                          fontSize: "0.95rem", lineHeight: 1.65, color: "#444",
                        }}>
                          <span style={{ color: C.mustard, fontWeight: 700, flexShrink: 0, marginTop: "0.1rem" }}>›</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
