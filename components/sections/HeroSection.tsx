"use client";
import Link from "next/link";
import Image from "next/image";
import { OWNER, STATS } from "@/lib/data";

export default function HeroSection() {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "100px 28px 80px", position: "relative", overflow: "hidden",
      background: "var(--bg)"
    }}>
      {/* Dot grid top-right */}
      <div className="dot-grid" style={{
        position: "absolute", top: 0, right: 0,
        width: "500px", height: "500px",
        maskImage: "radial-gradient(ellipse at top right, black 10%, transparent 65%)",
        WebkitMaskImage: "radial-gradient(ellipse at top right, black 10%, transparent 65%)",
        opacity: 0.45,
        pointerEvents: "none",
      }} />

      {/* Warm blob bottom-left */}
      <div style={{
        position: "absolute", bottom: "5%", left: "-100px",
        width: "360px", height: "360px", borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(193,127,90,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: "1100px", margin: "0 auto", width: "100%", position: "relative",
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: "64px",
        alignItems: "center",
      }} className="hero-grid">

        {/* ── LEFT: text ── */}
        <div style={{ maxWidth: "600px" }}>
          {/* Status badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "5px 14px", borderRadius: "100px",
            background: "var(--accent-green-light)",
            border: "1px solid #c6dece",
            marginBottom: "36px",
            opacity: 0, animation: "fadeUp 0.5s ease-out 0.05s forwards",
          }}>
            <span className="status-dot" />
            <span style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: "12px",
              color: "var(--accent-green)", fontWeight: 500
            }}>
              Open to internship opportunities
            </span>
          </div>

          {/* Name */}
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(48px, 7vw, 88px)",
            fontWeight: 700, lineHeight: 1.0,
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
            marginBottom: "20px",
            opacity: 0, animation: "fadeUp 0.6s ease-out 0.15s forwards",
          }}>
            Salma<br />
            <span style={{
              background: "linear-gradient(135deg, #c17f5a 0%, #9b6b47 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>Mlika</span>
          </h1>

          {/* Title row */}
          <div style={{
            display: "flex", alignItems: "center", gap: "10px",
            marginBottom: "22px", flexWrap: "wrap",
            opacity: 0, animation: "fadeUp 0.6s ease-out 0.25s forwards",
          }}>
            <span style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: "14px",
              color: "var(--text-secondary)", fontWeight: 500
            }}>
              AI & Data Science Engineering Student
            </span>
            <span style={{ color: "var(--border-dark)" }}>·</span>
            <span style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: "14px",
              color: "var(--text-muted)"
            }}>Tunisia</span>
          </div>

         {/* Bio */}
