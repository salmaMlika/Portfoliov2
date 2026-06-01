"use client";

export default function RecommendationsSection() {
  const recommendations = [
    {
      name: "Salmen Hichri",
      title: "Senior Product Engineer — Applied AI",
      subtitle: "Ex-Amazon · Ex-Goldman Sachs · Founder",
      text: "As Product Development Lead at GoMyTeacher, I had the pleasure of mentoring Salma. She demonstrated exceptional technical proficiency with Go Lang, Next.js, and DevOps. She took ownership of critical infrastructure, implemented CI/CD pipelines, and delivered high-quality work ahead of schedule. Her ability to learn quickly and adapt to new technologies sets her apart. I give her my highest recommendation without reservation.",
      date: "2025",
      relation: "Product Development Lead",
      company: "GoMyTeacher",
    },
  ];

  return (
    <section id="recommendations" style={{ padding: "110px 28px", background: "var(--bg-alt)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        
        {/* Titre aligné à gauche - taille normale */}
        <div style={{ marginBottom: "48px" }}>
          <p className="section-label" style={{ marginBottom: "8px" }}>Recommendation</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(30px, 4vw, 40px)",
            fontWeight: 700,
            color: "var(--text-primary)",
            letterSpacing: "-0.02em"
          }}>Mentor's Note</h2>
        </div>

        <div style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "40px"
        }}>
          {recommendations.map((rec, idx) => (
            <div key={idx} className="card-hover" style={{
              padding: "32px",
              background: "white",
              border: "1px solid var(--border)",
              borderRadius: "20px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              maxWidth: "800px",
              width: "100%"
            }}>
              
              {/* DÉTAILS DE SALMEN - AVANT le message */}
              <div style={{ marginBottom: "24px", borderBottom: "1px solid var(--border)", paddingBottom: "18px" }}>
                <h3 style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "18px",
                  marginBottom: "4px",
                  color: "var(--text-primary)"
                }}>
                  {rec.name}
                </h3>
                <p style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  marginBottom: "8px"
                }}>
                  {rec.title}
                </p>
                
                {/* Badges noir et blanc */}
                <div style={{ marginTop: "8px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {rec.subtitle.split(" · ").map((badge, i) => (
                    <span key={i} style={{
                      background: "#1a1a1a",
                      color: "white",
                      padding: "3px 10px",
                      borderRadius: "20px",
                      fontSize: "10px",
                      fontWeight: 500
                    }}>
                      {badge}
                    </span>
                  ))}
                </div>
                
                <p style={{
                  fontSize: "11px",
                  color: "var(--text-muted)",
                  marginTop: "10px"
                }}>
                  {rec.relation} · {rec.company} · {rec.date}
                </p>
              </div>
              
              {/* MESSAGE */}
              <div>
                <div style={{
                  fontSize: "40px",
                  marginBottom: "12px",
                  opacity: 0.25,
                  fontFamily: "Georgia, serif",
                  lineHeight: "1"
                }}>"</div>
                
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "15px",
                  lineHeight: "1.7",
                  color: "var(--text-primary)",
                  fontStyle: "italic"
                }}>
                  {rec.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton PDF */}
        <div style={{ textAlign: "center" }}>
          <a
            href="/recommendation-letter-salma.pdf"
            download
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 28px",
              background: "#1a1a1a",
              color: "white",
              borderRadius: "40px",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: 500,
              transition: "opacity 0.2s"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
          >
            <span>📄</span>
            Read Full Recommendation Letter (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}