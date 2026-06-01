import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { FEATURED_PROJECTS } from "@/lib/data";
import type { Project } from "@/types";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return FEATURED_PROJECTS.map(p => ({ slug: p.slug }));
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontFamily: "'Playfair Display', serif", fontWeight: 700,
      fontSize: "20px", color: "var(--text-primary)",
      marginBottom: "18px", display: "flex", alignItems: "center", gap: "10px"
    }}>
      <span style={{ width: "18px", height: "2px", background: "var(--accent)", display: "inline-block", flexShrink: 0 }} />
      {children}
    </h2>
  );
}

function ArchDiagram({ architecture }: { architecture: Project["architecture"] }) {
  if (!architecture) return null;
  const colors = ["#c17f5a", "#4a7c59", "#7a5c9b", "#5a7a9b", "#9b7a5a"];
  return (
    <div style={{ overflowX: "auto", marginBottom: "0" }}>
      <div style={{ display: "flex", gap: "0", minWidth: "560px" }}>
        {architecture.map((layer, i) => {
          const color = colors[i % colors.length];
          return (
            <div key={layer.layer} style={{ flex: 1 }}>
              <div style={{
                background: "white",
                border: "1px solid var(--border)",
                borderLeft: i > 0 ? "none" : "1px solid var(--border)",
                borderRadius: i === 0 ? "10px 0 0 10px" : i === architecture.length - 1 ? "0 10px 10px 0" : "0",
                padding: "16px 14px", height: "100%"
              }}>
                <div style={{
                  height: "3px", borderRadius: "2px",
                  background: color, marginBottom: "12px"
                }} />
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "9px", letterSpacing: "0.1em",
                  color: color, marginBottom: "10px", textTransform: "uppercase"
                }}>{layer.layer}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                  {layer.components.map(c => (
                    <div key={c} style={{
                      padding: "4px 8px", borderRadius: "5px",
                      background: "var(--bg-alt)",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "11px", color: "var(--text-secondary)"
                    }}>{c}</div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = FEATURED_PROJECTS.find(p => p.slug === params.slug);
  if (!project) notFound();

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "110px 28px 80px" }}>
        {/* Breadcrumb */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "36px", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "var(--text-muted)" }}>
          <Link href="/#projects" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Projects</Link>
          <span>/</span>
          <span style={{ color: "var(--text-secondary)" }}>{project.title}</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: "44px" }}>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "12px" }}>
            {project.category.map(c => (
              <span key={c} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{c}</span>
            ))}
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(36px, 6vw, 60px)", fontWeight: 700,
            color: "var(--text-primary)", letterSpacing: "-0.02em",
            lineHeight: 1.1, marginBottom: "18px"
          }}>{project.title}</h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "17px",
            color: "var(--text-secondary)", lineHeight: 1.75, maxWidth: "640px", fontWeight: 300
          }}>{project.longDescription || project.description}</p>
        </div>

        {/* Action buttons */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: "8px",
          padding: "20px 22px", background: "white",
          border: "1px solid var(--border)", borderRadius: "12px",
          marginBottom: "44px",
          boxShadow: "0 1px 6px rgba(26,23,20,0.04)"
        }}>
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noopener" style={{
              padding: "9px 18px", borderRadius: "7px",
              background: "var(--text-primary)", color: "var(--bg)",
              fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
              fontSize: "13px", textDecoration: "none"
            }}>🚀 Try it Out</a>
          )}
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noopener" style={{
              padding: "9px 18px", borderRadius: "7px",
              border: "1px solid var(--border-dark)", color: "var(--text-secondary)",
              fontFamily: "'DM Sans', sans-serif", fontSize: "13px", textDecoration: "none"
            }}>💻 Source Code</a>
          )}
          {project.links.notebook && (
            <a href={project.links.notebook} target="_blank" rel="noopener" style={{
              padding: "9px 18px", borderRadius: "7px",
              border: "1px solid #e8d8a0", color: "#7a5c1e",
              fontFamily: "'DM Sans', sans-serif", fontSize: "13px", textDecoration: "none"
            }}>📓 Open Notebook</a>
          )}
          {project.links.report && (
            <a href={project.links.report} target="_blank" rel="noopener" style={{
              padding: "9px 18px", borderRadius: "7px",
              border: "1px solid #cfc6e8", color: "#5a4880",
              fontFamily: "'DM Sans', sans-serif", fontSize: "13px", textDecoration: "none"
            }}>📄 Technical Report</a>
          )}
          {project.links.presentation && (
            <a href={project.links.presentation} target="_blank" rel="noopener" style={{
              padding: "9px 18px", borderRadius: "7px",
              border: "1px solid #e8c6c6", color: "#804848",
              fontFamily: "'DM Sans', sans-serif", fontSize: "13px", textDecoration: "none"
            }}>🎓 Presentation</a>
          )}
        </div>

        {/* Metrics */}
        {project.metrics && (
          <div style={{ marginBottom: "44px" }}>
            <SectionTitle>Key Metrics</SectionTitle>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {project.metrics.map(m => (
                <div key={m.label} style={{
                  padding: "14px 18px", borderRadius: "10px",
                  background: m.highlight ? "var(--accent-light)" : "white",
                  border: `1px solid ${m.highlight ? "#e8d0c0" : "var(--border)"}`,
                  textAlign: "center", minWidth: "110px"
                }}>
                  <div style={{
                    fontFamily: "'Playfair Display', serif", fontWeight: 700,
                    fontSize: "22px", color: m.highlight ? "var(--accent)" : "var(--text-primary)"
                  }}>{m.value}</div>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: "11px",
                    color: "var(--text-muted)", marginTop: "3px"
                  }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dataset */}
        {project.dataset && (
          <div style={{ marginBottom: "44px" }}>
            <SectionTitle>Dataset</SectionTitle>
            <div style={{
              padding: "18px 22px", background: "white",
              border: "1px solid var(--border)", borderRadius: "10px"
            }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                {project.dataset.description}
              </p>
              {project.dataset.size && (
                <p style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: "12px",
                  color: "var(--accent)", marginTop: "10px"
                }}>
                  {project.dataset.size}{project.dataset.classes ? ` · ${project.dataset.classes} classes` : ""}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Architecture */}
        {project.architecture && (
          <div style={{ marginBottom: "44px" }}>
            <SectionTitle>Architecture</SectionTitle>
            <ArchDiagram architecture={project.architecture} />
          </div>
        )}

        {/* Methodology */}
        {project.methodology && (
          <div style={{ marginBottom: "44px" }}>
            <SectionTitle>Methodology</SectionTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {project.methodology.map((step, i) => (
                <div key={i} style={{
                  display: "flex", gap: "16px", padding: "14px 0",
                  borderBottom: i < project.methodology!.length - 1 ? "1px solid var(--border)" : "none"
                }}>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px", color: "var(--accent)",
                    flexShrink: 0, marginTop: "2px"
                  }}>{String(i + 1).padStart(2, "0")}</span>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {project.results && (
          <div style={{ marginBottom: "44px" }}>
            <SectionTitle>Results</SectionTitle>
            <div style={{
              borderRadius: "10px", overflow: "hidden",
              border: "1px solid var(--border)"
            }}>
              <table style={{ width: "100%", borderCollapse: "collapse", background: "white" }}>
                <thead>
                  <tr style={{ background: "var(--bg-alt)", borderBottom: "1px solid var(--border)" }}>
                    {["Model", "Metric", "Value"].map(h => (
                      <th key={h} style={{
                        padding: "11px 18px", textAlign: "left",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.1em",
                        fontWeight: 400
                      }}>{h.toUpperCase()}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {project.results.map((r, i) => (
                    <tr key={i} style={{ borderBottom: i < project.results!.length - 1 ? "1px solid var(--border)" : "none" }}>
                      <td style={{ padding: "13px 18px", fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "var(--text-primary)" }}>{r.model}</td>
                      <td style={{ padding: "13px 18px", fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "var(--text-secondary)" }}>{r.metric}</td>
                      <td style={{ padding: "13px 18px", fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 600, color: "var(--accent)" }}>{r.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Technologies */}
        <div style={{ marginBottom: "44px" }}>
          <SectionTitle>Technologies Used</SectionTitle>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
            {project.technologies.map(t => (
              <span key={t} className="tech-chip">{t}</span>
            ))}
          </div>
        </div>

        <Link href="/#projects" style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "14px",
          color: "var(--text-muted)", textDecoration: "none"
        }}>← Back to projects</Link>
      </div>
      <Footer />
    </main>
  );
}
