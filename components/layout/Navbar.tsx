"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/resume", label: "Resume" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(250,248,245,0.94)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid #e8e2d9" : "1px solid transparent",
      transition: "all 0.3s ease",
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "62px" }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: "30px", height: "30px", borderRadius: "50%",
            background: "linear-gradient(135deg, #c17f5a, #4a7c59)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "12px", fontWeight: 700, color: "white",
            fontFamily: "'DM Sans', sans-serif",
          }}>SM</div>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 600, color: "#1a1714" }}>Salma Mlika</span>
        </Link>

        <div style={{ display: "flex", gap: "4px", alignItems: "center" }} className="desktop-nav">
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href} style={{
              padding: "6px 14px", borderRadius: "100px",
              fontFamily: "'DM Sans', sans-serif", fontSize: "14px",
              color: l.label === "Resume" ? "#c17f5a" : "#6b6560",
              textDecoration: "none",
              border: l.label === "Resume" ? "1px solid #e8d0c0" : "none",
              background: l.label === "Resume" ? "#fdf5f0" : "transparent",
              transition: "color 0.2s",
            }}>
              {l.label}
            </Link>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "4px", color: "#6b6560" }} className="mobile-btn">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {open && (
        <div style={{ background: "rgba(250,248,245,0.98)", borderTop: "1px solid #e8e2d9", padding: "16px 28px 24px" }}>
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              display: "block", padding: "11px 0", color: "#6b6560",
              textDecoration: "none", fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px", borderBottom: "1px solid #f0ece6"
            }}>{l.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 720px) {
          .desktop-nav { display: none !important; }
          .mobile-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
