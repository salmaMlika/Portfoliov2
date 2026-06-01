"use client";
import { OWNER } from "@/lib/data";

const INTERESTS = [
  "Machine Learning", "Deep Learning", "NLP", "Data Engineering",
  "MLOps", "Computer Vision", "HealthTech AI", "Full Stack"
];

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: "110px 28px", background: "var(--bg-alt)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "56px" }}>
          <p className="section-label" style={{ marginBottom: "10px" }}>About</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 700,
            color: "var(--text-primary)", letterSpacing: "-0.02em"
          }}>Who I am</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px" }} className="about-grid">
          {/* Left */}
          <div>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: "16px",
              color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "20px", fontWeight: 300
            }}>{OWNER.bio}</p>

            <div style={{
              padding: "16px 20px", borderLeft: "3px solid var(--accent)",
              background: "var(--accent-light)", borderRadius: "0 8px 8px 0",
              marginBottom: "36px"
            }}>
              <p style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: "14px",
                color: "var(--accent)", lineHeight: 1.7, fontStyle: "italic"
              }}>{OWNER.seeking}</p>
            </div>

            {/* Languages */}
            <div style={{ marginBottom: "28px" }}>
              <p className="section-label" style={{ marginBottom: "12px" }}>Languages</p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {OWNER.languages.map(l => (
                  <div key={l.name} style={{
                    padding: "6px 14px", borderRadius: "6px",
                    background: "white", border: "1px solid var(--border)",
                    fontFamily: "'DM Sans', sans-serif", fontSize: "13px",
                    color: "var(--text-secondary)"
                  }}>
                    {l.name} <span style={{ color: "var(--text-muted)", fontSize: "12px" }}>· {l.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div>
              <p className="section-label" style={{ marginBottom: "12px" }}>Areas of Interest</p>
              <div style={{ display: "flex", gap: "7px", flexWrap: "wrap" }}>
                {INTERESTS.map(i => (
                  <span key={i} style={{
                    padding: "4px 12px", borderRadius: "100px",
                    background: "white", border: "1px solid var(--border)",
                    fontFamily: "'DM Sans', sans-serif", fontSize: "12px",
                    color: "var(--text-secondary)"
                  }}>{i}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Education timeline */}
          <div>
            <p className="section-label" style={{ marginBottom: "24px" }}>Education</p>
            <div>
              {OWNER.education.map((edu, i) => (
                <div key={edu.institution} style={{
                  position: "relative", paddingLeft: "28px",
                  paddingBottom: i < OWNER.education.length - 1 ? "32px" : "0",
                  borderLeft: i < OWNER.education.length - 1 ? "1px solid var(--border-dark)" : "1px solid transparent",
                }}>
                  <div style={{
                    position: "absolute", left: "-5px", top: "5px",
                    width: "9px", height: "9px", borderRadius: "50%",
                    background: edu.current ? "var(--accent)" : "var(--border-dark)",
                    border: `2px solid ${edu.current ? "var(--accent-light)" : "var(--bg-alt)"}`,
                  }} />
                  <div style={{
                    padding: "18px 20px",
                    background: edu.current ? "white" : "var(--bg)",
                    border: `1px solid ${edu.current ? "var(--border-dark)" : "var(--border)"}`,
                    borderRadius: "10px",
                    boxShadow: edu.current ? "0 2px 12px rgba(26,23,20,0.06)" : "none"
                  }}>
                    {edu.current && (
                      <span style={{
                        display: "inline-block", marginBottom: "8px",
                        padding: "2px 8px", borderRadius: "4px",
                        background: "var(--accent-light)",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "10px", color: "var(--accent)", letterSpacing: "0.08em"
                      }}>CURRENT</span>
                    )}
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif", fontWeight: 600,
                      fontSize: "16px", color: "var(--text-primary)", marginBottom: "4px"
                    }}>{edu.institution}</h3>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif", fontSize: "13px",
                      color: "var(--text-secondary)", marginBottom: "6px"
                    }}>{edu.degree}</p>
                    <p style={{
                      fontFamily: "'JetBrains Mono', monospace", fontSize: "11px",
                      color: "var(--text-muted)"
                    }}>{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;gap:48px!important}}`}</style>
    </section>
  );
}
