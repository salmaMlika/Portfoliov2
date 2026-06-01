"use client";
import { EXPERIENCES } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section id="experience" style={{ padding: "110px 28px", background: "var(--bg)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "56px" }}>
          <p className="section-label" style={{ marginBottom: "10px" }}>Experience</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 700,
            color: "var(--text-primary)", letterSpacing: "-0.02em"
          }}>Work Experience</h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {EXPERIENCES.map((exp) => (
            <div key={exp.company} className="card-hover" style={{
              padding: "28px 32px",
              background: "white",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              boxShadow: "0 1px 4px rgba(26,23,20,0.04)"
            }}>
              <div style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "flex-start", marginBottom: "20px",
                flexWrap: "wrap", gap: "12px"
              }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "5px" }}>
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif", fontWeight: 600,
                      fontSize: "20px", color: "var(--text-primary)"
                    }}>{exp.company}</h3>
                    <span style={{
                      padding: "2px 9px", borderRadius: "100px",
                      background: "var(--accent-light)",
                      border: "1px solid #e8d0c0",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "11px", color: "var(--accent)", fontWeight: 500
                    }}>Internship</span>
                  </div>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: "14px",
                    color: "var(--text-secondary)"
                  }}>{exp.role}</p>
                </div>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: "12px",
                  color: "var(--text-muted)", paddingTop: "2px"
                }}>{exp.period}</span>
              </div>

              <ul style={{ listStyle: "none", padding: 0, marginBottom: "20px" }}>
                {exp.achievements.map((a, i) => (
                  <li key={i} style={{
                    display: "flex", gap: "10px", padding: "4px 0",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.6
                  }}>
                    <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: "2px", fontSize: "12px" }}>→</span>
                    {a}
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {exp.technologies.map(t => (
                  <span key={t} className="tech-chip">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
