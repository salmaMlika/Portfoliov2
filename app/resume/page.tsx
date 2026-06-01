import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { OWNER, EXPERIENCES, SKILL_CATEGORIES, CERTIFICATIONS, FEATURED_PROJECTS } from "@/lib/data";

function CVSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "40px" }}>
      <div style={{
        display: "flex", alignItems: "center", gap: "12px",
        marginBottom: "20px", paddingBottom: "10px",
        borderBottom: "1px solid var(--border-dark)"
      }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif", fontWeight: 700,
          fontSize: "17px", color: "var(--text-primary)"
        }}>{title}</h2>
      </div>
      {children}
    </div>
  );
}

export default function ResumePage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "110px 28px 80px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "52px", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <p className="section-label" style={{ marginBottom: "8px" }}>Resume</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
              Curriculum Vitae
            </h1>
          </div>
          <a href="/cv-salma-mlika.pdf" download style={{
            padding: "10px 22px", borderRadius: "8px",
            background: "var(--text-primary)", color: "var(--bg)",
            fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
            fontSize: "14px", textDecoration: "none"
          }}>⬇ Download PDF</a>
        </div>

        {/* Header card */}
        <div style={{
          padding: "26px 30px", background: "white",
          border: "1px solid var(--border)", borderRadius: "12px",
          marginBottom: "40px", boxShadow: "0 1px 6px rgba(26,23,20,0.04)"
        }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "30px", color: "var(--text-primary)", marginBottom: "4px" }}>
            {OWNER.name}
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "var(--accent)", marginBottom: "14px" }}>
            {OWNER.title}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            {[`📍 ${OWNER.location}`, `📧 ${OWNER.email}`, "🔗 LinkedIn", "💻 GitHub"].map(item => (
              <span key={item} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "var(--text-muted)" }}>{item}</span>
            ))}
          </div>
        </div>

        <CVSection title="Summary">
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.75 }}>
            {OWNER.bio} {OWNER.seeking}
          </p>
        </CVSection>

        <CVSection title="Education">
          {OWNER.education.map(edu => (
            <div key={edu.institution} style={{
              display: "flex", justifyContent: "space-between", alignItems: "flex-start",
              padding: "14px 0", borderBottom: "1px solid var(--border)",
              flexWrap: "wrap", gap: "8px"
            }}>
              <div>
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "15px", color: "var(--text-primary)", marginBottom: "3px" }}>{edu.institution}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "var(--text-secondary)" }}>{edu.degree}</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "var(--text-muted)" }}>{edu.period}</span>
                {edu.current && (
                  <span style={{
                    padding: "1px 7px", borderRadius: "4px",
                    background: "var(--accent-light)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "9px", color: "var(--accent)", letterSpacing: "0.06em"
                  }}>CURRENT</span>
                )}
              </div>
            </div>
          ))}
        </CVSection>

        <CVSection title="Experience">
          {EXPERIENCES.map(exp => (
            <div key={exp.company} style={{ padding: "16px 0", borderBottom: "1px solid var(--border)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px", flexWrap: "wrap", gap: "6px" }}>
                <div>
                  <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "15px", color: "var(--text-primary)", marginBottom: "2px" }}>{exp.role}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "var(--accent)" }}>{exp.company}</p>
                </div>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "var(--text-muted)" }}>{exp.period}</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "10px" }}>
                {exp.achievements.map((a, i) => (
                  <li key={i} style={{ display: "flex", gap: "8px", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "var(--text-secondary)", padding: "2px 0" }}>
                    <span style={{ color: "var(--accent)", flexShrink: 0 }}>→</span>{a}
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {exp.technologies.map(t => (
                  <span key={t} className="tech-chip" style={{ fontSize: "11px", padding: "2px 9px" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </CVSection>

        <CVSection title="Technical Skills">
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {SKILL_CATEGORIES.map(cat => (
              <div key={cat.name} style={{ display: "grid", gridTemplateColumns: "130px 1fr", gap: "10px", alignItems: "start" }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.06em", textTransform: "uppercase", paddingTop: "5px" }}>
                  {cat.name}
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {cat.skills.map(s => (
                    <span key={s.name} className="tech-chip" style={{ fontSize: "12px" }}>{s.name}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CVSection>

        <CVSection title="Selected Projects">
          {FEATURED_PROJECTS.map(proj => (
            <div key={proj.id} style={{ padding: "14px 0", borderBottom: "1px solid var(--border)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px", flexWrap: "wrap", gap: "8px" }}>
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "var(--text-primary)" }}>{proj.title}</h3>
                <Link href={`/projects/${proj.slug}`} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "var(--accent)", textDecoration: "none" }}>View →</Link>
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "var(--text-secondary)", marginBottom: "7px" }}>{proj.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                {proj.technologies.slice(0, 5).map(t => (
                  <span key={t} className="tech-chip" style={{ fontSize: "11px", padding: "2px 8px" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </CVSection>

        <CVSection title="Certifications">
          {CERTIFICATIONS.map(cert => (
            <div key={cert.title} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "11px 0", borderBottom: "1px solid var(--border)", flexWrap: "wrap", gap: "6px" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <span style={{ fontSize: "15px" }}>{cert.icon}</span>
                <div>
                  <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "var(--text-primary)" }}>{cert.title}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "var(--text-muted)" }}>{cert.issuer}</p>
                </div>
              </div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "var(--text-muted)" }}>{cert.year}</span>
            </div>
          ))}
        </CVSection>

        <CVSection title="Languages">
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {OWNER.languages.map(l => (
              <div key={l.name} style={{
                padding: "8px 16px", background: "white",
                border: "1px solid var(--border)", borderRadius: "7px"
              }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "var(--text-primary)" }}>{l.name}</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "var(--text-muted)", marginLeft: "8px" }}>{l.level}</span>
              </div>
            ))}
          </div>
        </CVSection>
      </div>
      <Footer />
    </main>
  );
}
