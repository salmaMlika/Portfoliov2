"use client";
import { SKILL_CATEGORIES, CERTIFICATIONS } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section id="skills" style={{ padding: "110px 28px", background: "var(--bg)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "56px" }}>
          <p className="section-label" style={{ marginBottom: "10px" }}>Skills</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 700,
            color: "var(--text-primary)", letterSpacing: "-0.02em"
          }}>Technical Stack</h2>
        </div>

        {/* Skills — chips grouped by category */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "16px",
          marginBottom: "64px"
        }}>
          {SKILL_CATEGORIES.map(cat => (
            <div key={cat.name} className="card-hover" style={{
              padding: "22px 24px",
              background: "white",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              boxShadow: "0 1px 4px rgba(26,23,20,0.03)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                <span style={{ fontSize: "16px" }}>{cat.icon}</span>
                <h3 style={{
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                  fontSize: "13px", color: "var(--text-primary)",
                  letterSpacing: "0.01em"
                }}>{cat.name}</h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {cat.skills.map(s => (
                  <span key={s.name} className="skill-chip">{s.name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
         <div>
          <p className="section-label" style={{ marginBottom: "20px" }}>Certifications</p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "12px"
          }}>
            {CERTIFICATIONS.map(cert => (
              <a
                key={cert.title}
                href={cert.credentialUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
                className={cert.credentialUrl ? "card-hover" : ""}
              >
                <div style={{
                  padding: "18px 22px",
                  background: "white",
                  border: `1px solid ${cert.credentialUrl ? "var(--border)" : "var(--border-light)"}`,
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  boxShadow: "0 1px 4px rgba(26,23,20,0.03)",
                  cursor: cert.credentialUrl ? "pointer" : "default",
                  transition: "all 0.2s ease",
                }}>
                  <div style={{
                    fontSize: "20px", width: "40px", height: "40px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "var(--bg-alt)", border: "1px solid var(--border)",
                    borderRadius: "8px", flexShrink: 0
                  }}>{cert.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                      <h4 style={{
                        fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
                        fontSize: "14px", color: "var(--text-primary)", marginBottom: "3px"
                      }}>{cert.title}</h4>
                      
                      {/* Badge "Vérifier" si lien dispo */}
                      {cert.credentialUrl && (
                        <span style={{
                          fontSize: "10px",
                          background: "#e8f5e9",
                          color: "#2e7d32",
                          padding: "2px 8px",
                          borderRadius: "20px",
                          fontWeight: 500
                        }}>
  ✓ Verified
                        </span>
                      )}
                    </div>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif", fontSize: "12px",
                      color: "var(--text-muted)"
                    }}>{cert.issuer} · {cert.year}</p>
                  </div>
                  
                  {/* Icône lien externe */}
                  {cert.credentialUrl && (
                    <span style={{ fontSize: "14px", color: "var(--text-muted)" }}>
                      ↗
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}