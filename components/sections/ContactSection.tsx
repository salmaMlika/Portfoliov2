import { OWNER } from "@/lib/data";

export default function ContactSection() {
  return (
    <section id="contact" style={{ padding: "110px 28px", background: "var(--bg-alt)" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
        <p className="section-label" style={{ marginBottom: "14px" }}>Contact</p>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700,
          color: "var(--text-primary)", letterSpacing: "-0.02em",
          marginBottom: "18px", lineHeight: 1.15
        }}>Let's work together</h2>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "16px",
          color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "44px", fontWeight: 300
        }}>
          I'm looking for a 6-month end-of-studies internship (PFE) starting in early 2027, in AI,
          Machine Learning or Data Science. If you have an open position or want to collaborate, I'd love to hear from you.
        </p>

        <a href={`mailto:${OWNER.email}`} style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          padding: "14px 30px", borderRadius: "9px",
          background: "var(--text-primary)", color: "var(--bg)",
          fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
          fontSize: "15px", textDecoration: "none", marginBottom: "44px",
          transition: "opacity 0.2s"
        }}>
          Send me an email →
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "32px" }}>
          <div style={{ flex: 1, height: "1px", background: "var(--border-dark)" }} />
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "var(--text-muted)" }}>or find me on</span>
          <div style={{ flex: 1, height: "1px", background: "var(--border-dark)" }} />
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
          {[
            { label: "GitHub", href: OWNER.github },
            { label: "LinkedIn", href: OWNER.linkedin },
            { label: OWNER.email, href: `mailto:${OWNER.email}` },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener" style={{
              padding: "9px 18px", borderRadius: "8px",
              background: "white", border: "1px solid var(--border)",
              color: "var(--text-secondary)",
              fontFamily: "'DM Sans', sans-serif", fontSize: "13px", textDecoration: "none",
              transition: "border-color 0.2s"
            }}>{l.label}</a>
          ))}
        </div>
      </div>
    </section>
  );
}
