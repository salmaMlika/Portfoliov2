import Link from "next/link";
import { OWNER } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #e8e2d9", padding: "36px 28px", background: "#faf8f5" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#a09890" }}>
          © {new Date().getFullYear()} {OWNER.name}
        </p>
        <div style={{ display: "flex", gap: "20px" }}>
          {[{ label: "GitHub", href: OWNER.github }, { label: "LinkedIn", href: OWNER.linkedin }, { label: "Email", href: `mailto:${OWNER.email}` }].map(l => (
            <Link key={l.label} href={l.href} style={{ color: "#a09890", textDecoration: "none", fontSize: "13px", fontFamily: "'DM Sans', sans-serif" }}>{l.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