<p style={{
  fontFamily: "'DM Sans', sans-serif", fontSize: "17px",
  color: "var(--text-secondary)", maxWidth: "520px",
  lineHeight: 1.78, marginBottom: "38px", fontWeight: 300,
  opacity: 0, animation: "fadeUp 0.6s ease-out 0.35s forwards",
}}>
  AI & Data Engineering student. I like building 
  things that actually ships.from healthcare to EdTech , and everything in between.
  Fluent in French & English. Let's make it happen!</p>

          {/* CTAs */}
          <div style={{
            display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "52px",
            opacity: 0, animation: "fadeUp 0.6s ease-out 0.45s forwards",
          }}>
            <Link href="/#projects" style={{
              padding: "11px 22px", borderRadius: "8px",
              background: "var(--text-primary)", color: "var(--bg)",
              fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
              fontSize: "14px", textDecoration: "none",
            }}>
              View Projects
            </Link>
            <Link href="/resume" style={{
              padding: "11px 22px", borderRadius: "8px",
              border: "1px solid var(--border-dark)",
              color: "var(--text-secondary)",
              fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
              fontSize: "14px", textDecoration: "none",
            }}>
              Download CV
            </Link>
            <Link href="/#contact" style={{
              padding: "11px 22px", borderRadius: "8px",
              border: "1px solid var(--border)",
              color: "var(--text-muted)",
              fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
              fontSize: "14px", textDecoration: "none",
            }}>
              Contact
            </Link>
          </div>

          {/* Stats */}
          <div style={{
            display: "flex", flexWrap: "wrap", gap: "32px",
            paddingTop: "26px", borderTop: "1px solid var(--border)",
            opacity: 0, animation: "fadeUp 0.6s ease-out 0.55s forwards",
          }}>
            {STATS.map(stat => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: "'Playfair Display', serif", fontSize: "26px",
                  fontWeight: 700, color: "var(--text-primary)", lineHeight: 1,
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: "12px",
                  color: "var(--text-muted)", marginTop: "3px",
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: photo ── */}
        <div style={{
          display: "flex", flexDirection: "column",
          alignItems: "center", gap: "16px", flexShrink: 0,
          opacity: 0, animation: "fadeUp 0.7s ease-out 0.3s forwards",
        }} className="hero-photo-col">

          {/* Photo frame */}
          <div style={{ position: "relative" }}>
            {/* Decorative offset border */}
            <div style={{
              position: "absolute", top: "12px", left: "12px",
              width: "260px", height: "320px",
              borderRadius: "140px 140px 120px 120px",
              border: "1.5px solid var(--border-dark)",
              zIndex: 0,
            }} />

            {/* Photo container */}
            <div style={{
              position: "relative", zIndex: 1,
              width: "260px", height: "320px",
              borderRadius: "140px 140px 120px 120px",
              overflow: "hidden",
              background: "var(--bg-alt)",
              border: "1px solid var(--border)",
              boxShadow: "0 8px 32px rgba(26,23,20,0.10)",
            }}>
        
                <Image src="/photo.jpg" alt="Salma Mlika" fill style={{ objectFit: "cover" }} />
           
             
            </div>

            {/* Floating chip — availability */}
            <div style={{
              position: "absolute", bottom: "20px", right: "-24px",
              padding: "8px 14px",
              background: "white",
              border: "1px solid var(--border)",
              borderRadius: "10px",
              boxShadow: "0 4px 16px rgba(26,23,20,0.08)",
              zIndex: 2,
              display: "flex", alignItems: "center", gap: "7px",
              whiteSpace: "nowrap",
            }}>
              <span className="status-dot" style={{ width: "6px", height: "6px" }} />
              <span style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: "12px",
                color: "var(--text-secondary)", fontWeight: 500
              }}>Available · Summer 2026</span>
            </div>

          
          </div>

          {/* Social links below photo */}
          <div style={{ display: "flex", gap: "8px" }}>
            {[
              { label: "GitHub", href: OWNER.github },
              { label: "LinkedIn", href: OWNER.linkedin },
              { label: "Email", href: `mailto:${OWNER.email}` },
            ].map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener" style={{
                padding: "6px 14px", borderRadius: "100px",
                background: "white", border: "1px solid var(--border)",
                color: "var(--text-muted)",
                fontFamily: "'DM Sans', sans-serif", fontSize: "12px",
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
              }}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-photo-col {
            order: -1;
          }
        }
        @media (max-width: 480px) {
          .hero-photo-col > div:first-child > div:nth-child(2) {
            width: 220px !important;
            height: 270px !important;
          }
          .hero-photo-col > div:first-child > div:first-child {
            width: 220px !important;
            height: 270px !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ── Placeholder shown until you add a real photo ── */
function PhotoPlaceholder() {
  return (
    <div style={{
      width: "100%", height: "100%",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      background: "linear-gradient(160deg, #f4f0eb 0%, #ede6de 100%)",
      gap: "12px",
    }}>
      {/* Initials circle */}
      <div style={{
        width: "80px", height: "80px", borderRadius: "50%",
        background: "linear-gradient(135deg, #c17f5a, #4a7c59)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <span style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "28px", fontWeight: 700, color: "white",
        }}>SM</span>
      </div>
      <span style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "11px", color: "var(--text-muted)",
        letterSpacing: "0.04em"
      }}>Add photo.jpg to /public</span>
    </div>
  );
}